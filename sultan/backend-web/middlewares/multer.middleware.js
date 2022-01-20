const fs = require("fs-extra");
const multer = require("multer");
const path = require("path");

function fileDest(req, file, cb) {
    const filetypes = /png|jpg|jpeg/;
    const isImage = filetypes.test(
        path.extname(file.originalname).toLowerCase()
    );

    const isSql = /.sql/.test(path.extname(file.originalname).toLowerCase());
    let pathDest = `./uploads/`;

    if (isSql) pathDest += "sqls/";

    if (isImage) pathDest += "images/";

    fs.mkdirsSync(pathDest);
    return cb(null, pathDest);
}

const storage = multer.diskStorage({
    destination: fileDest,
    filename: (req, file, cb) => {
        cb(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});

function fileFilter(req, file, cb) {
    const filetypes = /xlsx|xls|sql|png|jpg|jpeg/;
    const extname = filetypes.test(
        path.extname(file.originalname).toLowerCase()
    );

    if (extname) return cb(null, true);

    cb(null, false);
}

const upload = multer({
    storage,
    fileFilter,
});

module.exports = upload;
