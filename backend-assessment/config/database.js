const mysql = require("mysql");

// const createConnection = () => {
//     const con = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         password: "",
//     });
//     return con
// }

const MAX_TIMEOUT = 6000;

let connections = {};
function createConnectionDB(
    dbName = null,
    host = process.env.DB_HOST,
    userName = process.env.DB_USER,
    password = process.env.DB_PASS
) {
    connName = dbName ? dbName : "default";
    const dbOptions = {
        host: host,
        user: userName,
        password: password,
    };

    if (dbName) {
        dbOptions["database"] = dbName;
    }

    connections[connName] = mysql.createConnection(dbOptions);
    connections[connName].connect();
}

function getConnection(dbName) {
    return dbName ? connections[dbName] : connections["default"];
}

function destroyConnection(dbName) {
    if (dbName) {
        connections[dbName].end();
        connections[dbName] = null;
    } else {
        connections["default"].end();
        connections["default"] = null;
    }
}

module.exports = {
    getConnection,
    destroyConnection,
    createConnectionDB,
    MAX_TIMEOUT,
};
