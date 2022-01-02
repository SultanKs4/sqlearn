const express = require("express");
const upload = require("../../middlewares/multer.middleware");
const router = express.Router();

const classController = require("./class.controller");

router.get("/", classController.index);
router.get("/students", classController.indexStudents);
router.get("/excel/:name", classController.generateExcel);
router.get("/:id", classController.show);
router.post("/", classController.store);
router.post("/upload", upload.single('excel'), classController.upload);
router.put("/:id", classController.update);
router.put("/:id/add/", classController.addStudent);
router.put("/:id/remove/:mhsid", classController.removeStudent);
router.delete("/:id", classController.destroy)

module.exports = router;
