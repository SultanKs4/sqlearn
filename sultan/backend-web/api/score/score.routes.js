const express = require("express");
const router = express.Router();

const scoreController = require("./score.controller");

router.get("/student", scoreController.indexStudents);
router.get("/class/:classId/schedule/:scheduleId", scoreController.indexDosen);
router.get("/student/:studentId/schedule/:scheduleId", scoreController.show);

module.exports = router;
