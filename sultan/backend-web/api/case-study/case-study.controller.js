const createResponseObject = require("../../lib/createResponseObject");
const caseStudyService = require("./case-study.service");

module.exports = {
    index: async (req, res) => {
        const { success, message, data } = await caseStudyService.getAll()

        if (!success) return res.status(500).json({ success, message })

        return res.status(200).json({ success, message, data })
    },
    show: async (req, res) => {
        const { success, message, data } = await caseStudyService.getOne(req.params.id)

        if (!success) return res.status(500).json({ success, message })

        return res.status(200).json({ success, message, data })
    },
    showTable: async (req, res) => {
        const { success, message, data } = await caseStudyService.getOneDetail(req.params.id, req.params.tablename)

        if (!success) return res.status(500).json({ success, message })

        return res.status(200).json({ success, message, data })
    },
    store: async (req, res) => {
        const { success, message, data } = await caseStudyService.insert(req.body, req.user)

        if (!success) return res.status(500).json({ success, message })

        return res.status(201).json({ success, message, data })
    },
    upload: async (req, res) => {
        if (!req.file) return res.status(400).json(createResponseObject(false, "Format file tidak disupport"))

        caseStudyService.insertSQL(req.params.id, req.body, req.user, req.file)
            .then(({ success, message }) => {
                if (!success) return res.status(500).json({ success, message })

                return res.status(200).json({ success, message })
            })
            .catch(({ success, message }) => {
                return res.status(500).json({ success, message })
            })
    },
    destroy: async (req, res) => {
        const { success, message, data } = await caseStudyService.deleteOne(req.params.id)

        if (!success) return res.status(500).json({ success, message })

        return res.status(201).json({ success, message, data })
    }
};
