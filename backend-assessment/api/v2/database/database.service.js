const dbFunctions = require("../../../lib/dbFunction");
const responseObj = require("../../../lib/responseObject");

module.exports = {
    createDb: async (dbname) => {
        try {
            return responseObj(201, "success", await dbFunctions.createDb(dbname));
        } catch (error) {
            return responseObj(500, "error", error, "database not created");
        }
    },
    dropDb: async (dbname) => {
        try {
            return responseObj(200, "success", await dbFunctions.dropDb(dbname));
        } catch (error) {
            return responseObj(500, "error", error, "database not deleted");
        }
    },
    descTable: async (dbname) => {
        try {
            return responseObj(200, "success", await dbFunctions.descTable(dbname));
        } catch (error) {
            return responseObj(500, "error", error, "desc table failed");
        }
    },
    selectTable: async (dbname, table) => {
        try {
            return responseObj(200, "success", await dbFunctions.selectTable(dbname, table));
        } catch (error) {
            return responseObj(500, "error", error, "select table failed");
        }
    },
};
