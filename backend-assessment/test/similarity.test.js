const { countCosineSimilarity, getCosineSimilarity } = require("../lib/cosineSimilarity");
const { getFeatureVector } = require("../lib/getSimilarity");
const { Parser } = require("node-sql-parser");
const parseFeatureNode = require("../lib/parseFeatureNode");

const chai = require("chai"),
    expect = chai.expect;

describe("Similarity Test", () => {
    describe("Parse Query Test", () => {
        it("Should return object with select keys before get feature", () => {
            const parser = new Parser();
            const data = [
                "SELECT nama, nim FROM mahasiswa WHERE nama = 'Tomi' AND kelas = 'TI-4C'",
                "SELECT DISTINCT a FROM b WHERE c = 0 GROUP BY d ORDER BY e ASC limit 10",
                'SELECT "a" || "," || b as ab, t.cd && "ef" FROM t',
                `SELECT * FROM t where t.c between 1 and 't' AND Not true`,
                "SELECT col1 FROM t GROUP BY col2 HAVING COUNT(*) > 1",
                "SELECT * FROM tabla WHERE id = 1 AND name LIKE '%jos%' AND city_id = 'a'",
                "select -1, -a, +b, +abc.e from abc",
                "SELECT fun(d) FROM t",
            ];
            data.forEach((query) => {
                const ast = parser.astify(query);
                const result = parseFeatureNode(ast);
                expect(result).to.include.keys(["select", "from", "where", "having", "groupBy", "orderBy", "limit"]);
            });
        });
        it("Success return true", () => {
            const { success, featureVector } = getFeatureVector(
                "SELECT nama, nim FROM mahasiswa WHERE nama = 'Tomi' AND kelas = 'TI-4C'"
            );
            expect(success).to.equal(true);
        });
        it("Feature Vector returns specified features", () => {
            const { success, featureVector } = getFeatureVector(
                "SELECT nama, nim FROM mahasiswa WHERE nama = 'Tomi' AND kelas = 'TI-4C'"
            );
            expect(featureVector).to.deep.equal([
                "select_nama",
                "select_nim",
                "from_mahasiswa",
                "where_and",
                "where_=_nama_constant",
                "where_=_kelas_constant",
            ]);
        });
    });
    describe("Calculate Similarity Test", () => {
        it("Calculate Cosine Similarity", () => {
            const result = countCosineSimilarity(
                [[1], [1], [0], [1], [1], [1], [1]],
                [[1], [1], [1.30102999566], [1], [1], [1], [1]]
            );
            expect(result).to.greaterThanOrEqual(0.88);
        });
        it("Get Cosine Similarity from Documents", () => {
            const documents = {
                d1: [
                    ["select_nama"],
                    ["select_nim"],
                    ["from_mahasiswa"],
                    ["where_and"],
                    ["where_=_nama_constant"],
                    ["where_=_kelas_constant"],
                ],
                d2: [
                    ["select_nama"],
                    ["select_nim"],
                    ["select_kelas"],
                    ["from_mahasiswa"],
                    ["where_and"],
                    ["where_=_nama_constant"],
                    ["where_=_kelas_constant"],
                ],
            };
            const result = getCosineSimilarity(documents);
            expect(result).to.greaterThanOrEqual(0.88);
        });
    });
});
