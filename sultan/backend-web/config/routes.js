const express = require("express");
const verifyToken = require("../middlewares/verifyToken.middleware");
const router = express.Router();
module.exports = router;

router.use("/api/users", require("../api/user/user.routes"));
router.use("/api/students", require("../api/student/student.routes"));
router.use("/api/test", require("../api/test-user/test-user.routes"));
router.use("/api/questions", require("../api/question/question.routes"));
router.use("/api/settings", require("../api/setting/setting.routes"));
router.use(verifyToken)
router.use("/api/classes", require("../api/class/class.routes"));
router.use("/api/casestudies", require("../api/case-study/case-study.routes"));
router.use("/api/containers", require("../api/container/container.routes"));
router.use("/api/schedules", require("../api/schedule/schedule.routes"));
router.use("/api/sessions", require("../api/session/session.routes"));
router.use("/api/scores", require("../api/score/score.routes"));
