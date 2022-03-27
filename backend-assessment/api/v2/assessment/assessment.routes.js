const express = require("express");
const router = express.Router();
const assessmentController = require("./assessment.controller");
const verifyQuery = require("../../../middlewares/verifyQuery.middleware");

router.use(verifyQuery);
router.post("/multi_key", assessmentController.multiKey);
router.post("/single_key", assessmentController.singleKey);

module.exports = router;
