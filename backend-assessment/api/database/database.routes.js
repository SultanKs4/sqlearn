const express = require("express");
const router = express.Router();
const databaseController = require("./database.controller");

router.post("/create", databaseController.createDb);
router.delete("/drop", databaseController.dropDb);

module.exports = router;
