const express = require("express");
const upload = require("../../middlewares/multer.middleware");
const router = express.Router();

const caseStudyController = require("./case-study.controller");

router.get("/", caseStudyController.index);
router.get("/:id", caseStudyController.show);
router.get("/:id/data/:tablename", caseStudyController.showTable);
router.post("/", upload.single("sql"), caseStudyController.store);
router.delete("/:id", caseStudyController.destroy);

module.exports = router;
