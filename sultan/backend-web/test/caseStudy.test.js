const { describe, it } = require("mocha");
const supertest = require("supertest");
const sequelize = require("../config/database");
const chai = require("chai"),
    expect = chai.expect;

chai.use(require("chai-like"));
chai.use(require("chai-things"));

const app = require("../app");

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
    // it("return specific data case studies", async () => {
    //     const response = await req.get(`${prefix}/2`).set("Authorization", `Bearer ${tokenDosen}`);
    //     expect(response.statusCode).equal(200);
    //     expect(response.body.status).equal("success");
    //     expect(response.body.message).equal("Data studi kasus berhasil didapatkan");
    //     expect(response.body.data).to.be.an("array");
    // });
});

after("close connection", async () => {
    await sequelize.close();
});
