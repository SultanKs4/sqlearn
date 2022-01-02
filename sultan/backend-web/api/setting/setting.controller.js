const settingService = require("./setting.service");

module.exports = {
    threshold: async (req, res) => {
        const threshold = await settingService.getThreshold()
        return res.json(threshold)
    },
    thresholdUpdate: async (req, res) => {
        const threshold = req.body.threshold
        await settingService.updateThreshold(threshold)

        return res.json(threshold)
    }
}