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
const DbList = require("../db-list/db-list.model");
const createError = require("http-errors");

module.exports = {
    getAll: async () => {
        try {
            const caseStudies = await CaseStudy.findAll({
                include: [
                    {
                        model: User,
                        attributes: ["name"],
                    },
                    {
                        model: DbList,
                        attributes: ["db_name", "db_filename"],
                    },
                ],
            });
            if (!caseStudies) throw createError(404, "data studi kasus not found");
            return createResponseObject(200, "success", "Data studi kasus berhasil didapatkan", caseStudies);
        } catch (error) {
            let code = 500;
            let message = "Data studi kasus gagal didapatkan";
            let data = null;
            if (createError.isHttpError(error)) {
                code = error.statusCode;
                message = error.message;
            }

            return createResponseObject(code, "error", message, data);
        }
    },
    getOne: async (id) => {
        try {
            const caseStudy = await CaseStudy.findByPk(id, {
                include: [
                    {
                        model: User,
                        attributes: ["id", "name"],
                    },
                    {
                        model: DbList,
                        attributes: ["db_name", "db_filename"],
                    },
                ],
            });

            if (!caseStudy) throw createError(404, "studi kasus tidak dapat ditemukan");

            const resDetail = await axios.get(
                `${AUTO_ASSESS_BACKEND}/api/v2/database/desc_table/${caseStudy.DbList.db_name}`
            );
            let csObj = caseStudy.toJSON();
            csObj.tables = groupColumnsByTable(resDetail.data.data);
            return createResponseObject(200, "success", "Data studi kasus berhasil didapatkan", csObj);
        } catch (error) {
            let code = 500;
            let message = "Data studi kasus gagal didapatkan";
            let data = null;
            if (createError.isHttpError(error)) {
                code = error.statusCode;
                message = error.message;
            }

            return createResponseObject(code, "error", message, data);
        }
    },
    getOneDetail: async (id, tableName) => {
        try {
            const caseStudy = await CaseStudy.findByPk(id, {
                include: {
                    model: DbList,
                    attributes: ["db_name"],
                },
            });

            if (!caseStudy) throw createError(404, "studi kasus tidak dapat ditemukan");

            const res = await axios.get(
                `${AUTO_ASSESS_BACKEND}/api/v2/database/select/${caseStudy.DbList.db_name}/${tableName}`
            );
            return createResponseObject(200, "success", "Data studi kasus berhasil didapatkan", res.data.data);
        } catch (error) {
            let code = 500;
            let message = "Data studi kasus gagal didapatkan";
            let data = null;
            if (axios.isAxiosError(error) && error.response) {
                let axiosData = error.response.data;
                message = axiosData.message;
                data = axiosData.data;
            } else if (createError.isHttpError(error)) {
                code = error.statusCode;
                message = error.message;
            }

            return createResponseObject(code, "error", message, data);
        }
    },
    store: async (name, user, file) => {
        try {
            let dbName = `sqlearn_cs_${user.username}_${convertToSnakeCase(name)}_${shortIdGen()}`;
            const dbList = DbList.create({
                db_name: dbName,
                db_file: file.filename,
            });

            const newCaseStudies = await CaseStudy.create({
                name,
                db_list_id: dbList.id,
                user_id: user.id,
            });

            await axios.post(`${AUTO_ASSESS_BACKEND}/api/v2/database/create/${dbName}`);

            const resRunSql = await runSql(dbName, file.path);
            if (!resRunSql) throw createError(500, "import SQL gagal dilakukan");

            return createResponseObject(201, "success", "Data studi kasus berhasil ditambahkan", newCaseStudies);
        } catch (error) {
            await deleteFile(path.join(__dirname, `../../uploads/sqls/${file.filename}`));
            let code = 500;
            let message = "studi kasus gagal dibuat";
            let data = null;
            if (axios.isAxiosError(error) && error.response) {
                let axiosData = error.response.data;
                message = axiosData.message;
                data = axiosData.data;
            } else if (createError.isHttpError(error)) {
                code = error.statusCode;
                message = error.message;
            }

            return createResponseObject(code, "error", message, data);
        }
    },
    deleteOne: async (id) => {
        try {
            const caseStudy = await CaseStudy.findByPk(id, {
                include: { model: DbList, attributes: ["db_name", ["db_filename"]] },
                raw: true,
            });
            if (!caseStudy) throw createError(404, "studi kasus tidak dapat ditemukan");

            await CaseStudy.destroy({
                where: {
                    id,
                },
            });

            const destroyResObj = await axios.delete(
                `${AUTO_ASSESS_BACKEND}/api/v2/database/drop/${caseStudy["DbList"]["db_name"]}`
            );

            await deleteFile(path.join(__dirname, `../../uploads/sqls/${caseStudy["DbList"]["db_file"]}`));

            return createResponseObject(200, "success", "Data studi kasus berhasil dihapus", destroyResObj.data);
        } catch (error) {
            console.log(error);
            let code = 500;
            let message = "Data studi kasus gagal didapatkan";
            let data = null;
            if (axios.isAxiosError(error) && error.response) {
                let axiosData = error.response.data;
                message = axiosData.message;
                data = axiosData.data;
            } else if (createError.isHttpError(error)) {
                code = error.statusCode;
                message = error.message;
            }

            return createResponseObject(code, "error", message, data);
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
