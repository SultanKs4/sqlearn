const express = require("express");
const compareController = require("./compare.controller");
const router = express.Router();

router.post("/user", compareController.user);
router.post("/threshold/select", compareController.selectThreshold);
router.post("/keys/select", compareController.selectKeys);
router.post("/keys/insert", compareController.insert);

module.exports = router;
