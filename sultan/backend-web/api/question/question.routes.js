const express = require("express");
const upload = require("../../middlewares/multer.middleware");
const verifyToken = require("../../middlewares/verifyToken.middleware");
const router = express.Router();

const questionController = require("./question.controller");
const questionSanitizer = require("./question.sanitizer");

router.get("/", questionSanitizer.checkQueryCaseOnly, questionController.index);
router.get("/:id", questionSanitizer.checkGetData, questionController.show);
router.get("/containers/:container", questionSanitizer.checkContainer, questionController.indexExclude);
router.post("/", upload.single("answer_pic"), questionSanitizer.checkStore, questionController.store);
router.put("/:id", upload.single("answer_pic"), questionSanitizer.checkUpdate, questionController.update);
router.delete("/:id", questionSanitizer.checkIdOnly, questionController.destroy);

module.exports = router;
