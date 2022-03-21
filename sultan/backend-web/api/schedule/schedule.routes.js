const express = require("express");
const router = express.Router();

const scheduleController = require("./schedule.controller");
const scheduleSanitizer = require("./schedule.sanitizer");

router.get("/", scheduleController.index);
router.get("/class/:id", scheduleSanitizer.checkIdOnly, scheduleController.indexByClass);
router.get("/:id", scheduleSanitizer.checkIdOnly, scheduleController.show);
router.post("/", scheduleSanitizer.checkPost, scheduleController.store);
router.put("/:id", scheduleSanitizer.checkPut, scheduleController.update);
router.delete("/:id", scheduleSanitizer.checkIdOnly, scheduleController.destroy);

module.exports = router;
