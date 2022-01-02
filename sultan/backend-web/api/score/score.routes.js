const express = require("express");
const router = express.Router();

const scoreController = require("./score.controller");

router.get("/student", scoreController.indexStudents);
router.get("/kelas/:kelas/jadwal/:jadwal", scoreController.indexDosen);
router.get("/mhs/:mhs/jadwal/:jadwal", scoreController.show);
// router.post("/", scoreController.store);
// router.put("/:id", scoreController.update);
// router.delete("/:id", scoreController.destroy)

module.exports = router;
