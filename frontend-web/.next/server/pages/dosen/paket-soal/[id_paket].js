"use strict";
(() => {
var exports = {};
exports.id = 109;
exports.ids = [109];
exports.modules = {

/***/ 3602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_paket_)
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
// EXTERNAL MODULE: ./components/Modal.js
var Modal = __webpack_require__(9151);
// EXTERNAL MODULE: ./utils/remote-data/dosen/PaketSoalCRUD.js
var PaketSoalCRUD = __webpack_require__(8576);
// EXTERNAL MODULE: ./components/List.js
var List = __webpack_require__(2047);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./utils/remote-data/dosen/StudiKasus.js
var StudiKasus = __webpack_require__(5533);
// EXTERNAL MODULE: ./utils/common.js
var common = __webpack_require__(3242);
// EXTERNAL MODULE: ./utils/remote-data/dosen/SoalCRUD.js
var SoalCRUD = __webpack_require__(410);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/dosen/Soal/FormPilihSoal.js
const _excluded = ["setFormObj", "setVisible", "handleSubmit", "studiKasus"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const columns = [{
  title: "id",
  dataIndex: "idSoal"
}, {
  title: "Kategori",
  dataIndex: "kategori"
}, {
  title: "Studi Kasus",
  dataIndex: "studi_kasus"
}, {
  title: "Pertanyaan",
  dataIndex: "teksSoal"
}];

function FormPilihSoal(_ref) {
  let {
    setFormObj,
    setVisible,
    handleSubmit,
    studiKasus
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [form] = external_antd_.Form.useForm(); // TODO : Mengerjakan list pertanyaan yang ada untuk setiap studi kasus yang dipilih

  const {
    Option
  } = external_antd_.Select;
  const {
    0: dataStudiKasus,
    1: setDataStudiKasus
  } = (0,external_react_.useState)([]);
  const {
    0: selectedStudiKasus,
    1: setSelectedStudiKasus
  } = (0,external_react_.useState)(studiKasus);
  const {
    0: dataSoalByStudiKasus,
    1: setDataSoalByStudiKasus
  } = (0,external_react_.useState)([]);

  const onChangeStudiKasus = kelas => {
    console.log(kelas);
    setSelectedStudiKasus(kelas);
  };

  const rowSelection = {
    onChange: (_, selectedRows) => {
      form.setFieldsValue({
        soal: selectedRows[0]
      });
    }
  };
  (0,external_react_.useEffect)(() => {
    (0,StudiKasus/* mockGetAllStudiKasus */.Y)().then(response => setDataStudiKasus(response.data));
    form.setFieldsValue({
      studi_kasus_nama: studiKasus
    });
    (0,SoalCRUD/* getSoal */.$q)().then(response => {
      let tempSoalFiltered = response.data.filter(item => item.studi_kasus === selectedStudiKasus);
      tempSoalFiltered = tempSoalFiltered.map(item => {
        return _objectSpread({
          key: item.idSoal
        }, item);
      });
      setDataSoalByStudiKasus(tempSoalFiltered);
    });
  }, []);

  const onFinish = values => {
    setFormObj(values);
    handleSubmit(values);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Form, {
    form: form,
    onFinish: onFinish,
    layout: "vertical",
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
      name: "studi_kasus_nama",
      label: "Studi Kasus",
      tooltip: {
        title: `Soal ini menggunakan  ${(0,common/* isObjectEmpty */.nK)(selectedStudiKasus) ? " yang dipilih " : selectedStudiKasus}`
      },
      rules: [{
        required: true,
        message: "Mohon pilih Studi Kasus!"
      }],
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Select, {
        placeholder: "Pilih Studi Kasus . . .",
        onChange: onChangeStudiKasus,
        style: {
          width: "200px"
        },
        disabled: true,
        children: dataStudiKasus === null || dataStudiKasus === void 0 ? void 0 : dataStudiKasus.map(item => /*#__PURE__*/jsx_runtime_.jsx(Option, {
          children: item.nama
        }, item.nama))
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [`Ini list pertanyaan yang ada untuk ${selectedStudiKasus}`, /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Table, {
        rowSelection: _objectSpread({
          type: "radio"
        }, rowSelection),
        columns: columns,
        dataSource: dataSoalByStudiKasus
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

/* harmony default export */ const Soal_FormPilihSoal = (FormPilihSoal);
// EXTERNAL MODULE: ./components/dosen/Soal/FormEditSoal.js
var FormEditSoal = __webpack_require__(4138);
// EXTERNAL MODULE: ./components/dosen/Soal/FormHapusSoal.js
var FormHapusSoal = __webpack_require__(6971);
;// CONCATENATED MODULE: ./components/dosen/Soal/FormEditPiihSoal.js
const FormEditPiihSoal_excluded = ["currentSoal", "setFormObj", "setVisible", "handleSubmit"];

function FormEditPiihSoal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function FormEditPiihSoal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { FormEditPiihSoal_ownKeys(Object(source), true).forEach(function (key) { FormEditPiihSoal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { FormEditPiihSoal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function FormEditPiihSoal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function FormEditPiihSoal_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = FormEditPiihSoal_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function FormEditPiihSoal_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const FormEditPiihSoal_columns = [{
  title: "id",
  dataIndex: "idSoal"
}, {
  title: "Kategori",
  dataIndex: "kategori"
}, {
  title: "Studi Kasus",
  dataIndex: "studi_kasus"
}, {
  title: "Pertanyaan",
  dataIndex: "teksSoal"
}];

function FormEditPilihSoal(_ref) {
  let {
    currentSoal,
    setFormObj,
    setVisible,
    handleSubmit
  } = _ref,
      props = FormEditPiihSoal_objectWithoutProperties(_ref, FormEditPiihSoal_excluded);

  // TODO : Mengerjakan list pertanyaan yang ada untuk setiap studi kasus yang dipilih
  const {
    Option
  } = external_antd_.Select;
  const [form] = external_antd_.Form.useForm();
  const {
    0: dataStudiKasus,
    1: setDataStudiKasus
  } = (0,external_react_.useState)([]);
  const {
    0: loadOnChangeStudiKasus,
    1: setLoadOnChangeStudiKasus
  } = (0,external_react_.useState)(false);
  const {
    0: selectedStudiKasus,
    1: setSelectedStudiKasus
  } = (0,external_react_.useState)(currentSoal === null || currentSoal === void 0 ? void 0 : currentSoal.studi_kasus);
  const {
    0: dataSoalByStudiKasus,
    1: setDataSoalByStudiKasus
  } = (0,external_react_.useState)([]);

  const onChangeStudiKasus = kelas => {
    console.log(kelas);
    setSelectedStudiKasus(kelas);
  };

  const rowSelection = {
    onChange: (_, selectedRows) => {
      form.setFieldsValue({
        soal: selectedRows[0]
      });
    }
  };
  (0,external_react_.useEffect)(() => {
    (0,StudiKasus/* mockGetAllStudiKasus */.Y)().then(response => setDataStudiKasus(response.data));
  }, []);
  (0,external_react_.useEffect)(() => {
    setLoadOnChangeStudiKasus(false);
    (0,SoalCRUD/* getSoal */.$q)().then(response => {
      let tempSoalFiltered = response.data.filter(item => item.studi_kasus === selectedStudiKasus);
      tempSoalFiltered = tempSoalFiltered.map(item => {
        return FormEditPiihSoal_objectSpread({
          key: item.idSoal
        }, item);
      });
      setDataSoalByStudiKasus(tempSoalFiltered);
      setLoadOnChangeStudiKasus(true);
    });
  }, [selectedStudiKasus]);
  (0,external_react_.useEffect)(() => {
    console.log(dataStudiKasus);
  }, [dataStudiKasus]);

  const onFinish = values => {
    console.log(values);
    setFormObj(values);
    handleSubmit(values);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  (0,external_react_.useEffect)(() => {
    console.log(currentSoal);
    form.setFieldsValue({
      studi_kasus_nama: currentSoal === null || currentSoal === void 0 ? void 0 : currentSoal.studi_kasus
    });
  }, [currentSoal]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Form, {
    form: form,
    onFinish: onFinish,
    layout: "vertical",
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
      name: "studi_kasus_nama",
      label: "Studi Kasus",
      tooltip: {
        title: `Soal ini menggunakan  ${(0,common/* isObjectEmpty */.nK)(selectedStudiKasus) ? " yang dipilih " : selectedStudiKasus}`
      },
      rules: [{
        required: true,
        message: "Mohon pilih Studi Kasus!"
      }],
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Select, {
        disabled: true,
        placeholder: "Pilih Studi Kasus . . .",
        onChange: onChangeStudiKasus,
        style: {
          width: "200px"
        },
        children: dataStudiKasus === null || dataStudiKasus === void 0 ? void 0 : dataStudiKasus.map(item => /*#__PURE__*/jsx_runtime_.jsx(Option, {
          children: item.nama
        }, item.nama))
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
      name: "soal",
      label: `Ganti Soal di ${selectedStudiKasus}`,
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Table, {
        rowSelection: FormEditPiihSoal_objectSpread({
          type: "radio"
        }, rowSelection),
        columns: FormEditPiihSoal_columns,
        dataSource: dataSoalByStudiKasus
      })
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

/* harmony default export */ const FormEditPiihSoal = (FormEditPilihSoal);
;// CONCATENATED MODULE: ./pages/dosen/paket-soal/[id_paket].js

















function PreviewPaket() {
  const router = (0,router_.useRouter)();
  const {
    0: dataPaket,
    1: setDataPaket
  } = (0,external_react_.useState)({});
  const {
    0: isDataLoaded,
    1: setIsDataLoaded
  } = (0,external_react_.useState)(false);
  const {
    0: currentSoal,
    1: setCurrentSoal
  } = (0,external_react_.useState)({});
  const {
    0: formObj,
    1: setFormObj
  } = (0,external_react_.useState)({});
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
      var _response$data;

      setDataPaket(response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.find(item => {
        var _router$query;

        return parseInt(item === null || item === void 0 ? void 0 : item.id_paket) === parseInt(router === null || router === void 0 ? void 0 : (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.id_paket);
      }));
      setIsDataLoaded(true);
    });
  }, [router.query.id_paket]);

  const tambahSoal = () => {
    setModalRole("tambah");
    handleToggleModal();
  };

  const editPilihSoal = soalObj => {
    console.log(soalObj);
    setModalRole("edit");
    setCurrentSoal(soalObj);
    handleToggleModal();
  };

  const deleteSoal = soalObj => {
    setModalRole("delete");
    setCurrentSoal(soalObj);
    handleToggleModal();
  };

  const aksiTambahSoal = formSoal => {
    // TODO : Call POST API request dari SoalCRUD.js
    // ...
    handleToggleModal();
    handleToggleAlert();
    setAlertMessage(`Data ${formSoal.nama} berhasil ditambahkan`);
    console.log("Hasil submit tambah", formSoal);
  };

  const aksiEditSoal = formSoal => {
    console.log("ini currentSoal", currentSoal); // TODO : Call PUT API request dari SoalCRUD.js
    // ...

    handleToggleModal();
    setAlertMessage(`Soal berhasil diubah`);
    handleToggleAlert();
    console.log("Soal berhasil diubah", formSoal);
  };

  const aksiDeleteSoal = formSoal => {
    // TODO : Call DELETE API request dari SoalCRUD.js
    // ...
    handleToggleModal();
    setAlertMessage(`Data ${formSoal.nama} berhasil dihapus`);
    handleToggleAlert();
    console.log("Data terhapus", formSoal);
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
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
            gutter: 30,
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
              children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Tooltip, {
                title: "Kembali",
                placement: "bottom",
                children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
                  onClick: () => router.push("/dosen/paket-soal"),
                  style: {
                    marginTop: ".2em",
                    backgroundColor: "#231e8f",
                    color: "white"
                  },
                  icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.LeftOutlined, {})
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
              children: isDataLoaded ? /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Typography.Title, {
                level: 2,
                children: dataPaket === null || dataPaket === void 0 ? void 0 : dataPaket.nama
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
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Button, {
            type: "primary",
            onClick: tambahSoal,
            children: ["Tambah Soal ", /*#__PURE__*/jsx_runtime_.jsx(icons_.PlusCircleOutlined, {})]
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
      }), /*#__PURE__*/jsx_runtime_.jsx(Modal/* default */.Z, {
        role: modalRole,
        entity: `Soal untuk ${dataPaket === null || dataPaket === void 0 ? void 0 : dataPaket.nama}`,
        visible: isModalVisible,
        setVisible: setIsModalVisible,
        confirmLoading: isModalLoading,
        setConfirmLoading: setIsModalLoading,
        setModalText: setModalText,
        modalContent: modalRole === "tambah" ? /*#__PURE__*/jsx_runtime_.jsx(Soal_FormPilihSoal, {
          handleSubmit: aksiTambahSoal,
          setVisible: setIsModalVisible,
          setFormObj: setFormObj,
          studiKasus: dataPaket === null || dataPaket === void 0 ? void 0 : dataPaket.studi_kasus
        }) : modalRole === "edit" ? /*#__PURE__*/jsx_runtime_.jsx(FormEditPiihSoal, {
          handleSubmit: aksiEditSoal,
          setVisible: setIsModalVisible,
          setFormObj: setFormObj,
          currentSoal: currentSoal
        }) : /*#__PURE__*/jsx_runtime_.jsx(FormHapusSoal/* default */.Z, {
          handleSubmit: aksiDeleteSoal,
          setVisible: setIsModalVisible,
          currentSoal: currentSoal
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(List/* default */.Z, {
        isLoading: !isDataLoaded,
        dataSource: (dataPaket === null || dataPaket === void 0 ? void 0 : dataPaket.pertanyaan) || [],
        role: "soal-tiap-paket-dosen",
        editPilihSoal: editPilihSoal,
        deleteSoal: deleteSoal
      })]
    })]
  });
}

/* harmony default export */ const _id_paket_ = (PreviewPaket);

/***/ }),

/***/ 7066:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 5725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 5723:
/***/ ((module) => {

module.exports = require("antd/lib/form/Form");

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
var __webpack_exports__ = __webpack_require__.X(0, [786,47,533,576,110], () => (__webpack_exec__(3602)));
module.exports = __webpack_exports__;

})();