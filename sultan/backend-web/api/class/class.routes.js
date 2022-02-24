const express = require("express");
const upload = require("../../middlewares/multer.middleware");
const router = express.Router();

const classController = require("./class.controller");

router.get("/", classController.index);
router.get("/:id", classController.show);
router.get("/excel/:name", classController.generateExcel);
router.post("/", classController.store);
router.post("/upload", upload.single("excel"), classController.upload);
router.put("/:id", classController.update);
router.post("/:id/add/", classController.addStudent);
router.delete("/:id/remove/:mhsid", classController.removeStudent);
router.delete("/:id", classController.destroy);

module.exports = router;
