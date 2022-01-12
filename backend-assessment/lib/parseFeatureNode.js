function binaryExpr(obj, arr) {
    const pattern = /[a-zA-Z]/g;
    const operator = obj.operator;
    const left = typeCheck(obj.left, arr);
    const right = typeCheck(obj.right, arr);
    if (pattern.test(operator)) {
        arr.unshift(operator);
    } else {
        arr.push(operator + "_" + left + "_" + right);
    }
}

function aliasString(prefix, aliases) {
    return `${prefix}_as_${aliases}`;
}

function typeCheck(obj, arr = []) {
    const type = obj.type ? obj.type : null;
    if (type == "column_ref") {
        return obj.column;
    } else if (type == "select") {
        return "SubQuery";
    } else if (type == "binary_expr") {
        /* "type": "binary_expr",
            "operator": "=",
            "left": {
                "type": "column_ref",
                "table": null,
                "column": "kelas"
            },
            "right": {
                "type": "single_quote_string",
                "value": "ti-4c"
            } */
        binaryExpr(obj, arr);
        return arr;
    } else if (type == "number") {
        /* {
            "type": "number",
            "value": 1123144
        }, */
        // do nothing
    } else if (type == "function") {
        /*         {
            type: 'function',
            name: func,
            over: null,
            args: {
              type: 'expr_list',
              value: []
            } */
    } else if (type == "aggr_func") {
        /* {
            type: 'aggr_func',
            name: 'SUM',
            over: null,
            args: { expr: { type: 'column_ref', table: null, column: 'col2' } }
          } */
    } else if (type == "expr_list") {
        /* type : 'expr_list',
            value : [
              { type: 'number', value: 1 },
              { type: 'single_quote_string', value: 't' }
            ] */
    } else if (type == "param" || type == "null" || type == "bool" || type == "origin") {
        // { type: 'param', value: 'my_param' }
        return obj.value;
    } else if (type == "unary_expr") {
        /* {
            type: 'unary_expr',
            operator: 'NOT',
            expr: { type: 'bool', value: true }
          } */
    } else if (type.includes("string")) {
        return "constant";
    } else {
        return type;
    }
}

function exprCheck(exprObj) {
    if (typeof exprObj == "object") {
        let objPass = {};
        if ("type" in exprObj) {
            objPass = exprObj;
        } else if ("ast" in exprObj) {
            objPass = exprObj.ast;
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
            return exprCheck(e.expr);
        });

        if (distinct) {
            columns = [distinct, ...columns];
        }
    }
    return columns;
}

function getTable(tableArr) {
    if (Array.isArray(tableArr)) {
        return tableArr.flatMap((e) => {
            let arr = [];
            if (e.join) {
                arr.push(e.join + "_" + e.table);
                e.on ? arr.push(exprCheck(e.on)) : null;
            } else arr.push(e.table);
            return arr;
        });
    }
    return tableArr;
}

function getByStatement(arr) {
    if (Array.isArray(arr)) {
        return arr.map((e) => {
            exprCheck(e);
        });
    }
    return arr;
}

function getLimit(obj) {
    if (typeof obj != "object") return obj;
    const separator = obj.separator;
    let value = obj.value.map((e) => {
        return exprCheck(e);
    });
    return value.unshift(separator);
}

function parseFeatureNode(ast) {
    const statement = ast.type;
    let column;
    let obj = {};
    switch (statement) {
        case "select":
            column = getSelectColumns(ast.distinct, ast.columns);
            let from = getTable(ast.from);
            let where = exprCheck(ast.where);
            let having = exprCheck(ast.having);
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
