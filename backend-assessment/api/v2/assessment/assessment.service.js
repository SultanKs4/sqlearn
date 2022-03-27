const getSimilarity = require("../../../lib/getSimilarity");
const dbFunctions = require("../../../lib/dbFunction");
const responseObj = require("../../../lib/responseObject");
const { Parser } = require("node-sql-parser");
const { getTypeAndTable } = require("../../../lib/parseFeatureNode");
const compareQueryResult = require("../../../lib/compareQueryResult");
const createHttpError = require("http-errors");

function calculateSimilarity(queryMhs, queryKey) {
    const { success, similarity } = getSimilarity(queryMhs, queryKey);
    return success ? similarity : -1;
}

async function assessment(dbname, similarity, queryMhs, queryKey, threshold) {
    try {
        if (similarity <= Number(threshold) && similarity >= 0)
            throw new createHttpError(406, "Query yang diinputkan tidak sesuai dengan kriteria soal");
        let dbStudent;
        let dbKey;
        if (dbname.length < 2) throw new createHttpError(400, "db must be key and student db");
        dbname.forEach((e) => {
            if (/[_student]+$/gm.test(e)) dbStudent = e;
            else if (/[_key]+$/gm.test(e)) dbKey = e;
        });
        const parser = new Parser();
        const typeAndTable = getTypeAndTable(parser.astify(queryKey));
        let resQueryMhs = await dbFunctions.runQuery(dbStudent, `${queryMhs}`, true);
        let resQueryKey = await dbFunctions.runQuery(dbKey, `${queryKey}`, true);
        if (typeAndTable.type == "insert") {
            resQueryMhs = await dbFunctions.selectTable(dbStudent, typeAndTable.table);
            resQueryKey = await dbFunctions.selectTable(dbKey, typeAndTable.table);
        }
        return responseObj(200, "success", {
            similarity,
            is_equal: compareQueryResult(resQueryMhs, resQueryKey),
            res_query: resQueryMhs,
        });
    } catch (error) {
        if (dbFunctions.getConnection(dbname)) dbFunctions.destroyConnection(dbname);
        return responseObj(error.statusCode, "error", { similarity, is_equal: false }, error.message);
    }
}

module.exports = {
    multiKey: async (dbname, queryKey, queryMhs, threshold) => {
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
    },
    singleKey: async (dbname, queryKey, queryMhs, threshold) => {
        return await assessment(dbname, calculateSimilarity(queryMhs, queryKey), queryMhs, queryKey, threshold);
    },
};
