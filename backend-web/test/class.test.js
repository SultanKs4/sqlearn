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
let tokenAdmin = null;

before("generate token", async () => {
    it("generate dosen token", async () => {
        const response = await req.post("/api/login").send({ username: "dosencoba", password: "dosencoba" });
        tokenDosen = response.body.data.token;
    });
    it("generate mahasiswa token", async () => {
        const response = await req.post("/api/login").send({ username: "1741720017", password: "1741720017" });
        tokenMahasiswa = response.body.data.token;
    });
    it("generate admin token", async () => {
        const response = await req.post("/api/login").send({ username: "admincoba2", password: "admincoba2" });
        tokenAdmin = response.body.data.token;
    });
});

describe("class route", () => {
    let prefix = "/api/classes";
    describe("get all", () => {
        it("success get all as mahasiswa", async () => {
            const response = await req.get(`${prefix}`).set("Authorization", `Bearer ${tokenMahasiswa}`);
            expect(response.statusCode).equal(200);
            expect(response.body.status).equal("success");
            expect(response.body.message).equal("Data kelas berhasil didapatkan");
            expect(response.body.data).to.be.an("array");
        });
        it("success get all as dosen", async () => {
            const response = await req.get(`${prefix}`).set("Authorization", `Bearer ${tokenDosen}`);
            expect(response.statusCode).equal(200);
            expect(response.body.status).equal("success");
            expect(response.body.message).equal("Data kelas berhasil didapatkan");
            expect(response.body.data).to.be.an("array");
        });
        it("error get all as admin", async () => {
            const response = await req.get(`${prefix}`).set("Authorization", `Bearer ${tokenAdmin}`);
            expect(response.statusCode).equal(403);
            expect(response.body.status).equal("error");
            expect(response.body.message).equal("roles unauthorized");
            expect(response.body.data).equal(null);
        });
    });
    describe("get one detail", () => {
        it("error validation", async () => {
            const response = await req.get(`${prefix}/aa`).set("Authorization", `Bearer ${tokenDosen}`);
            expect(response.statusCode).equal(400);
            expect(response.body.status).equal("fail");
            expect(response.body.message).equal("validation failed");
            expect(response.body.data).to.deep.include({
                id: { value: "aa", msg: "must be number", param: "id", location: "params" },
            });
        });
        it("error data not found", async () => {
            const response = await req.get(`${prefix}/555555`).set("Authorization", `Bearer ${tokenDosen}`);
            expect(response.statusCode).equal(404);
            expect(response.body.status).equal("error");
            expect(response.body.message).equal("data class not found");
            expect(response.body.data).equal(null);
        });
        it("success get detail data class", async () => {
            const response = await req.get(`${prefix}/1`).set("Authorization", `Bearer ${tokenDosen}`);
            expect(response.statusCode).equal(200);
            expect(response.body.status).equal("success");
            expect(response.body.message).equal("Data studi kasus berhasil didapatkan");
            expect(response.body.data).to.includes({ id: 1, name: "TI-4C-2021" });
        });
    });
});

after("close connection", async () => {
    await sequelize.close();
});
