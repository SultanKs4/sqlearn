const { body, param, query } = require("express-validator");
const validationHandle = require("../../middlewares/validationHandle.middleware");

const checkId = param("id", "cannot null").notEmpty().bail().isInt().withMessage("must be number");
const checkContainerId = body("container_id", "cannot empty").notEmpty().bail().isInt().withMessage("must be number");
const checkDescription = body("description", "cannot empty").notEmpty().trim();
const checkType = body("type", "cannot empty")
    .notEmpty()
    .bail()
    .isIn(["latihan", "ujian"])
    .withMessage(`must be either "latihan" or "ujian"`);
const checkDate = body(["start", "finish"], "cannot empty")
    .notEmpty()
    .bail()
    .isISO8601()
    .withMessage("data is not date")
    .custom((val, { req }) => {
        const start = new Date(req.body.start).getTime();
        const finish = new Date(req.body.finish).getTime();
        const hours = (finish - start) / 3.6e6;
        if (hours < 2) throw new Error("Start date and finish date difference must be 2 hours or more");
        return true;
    });
const checkClasses = body("classes", "cannot empty")
    .notEmpty()
    .bail()
    .isArray()
    .withMessage("must be array")
    .custom((val) => {
        val.forEach((v) => {
            if (typeof v != "number") throw new Error("Element array not number");
        });
        return true;
    });

module.exports = {
    checkIdOnly: [checkId, validationHandle],
    checkPost: [checkContainerId, checkDescription, checkType, checkClasses, checkDate, validationHandle],
    checkPut: [checkId, checkContainerId, checkDescription, checkType, checkClasses, checkDate, validationHandle],
};
