const { describe, it } = require("mocha");
const supertest = require("supertest");
const sequelize = require("../config/database");
const chai = require("chai"),
    expect = chai.expect;

chai.use(require("chai-like"));
chai.use(require("chai-things"));

const app = require("../app");
const path = require("path");

const req = supertest(app);

let tokenDosen = null;
let tokenMahasiswa = null;
let dataCaseStudy = null;

before("generate token", async () => {
    it("generate dosen token", async () => {
        const response = await req.post("/api/login").send({ username: "dosencoba", password: "dosencoba" });
        tokenDosen = response.body.data.token;
    });
    it("generate mahasiswa token", async () => {
        const response = await req.post("/api/login").send({ username: "1741720017", password: "1741720017" });
        tokenMahasiswa = response.body.data.token;
    });
});

describe("case study route", () => {
    let prefix = "/api/casestudies";
    it("need authorization header", async () => {
        const response = await req.get(`${prefix}`);
        expect(response.statusCode).equal(400);
        expect(response.body.status).equal("fail");
        expect(response.body.message).equal("headers authorization not found");
        expect(response.body.data).equal(null);
    });
    it("authorization header malformed", async () => {
        const response = await req.get(`${prefix}`).set("Authorization", `Bearer thisIsNotValidHeader`);
        expect(response.statusCode).equal(400);
        expect(response.body.status).equal("fail");
        expect(response.body.message).equal("jwt malformed");
        expect(response.body.data).equal(null);
    });
    it("authorization header invalid signature", async () => {
        const response = await req
            .get(`${prefix}`)
            .set(
                "Authorization",
                `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`
            );
        expect(response.statusCode).equal(400);
        expect(response.body.status).equal("fail");
        expect(response.body.message).equal("invalid signature");
        expect(response.body.data).equal(null);
    });
    it("mahasiswa can't access because unauthorized", async () => {
        const response = await req.get(`${prefix}`).set("Authorization", `Bearer ${tokenMahasiswa}`);
        expect(response.statusCode).equal(403);
        expect(response.body.status).equal("error");
        expect(response.body.message).equal("roles unauthorized");
        expect(response.body.data).equal(null);
    });
    it("return all data case studies", async () => {
        const response = await req.get(`${prefix}/`).set("Authorization", `Bearer ${tokenDosen}`);
        expect(response.statusCode).equal(200);
        expect(response.body.status).equal("success");
        expect(response.body.message).equal("Data studi kasus berhasil didapatkan");
        expect(response.body.data).to.be.an("array");
    });
    describe("get detail list table", () => {
        it("return fail validation params must be number", async () => {
            const response = await req.get(`${prefix}/notnumber`).set("Authorization", `Bearer ${tokenDosen}`);
            expect(response.statusCode).equal(400);
            expect(response.body.status).equal("fail");
            expect(response.body.message).equal("validation failed");
        });
        it("return error data not found", async () => {
            const response = await req.get(`${prefix}/99999`).set("Authorization", `Bearer ${tokenDosen}`);
            expect(response.statusCode).equal(404);
            expect(response.body.status).equal("error");
            expect(response.body.message).equal("studi kasus tidak dapat ditemukan");
        });
        it("return specific data case studies", async () => {
            const response = await req.get(`${prefix}/2`).set("Authorization", `Bearer ${tokenDosen}`);
            expect(response.statusCode).equal(200);
            expect(response.body.status).equal("success");
            expect(response.body.message).equal("Data studi kasus berhasil didapatkan");
            expect(response.body.data).include.keys("tables");
        });
    });
    describe("get detail list data per table", () => {
        it("return fail validation params must be number", async () => {
            const response = await req.get(`${prefix}/sd/data/dasd`).set("Authorization", `Bearer ${tokenDosen}`);
            expect(response.statusCode).equal(400);
            expect(response.body.status).equal("fail");
            expect(response.body.message).equal("validation failed");
        });
        it("return error data not found", async () => {
            const response = await req.get(`${prefix}/999/data/notfound`).set("Authorization", `Bearer ${tokenDosen}`);
            expect(response.statusCode).equal(404);
            expect(response.body.status).equal("error");
            expect(response.body.message).equal("studi kasus tidak dapat ditemukan");
        });
        it("return error table not found", async () => {
            const response = await req
                .get(`${prefix}/2/data/tablenotfound`)
                .set("Authorization", `Bearer ${tokenDosen}`);
            expect(response.statusCode).equal(500);
            expect(response.body.status).equal("error");
            expect(response.body.message).equal("select table failed");
            expect(response.body.data).include({ code: "ER_NO_SUCH_TABLE" });
        });
        it("return specific data case studies", async () => {
            const response = await req.get(`${prefix}/2/data/mahasiswa`).set("Authorization", `Bearer ${tokenDosen}`);
            expect(response.statusCode).equal(200);
            expect(response.body.status).equal("success");
            expect(response.body.message).equal("Data studi kasus berhasil didapatkan");
            expect(response.body.data).to.be.an("array");
        });
    });
    describe("post data case study", () => {
        it("return fail validation body must contain name", async () => {
            const response = await req.post(`${prefix}/`).set("Authorization", `Bearer ${tokenDosen}`);
            expect(response.statusCode).equal(400);
            expect(response.body.status).equal("fail");
            expect(response.body.message).equal("validation failed");
            expect(response.body.data.name.msg).equal("cannot null");
        });
        it("return format not supported because no file attach", async () => {
            const response = await req
                .post(`${prefix}/`)
                .set("Authorization", `Bearer ${tokenDosen}`)
                .send({ name: "aa" });
            expect(response.statusCode).equal(400);
            expect(response.body.status).equal("fail");
            expect(response.body.message).equal("Format file tidak didukung");
        });
        it("return format not supported because file attach but not supported format", async () => {
            const response = await req
                .post(`${prefix}/`)
                .set("Authorization", `Bearer ${tokenDosen}`)
                .field("name", "aa")
                .attach("sql", path.resolve(__dirname, "../static/daftar_mahasiswa.xlsx"));
            expect(response.statusCode).equal(400);
            expect(response.body.status).equal("fail");
            expect(response.body.message).equal("Format file tidak didukung");
        });
        it("success post new data case study", async () => {
            const response = await req
                .post(`${prefix}/`)
                .set("Authorization", `Bearer ${tokenDosen}`)
                .field("name", "study case test")
                .attach("sql", path.resolve(__dirname, "../seeder/sqlearn_cs_auto_assess_tes.sql"));
            expect(response.statusCode).equal(201);
            expect(response.body.status).equal("success");
            expect(response.body.message).equal("Data studi kasus berhasil ditambahkan");
            expect(response.body.data.name).equal("study case test");
            dataCaseStudy = response.body.data;
        });
    });
    describe("delete data case study newly created", async () => {
        it("return fail validation params must be number", async () => {
            const response = await req.delete(`${prefix}/aa`).set("Authorization", `Bearer ${tokenDosen}`);
            expect(response.statusCode).equal(400);
            expect(response.body.status).equal("fail");
            expect(response.body.message).equal("validation failed");
            expect(response.body.data.id.msg).equal("must be number");
        });
        it("return error because data not found for id given", async () => {
            const response = await req.delete(`${prefix}/999`).set("Authorization", `Bearer ${tokenDosen}`);
            expect(response.statusCode).equal(404);
            expect(response.body.status).equal("error");
            expect(response.body.message).equal("studi kasus tidak dapat ditemukan");
        });
        it("success delete data case study", async () => {
            const response = await req
                .delete(`${prefix}/${dataCaseStudy.id}`)
                .set("Authorization", `Bearer ${tokenDosen}`);
            expect(response.statusCode).equal(200);
            expect(response.body.status).equal("success");
            expect(response.body.message).equal("Data studi kasus berhasil dihapus");
        });
    });
});

after("close connection", async () => {
    await sequelize.close();
});
