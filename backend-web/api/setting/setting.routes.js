const express = require("express");
const authorizationMiddleware = require("../../middlewares/authorization.middleware");
const router = express.Router();

const settingController = require("./setting.controller");
const settingSanitizer = require("./setting.sanitizer");

router.use(authorizationMiddleware("admin"));
router.get("/threshold", settingController.threshold);
router.put("/threshold", settingSanitizer.checkThresholdUpdate, settingController.thresholdUpdate);
router.get("/rules", settingSanitizer.checkGetRulesType, settingController.getRules);
router.post("/rules", settingSanitizer.checkPostRules, settingController.addRules);
router.put("/rules/:id", settingSanitizer.checkPutRules, settingController.updateRules);
router.delete("/rules/:id", settingSanitizer.checkIdOnly, settingController.deleteRules);

module.exports = router;
