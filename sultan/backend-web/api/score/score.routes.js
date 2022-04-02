const express = require("express");
const router = express.Router();

const scoreController = require("./score.controller");
const permission = require("../../middlewares/authorization.middleware");

router.get("/student", permission("mahasiswa"), scoreController.indexStudents);
router.get("/class/:classId/schedule/:scheduleId", permission("dosen"), scoreController.indexDosen);
router.get("/student/:studentId/schedule/:scheduleId", permission("dosen"), scoreController.show);

module.exports = router;
