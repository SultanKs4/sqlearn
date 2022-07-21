const express = require("express");
const router = express.Router();

const studentController = require("./student.controller");
const studentSanitizer = require("./student.sanitizer");

router.get("/", studentController.index);
router.get("/classes/:class", studentSanitizer.checkClass, studentController.indexExclude);
router.get("/:id", studentSanitizer.checkIdOnly, studentController.show);
router.post("/", studentSanitizer.checkPost, studentController.store);
router.put("/:id", studentSanitizer.checkPut, studentController.update);
router.put("/:id/password", studentSanitizer.checkUpdatePassword, studentController.updatePassword);
router.delete("/:id", studentSanitizer.checkIdOnly, studentController.destroy);
router.delete("/:id/password", studentSanitizer.checkIdOnly, studentController.resetPassword);

module.exports = router;
