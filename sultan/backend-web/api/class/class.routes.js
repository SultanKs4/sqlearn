const express = require("express");
const authorizationMiddleware = require("../../middlewares/authorization.middleware");
const upload = require("../../middlewares/multer.middleware");
const router = express.Router();

const classController = require("./class.controller");
const classSanitizer = require("./class.sanitizer");

router.use(authorizationMiddleware("dosen", "mahasiswa"));
router.get("/", classController.index);
router.get("/:id", classSanitizer.checkIdOnly, classController.show);
router.post("/", classSanitizer.checkPost, classController.store);
router.post("/upload", upload.single("excel"), classSanitizer.checkPost, classController.upload);
router.put("/:id", classSanitizer.checkPut, classController.update);
router.post("/:id/add", classSanitizer.checkAddStudent, classController.addStudent);
router.delete("/:id/remove", classSanitizer.checkDelStudent, classController.removeStudent);
router.delete("/:id", classSanitizer.checkIdOnly, classController.destroy);

module.exports = router;
