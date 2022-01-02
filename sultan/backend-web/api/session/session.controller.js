const sessionService = require("./session.service");

module.exports = {
    index: async (req, res) => {
        const { success, message, data } = await sessionService.getAll()

        if (!success) return res.status(500).json({ success, message })

        return res.status(200).json({ success, message, data })
    },

    show: async (req, res) => {
        const { success, message, data } = await sessionService.getOne(req.params.id)

        if (!success) return res.status(500).json({ success, message })

        return res.status(200).json({ success, message, data })
    },

    store: async (req, res) => {
        const { success, message, data } = await sessionService.insert(req.body, req.user)

        if (!success) return res.status(500).json({ success, message })

        return res.status(201).json({ success, message, data })
    },

    answer: async (req, res) => {
        const { success, message, data } = await sessionService.answer(req.params.id, req.params.question, req.body)

        if (!success) return res.status(500).json({ success, message })

        return res.status(201).json({ success, message, data })
    },

    grade: async (req, res) => {
        const { success, message, data } = await sessionService.grade(req.params.id, req.user)

        if (!success) return res.status(500).json({ success, message })

        return res.status(201).json({ success, message, data })
    }
};
