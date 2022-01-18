const dbFunctions = require("../../../lib/dbFunction");
const responseObj = require("../../../lib/responseObject");

module.exports = {
    createDb: async (dbname) => {
        try {
            return responseObj("success", await dbFunctions.createDb(dbname));
        } catch (error) {
            return responseObj("error", error, "database not created");
        }
    },
    dropDb: async (dbname) => {
        try {
            return responseObj("success", await dbFunctions.dropDb(dbname));
        } catch (error) {
            return responseObj("error", error, "database not deleted");
        }
    },
    descTable: async (dbname) => {
        try {
            return responseObj("success", await dbFunctions.descTable(dbname));
        } catch (error) {
            return responseObj("error", error, "desc table failed");
        }
    },
    selectTable: async (dbname, table) => {
        try {
            return responseObj("success", await dbFunctions.selectTable(dbname, table));
        } catch (error) {
            return responseObj("error", error, "select table failed");
        }
    },
};
