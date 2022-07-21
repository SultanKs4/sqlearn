"use strict";
exports.id = 593;
exports.ids = [593];
exports.modules = {

/***/ 9151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3242);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






function ModalCustom({
  role,
  entity,
  visible,
  setVisible,
  modalText,
  modalContent
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    title: `${(0,_utils_common__WEBPACK_IMPORTED_MODULE_2__/* .ucfirst */ .Ps)(role)} ${(0,_utils_common__WEBPACK_IMPORTED_MODULE_2__/* .ucfirst */ .Ps)(entity)}`,
    visible: visible,
    onCancel: () => setVisible(false),
    footer: null,
    children: [modalContent, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
      children: modalText
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalCustom);

/***/ }),

/***/ 3143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Yv": () => (/* binding */ URL_CLASS_API)
/* harmony export */ });
/* unused harmony exports BASE_URL, URL_CONTAINER_API, URL_CASE_STUDY_API, URL_QUESTION_API, URL_SCHEDULE_API, URL_SESSION_API, URL_LOGIN_API, URL_CREATE_DB_API, URL_DESC_TABLE_API, URL_ASSESMENT_MULTI_KEY_API, URL_ASSESMENT_SINGLE_KEY_API */
const BASE_URL = "https://api.sqlearn.sultanachmad.me"; // ? BACKEND WEB
// API KELAS

const URL_CLASS_API = `${BASE_URL}/api/classes`; // API PAKET SOAL

const URL_CONTAINER_API = `${BASE_URL}/api/containers`;
const URL_CASE_STUDY_API = `${BASE_URL}/api/casestudies`;
const URL_QUESTION_API = `${BASE_URL}/api/questions`;
const URL_SCHEDULE_API = `${BASE_URL}/api/schedules`;
const URL_SESSION_API = `${BASE_URL}/api/sessions`;
const URL_LOGIN_API = `${BASE_URL}/api/users/login`; // ? BACKEND ASSESMENT

const URL_CREATE_DB_API = `${BASE_URL}/api/v2/database/create/testcreate`;
const URL_DESC_TABLE_API = `${BASE_URL}/api/v2/database/desc_table/auto_assess_tes`;
const URL_ASSESMENT_MULTI_KEY_API = `${BASE_URL}/api/v2/assessment/multi_key`;
const URL_ASSESMENT_SINGLE_KEY_API = `${BASE_URL}/api/v2/assessment/single_key`;

/***/ })

};
;