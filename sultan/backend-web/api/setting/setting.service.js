const createHttpError = require("http-errors");
const createResponseObject = require("../../lib/createResponseObject");
const errorHandling = require("../../lib/errorHandling");
const { Op } = require("sequelize");
const Setting = require("./setting.model");

async function findAllByType(type) {
    return await Setting.findAll({ where: { type }, order: ["type", "attemps"] });
}

async function thresholdData() {
    return await Setting.findOne({ where: { type: "threshold" } });
}

module.exports = {
    findByType: async (type) => {
        return await findAllByType(type);
    },
    dataThreshold: async () => {
        return await thresholdData();
    },
    getThreshold: async () => {
        try {
            const threshold = await thresholdData();
            return createResponseObject(200, "success", "data treshold berhasil didapatkan", threshold);
        } catch (error) {
            return errorHandling(error);
        }
    },
    updateThreshold: async (value) => {
        try {
            const threshold = await thresholdData();

            threshold.value = value;
            await threshold.save();
            return createResponseObject(200, "success", "data threshold updated", threshold);
        } catch (error) {
            return errorHandling(error);
        }
    },
    getRules: async (type = null) => {
        try {
            let typeClause = { [Op.or]: ["ujian", "latihan"] };
            if (type != null) typeClause = type;
            const rules = await findAllByType(typeClause);
            return createResponseObject(200, "success", "data rules ujian berhasil didapatkan", rules);
        } catch (error) {
            return errorHandling(error);
        }
    },
    addRules: async (attemps, value, type) => {
        try {
            const [rules, created] = await Setting.findOrCreate({ where: { attemps, type }, defaults: { value } });
            if (created) return createResponseObject(201, "success", "data rules ditambahkan", rules);
            else throw createHttpError(409, "data already exist cannot create rules");
        } catch (error) {
            return errorHandling(error);
        }
    },
    updateRules: async (id, attemps, value, type) => {
        try {
            const rules = await Setting.findByPk(id);
            if (!rules) throw createHttpError(404, "data rules not found");

            if (rules.attemps == null) throw createHttpError(400, "cannot update this rules");

            if (rules.attemps == 0 && rules.attemps != attemps)
                throw createHttpError(400, "cannot update default rules attemps");

            const dataExist = await Setting.findOne({ where: { attemps, type } });
            if (dataExist && dataExist.id != rules.id)
                throw createHttpError(409, "data update already exist, cannot update to new data");

            const dataUpdate = { attemps, value, type };

            Object.keys(dataUpdate).forEach((val) => {
                rules[val] = dataUpdate[val];
            });

            await rules.save();

            return createResponseObject(200, "success", "data rules ujian update", rules);
        } catch (error) {
            return errorHandling(error);
        }
    },
    deleteRules: async (id) => {
        try {
            const rules = await Setting.findByPk(id);
            if (!rules) throw createHttpError(404, "data rules not found");

            if (rules.attemps == 0 || rules.attemps == null) throw createHttpError(400, "cannot delete this rules");

            await rules.destroy();
            return createResponseObject(200, "success", "data rules deleted");
        } catch (error) {
            return errorHandling(error);
        }
    },
};
