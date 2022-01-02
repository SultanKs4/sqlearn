const express = require("express");
const router = express.Router();

const settingController = require("./setting.controller");

router.get("/threshold", settingController.threshold)
router.put("/threshold", settingController.thresholdUpdate)

module.exports = router