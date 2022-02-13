const express = require("express");
const router = express.Router();

const containerController = require("./container.controller");

router.get("/", containerController.index);
router.get("/:id", containerController.show);
router.post("/", containerController.store);
router.put("/:id", containerController.update);
router.post("/:id/add/", containerController.addQuestion);
router.delete("/:id/remove/:question", containerController.removeQuestion);
router.delete("/:id", containerController.destroy);

module.exports = router;
