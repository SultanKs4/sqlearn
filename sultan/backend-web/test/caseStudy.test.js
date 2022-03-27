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
            const response = await req.get(`${prefix}/99999`).set("Authorization", `Bearer ${tokenDosen}`);
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
    });
});

after("close connection", async () => {
    await sequelize.close();
});
