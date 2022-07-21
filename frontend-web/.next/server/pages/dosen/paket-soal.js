"use strict";
(() => {
var exports = {};
exports.id = 260;
exports.ids = [260];
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

/***/ 5420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ paket_soal)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: ./components/PageLayout.js + 1 modules
var PageLayout = __webpack_require__(7786);
// EXTERNAL MODULE: ./components/Modal.js
var Modal = __webpack_require__(9151);
// EXTERNAL MODULE: ./utils/remote-data/dosen/PaketSoalCRUD.js
var PaketSoalCRUD = __webpack_require__(8576);
// EXTERNAL MODULE: ./components/List.js
var List = __webpack_require__(2047);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/dosen/PaketSoal/FormTambahPaket.js
const _excluded = ["form", "setFormObj", "setVisible", "handleSubmit"],
      _excluded2 = ["kategori"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function FormTambahPaket(_ref) {
  let {
    form,
    setFormObj,
    setVisible,
    handleSubmit
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    0: selectedKategori,
    1: setSelectedKategori
  } = (0,external_react_.useState)("");

  const onFinish = _ref2 => {
    let {
      kategori
    } = _ref2,
        values = _objectWithoutProperties(_ref2, _excluded2);

    handleSubmit(_objectSpread({
      kategori: selectedKategori === "Close-Ended" ? 1 : 2
    }, values));
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  const onChangeKategori = kategori => setSelectedKategori(kategori);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Form, {
    onFinish: onFinish,
    layout: "vertical",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      gutter: 20,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "paket_nama",
          label: "Nama Paket",
          rules: [{
            required: true,
            message: "Masukkan nama Paket!"
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            prefix: /*#__PURE__*/jsx_runtime_.jsx(icons_.CodeSandboxOutlined, {}),
            placeholder: ` Contoh : Paket Soal E `
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
          span: 12,
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
            name: "kategori",
            label: "Kategori",
            rules: [{
              required: true,
              message: "Mohon masukkan nama Kategori!"
            }],
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Select, {
              placeholder: "Pilih Kategori . . .",
              style: {
                width: "200px"
              },
              onChange: onChangeKategori,
              children: [/*#__PURE__*/jsx_runtime_.jsx(Option, {
                children: "Open-Ended"
              }, "Open-Ended"), /*#__PURE__*/jsx_runtime_.jsx(Option, {
                children: "Close-Ended"
              }, "Close-Ended")]
            })
          })
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Divider, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      justify: "end",
      gutter: 10,
      style: {
        padding: 0,
        margin: 0
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
          onClick: handleCancel,
          children: "Cancel"
        }, "back")
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
          type: "primary",
          htmlType: "submit",
          children: "Submit"
        }, "submit")
      })]
    })]
  });
}

/* harmony default export */ const PaketSoal_FormTambahPaket = (FormTambahPaket);
;// CONCATENATED MODULE: ./components/dosen/PaketSoal/FormHapusPaket.js
const FormHapusPaket_excluded = ["form", "currentPaket", "setVisible", "handleSubmit"];

function FormHapusPaket_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = FormHapusPaket_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function FormHapusPaket_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function FormHapusPaket(_ref) {
  let {
    form,
    currentPaket,
    setVisible,
    handleSubmit
  } = _ref,
      props = FormHapusPaket_objectWithoutProperties(_ref, FormHapusPaket_excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      justify: "center",
      children: "Apakah Anda yakin ingin menghapus Paket ini ?"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      justify: "center",
      style: {
        marginTop: "1em"
      },
      gutter: 10,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
          ghost: true,
          type: "primary",
          onClick: () => setVisible(false),
          children: "Tidak"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
          type: "danger",
          ghost: true,
          onClick: () => handleSubmit(currentPaket),
          children: "Ya, Hapus"
        })
      })]
    })]
  });
}

/* harmony default export */ const PaketSoal_FormHapusPaket = (FormHapusPaket);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/RadioFilterCategory.js
var RadioFilterCategory = __webpack_require__(5286);
;// CONCATENATED MODULE: ./pages/dosen/paket-soal/index.js
















function PaketSoal() {
  const router = (0,router_.useRouter)();
  const {
    0: currentPaket,
    1: setCurrentPaket
  } = (0,external_react_.useState)({});
  const {
    0: formObj,
    1: setFormObj
  } = (0,external_react_.useState)({});
  const {
    0: dataPaket,
    1: setDataPaket
  } = (0,external_react_.useState)([]);
  const {
    0: isDataLoaded,
    1: setIsDataLoaded
  } = (0,external_react_.useState)(false);
  const {
    0: paketFiltered,
    1: setPaketFiltered
  } = (0,external_react_.useState)([]);
  const {
    0: isFilterActive,
    1: setIsFilterActive
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

  (0,external_react_.useEffect)(() => {
    (0,PaketSoalCRUD/* mockGetPaketSoal */.nA)().then(response => {
      setDataPaket(response.data);
      setIsDataLoaded(true);
    });
  }, []);
  (0,external_react_.useEffect)(() => {
    console.log(isAlertActive);
  }, [isAlertActive]);

  const previewPaket = id => {
    router.push(`/dosen/paket-soal/${id}`);
  };

  const tambahPaket = () => {
    setModalRole("tambah");
    handleToggleModal();
  };

  const deletePaket = paketObj => {
    setModalRole("delete");
    setCurrentPaket(paketObj);
    handleToggleModal();
  };

  const aksiTambahPaket = formPaket => {
    // TODO : Call POST API request dari PaketSoalCRUD.js
    handleToggleModal();
    handleToggleAlert();
    setAlertMessage(`Data ${formPaket.paket_nama} berhasil ditambahkan`);
    setTimeout(() => handleToggleAlert(false), 5000);
    console.log("Hasil submit tambah", formPaket);
  };

  const aksiDeletePaket = formPaket => {
    // TODO : Call DELETE API request dari PaketSoalCRUD.js
    // ...
    handleToggleModal();
    handleToggleAlert();
    setAlertMessage(`Data Paket ${formPaket.nama} berhasil dihapus`);
    setTimeout(() => handleToggleAlert(false), 5000);
    console.log("Data terhapus", formPaket);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "SQLearn | Dosen - Paket Paket"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(PageLayout/* default */.Z, {
      role: "dosen",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
        justify: "space-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Typography.Title, {
            level: 2,
            children: "Paket Soal"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Button, {
            type: "primary",
            onClick: tambahPaket,
            children: ["Tambah Paket ", /*#__PURE__*/jsx_runtime_.jsx(icons_.PlusCircleOutlined, {})]
          })
        })]
      }), isAlertActive && /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Alert, {
        message: alertMessage,
        type: alertStatus,
        closable: true,
        showIcon: true,
        banner: true,
        style: {
          marginBottom: "1em"
        }
      }), isModalVisible && /*#__PURE__*/jsx_runtime_.jsx(Modal/* default */.Z, {
        role: modalRole,
        entity: "Paket Soal",
        visible: isModalVisible,
        setVisible: setIsModalVisible,
        confirmLoading: isModalLoading,
        setConfirmLoading: setIsModalLoading,
        modalText: modalText,
        setModalText: setModalText,
        modalContent: modalRole === "tambah" ? /*#__PURE__*/jsx_runtime_.jsx(PaketSoal_FormTambahPaket, {
          handleSubmit: aksiTambahPaket,
          setVisible: setIsModalVisible,
          setFormObj: setFormObj
        }) : /*#__PURE__*/jsx_runtime_.jsx(PaketSoal_FormHapusPaket, {
          handleSubmit: aksiDeletePaket,
          setVisible: setIsModalVisible,
          currentPaket: currentPaket
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(RadioFilterCategory/* default */.Z, {
        data: dataPaket,
        setIsFilterActive: setIsFilterActive,
        setEntityFiltered: setPaketFiltered
      }), /*#__PURE__*/jsx_runtime_.jsx(List/* default */.Z, {
        isLoading: !isDataLoaded,
        dataSource: isFilterActive ? paketFiltered : dataPaket,
        role: "paket-soal-dosen",
        previewPaket: previewPaket,
        deletePaket: deletePaket
      })]
    })]
  });
}

/* harmony default export */ const paket_soal = (PaketSoal);

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
var __webpack_exports__ = __webpack_require__.X(0, [786,47,286,576], () => (__webpack_exec__(5420)));
module.exports = __webpack_exports__;

})();