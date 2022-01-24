const convertToSnakeCase = require("../../lib/convertSnakeCase");
const shortIdGen = require("../../lib/shortIdGen");
const CaseStudy = require("./case-study.model");
const axios = require("axios");
const runSql = require("../../lib/runSql");
const { AUTO_ASSESS_BACKEND } = require("../../config/endpoints");
const User = require("../user/user.model");
const createResponseObject = require("../../lib/createResponseObject");
const deleteFile = require("../../lib/deleteFile");
const path = require("path");

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
                "success",
                "Data studi kasus berhasil didapatkan",
                caseStudies
            );
        } catch (error) {
            return createResponseObject(
                "error",
                "Data studi kasus gagal didapatkan",
                error.message ? error.message : error
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
            if (caseStudy) {
                const resDetail = await axios.get(
                    `${AUTO_ASSESS_BACKEND}/api/v2/database/desc_table/${caseStudy["db_name"]}`
                );
                caseStudy["tables"] = groupColumnsByTable(resDetail.data.data);
                return createResponseObject(
                    "success",
                    "Data studi kasus berhasil didapatkan",
                    caseStudy
                );
            } else {
                throw caseStudy;
            }
        } catch (error) {
            console.error(error);
            return createResponseObject(
                "error",
                "Data studi kasus gagal didapatkan",
                error.message ? error.message : error
            );
        }
    },
    getOneDetail: async (id, tableName) => {
        try {
            const caseStudy = await CaseStudy.findByPk(id, {
                raw: true,
            });

            if (!caseStudy)
                throw new Error("studi kasus tidak dapat ditemukan");

            const res = await axios.get(
                `${AUTO_ASSESS_BACKEND}/api/v2/database/select/${caseStudy["db_name"]}/${tableName}`
            );
            return createResponseObject(
                "success",
                "Data studi kasus berhasil didapatkan",
                res.data.data
            );
        } catch (error) {
            console.error(error);
            return createResponseObject(
                "error",
                "Data studi kasus gagal didapatkan",
                error.message ? error.message : error
            );
        }
    },
    store: async (name, user, file) => {
        try {
            const userDb = await User.findByPk(user.id);
            if (!userDb) throw new Error("user tidak dapat ditemukan");

            let dbName = `sqlearn_cs_${user.username}_${convertToSnakeCase(
                name
            )}_${shortIdGen()}`;
            const newCaseStudies = await CaseStudy.create({
                name,
                db_name: dbName,
                db_file: file.filename,
                user_id: user.id,
            });

            await axios.post(
                `${AUTO_ASSESS_BACKEND}/api/v2/database/create/${dbName}`
            );

            const resRunSql = await runSql(dbName, file.path);
            if (!resRunSql)
                throw {
                    data: resRunSql,
                    message: "Import SQL Gagal dilakukan",
                };

            return createResponseObject(
                "success",
                "Data studi kasus berhasil ditambahkan",
                newCaseStudies
            );
        } catch (err) {
            console.log(err);
            return createResponseObject(
                "error",
                "Studi kasus gagal dibuat",
                err.message ? err.message : err
            );
        }
    },
    deleteOne: async (id) => {
        try {
            const caseStudy = await CaseStudy.findByPk(id, {
                raw: true,
            });
            if (!caseStudy)
                throw new Error("studi kasus tidak dapat ditemukan");

            await CaseStudy.destroy({
                where: {
                    id,
                },
            });

            const destroyResObj = await axios.delete(
                `${AUTO_ASSESS_BACKEND}/api/v2/database/drop/${caseStudy["db_name"]}`
            );

            await deleteFile(
                path.join(
                    __dirname,
                    `../../uploads/sqls/${caseStudy["db_file"]}`
                )
            );

            return createResponseObject(
                "success",
                "Data studi kasus berhasil dihapus",
                destroyResObj.data
            );
        } catch (error) {
            console.log(error);
            return createResponseObject(
                "error",
                "Data studi kasus gagal dihapus",
                error.message ? error.message : error
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
