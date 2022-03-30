const express = require("express");
const verifyToken = require("../../middlewares/verifyToken.middleware");
const router = express.Router();

const studentController = require("./student.controller");
const studentSanitizer = require("./student.sanitizer");

router.get("/", studentController.index);
router.get("/classes/:class", studentController.indexExclude);
router.get("/:id", studentController.show);
router.post("/", studentController.store);
router.put("/:id", studentController.update);
router.put("/:id/password", studentSanitizer.checkUpdatePassword, studentController.updatePassword);
router.delete("/:id", studentController.destroy);
router.delete("/:id/password", studentController.resetPassword);

module.exports = router;
