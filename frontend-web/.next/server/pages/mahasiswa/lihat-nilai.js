"use strict";
(() => {
var exports = {};
exports.id = 46;
exports.ids = [46];
exports.modules = {

/***/ 5372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






function EmptyData({
  image = antd__WEBPACK_IMPORTED_MODULE_1__.Empty.PRESENTED_IMAGE_SIMPLE,
  description = "Empty Data",
  withAction = true,
  textAction = "Create Now",
  toURL = ""
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Empty, {
      image: image,
      imageStyle: {
        height: 60
      },
      description: description,
      children: withAction && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
        type: "primary",
        onClick: () => router.push(toURL),
        children: textAction
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmptyData);

/***/ }),

/***/ 7711:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PageLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7786);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_EmptyData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5372);
/* harmony import */ var _utils_remote_data_mahasiswa_Nilai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3924);
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2047);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_remote_data_mahasiswa_Nilai__WEBPACK_IMPORTED_MODULE_5__]);
_utils_remote_data_mahasiswa_Nilai__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











function LihatNilai() {
  const {
    0: dataLatihan,
    1: setDataLatihan
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: isDataLatihanLoaded,
    1: setIsDataLatihanLoaded
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // TODO : Consume API GET dataLatihan yang sudah diselesaikan & hasil nilainya
    (0,_utils_remote_data_mahasiswa_Nilai__WEBPACK_IMPORTED_MODULE_5__/* .mockGetAllDaftarNilai */ .T)().then(responseData => {
      console.log(responseData);
      setDataLatihan(responseData.data);
      setIsDataLatihanLoaded(true);
    });
  }, []);

  const handleKerjakanLatihan = id => {
    router.push(`/mahasiswa/soal/${id}`);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("title", {
        children: "SQLearn | Mahasiswa - Nilai "
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_PageLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      role: "mahasiswa",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Row, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Col, {
          span: 24,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Card, {
            style: {
              minHeight: "75vh"
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Typography.Title, {
              level: 2,
              children: " Nilai Latihan "
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Divider, {}), dataLatihan.length > 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_List__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
              dataSource: dataLatihan,
              isLoading: !isDataLatihanLoaded,
              role: "sesi-latihan-mahasiswa",
              showDetail: true,
              kerjakanLatihan: handleKerjakanLatihan
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_EmptyData__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
              description: "Tidak ada Latihan yang telah dikerjakan",
              withAction: false
            })]
          })
        })
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LihatNilai);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3924:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ mockGetAllDaftarNilai)
/* harmony export */ });
/* unused harmony export getAllDaftarNilai */
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_0__]);
uuid__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
 // ? totalPercobaan ini adalah banyaknya jumlah test query yang dijalankan dalam setiap sesi pengerjaan mhs

const getAllDaftarNilai = username => {// TODO : API Request GET : URL ?username={username}
  // ? Output

  /* 
    { 
        jumlahSoal : number, 
        nilai : number,
        totalPercobaan : number
    }
    */
};

const mockGetAllDaftarNilai = async username => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [{
          id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
          nama: "Latihan 2",
          jumlahSoal: 5,
          durasi: "2 jam",
          deadline: "-",
          status: "selesai",
          nilai: 100,
          totalPercobaan: 4
        }]
      });
    }, 1000);
  });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7066:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 5725:
/***/ ((module) => {

module.exports = require("antd");

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

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [786,47], () => (__webpack_exec__(7711)));
module.exports = __webpack_exports__;

})();