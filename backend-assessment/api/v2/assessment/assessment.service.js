const getSimilarity = require("../../../lib/getSimilarity");
const dbFunctions = require("../../../lib/dbFunction");
const responseObj = require("../../../lib/responseObject");
const { Parser } = require("node-sql-parser");
const { getTypeAndTable } = require("../../../lib/parseFeatureNode");
const compareQueryResult = require("../../../lib/compareQueryResult");
const createHttpError = require("http-errors");

function calculateSimilarity(queryMhs, queryKey) {
    try {
        const { success, similarity, message } = getSimilarity(queryMhs, queryKey);
        if (!success) throw { similarity, message };
        return similarity;
    } catch (error) {
        throw error;
    }
}

async function assessment(dbname, similarity, queryMhs, queryKey, threshold) {
    try {
        if (similarity <= Number(threshold) && similarity >= 0)
            throw createHttpError(406, "Query yang diinputkan tidak sesuai dengan kriteria soal");
        let dbStudent = null;
        let dbKey = null;
        if (dbname.length < 2) throw createHttpError(400, "db list lenght minimal 2");
        dbname.forEach((e) => {
            if (/_student$/gm.test(e)) dbStudent = e;
            if (/_key$/gm.test(e)) dbKey = e;
        });
        if (dbStudent == null || dbKey == null) throw createHttpError(400, "db student or key null");
        const typeAndTable = getTypeAndTable(new Parser().astify(queryKey));
        let resQueryMhs = await dbFunctions.runQuery(dbStudent, `${queryMhs}`, true);
        let resQueryKey = await dbFunctions.runQuery(dbKey, `${queryKey}`, true);
        if (typeAndTable.type == "insert") {
            resQueryMhs = await dbFunctions.selectTable(dbStudent, typeAndTable.table);
            resQueryKey = await dbFunctions.selectTable(dbKey, typeAndTable.table);
        }
        const is_equal = compareQueryResult(resQueryMhs, resQueryKey);
        const message = is_equal ? "Jawaban benar" : "Jawaban salah";
        return responseObj(200, "success", {
            similarity,
            is_equal,
            res_query: resQueryMhs,
            message,
        });
    } catch (error) {
        return responseObj(
            error.statusCode ? error.statusCode : 500,
            "error",
            { similarity, is_equal: false },
            error.message
        );
    }
}

module.exports = {
    multiKey: async (dbname, queryKey, queryMhs, threshold) => {
        try {
            const similarities = queryKey.map((key) => {
                return {
                    similarity: calculateSimilarity(queryMhs, key),
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

            return await assessment(dbname, similarity, queryMhs, query, threshold);
        } catch (error) {
            let similarity = error.similarity;
            return responseObj(
                error.statusCode ? error.statusCode : 500,
                "error",
                { similarity, is_equal: false },
                error.message.name
            );
        }
    },
    singleKey: async (dbname, queryKey, queryMhs, threshold) => {
        try {
            return await assessment(dbname, calculateSimilarity(queryMhs, queryKey), queryMhs, queryKey, threshold);
        } catch (error) {
            let similarity = error.similarity;
            return responseObj(
                error.statusCode ? error.statusCode : 500,
                "error",
                { similarity, is_equal: false },
                error.message.name
            );
        }
    },
};
