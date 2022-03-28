const express = require("express");
const logSessionStudentController = require("./log-session-student.controller");
const router = express.Router();

router.get("/", logSessionStudentController.index);
router.get("/:id", logSessionStudentController.show);
router.post("/", logSessionStudentController.store);

module.exports = router;
