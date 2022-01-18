const getSimilarity = require("../../../lib/getSimilarity");
const dbFunctions = require("../../../lib/dbFunction");
const responseObj = require("../../../lib/responseObject");
const compareQueryResult = require("../../../lib/compareQueryResult");

function calculateSimilarity(queryMhs, queryKey) {
    const { success, similarity } = getSimilarity(queryMhs, queryKey);
    return success ? similarity : -1;
}

async function assessment(dbname, similarity, queryMhs, queryKey, threshold) {
    if (similarity <= Number(threshold) && similarity >= 0) {
        return responseObj(
            "error",
            { similarity, is_equal: false },
            "Query yang diinputkan tidak sesuai dengan kriteria soal"
        );
    }

    try {
        const resQueryMhs = await dbFunctions.runQuery(dbname, `${queryMhs}`, true);
        const resQueryKey = await dbFunctions.runQuery(dbname, `${queryKey}`, true);
        return responseObj("success", {
            similarity,
            is_equal: compareQueryResult(resQueryMhs, resQueryKey),
            res_query: resQueryMhs,
        });
    } catch (error) {
        dbFunctions.destroyConnection(dbname);
        return responseObj(
            "error",
            { similarity, is_equal: false, error_detail: error },
            "Terjadi error dalam pengeksekusian query"
        );
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
