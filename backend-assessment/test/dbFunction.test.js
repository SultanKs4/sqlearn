const { describe } = require("mocha");
const { createDb, dropDb, descTable, selectTable } = require("../lib/dbFunction");
const chai = require("chai"),
    expect = chai.expect;

chai.use(require("chai-like"));
chai.use(require("chai-things"));

describe("Dynamic Database Test", () => {
    describe("Create Database Test", () => {
        it("Should return true", async () => {
            const result = await createDb("tes_create_db");
            expect(result).to.deep.include({ message: "database created" });
        });
        it("Should return false (existing db)", async () => {
            try {
                const result = await createDb("tes_create_db");
            } catch (e) {
                expect(e).to.deep.include({
                    message: `ER_DB_CREATE_EXISTS: Can't create database 'tes_create_db'; database exists`,
                });
            }
        });
    });

    describe("Drop Database Test", () => {
        it("Should return true", async () => {
            const result = await dropDb("tes_create_db");
            expect(result).to.deep.include({ message: "database deleted" });
        });
        it("Should return false (non-existing db)", async () => {
            try {
                const result = await dropDb("tes_create_db");
            } catch (e) {
                expect(e).to.deep.include({
                    message: `ER_DB_DROP_EXISTS: Can't drop database 'tes_create_db'; database doesn't exist`,
                });
            }
        });
    });

    describe("Describe Database Test", () => {
        it("Should return Array", async () => {
            const result = await descTable("auto_assess_tes");
            expect(result).to.be.an("array");
        });
        it("Should return Contain Object Like TABLE_NAME", async () => {
            const result = await descTable("auto_assess_tes");
            expect(result).to.be.an("array").that.contains.something.like({ TABLE_NAME: "mahasiswa" });
        });
        it("Should return error (non-existing db)", async () => {
            try {
                const result = await descTable("tes_create_db");
            } catch (e) {
                expect(e).to.be.an("error");
            }
        });
    });

    describe("Select Table Test", () => {
        it("Should return Array", async () => {
            const result = await selectTable("auto_assess_tes", "mahasiswa");
            expect(result).to.be.an("array");
        });

        it("Should return error (non-existing table)", async () => {
            try {
                const result = await selectTable("auto_assess_tes", "there_is_no_table");
            } catch (e) {
                expect(e).to.be.an("error");
            }
        });

        it("Should return error (non-existing db)", async () => {
            try {
                const result = await selectTable("tes_create_db");
            } catch (e) {
                expect(e).to.be.an("error");
            }
        });
    });
});
