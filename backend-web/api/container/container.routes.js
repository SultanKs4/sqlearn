const express = require("express");
const router = express.Router();

const containerController = require("./container.controller");
const containerSanitizer = require("./container.sanitizer");

router.get("/", containerController.index);
router.get("/:id", containerSanitizer.checkIdOnly, containerController.show);
router.post("/", containerSanitizer.checkStore, containerController.store);
router.put("/:id", containerSanitizer.checkUpdate, containerController.update);
router.post("/:id/add/", containerSanitizer.checkStoreQuestion, containerController.addQuestion);
router.delete("/:id/remove/:question", containerSanitizer.checkDestroyQuestion, containerController.removeQuestion);
router.delete("/:id", containerSanitizer.checkIdOnly, containerController.destroy);

module.exports = router;
