const express = require("express");
const verifyToken = require("../../middlewares/verifyToken.middleware");
const router = express.Router();

const studentController = require("./student.controller");

router.post("/login", studentController.authenticate);
router.use(verifyToken)
router.get("/", studentController.index);
router.get("/classes/:class", studentController.indexExclude);
router.get("/:id", studentController.show);
router.post("/", studentController.store);
router.put("/:id", studentController.update);
router.delete("/:id", studentController.destroy);

module.exports = router;
