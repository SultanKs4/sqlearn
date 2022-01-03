const { createConnectionDB, getConnection } = require("../config/database");

async function executeDb(dbname, query) {
    if (!getConnection(dbname)) {
        createConnectionDB(dbname);
    }

    return new Promise((resolve, reject) => {
        getConnection(dbname).query(query, function (err, result) {
            if (err) reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    createDb: async function (dbname) {
        const query = `CREATE DATABASE ${dbname}`;
        return await executeDb(null, query);
    },
    dropDb: async function (dbname) {
        const query = `DROP DATABASE ${dbname}`;
        return await executeDb(null, query);
    },
    descTable: async function (dbname) {
        const query = `SELECT TABLE_NAME, COLUMN_NAME FROM information_schema.columns WHERE table_schema = '${dbname}' ORDER BY table_name, ordinal_position;`;
        return await executeDb(dbname, query);
    },
    selectTable: async function (dbname, table) {
        const query = `SELECT * FROM  ${table};`;
        return await executeDb(dbname, query);
    },
};
