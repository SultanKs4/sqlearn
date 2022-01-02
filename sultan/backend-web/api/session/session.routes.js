const express = require("express");
const router = express.Router();

const sessionController = require("./session.controller");

router.get("/", sessionController.index);
router.get("/:id", sessionController.show);
router.post("/", sessionController.store);
router.post("/:id/answer/:question", sessionController.answer);
router.post("/:id", sessionController.grade)

module.exports = router;
