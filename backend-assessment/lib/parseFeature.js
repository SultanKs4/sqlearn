function parseFeatures(ast) {
    // console.log(JSON.stringify(ast, null, 4))
    let select = getSelectItems(ast["distinctOpt"], ast["selectItems"]["value"]);
    let [from, tableAliases] = ast["from"] ? getFrom(ast["from"]["value"]) : [null, null];
    let where = ast["where"] ? getWhere(ast["where"], tableAliases) : null;
    let groupBy = ast["groupBy"] ? getGroupBy(ast["groupBy"]) : null;
    let orderBy = ast["orderBy"] ? getOrderBy(ast["orderBy"]) : null;
    let having = ast["having"] ? getHaving(ast["having"]) : null;

    return {
        select,
        from,
        where,
        groupBy,
        orderBy,
        having
    };
}

function getSelectItems(distinct, columnsObj) {
    let selectItems = []

    columnsObj.forEach(col => {

        switch (col["type"]) {
            case "Identifier":
                selectItems = [...selectItems, getIdentifier(col)]
                break;

            case "FunctionCall":
                selectItems = [...selectItems, ...getFunctionCall(col)]
                break;

            case "BitExpression":
                selectItems = [...selectItems, `Equation`]
                break;

            case "Number":
            case "String":
                selectItems = [...selectItems, `Constant`]
                break;

            case "Null":
                selectItems = [...selectItems, `null`]
                break;
        }
    })

    if (distinct) {
        selectItems = [distinct, ...selectItems]
    }

    return selectItems
}

function getIdentifier(identifier, tableAliases = null) {
    return getColumnName(identifier["value"], tableAliases)
}

function getFunctionCall(functionCall, sort = null) {
    let comparison = (sort) ? `${sort}_` : ""
    const type = functionCall["name"]

    const functionCallItems = functionCall['params'].map(param => {
        const paramStr = (param === "*") ? param : getFunctionCallParams(param)
        return `${comparison}${type}_${paramStr}`
    })
    return functionCallItems
}

function getFunctionCallParams(param) {
    switch (param["type"]) {
        case "Identifier":
            return getIdentifier(param)

        case "Number":
        case "String":
            return "Constant"

        case "Null":
            return "null"

        case "BitExpression":
            return "Equation"
    }
}

function getFrom(fromObj) {
    let fromItems = []
    let tableAliases = {};

    function getTables(val, prefixJoin) {
        if (!val) {
            return
        }

        switch (val["type"]) {
            case "TableReference":
                getTables(val["value"], "")
                break;

            case "TableFactor":
                fromItems = [...fromItems, getTableFactor(val["value"], prefixJoin)]
                if (val["alias"]) tableAliases[val["alias"]["value"]] = val["value"]["value"]
                break;

            case "InnerCrossJoinTable":
                prefixJoin = val["innerCrossOpt"] ? `${val["innerCrossOpt"]}` : "INNER"
                prefixJoin += val["outOpt"] ? ` ${val["outOpt"]}` : ""
                prefixJoin += val["outOpt"] ? ` JOIN` : " JOIN"
                break;

            case "LeftRightJoinTable":
                prefixJoin = `${val["leftRight"]}`
                prefixJoin += val["outOpt"] ? ` ${val["outOpt"]}` : " "
                prefixJoin += val["outOpt"] ? ` JOIN` : " JOIN"
                break;

            case "OnJoinCondition":
                fromItems = [...fromItems, getOnJoinCondition(val["value"], tableAliases)]
                return;
        }

        getTables(val["left"], prefixJoin)
        getTables(val["right"], prefixJoin)
        getTables(val["condition"], prefixJoin)
    }

    fromObj.forEach(from => {
        getTables(from, "")
    })

    return [fromItems, tableAliases]
}

function getOnJoinCondition(val, tableAliases) {

    let left = getIdentifier(val["left"], tableAliases)
    let right = getIdentifier(val["right"], tableAliases)

    const operator = val["operator"]
    return `${operator}_${left}_${right}`
}

function getTableFactor(tableFactorVal, prefixJoin) {
    let item
    switch (tableFactorVal["type"]) {
        case "Identifier":
            const identifierVal = getIdentifier(tableFactorVal)
            item = (prefixJoin) ? `${prefixJoin}_${identifierVal}` : identifierVal
            break;

        default:
            item = tableFactorVal["type"]
            break;
    }
    return item
}



function getWhere(whereObj, tableAliases = null) {
    return getNestedComparison(whereObj, tableAliases)
}

function getNestedComparison(obj, tableAliases = null) {
    let items = []

    function getNestedComparisonRecursive(val, tableAliases = []) {
        if (!val) {
            return
        }

        switch (val["type"]) {
            case "ComparisonBooleanPrimary":
                items = [...items, getComparisonBooleanPrimary(val, tableAliases)]
                return;

            case "OrExpression":
            case "AndExpression":
                items = [...items, val["operator"]]
                break;

            case "ExpressionList":
                val["value"].forEach(item => {
                    getNestedComparisonRecursive(item, tableAliases)
                })
                break;

            case "SimpleExprParentheses":
                getNestedComparisonRecursive(val["value"], tableAliases)
                break;

            case "BitExpression":
                items = [...items, getComparisonBooleanPrimary(val)]
                break;

            case "IsNullBooleanPrimary":
                const isNullitem = (val["hasNot"]) ? `NULL_NOT_${getIdentifier(val['value'])}` : `NULL_${getIdentifier(val['value'])}`

                items = [...items, isNullitem]
                break;

            case "LikePredicate":
                const likePredicateItem = (val["hasNot"]) ? `LIKE_NOT` : `LIKE`

                items = [...items, `${getComparisonBooleanPrimary(val, tableAliases, likePredicateItem)}`]
                break;

            case "BetweenPredicate":
                const betweenPredicateItem = (val["hasNot"]) ? `BETWEEN_NOT` : `BETWEEN`
                items = [...items, `${betweenPredicateItem}_${getComparisonBoolean(val['left'])}_${getComparisonBoolean(val['right']['left'])}_${getComparisonBoolean(val['right']['left'])}`]
                break;

            case "InSubQueryPredicate":
            case "InExpressionListPredicate":
                items = [...items, getInPredicate(val)]
                return;
        }

        getNestedComparisonRecursive(val["left"], tableAliases)
        getNestedComparisonRecursive(val["right"], tableAliases)

    }

    getNestedComparisonRecursive(obj, tableAliases)

    return items
}

function getComparisonBooleanPrimary(val, tableAliases = null, operator = null) {
    comparison = (!operator) ? `${val["operator"]}` : operator

    const left = getComparisonBoolean(val, "left", tableAliases)
    const right = getComparisonBoolean(val, "right", tableAliases)

    return `${comparison}_${left}_${right}`

}

function getComparisonBoolean(val, position, tableAliases = null) {
    if (!position) {
        switch (val["type"]) {
            case "ExpressionList":
                return `ExpressionList`
            case "Select":
            case "SubQuery":
                return `SubQuery`

            case "ExpressionList":
                return `List`

            case "BitExpression":
                return `Equation`

            case "Number":
            case "String":
                return "Constant"

            case "Identifier":
                return `${getColumnName(val["value"], tableAliases)}`

            default:
                return `Undefined Yet`
        }
    } else {
        switch (val[position]["type"]) {
            case "Identifier":
                return `${getColumnName(val[position]["value"], tableAliases)}`

            case "Select":
            case "SubQuery":
                return `SubQuery`

            case "ExpressionList":
                return `List`

            case "BitExpression":
                return `Equation`

            case "FunctionCall":
                return [...getFunctionCall(val[position])]

            case "SimpleExprParentheses":
                return getComparisonBoolean(val[position]["value"])

            case "Number":
            case "String":
                return "Constant"

            default:
                return `${val[position]["value"]}`;
        }
    }
}

function getInPredicate(val) {
    comparison = `IN`
    comparison += val['hasNot'] ? `_NOT` : ``

    const left = getComparisonBoolean(val, "left")
    const right = getComparisonBoolean(val, "right")

    return `${comparison}_${left}_${right}`
}

function getGroupBy(groupByObj) {
    let groupByItems = []

    if (groupByObj["rollUp"]) {
        groupByItems = ["ROLLUP", ...groupByItems]
    }

    groupByObj["value"].forEach(item => {
        groupByItems.push(getColumnName(item["value"]["value"]))
    })

    return groupByItems

}

function getOrderBy(orderByObj) {
    let orderByItems = []

    orderByObj["value"].forEach(item => {
        let comparison = item['sortOpt'] ? `${item['sortOpt']}` : 'ASC'

        switch (item["value"]["type"]) {
            case "FunctionCall":
                orderByItems = [...orderByItems, ...getFunctionCall(item["value"], comparison)]
                break;

            case "Identifier":
                orderByItems = [...orderByItems, `${comparison}_${getIdentifier(item["value"])}`]
                break;
        }

    })

    return orderByItems
}

function getHaving(havingObj) {
    let havingItems = []

    switch (havingObj["type"]) {
        case "ComparisonBooleanPrimary":
            havingItems = [...havingItems, getComparisonBooleanPrimary(havingObj)]
            break;
        case "InExpressionListPredicate":
        case "OrExpression":
        case "AndExpression":
            havingItems = [...havingItems, ...getNestedComparison(havingObj)]
            break;
    }
    return havingItems
}

function getColumnName(val, tableAliases = null) {
    const split = val.split(".").slice(-1)
    // if (split.length > 1) {
    //     if (!tableAliases) {
    //         return split.slice(-1)[0]
    //     } else {
    //         const alias = tableAliases[split[0]]
    //         if (alias) {
    //             return `${tableAliases[split[0]]}.${split[1]}`
    //         } else {
    //             return `${split[0]}.${split[1]}`
    //         }
    //     }
    // }

    return split[0]
}


module.exports = parseFeatures;