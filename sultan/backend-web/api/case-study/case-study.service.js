const convertToSnakeCase = require("../../lib/convertSnakeCase");
const shortIdGen = require("../../lib/shortIdGen");
const CaseStudy = require("./case-study.model");
const axios = require("axios");
const deleteFile = require("../../lib/deleteFile");
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
                "Data studi kasus berhasil didapatkan",
                caseStudies
            );
        } catch (error) {
            return createResponseObject(
                false,
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
            if (caseStudy) {
                const res = await axios.get(
                    `${AUTO_ASSESS_BACKEND}/desc_table/${caseStudy["db_name"]}`
                );
                caseStudy["tables"] = groupColumnsByTable(res.data);
                return createResponseObject(
                    true,
                    "Data studi kasus berhasil didapatkan",
                    caseStudy
                );
            }
            return createResponseObject(true, "Data studi kasus kosong");
        } catch (error) {
            console.error(error);
            return createResponseObject(
                false,
                "Data studi kasus gagal didapatkan"
            );
        }
    },
    getOneDetail: async (id, tableName) => {
        try {
            const caseStudy = await CaseStudy.findByPk(id, {
                raw: true,
            });
            if (caseStudy) {
                const res = await axios.get(
                    `${AUTO_ASSESS_BACKEND}/select/${caseStudy["db_name"]}/${tableName}`
                );
                return createResponseObject(
                    true,
                    "Data studi kasus berhasil didapatkan",
                    res.data
                );
            }
            return createResponseObject(false, "Data studi kasus kosong");
        } catch (error) {
            console.error(error);
            return createResponseObject(
                false,
                "Data studi kasus gagal didapatkan"
            );
        }
    },
    insert: async (data, user) => {
        try {
            const userDb = await User.findByPk(user.id);
            if (!userDb)
                createResponseObject(false, "User tidak dapat ditemukan");

            const dbName = `${user.username}_${convertToSnakeCase(
                data.name
            )}_${shortIdGen()}`;
            const newCaseStudies = await CaseStudy.create({
                name: data.name,
                db_name: dbName,
                user_id: user.id,
            });
            const {
                data: { success },
            } = await axios.post(`${AUTO_ASSESS_BACKEND}/createDB/${dbName}`);

            if (!success)
                createResponseObject(false, "Gagal membuat database baru");

            return createResponseObject(
                true,
                "Data studi kasus berhasil ditambahkan",
                newCaseStudies
            );
        } catch (err) {
            console.log(err);
            return createResponseObject(
                false,
                "Data studi kasus gagal ditambahkan"
            );
        }
    },
    insertSQL: async (id, data, user, file) => {
        return new Promise(async (resolve, reject) => {
            const userDb = await User.findByPk(user.id);
            if (!userDb)
                reject(
                    createResponseObject(false, "User tidak dapat ditemukan")
                );

            const dbName = `${user.username}_${convertToSnakeCase(
                data.name
            )}_${shortIdGen()}`;
            const newCaseStudies = await CaseStudy.create({
                name: data.name,
                db_name: dbName,
                user_id: user.id,
            });
            const {
                data: { success },
            } = await axios.post(`${AUTO_ASSESS_BACKEND}/createDB/${dbName}`);

            if (!success)
                reject(
                    createResponseObject(false, "Gagal membuat database baru")
                );

            runSql(newCaseStudies.db_name, file.path)
                .then((success) => {
                    if (!success)
                        resolve(
                            createResponseObject(
                                false,
                                "Import SQL gagal dilakukan"
                            )
                        );
                    resolve(
                        createResponseObject(
                            true,
                            "Import SQL berhasil dilakukan"
                        )
                    );
                })
                .catch((err) => {
                    console.log(err);
                    reject(
                        createResponseObject(
                            false,
                            "Import SQL gagal dilakukan"
                        )
                    );
                })
                .finally(async () => {
                    await deleteFile(file.path);
                });
        });
    },
    deleteOne: async (id) => {
        try {
            const caseStudy = await CaseStudy.findByPk(id, {
                raw: true,
            });
            if (!caseStudy)
                return createResponseObject(
                    false,
                    "Tidak ada database yang dihapus"
                );

            await CaseStudy.destroy({
                where: {
                    id,
                },
            });

            const {
                data: { success },
            } = await axios.post(
                `${AUTO_ASSESS_BACKEND}/dropDB/${caseStudy["db_name"]}`
            );

            if (!success)
                createResponseObject(false, "Gagal menghapus database");

            return createResponseObject(
                true,
                "Data studi kasus berhasil dihapus"
            );
        } catch (error) {
            console.log(error);
            return createResponseObject(
                false,
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
