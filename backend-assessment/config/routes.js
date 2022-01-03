const express = require("express");
const router = express.Router();
module.exports = router;

router.use("/api/database", require("../api/database/database.routes"));
router.use("/api/assessment", require("../api/assessment/assessment.routes"));
