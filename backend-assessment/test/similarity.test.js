const { describe } = require("mocha");
const { countCosineSimilarity, getCosineSimilarity } = require("../lib/cosineSimilarity");
const { getFeatureVector } = require("../lib/getSimilarity");
const { Parser } = require("node-sql-parser");
const { parseFeatureNode } = require("../lib/parseFeatureNode");
const getSimilarity = require("../lib/getSimilarity");

const chai = require("chai"),
    expect = chai.expect;

describe("Similarity Test", () => {
    describe("Parse Query Test", () => {
        const parser = new Parser();
        // it("test insert single row", () => {
        //     const data = [
        //         "INSERT INTO employee(id) VALUES(1) ON DUPLICATE KEY UPDATE name = 'John Doe'",
        //         "SELECT * FROM mahasiswa where ipk >= 3.5",
        //         "INSERT INTO orders(id, received_date, name, description) VALUES(LAST_INSERT_ID(), CURRENT_DATE(), 'Bejo', '5 pcs baju putih')",
        //         "INSERT INTO stats(totalProducts, totalOrders, totalCustomers) VALUES((SELECT COUNT(*) FROM products), (SELECT COUNT(*) FROM orders), (SELECT COUNT(*) FROM customers))",
        //         "INSERT INTO orders(id) VALUES(1) ON DUPLICATE KEY UPDATE received_date = CURRENT_DATE(), name = 'Dinar', priority = 1, description = '1 ton ayam potong'",
        //         "INSERT INTO provinsi(id) VALUES(7) ON DUPLICATE KEY UPDATE name = 'Bengkulu'",
        //         "INSERT INTO mahasiswa(id, nama, kelas, ipk) VALUES(LAST_INSERT_ID(), 'Laras', '4A',  3.0)",
        //         "INSERT INTO mahasiswa VALUES(30, 'Denny', '4C', 2.75),(31, 'Baba', '4E', 2.5),(32, 'Naufal', '4H', 3.5)",
        //         "INSERT INTO stats(totalProducts, totalOrders, totalCustomers) VALUES((SELECT COUNT(*) FROM products), (SELECT COUNT(*) FROM orders), (SELECT COUNT(*) FROM customers))",
        //         "INSERT INTO customers_duplicate(customerNumber, customerName, city, state, country) SELECT * FROM customers WHERE country = 'France'",
        //         "INSERT INTO orders(id) VALUES(1) ON DUPLICATE KEY UPDATE received_date = CURRENT_DATE(), name = 'Dinar', priority = 1, description = '1 ton ayam potong'",
        //     ];
        //     data.forEach((query) => {
        //         const ast = parser.astify(query);
        //         const result = parseFeatureNode(ast);
        //         expect(result).to.include.keys(["insert", "values", "partition", "onDuplicateUpdate"]);
        //     });
        // });
        // it("test insert single row 2", () => {
        //     const data = [
        //         "INSERT INTO employee(id) VALUES(1) ON DUPLICATE KEY UPDATE name = 'John Doe'",
        //         "INSERT INTO employee(id) VALUES(1) ON DUPLICATE KEY UPDATE name = ‘John Doe’",
        //         // "INSERT INTO stats(totalProducts, totalOrders, totalCustomers) VALUES((SELECT COUNT(*) FROM products), (SELECT COUNT(*) FROM orders), (SELECT COUNT(*) FROM customers))",
        //         "INSERT INTO customers_duplicate(customerNumber, customerName, city, state, country) SELECT * FROM customers WHERE country = 'France'",
        //         "INSERT INTO orders(id, received_date, name, description) VALUES(LAST_INSERT_ID(), CURRENT_DATE(), 'Bejo', '5 pcs baju putih')",
        //         "INSERT INTO stats(totalProducts, totalOrders, totalCustomers) VALUES((SELECT COUNT(*) FROM products), (SELECT COUNT(*) FROM orders), (SELECT COUNT(*) FROM customers))",
        //         "INSERT INTO orders(id) VALUES(1) ON DUPLICATE KEY UPDATE received_date = CURRENT_DATE(), name = 'Dinar', priority = 1, description = '1 ton ayam potong'",
        //         "INSERT INTO provinsi(id) VALUES(7) ON DUPLICATE KEY UPDATE name = 'Bengkulu'",
        //         "INSERT INTO mahasiswa(id, nama, kelas, ipk) VALUES(LAST_INSERT_ID(), 'Laras', '4A',  3.0)",
        //         "INSERT INTO mahasiswa VALUES(30, 'Denny', '4C', 2.75),(31, 'Baba', '4E', 2.5),(32, 'Naufal', '4H', 3.5)",
        //         "INSERT INTO stats(totalProducts, totalOrders, totalCustomers) VALUES((SELECT COUNT(*) FROM products), (SELECT COUNT(*) FROM orders), (SELECT COUNT(*) FROM customers))",
        //         "INSERT INTO customers_duplicate(customerNumber, customerName, city, state, country) SELECT * FROM customers WHERE country = 'France'",
        //         "INSERT INTO orders(id) VALUES(1) ON DUPLICATE KEY UPDATE received_date = CURRENT_DATE(), name = 'Dinar', priority = 1, description = '1 ton ayam potong'",
        //     ];
        //     data.forEach((query) => {
        //         let similarity = getSimilarity(query, query);
        //         expect(similarity).to.include.keys(["success", "similarity"]);
        //     });
        // });
        it("Should return object from parse insert query", () => {
            const data = [
                // "INSERT INTO customers_duplicate(customerNumber, customerName, city, state, country) SELECT * FROM customers WHERE country = 'France'",
                // "INSERT INTO MAHASISWA (nama,nim,kelas) VALUES ('YASA', 1123144, 'MI-2M'), ('YASA', 1123144, 'MI-2M')",
                // "INSERT INTO employee(id, name) VALUES(1, 'Ben') ON DUPLICATE KEY UPDATE name = 'John Doe'",
                "select hari.nama_hari, mk.nama_mk from jadwal join mk on jadwal.kode_mk = mk.kode_mk join hari on hari.kode_hari = jadwal.kode_hari where hari.nama_hari = 'Senin' GROUP BY mk.nama_mk",
            ];
            data.forEach((query) => {
                const ast = parser.astify(query);
                const result = parseFeatureNode(ast);
                expect(result).to.include.keys(["insert", "values", "partition", "onDuplicateUpdate"]);
            });
        });
        it("Should return feature vector insert query", () => {
            const { success, featureVector } = getFeatureVector(
                // "INSERT INTO MAHASISWA (nama,nim,kelas) VALUES ('YASA', 1123144, 'MI-2M'), ('YASA', 1123144, 'MI-2M')"
                "select hari.nama_hari, mk.nama_mk from jadwal join mk on jadwal.kode_mk = mk.kode_mk join hari on hari.kode_hari = jadwal.kode_hari where hari.nama_hari = 'Senin' GROUP BY mk.nama_mk;"
            );
            expect(success).to.equal(true);
            expect(featureVector).to.deep.equal([
                "insert_mahasiswa",
                "insert_nama",
                "insert_nim",
                "insert_kelas",
                "values_1_constant",
                "values_1_constant",
                "values_1_constant",
                "values_2_constant",
                "values_2_constant",
                "values_2_constant",
            ]);
        });
        it("Should return object from parse select query", () => {
            const data = [
                "SELECT nama, nim FROM mahasiswa WHERE nama = 'Tomi' AND kelas = 'TI-4C'",
                "SELECT first_name, last_name, ( SELECT count(*) AS paintings FROM sales WHERE collectors.id = sales.collector_id) FROM collectors",
                "SELECT name, listed_price FROM paintings WHERE listed_price > ( SELECT AVG(listed_price) FROM paintings)",
                "SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)",
                "SELECT nama, nim FROM mahasiswa WHERE nama = 'Tomi' AND kelas = 'TI-4C'",
                "SELECT DISTINCT a FROM b WHERE c = 0 GROUP BY d ORDER BY e ASC limit 10",
                'SELECT "a" || "," || b as ab, t.cd && "ef" FROM t',
                `SELECT * FROM t where t.c between 1 and 't' AND Not true`,
                "SELECT col1 FROM t GROUP BY col2 HAVING COUNT(*) > 1",
                "SELECT * FROM tabla WHERE id = 1 AND name LIKE '%jos%' AND city_id = 'a'",
                "select -1, -a, +b, +abc.e from abc",
                "SELECT fun(d) FROM t",
                "SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa",
                "SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00",
                "SELECT * FROM mahasiswa WHERE ipk >= 3.00 AND ipk <= 4.00",
                "SELECT * FROM mahasiswa WHERE ipk >= 3.00",
                "SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2",
                "SELECT kelas, COUNT(*) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2",
                "SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas",
                "SELECT kelas, COUNT(*) as jumlah_mhs FROM mahasiswa GROUP BY kelas",
                "SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)",
                "SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)",
                "SELECT * FROM mahasiswa ORDER BY ipk LIMIT 1",
                "SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa ORDER BY ipk LIMIT 1",
            ];
            data.forEach((query) => {
                const ast = parser.astify(query);
                const result = parseFeatureNode(ast);
                expect(result).to.include.keys(["select", "from", "where", "having", "groupBy", "orderBy", "limit"]);
            });
        });
        it("Should return feature vector select query", () => {
            const { success, featureVector } = getFeatureVector(
                "SELECT nama, nim FROM mahasiswa WHERE nama = 'Tomi' AND kelas = 'TI-4C'"
            );
            expect(success).to.equal(true);
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
        it("Get Cosine Similarity from Documents select", () => {
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
        it("Get Cosine Similarity from Documents Insert", () => {
            const documents = {
                d1: [["insert_mahasiswa"], ["values_1_constant"], ["values_1_constant"], ["values_1_constant"]],
                d2: [
                    ["insert_mahasiswa"],
                    ["insert_nama"],
                    ["insert_nim"],
                    ["insert_kelas"],
                    ["values_1_constant"],
                    ["values_1_constant"],
                    ["values_1_constant"],
                ],
            };
            const result = getCosineSimilarity(documents);
            expect(result).to.greaterThanOrEqual(0.81);
        });
    });
});
