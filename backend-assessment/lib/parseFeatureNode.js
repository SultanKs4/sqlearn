function parseFeatureNode(ast) {
    const type = ast["type"];
    let obj = {};
    switch (type) {
        case "select":
            let selectColumns = selectColumns(ast["distinct"], ast["columns"]);
            let from;
            break;
        case "insert":
            break;
    }
    return {
        type,
    };
}

function selectColumns(distinct, columnsObj) {
    let columns = [];

    columnsObj.forEach((element) => {
        switch (element["expr"]["type"]) {
            case "column_ref":
                columns = [...columns, getColumnRef(element["expr"])];
                break;

            default:
                break;
        }
    });

    if (distinct) {
        columns = [distinct, ...columns];
    }
}

function insertColumns(params) {}

function getColumnRef(columnsObj, tableAliases = null) {
    return columnsObj["column"];
}

function getTable(tableObj) {
    let table = [];
    tableObj.forEach((element) => {
        let tableString = element["as"] ? `${element["table"]}_${element["as"]}` : `${element["table"]}`;
        table = [...table, tableString];
    });
    return table;
}

module.exports = parseFeatureNode;
