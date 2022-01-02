const createResponseObject = require("../../lib/createResponseObject");
const classService = require("./class.service");
const ExcelJS = require('exceljs');

module.exports = {
    index: async (req, res) => {
        const { success, message, data } = await classService.getAll(req.user)

        if (!success) return res.status(500).json({ success, message })

        return res.status(200).json({ success, message, data })
    },

    indexStudents: async (req, res) => {
        const { success, message, data } = await classService.getAllByStudents(req.user)

        if (!success) return res.status(500).json({ success, message })

        return res.status(200).json({ success, message, data })
    },

    generateExcel: async (req, res) => {
        const className = req.params.name
        let workbook = new ExcelJS.Workbook();
        let worksheet = workbook.addWorksheet("Daftar Mahasiswa");

        worksheet.mergeCells('A1:B1');

        const header = worksheet.getCell('A1');
        header.value = `Daftar Mahasiswa Kelas ${className}`
        header.font = {
            bold: true
        }
        header.alignment = {
            vertical: "middle",
            horizontal: "center"
        }

        const secondRow = worksheet.getRow(2)
        secondRow.values = ['NIM', 'Nama'];
        secondRow.font = {
            bold: true
        }

        worksheet.columns = [
            { key: "nim", width: 15 },
            { key: "nama", width: 32 }
        ];

        // Add Array Rows
        worksheet.addRows([
            {
                nim: "17417....",
                nama: "John Doe"
            },
            {
                nim: "NIM mahasiswa",
                nama: "Nama mahasiswa"
            }
        ]);

        // res is a Stream object
        res.setHeader(
            "Content-Type",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        );

        res.setHeader(
            "Content-Disposition",
            "attachment; filename=" + className + ".xlsx"
        );

        return workbook.xlsx.write(res).then(function () {
            res.status(200).end();
        });
    },

    show: async (req, res) => {
        const { success, message, data } = await classService.getOne(req.params.id)

        if (!success) return res.status(500).json({ success, message })

        return res.status(200).json({ success, message, data })
    },

    store: async (req, res) => {
        const { success, message, data } = await classService.insert(req.body, req.user)

        if (!success) return res.status(500).json({ success, message })

        return res.status(201).json({ success, message, data })
    },

    upload: async (req, res) => {
        if (!req.file) return res.status(200).json(createResponseObject(false, "Format file tidak disupport"))

        const { success, message } = await classService.convertExcel(req.body, req.user, req.file.path)

        if (!success) return res.status(200).json({ success, message })

        return res.status(201).json({ success, message })
    },

    update: async (req, res) => {
        const { success, message, data } = await classService.update(req.params.id, req.body)

        if (!success) return res.status(500).json({ success, message })

        return res.status(201).json({ success, message, data })
    },

    addStudent: async (req, res) => {
        const { success, message } = await classService.addStudent(req.params.id, req.body.students)

        if (!success) return res.status(500).json({ success, message })

        return res.status(201).json({ success, message })
    },

    removeStudent: async (req, res) => {
        const { success, message } = await classService.removeStudent(req.params.id, req.params.mhsid)

        if (!success) return res.status(500).json({ success, message })

        return res.status(200).json({ success, message })
    },

    destroy: async (req, res) => {
        const { success, message } = await classService.destroy(req.params.id)

        if (!success) return res.status(500).json({ success, message })

        return res.status(204).json({ success, message })
    }
};
