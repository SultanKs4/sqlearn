function aliasString(prefix, aliases) {
    return `${prefix}_as_${aliases}`;
}

function typeCheck(obj, arr = []) {
    if (obj == null) return null;
    const type = obj.type ? obj.type : "undefined";
    const pattern = /[a-zA-Z]/g;
    if (type == "column_ref") {
        /* {
            "type": "column_ref",
            "table": null,
            "column": "nama"
        } */
        return obj.column;
    } else if (type == "select") {
        return "SubQuery";
    } else if (type == "param" || type == "null" || type == "bool" || type == "star") {
        // { type: 'param', value: 'my_param' }
        return String(obj.value);
    } else if (type == "binary_expr") {
        /* { 
            "type": "binary_expr",
            "operator": "AND",
            "left": {
                "type": "binary_expr",
                "operator": "=",
                "left": {},
                "right": {}
            },
            "right": {}
        } */
        const operator = obj.operator;
        const left = exprCheck(obj.left);
        const right = exprCheck(obj.right);
        // const left = typeCheck(obj.left, []);
        // const right = typeCheck(obj.right, []);
        if (pattern.test(operator) && (operator == "AND" || operator == "OR")) {
            arr.push(operator, ...left, ...right);
        } else {
            arr.push(`${operator}_${left}_${right}`);
        }
        return arr;
    } else if (type == "unary_expr") {
        /* {
            type: 'unary_expr',
            operator: 'NOT',
            expr: { type: 'bool', value: true }
          } */
        let operator = obj.operator;
        if (!pattern.test(operator)) operator = "Equation";
        arr.push(`${operator}_${exprCheck(obj.expr)}`);
        return arr;
    } else if (type == "expr_list") {
        /* type : 'expr_list',
        value : [
          { type: 'number', value: 1 },
          { type: 'single_quote_string', value: 't' }
        ] */
        if (Array.isArray(obj.value)) {
            arr = obj.value.map((e) => {
                return exprCheck(e);
            });
        }
        return arr;
    } else if (type == "function" || type == "aggr_func") {
        /*         {
            type: 'function',
            name: func,
            over: null,
            args: {
                type: 'expr_list',
                value: []
            } OR
            {
            type: 'aggr_func',
            name: 'SUM',
            over: null,
            args: { expr: { type: 'column_ref', table: null, column: 'col2' } }
          }
            */
        let result = exprCheck(obj.args);
        if (Array.isArray(result)) result = `${obj.name}`;
        else result = `${obj.name}_${result}`;
        return result;
    } else if (type == "ASC" || type == "DESC") {
        return `${type}_${exprCheck(obj.expr)}`;
    } else if (type.includes("string") || type == "number") {
        /* {
            "type": "number",
            "value": 1123144
        }, OR 
        {
            "type": "single_quote_string",
            "value": "tomi"
        }*/
        return "Constant";
    } else {
        return type;
    }
}

function exprCheck(exprObj) {
    if (typeof exprObj == "object" && exprObj != null) {
        if ("type" in exprObj) {
            return typeCheck(exprObj);
        } else if ("ast" in exprObj) {
            return typeCheck(exprObj.ast);
        } else if ("expr" in exprObj) {
            return exprCheck(exprObj.expr);
        } else {
            return exprObj;
        }
    }
    return exprObj;
}

function getSelectColumns(distinct, columns) {
    if (typeof columns == "string") {
        return [columns];
    } else if (Array.isArray(columns)) {
        columns = columns.map((e) => {
            return exprCheck(e);
        });

        if (distinct) {
            columns = [distinct, ...columns];
        }
        return columns.flat(Infinity);
    } else {
        return columns;
    }
}

function getTable(tableArr) {
    if (Array.isArray(tableArr)) {
        return tableArr
            .map((e) => {
                let arr = [];
                if (e.join) {
                    arr.push(`${e.join}_${e.table}`);
                    e.on ? arr.push(exprCheck(e.on)) : null;
                } else arr.push(e.table);
                return arr;
            })
            .flat(Infinity);
    }
    return tableArr;
}

function getStatement(data, statement = null) {
    if (Array.isArray(data)) {
        data = data.map((e) => {
            return exprCheck(e);
        });
        if (statement != "values") data = data.flat(Infinity).join("_");
        return data;
    } else if (typeof data == "object" && data !== null) {
        return [[exprCheck(data)]];
    } else {
        return data;
    }
}

function getLimit(obj) {
    if (obj == null) return obj;
    const seperator = obj.seperator;
    let value = obj.value.map((e) => {
        return exprCheck(e);
    });
    return seperator === "" ? value : [seperator, ...value];
}

function getOnDuplicateUpdate(obj) {
    if (typeof obj == "object" && obj != null) {
        return obj.set.map((e) => {
            return `${e.column}_${exprCheck(e.value)}`;
        });
    }
    return obj;
}

function parseFeatureNode(ast) {
    const statement = ast.type;
    let column;
    let obj = {};
    switch (statement) {
        case "select":
            column = getSelectColumns(ast.distinct, ast.columns);
            let from = getTable(ast.from);
            let where = ast.where ? [exprCheck(ast.where)].flat(Infinity) : null;
            let having = ast.having ? [exprCheck(ast.having)].flat(Infinity) : null;
            let groupBy = getStatement(ast.groupby, "values");
            let orderBy = getStatement(ast.orderby, "values");
            let limit = getLimit(ast.limit);
            obj = { from, where, groupBy, having, orderBy, limit };
            break;
        case "insert":
            let table = getTable(ast.table);
            column = ast.columns ? [...table, ...ast.columns] : table;
            let values = getStatement(ast.values, "values");
            let partition = ast.partition;
            let onDuplicateUpdate = getOnDuplicateUpdate(ast.on_duplicate_update);
            obj = { values, partition, onDuplicateUpdate };
            break;
    }
    obj = {
        [statement]: column,
        ...obj,
    };
    // let objRoot = Object.entries(obj).map((val) => {
    //     console.log(val);
    // });
    return obj;
}

function getTypeAndTable(ast) {
    return {
        type: ast.type,
        table: ast.type == "insert" ? getTable(ast.table) : getTable(ast.from),
    };
}

module.exports = { parseFeatureNode, getTypeAndTable };
