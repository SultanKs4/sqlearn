function binaryExpr(obj, arr) {
    const pattern = /[a-zA-Z]/g;
    const operator = obj.operator;
    const left = typeCheck(obj.left, arr);
    const right = typeCheck(obj.right, arr);
    if (pattern.test(operator)) {
        arr.unshift(operator);
    } else {
        arr.push(left + "_" + operator + "_" + right);
    }
}

function aliasString(prefix, aliases) {
    return `${prefix}_as_${aliases}`;
}

function typeCheck(obj, arr = null) {
    const type = obj.type;
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
    } else if (type == "param") {
        // { type: 'param', value: 'my_param' }
    } else if (type == "unary_expr") {
        /* {
            type: 'unary_expr',
            operator: 'NOT',
            expr: { type: 'bool', value: true }
          } */
    } else if (type == "bool") {
        // { type: 'bool', value: 'bool' }
    } else if (type == "null") {
        // { type: 'null', value: 'null' }
    } else if (type.includes("string")) {
        return "constant";
    }
}

function selectColumns(distinct, columns) {
    if (typeof columns == "string") {
        return columns;
    } else if (Array.isArray(columns)) {
        columns = columns.map((e) => {
            return typeCheck(e.expr);
        });

        if (distinct) {
            columns = [distinct, ...columns];
        }
    }
    return columns;
}

function getTable(tableObjArr) {
    let table = tableObjArr.flatMap((e) => {
        let arr = [];
        if (e.join) {
            arr.push(e.join + "_" + e.table);
            e.on ? arr.push(typeCheck(e.on)) : null;
        } else arr.push(e.table);
        return arr;
    });
    return table;
}

function parseFeatureNode(ast) {
    const command = ast.type;
    let obj = {};
    switch (command) {
        case "select":
            let selectColumn = selectColumns(ast.distinct, ast.columns);
            let from = getTable(ast.from);
            let where = typeCheck(ast.where, []);
            break;
        case "insert":
            let insertColumn = ast.columns;
            break;
    }
    return {
        [command]: obj,
    };
}

module.exports = parseFeatureNode;
