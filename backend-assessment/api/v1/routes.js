const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.post("/createDB/:dbname", controller.create_db);
router.post("/dropDB/:dbname", controller.drop_db);
router.get("/desc_table/:dbname", controller.desc_table);
router.get("/select/:dbname/:table", controller.select);
router.post("/assess/:dbname", controller.assess);

module.exports = router;
