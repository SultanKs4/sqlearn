const studentService = require("./student.service")

module.exports = {
    index: async (req, res) => {
        const { success, message, data } = await studentService.getAll()

        if (!success) return res.status(500).json({ success, message })

        return res.status(200).json({ success, message, data })
    },
    indexExclude: async (req, res) => {
        const { success, message, data } = await studentService.getAllExclude(req.params.class)

        if (!success) return res.status(500).json({ success, message })

        return res.status(200).json({ success, message, data })
    },
    show: async (req, res) => {
        const { success, message, data } = await studentService.getOne(req.params.id)

        if (!success) return res.status(500).json({ success, message })

        return res.status(200).json({ success, message, data })
    },
    store: async (req, res) => {
        const { success, message, data } = await studentService.insert(req.body)

        if (!success) return res.status(500).json({ success, message })

        return res.status(201).json({ success, message, data })
    },
    authenticate: async (req, res) => {
        const { success, message, data } = await studentService.authenticate(req.body)

        // if (!success) return res.status(500).json({ success, message })

        return res.status(201).json({ success, message, data })
    },
    update: async (req, res) => {
        const { success, message, data } = await studentService.update(req.params.id, req.body)

        if (!success) return res.status(500).json({ success, message })

        return res.status(201).json({ success, message, data })
    },
    destroy: async (req, res) => {
        const { success, message } = await studentService.destroy(req.params.id)

        if (!success) return res.status(500).json({ success, message })

        return res.status(201).json({ success, message })
    }
}