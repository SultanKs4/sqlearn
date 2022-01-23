const fs = require("fs-extra");
const multer = require("multer");
const path = require("path");

function fileDest(req, file, cb) {
    let pathDest = `./uploads/`;

    if (file.fieldname == "sql") pathDest += "sqls/";
    else if (file.fieldname == "answer_pic") pathDest += "images/";
    else if (file.fieldname == "excel") pathDest += "excels/";

    fs.mkdirsSync(pathDest);
    return cb(null, pathDest);
}

const storage = multer.diskStorage({
    destination: fileDest,
    filename: (req, file, cb) => {
        cb(null, Date.now() + "_" + file.fieldname + "_" + file.originalname);
    },
});

function fileFilter(req, file, cb) {
    let filetypes = /^/;

    if (file.fieldname == "sql") filetypes = /sql/;
    else if (file.fieldname == "answer_pic") filetypes = /jpeg|png/;
    else if (file.fieldname == "excel") {
        filetypes =
            /ms-excel|openxmlformats-officedocument.spreadsheetml.sheet/;
    }

    if (filetypes.test(file.mimetype)) return cb(null, true);

    cb(null, false);
}

const upload = multer({
    storage,
    fileFilter,
});

module.exports = upload;
