const express = require("express");
const verifyToken = require("../../middlewares/verifyToken.middleware");
const router = express.Router();

const userController = require("./user.controller");

router.get("/", userController.index);
router.get("/:id", userController.show);
router.post("/", userController.store);
router.put("/:id", userController.update);
router.put("/:id/password", userController.updatePassword);
router.delete("/:id", userController.destroy);
router.delete("/:id/password", userController.resetPassword);

module.exports = router;
