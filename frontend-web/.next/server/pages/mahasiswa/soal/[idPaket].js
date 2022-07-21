"use strict";
(() => {
var exports = {};
exports.id = 25;
exports.ids = [25];
exports.modules = {

/***/ 2761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_PageLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7786);
/* harmony import */ var _utils_remote_data_mahasiswa_Soal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8489);
/* harmony import */ var _utils_remote_data_mahasiswa_Beranda__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(992);
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2047);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_context_JadwalContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5904);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);














function Practice() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    addTimer
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_utils_context_JadwalContext__WEBPACK_IMPORTED_MODULE_9__/* .JadwalContext */ .e);
  const {
    0: dataPractice,
    1: setDataPractice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const {
    0: isTimerReady,
    1: setIsTimerReady
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: timerFromServer,
    1: setTimerFromServer
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: isDataPracticeLoaded,
    1: setIsDataPracticeLoaded
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); //?  Ini dataListPertanyaan by jadwal

  const {
    0: dataListPertanyaan,
    1: setDataListPertanyaan
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: isDataListPertanyaanLoaded,
    1: setIsDataListPertanyaanLoaded
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // ? Ini aslinya fetch data getJadwalByID, ambil dari router.query.idPaket
    (0,_utils_remote_data_mahasiswa_Beranda__WEBPACK_IMPORTED_MODULE_6__/* .mockGetAllPractices */ .we)().then(response => {
      // console.log(response.data, "dan", router.query.idPaket);
      setDataPractice(response.data.find(item => parseInt(item.id) === parseInt(router.query.idPaket)));
      setIsDataPracticeLoaded(true);
    });
  }, [router.query.idPaket]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // ? Ini aslinya fetch data getQuestionByJadwal
    (0,_utils_remote_data_mahasiswa_Soal__WEBPACK_IMPORTED_MODULE_5__/* .mockGetSoalByCategory */ .yE)(dataPractice === null || dataPractice === void 0 ? void 0 : dataPractice.kategori).then(response => {
      console.log(response.data[0]);
      setDataListPertanyaan(response.data);
      setIsDataListPertanyaanLoaded(true);
    });
  }, [dataPractice, router.query.idPaket]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setTimerFromServer(moment__WEBPACK_IMPORTED_MODULE_8___default().utc(moment__WEBPACK_IMPORTED_MODULE_8___default()(dataPractice === null || dataPractice === void 0 ? void 0 : dataPractice.tanggal_akhir, "YYYY-MM-DD HH:mm:ss").diff(moment__WEBPACK_IMPORTED_MODULE_8___default()(dataPractice === null || dataPractice === void 0 ? void 0 : dataPractice.tanggal_mulai, "YYYY-MM-DD HH:mm:ss"))).format("HH:mm:ss"));
    setIsTimerReady(true);
  }, [isDataPracticeLoaded, dataPractice]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    addTimer(({
      text,
      format
    }) => {
      return {
        text: timerFromServer,
        format: {
          hour: parseInt(timerFromServer.split(":")[0]),
          minute: parseInt(timerFromServer.split(":")[1]),
          second: parseInt(timerFromServer.split(":")[2])
        }
      };
    });
  }, [isTimerReady, timerFromServer]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.clear();
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("title", {
        children: "SQLearn | Mahasiswa - Soal "
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_PageLayout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      role: "mahasiswa",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Card, {
        children: [isDataPracticeLoaded ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Row, {
          justify: "space-between",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Col, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Typography.Title, {
              level: 3,
              children: dataPractice === null || dataPractice === void 0 ? void 0 : dataPractice.nama
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Col, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Badge.Ribbon, {
              color: (dataPractice === null || dataPractice === void 0 ? void 0 : dataPractice.kategori) === "Close-Ended" ? "geekblue" : "purple",
              text: dataPractice === null || dataPractice === void 0 ? void 0 : dataPractice.kategori,
              placement: "end"
            })
          })]
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
          active: true,
          paragraph: false,
          title: {
            width: "20vw"
          },
          style: {
            marginBottom: "1em"
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Row, {
          children: "Lorem ipsumm ini deskripsi tentang latihan yang akan dikerjakan...."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Row, {
          style: {
            marginTop: "2em"
          },
          justify: "space-between",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Col, {
            children: [" ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Typography.Title, {
              level: 4,
              children: "List Pertanyaan"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Col, {
            children: isTimerReady && isDataPracticeLoaded ? timerFromServer : "Loading . . ."
          })]
        }), isDataListPertanyaanLoaded && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_List__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
          dataSource: dataListPertanyaan,
          role: "data-soal-mahasiswa",
          isLoading: !isDataListPertanyaanLoaded //  ? route : /mahasiswa/soal/:paketID/pertanyaan/:soalID
          ,
          kerjakanLatihan: id => router.push(`/mahasiswa/soal/${parseInt(router.query.idPaket)}/pertanyaan/${dataListPertanyaan[0].id}`)
        })]
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Practice);

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [786,47,992,113], () => (__webpack_exec__(2761)));
module.exports = __webpack_exports__;

})();