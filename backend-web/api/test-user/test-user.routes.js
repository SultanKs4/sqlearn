const express = require("express");
const router = express.Router();

const testUserController = require("./test-user.controller");

router.get("/", testUserController.index);
router.post("/:id", testUserController.answer);
router.post("/", testUserController.store);

module.exports = router;
