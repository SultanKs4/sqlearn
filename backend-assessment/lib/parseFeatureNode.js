function aliasString(prefix, aliases) {
    return `${prefix}_as_${aliases}`;
}

function typeCheck(obj, arr = []) {
    if (obj == null) return null;
    const type = obj.type ? obj.type : null;
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
        return obj.value;
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
        const left = typeCheck(obj.left, arr);
        const right = typeCheck(obj.right, arr);
        if (pattern.test(operator) && (operator == "AND" || operator == "OR")) {
            arr.unshift(operator);
        } else {
            arr.push(operator + "_" + left + "_" + right);
        }
        return arr;
    } else if (type == "unary_expr") {
        /* {
            type: 'unary_expr',
            operator: 'NOT',
            expr: { type: 'bool', value: true }
          } */
        const operator = obj.operator;
        if (!pattern.test(operator)) operator = "Equation";
        return operator + "_ " + exprCheck(obj.expr);
    } else if (type == "expr_list") {
        /* type : 'expr_list',
        value : [
          { type: 'number', value: 1 },
          { type: 'single_quote_string', value: 't' }
        ] */
        if (Array.isArray(obj.value)) {
            arr = obj.value.map((e) => {
                exprCheck(e);
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
        if (Array.isArray(result)) result.unshift(obj.name);
        else result = obj.name + "_" + result;
        return result;
    } else {
        return type;
    }
}

function exprCheck(exprObj) {
    if (typeof exprObj == "object" && exprObj != null) {
        let objPass = {};
        if ("type" in exprObj) {
            objPass = exprObj;
        } else if ("ast" in exprObj) {
            objPass = exprObj.ast;
        } else if ("expr" in exprObj) {
            objPass = exprObj.expr;
        }
        return typeCheck(objPass);
    }
    return exprObj;
}

function getSelectColumns(distinct, columns) {
    if (typeof columns == "string") {
        return columns;
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
        return tableArr.map((e) => {
            let arr = [];
            if (e.join) {
                arr.push(e.join + "_" + e.table);
                e.on ? arr.push(exprCheck(e.on)) : null;
            } else arr.push(e.table);
            return arr;
        });
    }
    return tableArr.flat(Infinity);
}

function getByStatement(arr) {
    if (Array.isArray(arr)) {
        return arr.map((e) => {
            exprCheck(e);
        });
    }
    return arr.flat(Infinity);
}

function getLimit(obj) {
    if (obj == null) return obj;
    const separator = obj.separator;
    let value = obj.value.map((e) => {
        return exprCheck(e);
    });
    return value.unshift(separator).flat(Infinity);
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
            let groupBy = getByStatement(ast.groupby);
            let orderBy = getByStatement(ast.orderby);
            let limit = getLimit(ast.limit);
            obj = { from, where, groupBy, having, orderBy, limit };
            break;
        case "insert":
            column = ast.columns;
            break;
    }
    return {
        [statement]: column,
        ...obj,
    };
}

module.exports = parseFeatureNode;
