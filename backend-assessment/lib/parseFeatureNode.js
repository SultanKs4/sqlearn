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
    switch (obj.type) {
        case "column_ref":
            return obj.column;
        case "binary_expr":
            binaryExpr(obj, arr);
            return arr;
        case "single_quote_string":
            return "constant";

        default:
            break;
    }
}

function selectColumns(distinct, columnsObjArr) {
    let columns = columnsObjArr.map((e) => {
        return typeCheck(e.expr);
    });

    if (distinct) {
        columns = [distinct, ...columns];
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
