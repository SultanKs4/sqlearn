const convertToSnakeCase = require("../../lib/convertSnakeCase");
const shortIdGen = require("../../lib/shortIdGen");
const CaseStudy = require("./case-study.model");
const axios = require("axios");
const runSql = require("../../lib/runSql");
const { AUTO_ASSESS_BACKEND } = require("../../config/endpoints");
const User = require("../user/user.model");
const createResponseObject = require("../../lib/createResponseObject");

module.exports = {
    getAll: async () => {
        try {
            const caseStudies = await CaseStudy.findAll({
                include: {
                    model: User,
                    attributes: ["name"],
                },
            });
            return createResponseObject(
                true,
                caseStudies,
                "Data studi kasus berhasil didapatkan"
            );
        } catch (error) {
            return createResponseObject(
                false,
                error,
                "Data studi kasus gagal didapatkan"
            );
        }
    },
    getOne: async (id) => {
        try {
            const caseStudy = await CaseStudy.findByPk(id, {
                include: {
                    model: User,
                    attributes: ["id", "name"],
                },
                raw: true,
            });
            let message = "Data studi kasus kosong";
            if (caseStudy) {
                const resDetail = await axios.get(
                    `${AUTO_ASSESS_BACKEND}/api/v2/desc_table/${caseStudy["db_name"]}`
                );
                caseStudy["tables"] = groupColumnsByTable(resDetail.data);
                message = "Data studi kasus berhasil didapatkan";
            }
            return createResponseObject(true, caseStudy, message);
        } catch (error) {
            console.error(error);
            return createResponseObject(
                false,
                error,
                "Data studi kasus gagal didapatkan"
            );
        }
    },
    getOneDetail: async (id, tableName) => {
        try {
            const caseStudy = await CaseStudy.findByPk(id, {
                raw: true,
            });

            const res = await axios.get(
                `${AUTO_ASSESS_BACKEND}/api/v2/select/${caseStudy["db_name"]}/${tableName}`
            );
            return createResponseObject(
                true,
                res.data,
                "Data studi kasus berhasil didapatkan"
            );
        } catch (error) {
            console.error(error);
            return createResponseObject(
                false,
                error,
                "Data studi kasus gagal didapatkan"
            );
        }
    },
    store: async (name, user, file) => {
        try {
            const userDb = await User.findByPk(user.id);

            let dbName = `${user.username}_${convertToSnakeCase(
                name
            )}_${shortIdGen()}`;
            const newCaseStudies = await CaseStudy.create({
                name,
                db_name: dbName,
                db_path: file.path,
                user_id: user.id,
            });
            const createDbResObj = await axios.post(
                `${AUTO_ASSESS_BACKEND}/api/v2/create/${dbName}`
            );

            const resRunSql = await runSql(dbName, file.path);
            if (!resRunSql)
                throw {
                    data: resRunSql,
                    message: "Import SQL Gagal dilakukan",
                };

            return createResponseObject(
                true,
                newCaseStudies,
                "Data studi kasus berhasil ditambahkan"
            );
        } catch (err) {
            console.log(err);
            return createResponseObject(false, err, "Studi kasus gagal dibuat");
        }
    },
    deleteOne: async (id) => {
        try {
            const caseStudy = await CaseStudy.findByPk(id, {
                raw: true,
            });

            const del = await CaseStudy.destroy({
                where: {
                    id,
                },
            });

            const destroyResObj = await axios.post(
                `${AUTO_ASSESS_BACKEND}/api/v2/drop/${caseStudy["db_name"]}`
            );

            return createResponseObject(
                true,
                destroyResObj.data,
                "Data studi kasus berhasil dihapus"
            );
        } catch (error) {
            console.log(error);
            return createResponseObject(
                false,
                error,
                "Data studi kasus gagal dihapus"
            );
        }
    },
};

function groupColumnsByTable(columns) {
    return columns.reduce((acc, cur) => {
        acc[cur["TABLE_NAME"]] = !acc[cur["TABLE_NAME"]]
            ? (acc[cur["TABLE_NAME"]] = [cur["COLUMN_NAME"]])
            : [...acc[cur["TABLE_NAME"]], cur["COLUMN_NAME"]];

        return acc;
    }, {});
}
