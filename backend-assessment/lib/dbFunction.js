const { createConnectionDB, destroyConnection, getConnection, MAX_TIMEOUT } = require("../config/database");

async function executeDb(dbname, query, timeout = false) {
    if (!getConnection(dbname)) {
        createConnectionDB(dbname);
    }

    return new Promise((resolve, reject) => {
        getConnection(dbname).query(timeout ? { sql: query, timeout: MAX_TIMEOUT } : query, function (err, result) {
            if (err) reject(err);
            resolve(result);
        });
    }).finally(destroyConnection(dbname));
}

module.exports = {
    createDb: async (dbname) => {
        const query = `CREATE DATABASE ${dbname}`;
        let response = await executeDb(null, query);
        response["message"] = "database created";
        return response;
    },
    dropDb: async (dbname) => {
        const query = `DROP DATABASE ${dbname}`;
        let response = await executeDb(null, query);
        response["message"] = "database deleted";
        return response;
    },
    descDb: async (dbname) => {
        const query = `SELECT TABLE_NAME, COLUMN_NAME FROM information_schema.columns WHERE table_schema = '${dbname}' ORDER BY table_name, ordinal_position;`;
        return await executeDb(dbname, query);
    },
    descTable: async (dbname, table) => {
        const query = `DESCRIBE ${table}`;
        let res = await executeDb(dbname, query);
        res = res.map((val) => {
            return `${val.Field}-${val.Type}`;
        });
        return res;
    },
    selectTable: async (dbname, table) => {
        const query = `SELECT * FROM ${table};`;
        return await executeDb(dbname, query);
    },
    runQuery: async (dbname, query, timeout) => {
        return await executeDb(dbname, query, timeout);
    },
    checkDb: async (dbname) => {
        const query = `SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '${dbname}'`;
        return await executeDb(null, query);
    },
    destroyConnection: (dbname) => {
        return destroyConnection(dbname);
    },
    getConnection: (dbname) => {
        return getConnection(dbname);
    },
};
