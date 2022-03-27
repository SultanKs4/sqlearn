const express = require("express");
const router = express.Router();

const settingController = require("./setting.controller");

router.get("/threshold", settingController.threshold);
router.put("/threshold", settingController.thresholdUpdate);
router.get("/rules", settingController.getRules);
router.post("/rules", settingController.addRules);
router.put("/rules/:id", settingController.updateRules);
router.delete("/rules/id", settingController.deleteRules);

module.exports = router;
