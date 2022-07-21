"use strict";
(() => {
var exports = {};
exports.id = 885;
exports.ids = [885];
exports.modules = {

/***/ 9793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_PageLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7786);
/* harmony import */ var _utils_remote_data_mahasiswa_Beranda__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(992);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);










function UjianSelesai() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    0: dataPractice,
    1: setDataPractice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: isDataPracticeLoaded,
    1: setIsDataPracticeLoaded
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // ? Ini aslinya fetch data getJadwalByID, ambil dari router.query.idPaket
    (0,_utils_remote_data_mahasiswa_Beranda__WEBPACK_IMPORTED_MODULE_5__/* .mockGetAllPractices */ .we)().then(response => {
      // console.log(response.data, "dan", router.query.idPaket);
      setDataPractice(response.data.find(item => parseInt(item.id) === parseInt(router.query.idPaket)));
      setIsDataPracticeLoaded(true);
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.log(dataPractice);
  }, [dataPractice]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {}, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("title", {
        children: "SQLearn | Mahasiswa - Soal "
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_PageLayout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      role: "mahasiswa",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Card, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {
          justify: "center",
          align: "middle",
          style: {
            height: "65vh"
          },
          children: isDataPracticeLoaded ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {
              justify: "center",
              style: {
                margin: "1em 0"
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Typography.Title, {
                level: 4,
                children: ["Anda baru saja menyelesaikan", " "]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {
              justify: "center",
              style: {
                margin: "1em 0"
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Typography.Title, {
                level: 4,
                children: dataPractice === null || dataPractice === void 0 ? void 0 : dataPractice.nama
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {
              justify: "center",
              style: {
                margin: "1em 0"
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
                type: "primary",
                onClick: () => router.push("/mahasiswa/lihat-nilai"),
                children: "Lihat Nilai Saya"
              })
            })]
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
            active: true
          })
        })
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UjianSelesai);

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [786,992], () => (__webpack_exec__(9793)));
module.exports = __webpack_exports__;

})();