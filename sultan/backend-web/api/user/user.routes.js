const express = require("express");
const verifyToken = require("../../middlewares/verifyToken.middleware");
const router = express.Router();

const userController = require("./user.controller");

router.get("/", userController.index);
router.get("/:id", userController.show);
router.post("/", userController.store);
router.put("/:id", userController.update);
router.delete("/:id", userController.destroy);

module.exports = router;
