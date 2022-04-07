const express = require("express");
const router = express.Router();

const sessionController = require("./session.controller");
const permission = require("../../middlewares/authorization.middleware");
const sessionSanitizer = require("./session.sanitizer");

router.get("/", sessionController.index);
router.get("/:id", sessionSanitizer.checkIdOnly, sessionController.show);
router.post("/answer", permission("mahasiswa"), sessionSanitizer.checkAnswer, sessionController.answer);
router.post("/:scheduleid", permission("mahasiswa"), sessionSanitizer.checkStore, sessionController.store);
router.post("/grade/:id", permission("mahasiswa"), sessionSanitizer.checkIdOnly, sessionController.grade);
router.delete("/reset/:id", sessionSanitizer.checkIdOnly, sessionController.reset);

module.exports = router;
