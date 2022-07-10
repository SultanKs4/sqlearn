const { createConnectionDB, getConnection, destroyConnection, MAX_TIMEOUT } = require("../../config/database");
const compareQueryResult = require("../../lib/compareQueryResult");
const { createDb, dropDb, descTable, selectTable, descDb } = require("../../lib/dbFunction");
const getSimilarity = require("../../lib/getSimilarity");

module.exports = {
    create_db: (req, res) => {
        createDb(req.params.dbname)
            .then(() => {
                res.json({ success: true });
            })
            .catch(() => {
                res.json({ success: false });
            });
        // if (!getConnection()) {
        //     createConnectionDB()
        // }

        // getConnection().query(
        //     `CREATE DATABASE ${req.params.dbname}`,
        //     function (err, result) {
        //         if (err) return res.json({ success: false });

        //         return res.json({ success: true });
        //         // getConnection().end()
        //     }
        // );
    },
    drop_db: (req, res) => {
        dropDb(req.params.dbname)
            .then(() => {
                res.json({ success: true });
            })
            .catch(() => {
                res.json({ success: false });
            });

        // if (!getConnection()) {
        //     createConnectionDB()
        // }

        // getConnection().query(
        //     `DROP DATABASE ${req.params.dbname}`,
        //     function (err, result) {
        //         if (err) return res.json({ success: false });

        //         return res.json({ success: true });
        //         // getConnection().end()
        //     }
        // );
    },
    desc_table: (req, res) => {
        const { dbname } = req.params;

        descDb(dbname)
            .then((result) => {
                res.json(result);
            })
            .catch(() => {
                res.json({ success: false });
            });

        // if (!getConnection(dbname)) {
        //     createConnectionDB(dbname)
        // }

        // getConnection(dbname).query(`SELECT TABLE_NAME, COLUMN_NAME FROM information_schema.columns WHERE table_schema = '${req.params.dbname}' ORDER BY table_name, ordinal_position;`, function (err, result) {
        //     if (err) throw err;
        //     res.json(result);
        //     // getConnection(dbname).end()
        // });
    },
    select: (req, res) => {
        const { dbname, table } = req.params;

        selectTable(dbname, table)
            .then((result) => {
                res.json(result);
            })
            .catch(() => {
                res.json({ success: false });
            });

        // if (!getConnection(dbname)) {
        //     createConnectionDB(dbname)
        // }

        // getConnection(dbname).query(`SELECT * FROM  ${table};`, function (err, result) {
        //     if (err) throw err;
        //     res.json(result);
        //     // getConnection(dbname).end()
        // });
    },
    assess: (req, res) => {
        const { dbname } = req.params;
        const { queryMhs, queryKey, threshold } = req.body;

        const queryLowerCase = queryMhs.toLowerCase();

        if (
            queryLowerCase.includes("insert ") ||
            queryLowerCase.includes("update ") ||
            queryLowerCase.includes("delete ")
        ) {
            return res.json({
                similarity: -1,
                success: false,
                message: "Sistem hanya membatasi query SELECT",
                isEqual: false,
            });
        }

        const similarities = queryKey.map((key) => {
            const { success, similarity } = getSimilarity(queryMhs, key);
            const querySimilarity = success ? similarity : -1;
            return {
                similarity: querySimilarity,
                query: key,
            };
        });

        function arrayMax(arr) {
            let len = arr.length,
                max = -Infinity;
            let maxId = arr.length - 1;
            while (len--) {
                if (arr[len].similarity > max) {
                    max = arr[len].similarity;
                    maxId = len;
                }
            }

            // console.log(maxId)
            return {
                similarity: max,
                query: arr[maxId].query,
            };
        }

        const { similarity, query } = arrayMax(similarities);

        // const { success, similarity } = getSimilarity(queryMhs, queryKey)

        // const querySimilarity = (success) ? similarity : -1

        if (similarity <= Number(threshold) && similarity >= 0) {
            return res.json({
                similarity,
                success: false,
                message: "Query yang diinputkan tidak sesuai dengan kriteria soal",
                isEqual: false,
            });
        }

        if (!getConnection(dbname)) {
            createConnectionDB(dbname);
        }

        let resQueryMhs, resQueryKey;
        getConnection(dbname).query({ sql: `${queryMhs}`, timeout: MAX_TIMEOUT }, function (err, result) {
            if (err) {
                destroyConnection(dbname);
                let message = err.sqlMessage ? err.sqlMessage : "Terjadi error dalam pengeksekusian query";
                if (err.code === "PROTOCOL_SEQUENCE_TIMEOUT") {
                    message = "Query berjalan melebihi batas timeout";
                }
                return res.json({
                    similarity,
                    success: false,
                    message: message,
                    isEqual: false,
                });
            }

            resQueryMhs = result;
            getConnection(dbname).query(`${query}`, function (err, result) {
                if (err)
                    return res.json({
                        similarity,
                        success: false,
                        message: err.sqlMessage,
                        isEqual: false,
                    });

                resQueryKey = result;
                const isEqual = compareQueryResult(resQueryMhs, resQueryKey);

                return res.json({
                    similarity,
                    success: true,
                    message: "Query executed successfully",
                    isEqual,
                    resQuery: resQueryMhs,
                });
            });
        });
    },
};
