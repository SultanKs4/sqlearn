const dbFunctions = require("../../lib/dbFunction");
const createResponseObject = require("../../lib/createResponseObject");

module.exports = {
    createDb: async (dbName) => {
        dbFunctions
            .createDb(dbName)
            .then(() => {
                return createResponseObject(true, "database created");
            })
            .catch(() => {
                return createResponseObject(false, "database not created");
            });
    },
    dropDb: async (dbName) => {
        dbFunctions
            .dropDb(dbName)
            .then(() => {
                return createResponseObject(true, "database deleted");
            })
            .catch(() => {
                return createResponseObject(false, "database not deleted");
            });
    },
};
