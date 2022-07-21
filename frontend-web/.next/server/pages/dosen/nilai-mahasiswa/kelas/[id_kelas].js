"use strict";
(() => {
var exports = {};
exports.id = 58;
exports.ids = [58];
exports.modules = {

/***/ 8514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_kelas_)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: ./components/PageLayout.js + 1 modules
var PageLayout = __webpack_require__(7786);
// EXTERNAL MODULE: ./components/List.js
var List = __webpack_require__(2047);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./utils/remote-data/dosen/NilaiMahasiswaCRUD.js
var NilaiMahasiswaCRUD = __webpack_require__(265);
// EXTERNAL MODULE: ./components/Modal.js
var Modal = __webpack_require__(9151);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/dosen/NilaiMhs/PreviewLogMahasiswa.js





const COLUMNS = [{
  title: "Banyak Percobaan",
  dataIndex: "attemptTestQuery",
  key: "attemptTestQuery"
}, {
  title: "Log Jawaban",
  dataIndex: "studentAnswer",
  key: "studentAnswer"
}, {
  title: "Tipe",
  dataIndex: "type",
  key: "type"
}, {
  title: "Waktu Tersisa",
  dataIndex: "timerLeft",
  key: "timerLeft"
}];

function PreviewLogMahasiswa({
  currentNilaiMhs
}) {
  var _currentNilaiMhs$deta;

  const {
    Panel
  } = external_antd_.Collapse;
  const {
    0: isDataJadwalLoaded,
    1: setIsDataJadwalLoaded
  } = (0,external_react_.useState)(false);
  const {
    0: currentDataLog,
    1: setCurrentDataLog
  } = (0,external_react_.useState)([]);
  const {
    0: currentTables,
    1: setCurrentTables
  } = (0,external_react_.useState)([]);
  console.log("preview log mahasiswa dibuka", currentNilaiMhs);
  (0,external_react_.useEffect)(() => {
    setCurrentTables(currentNilaiMhs === null || currentNilaiMhs === void 0 ? void 0 : currentNilaiMhs.detail);
  }, [currentNilaiMhs]);

  function onChangeAccordion(keyTable) {
    var _currentTables$keyTab;

    console.log("terbuka akoridobn");
    setCurrentDataLog((_currentTables$keyTab = currentTables[keyTable]) === null || _currentTables$keyTab === void 0 ? void 0 : _currentTables$keyTab.logData);
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Typography.Title, {
      level: 3,
      children: [currentNilaiMhs === null || currentNilaiMhs === void 0 ? void 0 : currentNilaiMhs.nama, " "]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Typography.Title, {
      level: 5,
      style: {
        textAlign: "center",
        marginBottom: "1em"
      },
      children: "Latihan yang dikerjakan"
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Collapse, {
      accordion: true,
      onChange: onChangeAccordion,
      children: currentNilaiMhs === null || currentNilaiMhs === void 0 ? void 0 : (_currentNilaiMhs$deta = currentNilaiMhs.detail) === null || _currentNilaiMhs$deta === void 0 ? void 0 : _currentNilaiMhs$deta.map((item, id) => /*#__PURE__*/jsx_runtime_.jsx(Panel, {
        header: `Jadwal ${item.jadwalID}`,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Table, {
          columns: COLUMNS,
          dataSource: currentDataLog
        })
      }, id))
    })]
  });
}

/* harmony default export */ const NilaiMhs_PreviewLogMahasiswa = (PreviewLogMahasiswa);
;// CONCATENATED MODULE: ./pages/dosen/nilai-mahasiswa/kelas/[id_kelas].js














function PreviewNilaiTiapKelas() {
  const router = (0,router_.useRouter)();
  const {
    0: selectedMhs,
    1: setSelectedMhs
  } = (0,external_react_.useState)({});
  const {
    0: dataNilaiMhs,
    1: setDataNilaiMhs
  } = (0,external_react_.useState)({});
  const {
    0: isDataMhsLoaded,
    1: setIsDataMhsLoaded
  } = (0,external_react_.useState)(false);
  const {
    0: dataKelas,
    1: setDataKelas
  } = (0,external_react_.useState)({});
  const {
    0: isDataKelasLoaded,
    1: setIsDataKelasLoaded
  } = (0,external_react_.useState)(false);
  const {
    0: isModalVisible,
    1: setIsModalVisible
  } = (0,external_react_.useState)(false);
  const {
    0: isModalLoading,
    1: setIsModalLoading
  } = (0,external_react_.useState)(false);
  const {
    0: modalRole,
    1: setModalRole
  } = (0,external_react_.useState)("");
  const {
    0: modalText,
    1: setModalText
  } = (0,external_react_.useState)("");
  const {
    0: isAlertActive,
    1: setIsAlertActive
  } = (0,external_react_.useState)(false); // ? Mock alert status dan message

  const {
    0: alertStatus,
    1: setAlertStatus
  } = (0,external_react_.useState)("success");
  const {
    0: alertMessage,
    1: setAlertMessage
  } = (0,external_react_.useState)("Alert muncul");

  const handleToggleModal = () => setIsModalVisible(prev => !prev);

  const handleToggleAlert = () => setIsAlertActive(prev => !prev);

  const previewNilaiMhs = nilaiMhsObj => {
    setSelectedMhs(nilaiMhsObj);
    setModalRole("preview");
    handleToggleModal(); // setModalText(
    //   `Nilai Rata rata ${nilaiMhsObj.nama} adalah ${nilaiMhsObj.avgNilai}`
    // );
  };

  (0,external_react_.useEffect)(() => {
    console.log("ini router", router === null || router === void 0 ? void 0 : router.query);
    (0,NilaiMahasiswaCRUD/* mockKelasDiajar */.Qi)().then(response => {
      var _response$data;

      setDataKelas(response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.find(item => {
        var _router$query;

        return parseInt(item.id) === parseInt(router === null || router === void 0 ? void 0 : (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.id_kelas);
      }));
      setIsDataKelasLoaded(true);
    });
    (0,NilaiMahasiswaCRUD/* mockGetNilaiTiapKelas */.Fz)().then(response => {
      setDataNilaiMhs(response === null || response === void 0 ? void 0 : response.data);
      setIsDataMhsLoaded(true);
    });
  }, [router.query.id_kelas]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "SQLearn | Dosen - Detail Nilai Kelas "
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(PageLayout/* default */.Z, {
      role: "dosen",
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
        justify: "space-between",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
            gutter: 30,
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
              children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Tooltip, {
                title: "Kembali",
                placement: "bottom",
                children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
                  onClick: () => router.push("/dosen/nilai-mahasiswa"),
                  style: {
                    marginTop: ".2em",
                    backgroundColor: "#231e8f",
                    color: "white"
                  },
                  icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.LeftOutlined, {})
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
              children: isDataKelasLoaded ? /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Typography.Title, {
                level: 2,
                children: dataKelas === null || dataKelas === void 0 ? void 0 : dataKelas.nama
              }) : /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Skeleton, {
                active: true,
                paragraph: false,
                title: {
                  width: "20vw"
                },
                style: {
                  marginBottom: "1em"
                }
              })
            })]
          })
        })
      }), isAlertActive && /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Alert, {
        message: alertMessage,
        type: alertStatus,
        closable: true,
        showIcon: true,
        banner: true,
        style: {
          marginBottom: "1em"
        }
      }), /*#__PURE__*/jsx_runtime_.jsx(Modal/* default */.Z, {
        role: modalRole,
        entity: "Log Mahasiswa",
        visible: isModalVisible,
        setVisible: setIsModalVisible,
        confirmLoading: isModalLoading,
        setConfirmLoading: setIsModalLoading // modalText={modalText}
        ,
        modalContent: /*#__PURE__*/jsx_runtime_.jsx(NilaiMhs_PreviewLogMahasiswa, {
          currentNilaiMhs: selectedMhs
        }),
        setModalText: setModalText
      }), /*#__PURE__*/jsx_runtime_.jsx(List/* default */.Z, {
        displayAllData: true,
        role: "lihat-nilai",
        isLoading: !isDataMhsLoaded,
        dataSource: dataNilaiMhs,
        previewDetailNilai: previewNilaiMhs
      })]
    })]
  });
}

/* harmony default export */ const _id_kelas_ = (PreviewNilaiTiapKelas);

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [786,47,593,265], () => (__webpack_exec__(8514)));
module.exports = __webpack_exports__;

})();