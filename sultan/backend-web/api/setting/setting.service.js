const Setting = require("./setting.model");

module.exports = {
    getThreshold: async () => {
        try {
            const threshold = await Setting.findOne({
                where: {
                    key_tag: "threshold"
                },
                raw: true
            })
            return threshold.tag_1
        } catch (error) {
            throw new Error(error)
        }
    },
    updateThreshold: async (data) => {
        try {
            const threshold = await Setting.findOne({
                where: {
                    key_tag: "threshold"
                },
            })

            threshold.tag_1 = data
            await threshold.save()

        } catch (error) {
            throw new Error(error)
        }
    }
}