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
    descTable: async (dbname) => {
        const query = `SELECT TABLE_NAME, COLUMN_NAME FROM information_schema.columns WHERE table_schema = '${dbname}' ORDER BY table_name, ordinal_position;`;
        return await executeDb(dbname, query);
    },
    selectTable: async (dbname, table) => {
        const query = `SELECT * FROM  ${table};`;
        return await executeDb(dbname, query);
    },
    runQuery: async (dbname, query, timeout) => {
        return await executeDb(dbname, query, timeout);
    },
    destroyConnection: (dbname) => {
        return destroyConnection(dbname);
    },
    getConnection: (dbname) => {
        return getConnection(dbname);
    },
};
