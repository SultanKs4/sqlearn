const { describe, it } = require("mocha");
const supertest = require("supertest");
const chai = require("chai"),
    expect = chai.expect;

chai.use(require("chai-like"));
chai.use(require("chai-things"));

const app = require("../app");
const sequelize = require("../config/database");

const req = supertest(app);

describe("route general app", () => {
    it("return hello from index route", async () => {
        const response = await req.get("/");
        expect(response.statusCode).equal(200);
        expect(response.text).equal("Hello");
    });
    it("return current timestamp", async () => {
        const response = await req.get("/api/current_timestamps");
        expect(response.statusCode).equal(200);
        expect(response.text).equal(`"${new Date().toLocaleString()}"`);
    });
    it("return image based on filename", async () => {
        const response = await req.get("/images/answer_pic-1623901614402.png");
        expect(response.statusCode).equal(200);
        expect(response.type).equal("image/png");
    });
    it("return static excel template", async () => {
        const response = await req.get("/static/daftar_mahasiswa.xlsx");
        expect(response.statusCode).equal(200);
        expect(response.type).equal("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    });
    it("return data login", async () => {
        const response = await req.post("/api/login").send({ username: "dosencoba", password: "dosencoba" });
        expect(response.statusCode).equal(200);
    });
});

after("close connection", async () => {
    await sequelize.close();
});
