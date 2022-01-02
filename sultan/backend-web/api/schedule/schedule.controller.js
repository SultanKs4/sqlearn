const scheduleService = require("./schedule.service");

module.exports = {
    index: async (req, res) => {
        const { success, message, data } = await scheduleService.getAll(req.user, req.query)

        if (!success) return res.status(500).json({ success, message })

        return res.status(200).json({ success, message, data })
    },

    indexStudents: async (req, res) => {
        const { success, message, data } = await scheduleService.getAllForStudents(req.user)

        if (!success) return res.status(500).json({ success, message })

        return res.status(200).json({ success, message, data })
    },

    indexByClass: async (req, res) => {
        const { success, message, data } = await scheduleService.getAllByClass(req.params.id)

        if (!success) return res.status(500).json({ success, message })

        return res.status(200).json({ success, message, data })
    },


    show: async (req, res) => {
        const { success, message, data } = await scheduleService.getOne(req.params.id)

        if (!success) return res.status(500).json({ success, message })

        return res.status(200).json({ success, message, data })
    },

    store: async (req, res) => {
        const { success, message, data } = await scheduleService.insert(req.body, req.user)

        if (!success) return res.status(500).json({ success, message })

        return res.status(201).json({ success, message, data })
    },

    update: async (req, res) => {
        const { success, message, data } = await scheduleService.update(req.params.id, req.body)

        if (!success) return res.status(500).json({ success, message })

        return res.status(201).json({ success, message, data })
    },

    destroy: async (req, res) => {
        const { success, message } = await scheduleService.destroy(req.params.id)

        if (!success) return res.status(500).json({ success, message })

        return res.status(204).json({ success, message })
    }
};
