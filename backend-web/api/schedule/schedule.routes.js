const express = require("express");
const router = express.Router();

const scheduleController = require("./schedule.controller");
const scheduleSanitizer = require("./schedule.sanitizer");
const permission = require("../../middlewares/authorization.middleware");

router.get("/", scheduleSanitizer.checkDateQuery, scheduleController.index);
router.get("/class/:id", scheduleSanitizer.checkIdOnly, scheduleController.indexByClass);
router.get("/:id", scheduleSanitizer.checkIdOnly, scheduleController.show);
router.post("/", permission("dosen"), scheduleSanitizer.checkPost, scheduleController.store);
router.put("/:id", scheduleSanitizer.checkPut, scheduleController.update);
router.delete("/:id", scheduleSanitizer.checkIdOnly, scheduleController.destroy);

module.exports = router;
