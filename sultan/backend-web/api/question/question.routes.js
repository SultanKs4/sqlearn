const express = require("express");
const upload = require("../../middlewares/multer.middleware");
const verifyToken = require("../../middlewares/verifyToken.middleware");
const router = express.Router();

const questionController = require("./question.controller");

router.get("/", questionController.index);
router.get("/:id", questionController.show);
router.use(verifyToken);
router.get("/containers/:container", questionController.indexExclude);
router.post("/", upload.single("answer_pic"), questionController.store);
router.put("/:id", upload.single("answer_pic"), questionController.update);
router.delete("/:id", questionController.destroy);

module.exports = router;
