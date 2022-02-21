const User = require("./user/user.model");
const Student = require("./student/student.model");
const Class = require("./class/class.model");
const StudentClass = require("./student-class/student-class.model");
const CaseStudy = require("./case-study/case-study.model");
const Question = require("./question/question.model");
const Container = require("./container/container.model");
const QuestionContainer = require("./question-container/question-container.model");
const Schedule = require("./schedule/schedule.model");
const ClassSchedule = require("./class-schedule/class-schedule.model");
const Score = require("./score/score.model");
const Session = require("./session/session.model");
const SessionStudentAnswer = require("./session-student-answer/session-student-answer.model");
const QuestionLabel = require("./questions-label/question-label.model");

User.hasMany(Class, { foreignKey: "user_id" });
User.hasMany(CaseStudy, { foreignKey: "user_id" });
User.hasMany(Question, { foreignKey: "user_id" });
User.hasMany(Schedule, { foreignKey: "user_id" });
User.hasMany(Container, { foreignKey: "user_id" });
CaseStudy.hasMany(Question, { foreignKey: "case_study_id" });
Student.hasMany(Score, { foreignKey: "student_id" });
Schedule.hasMany(Score, { foreignKey: "schedule_id" });
Schedule.hasMany(Session, { foreignKey: "schedule_id" });
Student.hasMany(Session, { foreignKey: "student_id" });
Container.hasMany(Schedule, { foreignKey: "container_id" });
Session.hasMany(SessionStudentAnswer, { foreignKey: "session_id" });
Question.hasMany(SessionStudentAnswer, { foreignKey: "question_id" });
QuestionLabel.hasMany(Question, { foreignKey: "label_id" });
QuestionLabel.hasMany(Container, { foreignKey: "label_id" });

Class.belongsTo(User, { foreignKey: "user_id" });
CaseStudy.belongsTo(User, { foreignKey: "user_id" });
Question.belongsTo(User, { foreignKey: "user_id" });
Schedule.belongsTo(User, { foreignKey: "user_id" });
Container.belongsTo(User, { foreignKey: "user_id" });
Container.belongsTo(QuestionLabel, { foreignKey: "label_id" });
Question.belongsTo(CaseStudy, { foreignKey: "case_study_id" });
Question.belongsTo(QuestionLabel, { foreignKey: "label_id" });
Score.belongsTo(Student, { foreignKey: "student_id" });
Score.belongsTo(Schedule, { foreignKey: "schedule_id" });
Session.belongsTo(Schedule, { foreignKey: "schedule_id" });
Session.belongsTo(Student, { foreignKey: "student_id" });
Schedule.belongsTo(Container, { foreignKey: "container_id" });
SessionStudentAnswer.belongsTo(Session, { foreignKey: "session_id" });
SessionStudentAnswer.belongsTo(Question, { foreignKey: "question_id" });

Student.belongsToMany(Class, {
    through: StudentClass,
    foreignKey: "student_id",
    as: "classes",
});
Class.belongsToMany(Student, {
    through: StudentClass,
    foreignKey: "class_id",
    as: "students",
});

Container.belongsToMany(Question, {
    through: QuestionContainer,
    foreignKey: "container_id",
    as: "questions",
});
Question.belongsToMany(Container, {
    through: QuestionContainer,
    foreignKey: "question_id",
    as: "containers",
});

Class.belongsToMany(Schedule, {
    through: ClassSchedule,
    foreignKey: "class_id",
    as: "schedules",
});
Schedule.belongsToMany(Class, {
    through: ClassSchedule,
    foreignKey: "schedule_id",
    as: "classes",
});
