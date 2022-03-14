const { describe, it } = require("mocha");
const supertest = require("supertest");
const chai = require("chai"),
    expect = chai.expect;

chai.use(require("chai-like"));
chai.use(require("chai-things"));

const app = require("../app");

const req = supertest(app);

describe("route general app", () => {
    it("return hello from index route", async () => {
        const response = await req.get("/");
        expect(response.statusCode).equal(200);
        expect(response.text).equal("Hello");
    });
});
