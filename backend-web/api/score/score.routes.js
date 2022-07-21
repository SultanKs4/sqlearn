const express = require("express");
const router = express.Router();

const scoreController = require("./score.controller");
const permission = require("../../middlewares/authorization.middleware");
const scoreSanitizer = require("./score.sanitizer");

router.get("/student", permission("mahasiswa"), scoreSanitizer.checkIndexStudent, scoreController.indexStudents);
router.get(
    "/class/:classId/schedule/:scheduleId",
    scoreSanitizer.checkIndexDosen,
    permission("dosen"),
    scoreController.indexDosen
);
router.get(
    "/student/:studentId/schedule/:scheduleId",
    scoreSanitizer.checkGetDetail,
    permission("dosen"),
    scoreController.show
);

module.exports = router;
