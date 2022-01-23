const Importer = require("mysql-import");
const mysql = require("mysql2/promise");
const path = require("path");

const dotenv = require("dotenv");
dotenv.config();

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const database = process.env.DB_NAME;

const databaseStudyCase = "sqlearn_casestudy_auto_assess_tes";

mysql
    .createConnection({
        user,
        password,
        host,
    })
    .then((connectionWeb) => {
        connectionWeb
            .query(`CREATE DATABASE IF NOT EXISTS ${database};`)
            .then(() => {
                const importer = new Importer({
                    host,
                    user,
                    password,
                    database,
                });
                importer.onProgress((progress) => {
                    var percent =
                        Math.floor(
                            (progress.bytes_processed / progress.total_bytes) *
                                10000
                        ) / 100;
                    console.log(`Database Web ${percent}% Completed`);
                });

                importer
                    .import(path.resolve(__dirname, "sqlearn_web_rev.sql"))
                    .then(() => {
                        mysql
                            .createConnection({
                                user,
                                password,
                                host,
                            })
                            .then((connectionStudiKasus) => {
                                connectionStudiKasus
                                    .query(
                                        `CREATE DATABASE IF NOT EXISTS ${databaseStudyCase};`
                                    )
                                    .then(() => {
                                        console.log(
                                            "Database Studi Kasus berhasil dibuat"
                                        );
                                        const importerTest = new Importer({
                                            host,
                                            user,
                                            password,
                                            database: databaseStudyCase,
                                        });
                                        importerTest.onProgress((progress) => {
                                            var percent =
                                                Math.floor(
                                                    (progress.bytes_processed /
                                                        progress.total_bytes) *
                                                        10000
                                                ) / 100;
                                            console.log(
                                                `Database Studi Kasus ${percent}% Completed`
                                            );
                                        });
                                        importerTest
                                            .import(
                                                path.resolve(
                                                    __dirname,
                                                    "sqlearn_casestudy_auto_assess_tes.sql"
                                                )
                                            )
                                            .then(() => {
                                                console.log("Seeding berhasil");
                                                process.exit(0);
                                            })
                                            .catch((err) => {
                                                console.error(
                                                    "Error migrate SQL Studi Kasus: " +
                                                        err
                                                );
                                                process.exit(1);
                                            });
                                    });
                            });
                    })
                    .catch((err) => {
                        console.error("Error migrate SQL web: " + err);
                        process.exit(1);
                    });
            });
    });

console.log("Seeding sedang berjalan...");
