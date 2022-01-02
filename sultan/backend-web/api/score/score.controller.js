const scoreService = require("./score.service");

module.exports = {
    indexStudents: async (req, res) => {
        const { success, message, data } = await scoreService.getAllByStudent(req.user, req.query.kelas)

        if (!success) return res.status(500).json({ success, message })

        return res.status(200).json({ success, message, data })
    },

    indexDosen: async (req, res) => {
        const { success, message, data } = await scoreService.getAllByDosen(req.params.kelas, req.params.jadwal)

        if (!success) return res.status(500).json({ success, message })

        return res.status(200).json({ success, message, data })
    },

    show: async (req, res) => {
        const { success, message, data } = await scoreService.getOne(req.params.mhs, req.params.jadwal)

        if (!success) return res.status(500).json({ success, message })

        return res.status(200).json({ success, message, data })
    },

    store: async (req, res) => {
        const { success, message, data } = await scoreService.insert(req.body)

        if (!success) return res.status(500).json({ success, message })

        return res.status(201).json({ success, message, data })
    },

    update: async (req, res) => {
        const { success, message, data } = await scoreService.update(req.params.id, req.body)

        if (!success) return res.status(500).json({ success, message })

        return res.status(201).json({ success, message, data })
    },

    destroy: async (req, res) => {
        const { success, message } = await scoreService.destroy(req.params.id)

        if (!success) return res.status(500).json({ success, message })

        return res.status(204).json({ success, message })
    }
};
