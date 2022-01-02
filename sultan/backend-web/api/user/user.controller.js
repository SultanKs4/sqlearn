const userService = require("./user.service");

module.exports = {
    index: async (req, res) => {
        const { success, message, data } = await userService.getAll()

        if (!success) return res.status(500).json({ success, message })

        return res.status(200).json({ success, message, data })
    },

    show: async (req, res) => {
        const { success, message, data } = await userService.getOne(req.params.id)

        if (!success) return res.status(500).json({ success, message })

        return res.status(200).json({ success, message, data })
    },

    store: async (req, res) => {
        const { success, message, data } = await userService.insert(req.body)

        if (!success) return res.status(500).json({ success, message })

        return res.status(201).json({ success, message, data })
    },

    authenticate: async (req, res) => {
        const { success, message, data } = await userService.authenticate(req.body)

        // if (!success) return res.status(500).json({ success, message })

        return res.status(201).json({ success, message, data })
    },

    update: async (req, res) => {
        const { success, message, data } = await userService.update(req.params.id, req.body)

        if (!success) return res.status(500).json({ success, message })

        return res.status(201).json({ success, message, data })
    },

    destroy: async (req, res) => {
        const { success, message } = await userService.destroy(req.params.id)

        if (!success) return res.status(500).json({ success, message })

        return res.status(204).json({ success, message })
    }
};
