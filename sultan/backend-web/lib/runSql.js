const Importer = require("mysql-import");

module.exports = (dbname, sqlfile) => {
    const host = process.env.HOST;
    const user = process.env.DB_USER;
    const password = process.env.DB_PASS;
    const database = dbname;

    const importer = new Importer({ host, user, password, database });
    return new Promise((resolve, reject) => {
        importer
            .import(sqlfile)
            .then(() => {
                var files_imported = importer.getImported();
                console.log(`${files_imported.length} SQL file(s) imported.`);
                resolve(true);
            })
            .catch((err) => {
                console.log(err);
                console.error("Error upload SQL");
                reject(err);
            });
    });
};
