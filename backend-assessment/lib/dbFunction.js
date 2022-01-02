const { createConnectionDB, getConnection } = require("../config/database");

module.exports = {
    createDb: function (dbname) {
        if (!getConnection()) {
            createConnectionDB();
        }

        return new Promise((resolve, reject) => {
            getConnection().query(
                `CREATE DATABASE ${dbname}`,
                function (err, result) {
                    if (err) reject(false);
                    resolve(true);
                }
            );
        });
    },
    dropDb: function (dbname) {
        if (!getConnection()) {
            createConnectionDB();
        }

        return new Promise((resolve, reject) => {
            getConnection().query(
                `DROP DATABASE ${dbname}`,
                function (err, result) {
                    if (err) reject(false);

                    resolve(true);
                }
            );
        });
    },
    descTable: function (dbname) {
        if (!getConnection(dbname)) {
            createConnectionDB(dbname);
        }

        return new Promise((resolve, reject) => {
            getConnection(dbname).query(
                `SELECT TABLE_NAME, COLUMN_NAME FROM information_schema.columns WHERE table_schema = '${dbname}' ORDER BY table_name, ordinal_position;`,
                function (err, result) {
                    if (err) reject(err);
                    resolve(result);
                }
            );
        });
    },
    selectTable: function (dbname, table) {
        if (!getConnection(dbname)) {
            createConnectionDB(dbname);
        }

        return new Promise((resolve, reject) => {
            getConnection(dbname).query(
                `SELECT * FROM  ${table};`,
                function (err, result) {
                    if (err) reject(err);
                    resolve(result);
                }
            );
        });
    },
};
