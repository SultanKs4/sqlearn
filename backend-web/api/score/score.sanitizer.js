const { param, query } = require("express-validator");
const validationHandle = require("../../middlewares/validationHandle.middleware");

const checkClassId = param("classId", "cannot null").notEmpty().bail().isInt().withMessage("must be number");
const checkClassQuery = query("kelas").optional().isInt().withMessage("must be number");
const checkScheduleId = param("scheduleId", "cannot null").notEmpty().bail().isInt().withMessage("must be number");
const checkStudentId = param("studentId", "cannot null").notEmpty().bail().isInt().withMessage("must be number");

module.exports = {
    checkIndexStudent: [checkClassQuery, validationHandle],
    checkIndexDosen: [checkClassId, checkScheduleId, validationHandle],
    checkGetDetail: [checkStudentId, checkScheduleId, validationHandle],
};
