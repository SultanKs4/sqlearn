const express = require("express");
const router = express.Router();
const assessmentController = require("./assessment.controller");
const verifyQuery = require("../../../middlewares/verifyQuery.middleware");

router.use(verifyQuery);
router.post("/multi_key/:dbname", assessmentController.multiKey);
router.post("/single_key/:dbname", assessmentController.singleKey);

module.exports = router;
