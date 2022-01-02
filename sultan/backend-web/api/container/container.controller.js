const containerService = require("./container.service");

module.exports = {
    index: async (req, res) => {
        const { success, message, data } = await containerService.getAll()

        if (!success) return res.status(500).json({ success, message })

        return res.status(200).json({ success, message, data })
    },

    show: async (req, res) => {
        const { success, message, data } = await containerService.getOne(req.params.id)

        if (!success) return res.status(500).json({ success, message })

        return res.status(200).json({ success, message, data })
    },

    store: async (req, res) => {
        const { success, message, data } = await containerService.insert(req.body, req.user)

        if (!success) return res.status(500).json({ success, message })

        return res.status(201).json({ success, message, data })
    },

    update: async (req, res) => {
        const { success, message, data } = await containerService.update(req.params.id, req.body)

        if (!success) return res.status(500).json({ success, message })

        return res.status(201).json({ success, message, data })
    },

    addQuestion: async (req, res) => {
        const { success, message } = await containerService.addQuestion(req.params.id, req.body)

        if (!success) return res.status(500).json({ success, message })

        return res.status(201).json({ success, message })
    },

    removeQuestion: async (req, res) => {
        const { success, message } = await containerService.removeQuestion(req.params.id, req.params.question)

        if (!success) return res.status(500).json({ success, message })

        return res.status(200).json({ success, message })
    },

    destroy: async (req, res) => {
        const { success, message } = await containerService.destroy(req.params.id)

        if (!success) return res.status(500).json({ success, message })

        return res.status(204).json({ success, message })
    },

}