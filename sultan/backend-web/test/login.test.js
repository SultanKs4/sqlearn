const { describe, it } = require("mocha");
const supertest = require("supertest");
const sequelize = require("../config/database");
const chai = require("chai"),
    expect = chai.expect;

chai.use(require("chai-like"));
chai.use(require("chai-things"));

const app = require("../app");

const req = supertest(app);

describe("login route", () => {
    it("return fail validation failed because username and password not provided", async () => {
        const response = await req.post("/api/login");
        expect(response.statusCode).equal(400);
        expect(response.body.status).equal("fail");
        expect(response.body.message).equal("validation failed");
        expect(response.body.data).to.deep.equal({
            username: {
                msg: "username cannot empty",
                param: "username",
                location: "body",
            },
            password: {
                msg: "password cannot empty",
                param: "password",
                location: "body",
            },
        });
    });

    it("return error because username not found", async () => {
        const response = await req
            .post("/api/login")
            .send({ username: "312674671246712", password: "randompasswordnotfound1234" });
        expect(response.statusCode).equal(404);
        expect(response.body.status).equal("error");
        expect(response.body.message).equal("username not found");
        expect(response.body.data).equal(null);
    });

    it("return error because username and password combination not match", async () => {
        const response = await req
            .post("/api/login")
            .send({ username: "1741710102", password: "randompasswordnotfound1234" });
        expect(response.statusCode).equal(401);
        expect(response.body.status).equal("error");
        expect(response.body.message).equal("username and password combination not match");
        expect(response.body.data).equal(null);
    });

    it("return success login as mahasiswa with data user and token", async () => {
        const response = await req.post("/api/login").send({ username: "1741720017", password: "1741720017" });
        expect(response.statusCode).equal(200);
        expect(response.body.status).equal("success");
        expect(response.body.message).equal("login success");
        expect(response.body.data).include.keys("token", "user");
        expect(response.body.data.user.role).equal("mahasiswa");
    });

    it("return success login as dosen with data user and token", async () => {
        const response = await req.post("/api/login").send({ username: "dosencoba", password: "dosencoba" });
        expect(response.statusCode).equal(200);
        expect(response.body.status).equal("success");
        expect(response.body.message).equal("login success");
        expect(response.body.data).include.keys("token", "user");
        expect(response.body.data.user.role).equal("dosen");
    });

    it("return success login as admin with data user and token", async () => {
        const response = await req.post("/api/login").send({ username: "admincoba2", password: "admincoba2" });
        expect(response.statusCode).equal(200);
        expect(response.body.status).equal("success");
        expect(response.body.message).equal("login success");
        expect(response.body.data).include.keys("token", "user");
        expect(response.body.data.user.role).equal("admin");
    });
});
