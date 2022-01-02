const createResponseObject = require("../../lib/createResponseObject");
const questionService = require("./question.service");

module.exports = {
    index: async (req, res) => {
        const { success, message, data } = await questionService.getAll(req.query)

        if (!success) return res.status(500).json({ success, message })

        return res.status(200).json({ success, message, data })
    },
    indexExclude: async (req, res) => {
        const { success, message, data } = await questionService.getAllExclude(req.params.container, req.query)

        if (!success) return res.status(500).json({ success, message })

        return res.status(200).json({ success, message, data })
    },
    show: async (req, res) => {
        const { success, message, data } = await questionService.getOne(req.params.id)

        if (!success) return res.status(500).json({ success, message })

        return res.status(200).json({ success, message, data })
    },
    store: async (req, res) => {
        console.log(req.body)
        if (!req.file) return res.status(400).json(createResponseObject(false, "Format file tidak disupport"))
        const { success, message, data } = await questionService.insert(req.body, req.file.filename, req.user)

        if (!success) return res.status(500).json({ success, message })

        return res.status(201).json({ success, message, data })
    },
    destroy: async (req, res) => {
        const { success, message, data } = await questionService.deleteOne(req.params.id)

        if (!success) return res.status(500).json({ success, message })

        return res.status(201).json({ success, message, data })
    }
};
