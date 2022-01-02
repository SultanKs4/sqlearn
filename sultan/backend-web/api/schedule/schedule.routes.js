const express = require("express");
const router = express.Router();

const scheduleController = require("./schedule.controller");

router.get("/", scheduleController.index);
router.get("/students", scheduleController.indexStudents);
router.get("/class/:id", scheduleController.indexByClass);
router.get("/:id", scheduleController.show);
router.post("/", scheduleController.store);
router.put("/:id", scheduleController.update);
router.delete("/:id", scheduleController.destroy)

module.exports = router;
