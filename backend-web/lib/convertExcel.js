const excelToJson = require("convert-excel-to-json");

const convertExcel = (file) => {
    try {
        const result = excelToJson({
            sourceFile: file,
            header: {
                rows: 2,
            },
            columnToKey: {
                A: "nim",
                B: "name",
            },
        });
        return result;
    } catch (error) {
        console.log(error);
        throw new Error("Failed convert excel");
    }
};

module.exports = convertExcel;
