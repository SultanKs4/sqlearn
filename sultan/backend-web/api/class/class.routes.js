const express = require("express");
const upload = require("../../middlewares/multer.middleware");
const router = express.Router();

const classController = require("./class.controller");
const classSanitizer = require("./class.sanitizer");

router.get("/", classController.index);
router.get("/:id", classSanitizer.checkIdOnly, classController.show);
router.get("/excel/:name", classController.generateExcel);
router.post("/", classSanitizer.checkPost, classController.store);
router.post("/upload", upload.single("excel"), classSanitizer.checkPost, classController.upload);
router.put("/:id", classSanitizer.checkPut, classController.update);
router.post("/:id/add/", classSanitizer.checkAddStudent, classController.addStudent);
router.delete("/:id/remove/:mhsid", classSanitizer.checkDelStudent, classController.removeStudent);
router.delete("/:id", classSanitizer.checkIdOnly, classController.destroy);

module.exports = router;
