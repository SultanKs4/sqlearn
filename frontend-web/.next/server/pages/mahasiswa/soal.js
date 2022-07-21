"use strict";
(() => {
var exports = {};
exports.id = 278;
exports.ids = [278];
exports.modules = {

/***/ 7877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_PageLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7786);
/* harmony import */ var _utils_remote_data_mahasiswa_Beranda__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(992);
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2047);
/* harmony import */ var _components_RadioFilterCategory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5286);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);












function SoalMahasiswa() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    0: dataLatihan,
    1: setDataLatihan
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: latihanFiltered,
    1: setLatihanFiltered
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: isFilterActive,
    1: setIsFilterActive
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: isDataLatihanLoaded,
    1: setIsDataLatihanLoaded
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.clear(); // TODO : Consume API GET dataLatihan yang tersedia

    (0,_utils_remote_data_mahasiswa_Beranda__WEBPACK_IMPORTED_MODULE_5__/* .mockGetAllPractices */ .we)().then(responseData => {
      setDataLatihan(responseData.data.filter(item => item.status === "tersedia"));
      setIsDataLatihanLoaded(true);
    });
  }, []);

  const handleKerjakanLatihan = id => {
    router.push(`/mahasiswa/soal/${id}`);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("title", {
        children: "SQLearn | Mahasiswa - Soal "
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_PageLayout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      role: "mahasiswa",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Card, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Typography.Title, {
          level: 3,
          style: {
            marginBottom: "1em"
          },
          children: ["Daftar Latihan Tersedia", " "]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_RadioFilterCategory__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          data: dataLatihan,
          setIsFilterActive: setIsFilterActive,
          setEntityFiltered: setLatihanFiltered
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_List__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          dataSource: isFilterActive ? latihanFiltered : dataLatihan,
          isLoading: !isDataLatihanLoaded,
          role: "sesi-latihan-mahasiswa",
          kerjakanLatihan: handleKerjakanLatihan
        })]
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SoalMahasiswa);

/***/ }),

/***/ 7066:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 5725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [786,47,286,992], () => (__webpack_exec__(7877)));
module.exports = __webpack_exports__;

})();