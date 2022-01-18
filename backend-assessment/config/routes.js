const express = require("express");
const router = express.Router();
module.exports = router;

// v1 mas daffa
router.use("/api/v1", require("../api/v1/routes"));

// v2
router.use("/api/v2/database", require("../api/v2/database/database.routes"));
router.use("/api/v2/assessment", require("../api/v2/assessment/assessment.routes"));
