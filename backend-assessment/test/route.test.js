const { describe, it } = require("mocha");
const supertest = require("supertest");
const chai = require("chai"),
    expect = chai.expect;

chai.use(require("chai-like"));
chai.use(require("chai-things"));

const app = require("../app");

const req = supertest(app);

describe("Route Test", () => {
    it("index", async () => {
        const response = await req.get("/");
        expect(response.statusCode).equal(200);
        expect(response.text).equal("Hello");
    });
    describe("v1 route", () => {
        let prefixRoute = "/api/v1";
        describe("create DB", () => {
            it("success create db", async () => {
                const response = await req.post(`${prefixRoute}/createDB/tes_created_db`);
                expect(response.statusCode).equal(200);
                expect(response.body).deep.equal({ success: true });
            });
            it("failed create db", async () => {
                const response = await req.post(`${prefixRoute}/createDB/tes_created_db`);
                expect(response.statusCode).equal(200);
                expect(response.body).deep.equal({ success: false });
            });
        });
        describe("drop DB", () => {
            it("success drop db", async () => {
                const response = await req.post(`${prefixRoute}/dropDB/tes_created_db`);
                expect(response.statusCode).equal(200);
                expect(response.body).deep.equal({ success: true });
            });
            it("failed drop db", async () => {
                const response = await req.post(`${prefixRoute}/dropDB/tes_created_db`);
                expect(response.statusCode).equal(200);
                expect(response.body).deep.equal({ success: false });
            });
        });
        describe("describe table", () => {
            it("describe table success", async () => {
                const response = await req.get(`${prefixRoute}/desc_table/sqlearn_cs_auto_assess_tes`);
                expect(response.statusCode).equal(200);
                expect(response.body).to.be.an("array").that.contains.something.like({ TABLE_NAME: "mahasiswa" });
            });
            it("describe table error table not found", async () => {
                const response = await req.get(`${prefixRoute}/desc_table/tes_created_db`);
                expect(response.statusCode).equal(200);
                expect(response.body).deep.equal({ success: false });
            });
        });
        describe("select table", () => {
            it("success get table from db", async () => {
                const response = await req.get(`${prefixRoute}/select/auto_assess_tes/mahasiswa`);
                expect(response.statusCode).equal(200);
                expect(response.body).to.be.an("array");
            });
            it("failed get table because table not exist", async () => {
                const response = await req.get(`${prefixRoute}/select/auto_assess_tes/table_not_found`);
                expect(response.statusCode).equal(200);
                expect(response.body).deep.equal({ success: false });
            });
            it("failed get table because db not exist", async () => {
                const response = await req.get(`${prefixRoute}/select/db_not_exist/table_not_found`);
                expect(response.statusCode).equal(200);
                expect(response.body).deep.equal({ success: false });
            });
        });
        describe("assessment", () => {
            it("request only accept select statement", async () => {
                const response = await req.post(`${prefixRoute}/assess/auto_assess_tes`).send({
                    queryMhs: "insert into lala values (1,2,3)",
                    queryKey: "insert into lala values (1,2,3)",
                    threshold: 0.6,
                });
                expect(response.body).to.deep.equal({
                    similarity: -1,
                    success: false,
                    message: "Sistem hanya membatasi query SELECT",
                    isEqual: false,
                });
            });
            it("query mahasiswa and query key below threshold", async () => {
                const response = await req.post(`${prefixRoute}/assess/auto_assess_tes`).send({
                    queryMhs: "select a, b, c from lalal where id=1",
                    queryKey: ["select * from mahasiswa"],
                    threshold: 0.6,
                });
                expect(response.body).to.deep.include({
                    message: "Query yang diinputkan tidak sesuai dengan kriteria soal",
                });
            });
            it("query mahasiswa and query key executed and similarity result 0.9", async () => {
                const response = await req.post(`${prefixRoute}/assess/auto_assess_tes`).send({
                    queryMhs: "select * from mahasiswa",
                    queryKey: ["select * from mahasiswa"],
                    threshold: 0.6,
                });
                expect(response.body).to.deep.include({
                    success: true,
                    message: "Query executed successfully",
                });
                expect(response.body.similarity).to.greaterThanOrEqual(0.9);
            });
        });
    });
    describe("v2 route", () => {
        let prefixRoute = "/api/v2";
        describe("create DB", () => {
            it("success create db", async () => {
                const response = await req.post(`${prefixRoute}/database/create/tes_created_db_v2`);
                expect(response.statusCode).equal(201);
                expect(response.body).to.deep.include({ status: "success" });
                expect(response.body.data).to.deep.include({ message: "database created" });
            });
            it("failed create db", async () => {
                const response = await req.post(`${prefixRoute}/database/create/tes_created_db_v2`);
                expect(response.statusCode).equal(500);
                expect(response.body).to.deep.include({ status: "error", message: "database not created" });
                expect(response.body.data).to.include({ code: "ER_DB_CREATE_EXISTS" });
            });
        });
        describe("drop DB", () => {
            it("success drop db", async () => {
                const response = await req.delete(`${prefixRoute}/database/drop/tes_created_db_v2`);
                expect(response.statusCode).equal(200);
                expect(response.body).to.deep.include({ status: "success" });
                expect(response.body.data).to.deep.include({ message: "database deleted" });
            });
            it("failed drop db", async () => {
                const response = await req.delete(`${prefixRoute}/database/drop/tes_created_db_v2`);
                expect(response.statusCode).equal(500);
                expect(response.body).to.deep.include({ status: "error", message: "database not deleted" });
                expect(response.body.data).to.include({ code: "ER_DB_DROP_EXISTS" });
            });
        });
        describe("describe database", () => {
            it("describe table success", async () => {
                const response = await req.get(`${prefixRoute}/database/desc_table/auto_assess_tes`);
                expect(response.statusCode).equal(200);
                expect(response.body).to.deep.include({ status: "success" });
                expect(response.body.data).to.be.an("array").that.contains.something.like({ TABLE_NAME: "mahasiswa" });
            });
            it("describe table error table not found", async () => {
                const response = await req.get(`${prefixRoute}/database/desc_table/tes_created_db`);
                expect(response.statusCode).equal(500);
                expect(response.body).to.deep.include({ status: "error", message: "desc table failed" });
                expect(response.body.data).to.include({ code: "ER_BAD_DB_ERROR" });
            });
        });
        describe("describe table database detail columnn", () => {
            it("success get detail column from table db", async () => {
                const response = await req.get(`${prefixRoute}/database/describe/auto_assess_tes/mahasiswa`);
                expect(response.statusCode).equal(200);
                expect(response.body).to.deep.include({
                    status: "success",
                    data: ["id_mahasiswa-int(11)", "nama-varchar(100)", "kelas-varchar(10)", "ipk-decimal(10,2)"],
                });
            });
            it("failed get detail column from table db because table not exist", async () => {
                const response = await req.get(`${prefixRoute}/database/describe/auto_assess_tes/not_found`);
                expect(response.statusCode).equal(500);
                expect(response.body).to.deep.include({ status: "error", message: "describe table database failed" });
                expect(response.body.data).to.include({ code: "ER_NO_SUCH_TABLE" });
            });
            it("failed get detail column from table db because DB not exist", async () => {
                const response = await req.get(`${prefixRoute}/database/describe/db_notfound/not_found`);
                expect(response.statusCode).equal(500);
                expect(response.body).to.deep.include({ status: "error", message: "describe table database failed" });
                expect(response.body.data).to.include({ code: "ER_BAD_DB_ERROR" });
            });
        });
        describe("select table", () => {
            it("success get table from db", async () => {
                const response = await req.get(`${prefixRoute}/database/select/auto_assess_tes/mahasiswa`);
                expect(response.statusCode).equal(200);
                expect(response.body).to.deep.include({ status: "success" });
            });
            it("failed get table because table not exist", async () => {
                const response = await req.get(`${prefixRoute}/database/select/auto_assess_tes/table_not_found`);
                expect(response.statusCode).equal(500);
                expect(response.body).to.deep.include({ status: "error", message: "select table failed" });
                expect(response.body.data).to.include({ code: "ER_NO_SUCH_TABLE" });
            });
            it("failed get table because db not exist", async () => {
                const response = await req.get(`${prefixRoute}/database/select/db_not_exist/table_not_found`);
                expect(response.statusCode).equal(500);
                expect(response.body).to.deep.include({ status: "error", message: "select table failed" });
                expect(response.body.data).to.include({ code: "ER_BAD_DB_ERROR" });
            });
        });
        describe("check DB", () => {
            it("success get information database exist", async () => {
                const response = await req.get(`${prefixRoute}/database/check/auto_assess_tes`);
                expect(response.statusCode).equal(200);
                expect(response.body).to.deep.include({ status: "success", message: "database found" });
            });
            it("success get information database exist", async () => {
                const response = await req.get(`${prefixRoute}/database/check/databasenotfound`);
                expect(response.statusCode).equal(404);
                expect(response.body).to.deep.include({ status: "error", message: "database not found" });
            });
        });
        describe("assessment", () => {
            it("request only accept select and insert statement for single or multi key route", async () => {
                const response = await req.post(`${prefixRoute}/assessment`).send({
                    dbList: ["auto_assess_tes"],
                    queryMhs: "update mahasiswa set name = 'lala' where id = 4",
                    queryKey: "update mahasiswa set name = 'lala' where id = 4",
                    threshold: 0.6,
                });
                expect(response.statusCode).equal(400);
                expect(response.body).to.deep.equal({
                    status: "fail",
                    message: "sistem hanya dapat menerima perintah SELECT dan INSERT",
                    data: { similarity: -1, is_equal: false },
                });
            });
            describe("single key", () => {
                it("return error because query input syntax error", async () => {
                    const response = await req.post(`${prefixRoute}/assessment/single_key`).send({
                        dbList: ["auto_assess_tes"],
                        queryMhs: "insert*from mahasiswa",
                        queryKey: "insert into mahasiswa values (1)",
                        threshold: 0.6,
                    });
                    expect(response.statusCode).equal(500);
                    expect(response.body).to.deep.include({
                        status: "error",
                        message: "SyntaxError",
                    });
                });
                it("query mahasiswa and query key below threshold", async () => {
                    const response = await req.post(`${prefixRoute}/assessment/single_key`).send({
                        dbList: ["auto_assess_tes"],
                        queryMhs: "insert into bahh (lala,hehe,aa,bv,ll,acc) values (6,4,1,3,1,3)",
                        queryKey: "insert into mahasiswa values (1)",
                        threshold: 0.6,
                    });
                    expect(response.statusCode).equal(406);
                    expect(response.body).to.deep.include({
                        status: "error",
                        message: "Query yang diinputkan tidak sesuai dengan kriteria soal",
                    });
                    expect(response.body.data.is_equal).equal(false);
                    expect(response.body.data.similarity).lessThan(0.6);
                });
                it("query mahasiswa and query key executed success select statement", async () => {
                    const response = await req.post(`${prefixRoute}/assessment/single_key`).send({
                        dbList: ["sqlearn_cs_auto_assess_tes_45_1_key", "sqlearn_cs_auto_assess_tes_45_1_student"],
                        queryMhs: "select * from mahasiswa",
                        queryKey: "select * from mahasiswa",
                        threshold: 0.6,
                    });
                    expect(response.body.status).equal("success");
                    expect(response.body.data.message).equal("Jawaban benar");
                    expect(response.body.data.is_equal).equal(true);
                    expect(response.body.data.similarity).to.greaterThanOrEqual(0.9);
                    expect(response.body.data.res_query).to.be.an("array");
                });
                it("query mahasiswa and query key executed success but wrong answer", async () => {
                    const response = await req.post(`${prefixRoute}/assessment/single_key`).send({
                        dbList: ["sqlearn_cs_auto_assess_tes_45_1_student", "sqlearn_cs_auto_assess_tes_45_1_key"],
                        queryMhs: "select * from mahasiswa",
                        queryKey: "select nama from mahasiswa limit 1",
                        threshold: 0.1,
                    });
                    expect(response.body.status).equal("success");
                    expect(response.body.data.message).equal("Jawaban salah");
                    expect(response.body.data.is_equal).equal(false);
                    expect(response.body.data.similarity).to.lessThanOrEqual(0.9);
                    expect(response.body.data.res_query).to.be.an("array");
                });
            });
            describe("multi key", () => {
                it("return error because query input syntax error", async () => {
                    const response = await req.post(`${prefixRoute}/assessment/multi_key`).send({
                        dbList: ["auto_assess_tes"],
                        queryMhs: "insert*from mahasiswa",
                        queryKey: [
                            `insert into mahasiswa values ("Sultan", "4H", 3.9)`,
                            `insert into mahasiswa (nama, kelas, ipk) values ("Sultan", "4H", 3.9)`,
                        ],
                        threshold: 0.6,
                    });
                    expect(response.statusCode).equal(500);
                    expect(response.body).to.deep.include({
                        status: "error",
                        message: "SyntaxError",
                    });
                });
                it("return error because db list not 2 element", async () => {
                    const response = await req.post(`${prefixRoute}/assessment/multi_key`).send({
                        dbList: ["auto_assess_tes"],
                        queryMhs: `insert into mahasiswa (nama, kelas, ipk) values ("Sultan", "4H", 3.9)`,
                        queryKey: [
                            `insert into mahasiswa values ("Sultan", "4H", 3.9)`,
                            `insert into mahasiswa (nama, kelas, ipk) values ("Sultan", "4H", 3.9)`,
                        ],
                        threshold: 0.6,
                    });
                    expect(response.statusCode).equal(400);
                    expect(response.body).to.deep.include({
                        status: "error",
                        message: "db list lenght minimal 2",
                    });
                });
                it("return error because db list element not db student or db key", async () => {
                    const response = await req.post(`${prefixRoute}/assessment/multi_key`).send({
                        dbList: ["auto_assess_tes", "sqlearn_cs_auto_assess_tes_42_1_key"],
                        queryMhs: `insert into mahasiswa (nama, kelas, ipk) values ("Sultan", "4H", 3.9)`,
                        queryKey: [
                            `insert into mahasiswa values ("Sultan", "4H", 3.9)`,
                            `insert into mahasiswa (nama, kelas, ipk) values ("Sultan", "4H", 3.9)`,
                        ],
                        threshold: 0.6,
                    });
                    expect(response.statusCode).equal(400);
                    expect(response.body).to.deep.include({
                        status: "error",
                        message: "db student or key null",
                    });
                });
                it("query mahasiswa and query key below threshold", async () => {
                    const response = await req.post(`${prefixRoute}/assessment/multi_key`).send({
                        dbList: ["auto_assess_tes"],
                        queryMhs: "select a, b, c from lalal where id=1",
                        queryKey: ["select * from mahasiswa", "select nama, nim, kelas from mahasiswa"],
                        threshold: 0.6,
                    });
                    expect(response.statusCode).equal(406);
                    expect(response.body).to.deep.include({
                        status: "error",
                        message: "Query yang diinputkan tidak sesuai dengan kriteria soal",
                    });
                    expect(response.body.data.is_equal).equal(false);
                    expect(response.body.data.similarity).lessThan(0.6);
                });
                it("query mahasiswa and query key executed and similarity result 0.9", async () => {
                    const response = await req.post(`${prefixRoute}/assessment/multi_key`).send({
                        dbList: ["sqlearn_cs_auto_assess_tes_45_1_key", "sqlearn_cs_auto_assess_tes_45_1_student"],
                        queryMhs: `insert into mahasiswa (nama, kelas, ipk) values ("Sultan", "4H", 3.9)`,
                        queryKey: [
                            `insert into mahasiswa values ("Sultan", "4H", 3.9)`,
                            `insert into mahasiswa (nama, kelas, ipk) values ("Sultan", "4H", 3.9)`,
                        ],
                        threshold: 0.6,
                    });
                    expect(response.body.status).equal("success");
                    expect(response.body.message).equal(null);
                    expect(response.body.data.is_equal).equal(true);
                    expect(response.body.data.similarity).to.greaterThanOrEqual(0.9);
                    expect(response.body.data.res_query).to.be.an("array");
                });
            });
        });
    });
});
