const express = require("express");
const router = express.Router();

const userController = require("./user.controller");
const userSanitizer = require("./user.sanitizer");

router.get("/", userSanitizer.checkLevel, userController.index);
router.get("/:id", userSanitizer.checkIdOnly, userController.show);
router.post("/", userSanitizer.checkPost, userController.store);
router.put("/:id", userSanitizer.checkPut, userController.update);
router.put("/:id/password", userSanitizer.checkUpdatePassword, userController.updatePassword);
router.delete("/:id", userSanitizer.checkIdOnly, userController.destroy);
router.delete("/:id/password", userSanitizer.checkIdOnly, userController.resetPassword);

module.exports = router;
