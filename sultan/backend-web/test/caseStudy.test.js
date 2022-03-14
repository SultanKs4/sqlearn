const { describe, it } = require("mocha");
const supertest = require("supertest");
const chai = require("chai"),
    expect = chai.expect;

chai.use(require("chai-like"));
chai.use(require("chai-things"));

const app = require("../app");

const req = supertest(app);

// describe("case study route", () => {
//     let prefix = "/api/casestudies";
//     it("return all data", async () => {
//         const response = await req.get(`${prefix}/`).set("Authorization", `Bearer ${token}`);
//         expect(response.statusCode).equal(200);
//     });
// });
