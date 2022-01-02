const express = require("express");
const router = express.Router();
module.exports = router;

router.use("/api/database", require("../api/database/database.routes"));