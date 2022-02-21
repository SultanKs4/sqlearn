const express = require("express");
const upload = require("../../middlewares/multer.middleware");
const router = express.Router();

const caseStudyController = require("./case-study.controller");
const caseStudySanitizer = require("./case-study.sanitizer");

router.get("/", caseStudyController.index);
router.get("/:id", caseStudySanitizer.checkIdOnly, caseStudyController.show);
router.get("/:id/data/:tablename", caseStudySanitizer.getOneDetail, caseStudyController.showTable);
router.post("/", upload.single("sql"), caseStudySanitizer.store, caseStudyController.store);
router.delete("/:id", caseStudySanitizer.checkIdOnly, caseStudyController.destroy);

module.exports = router;
