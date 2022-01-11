function binaryExpr(obj) {
    const operator = obj.operator;
    const left = obj.left;
    const right = obj.right;
    return left + operator + right;
}

function aliasString(prefix, aliases) {
    return `${prefix}_as_${aliases}`;
}

function typeCheck(obj) {
    switch (obj.type) {
        case "column_ref":
            return obj.column;

        default:
            break;
    }
}

function selectColumns(distinct, columnsObjArr) {
    let columns = [];

    columnsObjArr.forEach((e) => {
        let prefix = typeCheck(e.expr);
        prefix = e.as ? aliasString(prefix, e.as) : prefix;
        columns = [...columns, prefix];
    });

    if (distinct) {
        columns = [distinct, ...columns];
    }
}

function getTable(tableObjArr) {
    let table = tableObjArr.flatMap((e) => {
        let arr = [];
        if (e.join) {
            arr.push(e.join + "_" + e.table);
            if (e.on) {
                e.on.type == "binary_expr" ? binaryExpr(e.on) : null;
            }
            e.on ? arr.push(e.on.operator) : null;
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
