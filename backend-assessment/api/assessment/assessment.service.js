const getSimilarity = require("../../lib/getSimilarity");
const responseObj = require("../../lib/responseObject");

function name(params) {}

function multiKey(queryKey, queryMhs) {
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

    if (similarity <= Number(threshold) && similarity >= 0) {
        return responseObj(
            "error",
            { similarity: similarity, isEqual: false },
            "Query yang diinputkan tidak sesuai dengan kriteria soal"
        );
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
}

function singleKey(queryKey, queryMhs) {}

module.exports = {
    multiKey,
};
