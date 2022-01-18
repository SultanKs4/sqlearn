const express = require("express");
const router = express.Router();
const databaseController = require("./database.controller");

router.get("/select/:dbname/:table", databaseController.selectTable);
router.get("/desc_table/:dbname", databaseController.descTable);
router.post("/create/:dbname", databaseController.createDb);
router.delete("/drop/:dbname", databaseController.dropDb);

module.exports = router;
