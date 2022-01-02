const express = require("express");
const router = express.Router();
const databaseController = require("./database.controller");

router.post("/create/:dbname", databaseController.createDb);

module.exports = router;
