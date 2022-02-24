const createResponseObject = require("../../lib/createResponseObject");
const classService = require("./class.service");
const ExcelJS = require("exceljs");

module.exports = {
    index: async (req, res) => {
        const resObj = await classService.getAll(req.user);

        if (resObj.status == "error") return res.status(500).json(resObj);

        return res.status(200).json(resObj);
    },

    show: async (req, res) => {
        const resObj = await classService.getOne(req.params.id);

        if (resObj.status == "error") return res.status(500).json(resObj);

        return res.status(200).json(resObj);
    },

    store: async (req, res) => {
        const resObj = await classService.insert(req.body, req.user);

        if (resObj.status == "error") return res.status(500).json(resObj);

        return res.status(201).json(resObj);
    },

    upload: async (req, res) => {
        if (!req.file) return res.status(400).json(createResponseObject("error", "Format file tidak disupport"));

        const resObj = await classService.convertExcel(req.body, req.user, req.file.path);

        if (resObj.status == "error") return res.status(500).json(resObj);

        return res.status(201).json(resObj);
    },

    update: async (req, res) => {
        const resObj = await classService.update(req.params.id, req.body, req.user);

        if (resObj.status == "error") return res.status(500).json(resObj);

        return res.status(200).json(resObj);
    },

    addStudent: async (req, res) => {
        const resObj = await classService.addStudent(req.params.id, req.body.students);

        if (resObj.status == "error") return res.status(500).json(resObj);

        return res.status(201).json(resObj);
    },

    removeStudent: async (req, res) => {
        const resObj = await classService.removeStudent(req.params.id, req.params.mhsid);

        if (resObj.status == "error") return res.status(500).json(resObj);

        return res.status(200).json(resObj);
    },

    destroy: async (req, res) => {
        const resObj = await classService.destroy(req.params.id);

        if (resObj.status == "error") return res.status(500).json(resObj);

        return res.status(200).json(resObj);
    },

    generateExcel: async (req, res) => {
        const className = req.params.name;
        let workbook = new ExcelJS.Workbook();
        let worksheet = workbook.addWorksheet("Daftar Mahasiswa");

        worksheet.mergeCells("A1:B1");

        const header = worksheet.getCell("A1");
        header.value = `Daftar Mahasiswa Kelas ${className}`;
        header.font = {
            bold: true,
        };
        header.alignment = {
            vertical: "middle",
            horizontal: "center",
        };

        const secondRow = worksheet.getRow(2);
        secondRow.values = ["NIM", "Nama"];
        secondRow.font = {
            bold: true,
        };

        worksheet.columns = [
            { key: "nim", width: 15 },
            { key: "nama", width: 32 },
        ];

        // Add Array Rows
        worksheet.addRows([
            {
                nim: "20417....",
                nama: "John Doe",
            },
            {
                nim: "NIM mahasiswa",
                nama: "Nama mahasiswa",
            },
        ]);

        // res is a Stream object
        res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");

        res.setHeader("Content-Disposition", "attachment; filename=" + className + ".xlsx");

        return workbook.xlsx.write(res).then(function () {
            res.status(200).end();
        });
    },
};
