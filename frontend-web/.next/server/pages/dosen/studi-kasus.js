"use strict";
(() => {
var exports = {};
exports.id = 618;
exports.ids = [618];
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

/***/ 4565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ studi_kasus)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/PageLayout.js + 1 modules
var PageLayout = __webpack_require__(7786);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: ./components/Modal.js
var Modal = __webpack_require__(9151);
// EXTERNAL MODULE: ./components/List.js
var List = __webpack_require__(2047);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/dosen/StudiKasus/FormHapusStudiKasus.js
const _excluded = ["form", "currentStudiKasus", "setVisible", "handleSubmit"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function FormHapusStudiKasus(_ref) {
  let {
    form,
    currentStudiKasus,
    setVisible,
    handleSubmit
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      justify: "center",
      children: `Apakah Anda yakin ingin menghapus ${currentStudiKasus.nama} ?`
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
          onClick: () => handleSubmit(currentStudiKasus),
          children: "Ya, Hapus"
        })
      })]
    })]
  });
}

/* harmony default export */ const StudiKasus_FormHapusStudiKasus = (FormHapusStudiKasus);
;// CONCATENATED MODULE: ./components/dosen/StudiKasus/FormTambahStudiKasus.js
const FormTambahStudiKasus_excluded = ["form", "setFormObj", "setVisible", "handleSubmit"];

function FormTambahStudiKasus_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = FormTambahStudiKasus_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function FormTambahStudiKasus_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function FormTambahStudiKasus(_ref) {
  let {
    form,
    setFormObj,
    setVisible,
    handleSubmit
  } = _ref,
      props = FormTambahStudiKasus_objectWithoutProperties(_ref, FormTambahStudiKasus_excluded);

  const normFile = e => console.log("Upload event:", e);

  const onFinish = values => {
    setFormObj(values);
    handleSubmit(values);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  const validationSQLFile = file => {
    if (!file.name.includes(".sql")) {
      console.log("bukan sql");
      external_antd_.message.error(`${file.name} is not a .sql file`);
    }

    return file.name.includes(".sql") ? true : external_antd_.Upload.LIST_IGNORE;
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Form, {
    onFinish: onFinish,
    layout: "vertical",
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      gutter: 20,
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        span: 12,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "studi_kasus_nama",
          label: "Nama Studi Kasus",
          rules: [{
            required: true,
            message: "Mohon masukkan nama Studi Kasus!"
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            prefix: /*#__PURE__*/jsx_runtime_.jsx(icons_.DatabaseOutlined, {}),
            placeholder: ` Studi Kasus . . .`
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
      label: "Database",
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
        name: "database",
        valuePropName: "fileList",
        getValueFromEvent: normFile,
        noStyle: true,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Upload.Dragger, {
          multiple: false,
          beforeUpload: file => validationSQLFile(file),
          name: "files",
          action: "/upload.do",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "ant-upload-drag-icon",
            children: /*#__PURE__*/jsx_runtime_.jsx(icons_.InboxOutlined, {})
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "ant-upload-text",
            children: "Click or drag file to this area to upload"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "ant-upload-hint",
            children: "Hanya bisa upload file .sql "
          })]
        })
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

/* harmony default export */ const StudiKasus_FormTambahStudiKasus = (FormTambahStudiKasus);
// EXTERNAL MODULE: ./utils/remote-data/dosen/StudiKasus.js
var StudiKasus = __webpack_require__(5533);
;// CONCATENATED MODULE: ./components/dosen/StudiKasus/PreviewStudiKasus.js







function PreviewStudiKasus({
  currentStudiKasus
}) {
  const {
    Panel
  } = external_antd_.Collapse;
  const {
    0: selectedDB,
    1: setSelectedDB
  } = (0,external_react_.useState)({});
  const {
    0: selectedTable,
    1: setSelectedTable
  } = (0,external_react_.useState)({});
  const {
    0: currentTables,
    1: setCurrentTables
  } = (0,external_react_.useState)([]);
  const {
    0: currentColumns,
    1: setCurrentColumns
  } = (0,external_react_.useState)([]);
  const {
    0: currentData,
    1: setCurrentData
  } = (0,external_react_.useState)([]);
  const {
    0: isDataLoaded,
    1: setIsDataLoaded
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    setIsDataLoaded(false);
    (0,StudiKasus/* mockGetAllDataStudiKasus */.e0)().then(response => {
      var _response$data;

      setSelectedDB(response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.find(item => item.db_id === currentStudiKasus.db_id));
      setIsDataLoaded(true);
    });
    setCurrentColumns([]);
    setCurrentData([]);
  }, [currentStudiKasus]);
  (0,external_react_.useEffect)(() => {
    setCurrentTables(selectedDB === null || selectedDB === void 0 ? void 0 : selectedDB.content);
  }, [selectedDB]);

  function onChangeTable(keyTable) {
    var _currentTables$keyTab, _currentTables$keyTab2, _currentTables$keyTab3;

    setCurrentColumns((_currentTables$keyTab = currentTables[keyTable]) === null || _currentTables$keyTab === void 0 ? void 0 : (_currentTables$keyTab2 = _currentTables$keyTab.column) === null || _currentTables$keyTab2 === void 0 ? void 0 : _currentTables$keyTab2.map(item => {
      return {
        title: item,
        dataIndex: item.toLowerCase(),
        key: item.toLowerCase()
      };
    }));
    setCurrentData((_currentTables$keyTab3 = currentTables[keyTable]) === null || _currentTables$keyTab3 === void 0 ? void 0 : _currentTables$keyTab3.data);
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Typography.Title, {
      level: 3,
      children: ["Database ", currentStudiKasus === null || currentStudiKasus === void 0 ? void 0 : currentStudiKasus.database, " "]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Typography.Title, {
      level: 5,
      style: {
        textAlign: "center",
        marginBottom: "1em"
      },
      children: "Daftar Tabel"
    }), isDataLoaded ? /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Collapse, {
      accordion: true,
      onChange: onChangeTable,
      children: currentTables === null || currentTables === void 0 ? void 0 : currentTables.map((item, id) => /*#__PURE__*/jsx_runtime_.jsx(Panel, {
        header: `Tabel ${item.table}`,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Table, {
          columns: currentColumns,
          dataSource: currentData
        })
      }, id))
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      style: {
        height: "20vh"
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Skeleton, {
        active: true,
        paragraph: false,
        title: {
          width: "30rem"
        },
        style: {
          marginBottom: "1em"
        }
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Skeleton, {
        active: true,
        paragraph: false,
        title: {
          width: "30rem"
        },
        style: {
          marginBottom: "1em"
        }
      })]
    })]
  });
}

/* harmony default export */ const StudiKasus_PreviewStudiKasus = (PreviewStudiKasus);
;// CONCATENATED MODULE: ./pages/dosen/studi-kasus.js















function studi_kasus_StudiKasus() {
  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)([]);
  const {
    0: isDataLoaded,
    1: setDataLoaded
  } = (0,external_react_.useState)(false);
  const {
    0: formObj,
    1: setFormObj
  } = (0,external_react_.useState)({});
  const {
    0: currentStudiKasus,
    1: setCurrentStudiKasus
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
  (0,external_react_.useEffect)(() => {
    (0,StudiKasus/* mockGetAllStudiKasus */.Y)().then(response => {
      setData(response.data);
      setDataLoaded(true);
    });
  }, []);

  const handleToggleModal = () => setIsModalVisible(prev => !prev);

  const handleToggleAlert = () => setIsAlertActive(prev => !prev);

  const previewStudiKasus = studiKasusObj => {
    setCurrentStudiKasus(studiKasusObj);
    setModalRole("preview");
    handleToggleModal();
  };

  const tambahStudiKasus = () => {
    setModalRole("tambah");
    handleToggleModal();
  };

  const editStudiKasus = studiKasusObj => {
    setModalRole("edit");
    setCurrentStudiKasus(studiKasusObj);
    handleToggleModal();
  };

  const deleteStudiKasus = studiKasusObj => {
    setModalRole("delete");
    setCurrentStudiKasus(studiKasusObj);
    handleToggleModal();
  };

  const aksiTambahStudiKasus = formStudiKasus => {
    // TODO : Call POST API request dari StudiKasusCRUD.js
    // ...
    handleToggleModal();
    setAlertMessage(`Data ${formStudiKasus.studi_kasus_nama} berhasil ditambahkan`);
    handleToggleAlert();
    setTimeout(() => handleToggleAlert(false), 5000);
    console.log("Hasil submit tambah", formStudiKasus);
  };

  const aksiDeleteStudiKasus = formStudiKasus => {
    // TODO : Call DELETE API request dari StudiKasusCRUD.js
    // ...
    handleToggleModal();
    setAlertMessage(`Data ${formStudiKasus.studi_kasus_nama} berhasil dihapus`);
    handleToggleAlert();
    setTimeout(() => handleToggleAlert(false), 5000);
    console.log("Data terhapus", formStudiKasus);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "SQLearn | Dosen - Studi Kasus "
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(PageLayout/* default */.Z, {
      role: "dosen",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
        justify: "space-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Typography.Title, {
            level: 2,
            children: "Studi Kasus "
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Button, {
            type: "primary",
            onClick: tambahStudiKasus,
            children: ["Tambah Studi Kasus ", /*#__PURE__*/jsx_runtime_.jsx(icons_.PlusCircleOutlined, {})]
          })
        })]
      }), isAlertActive ? /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Alert, {
        message: alertMessage,
        type: alertStatus,
        closable: true,
        showIcon: true,
        banner: true,
        style: {
          marginBottom: "1em"
        }
      }) : null, /*#__PURE__*/jsx_runtime_.jsx(Modal/* default */.Z, {
        role: modalRole,
        entity: "Studi Kasus",
        visible: isModalVisible,
        setVisible: setIsModalVisible,
        confirmLoading: isModalLoading,
        setConfirmLoading: setIsModalLoading,
        setModalText: setModalText,
        modalContent: modalRole === "tambah" ? /*#__PURE__*/jsx_runtime_.jsx(StudiKasus_FormTambahStudiKasus, {
          handleSubmit: aksiTambahStudiKasus,
          setVisible: setIsModalVisible,
          setFormObj: setFormObj
        }) : modalRole === "preview" ? /*#__PURE__*/jsx_runtime_.jsx(StudiKasus_PreviewStudiKasus, {
          currentStudiKasus: currentStudiKasus
        }) : /*#__PURE__*/jsx_runtime_.jsx(StudiKasus_FormHapusStudiKasus, {
          handleSubmit: aksiDeleteStudiKasus,
          setVisible: setIsModalVisible,
          currentStudiKasus: currentStudiKasus
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(List/* default */.Z, {
        isLoading: !isDataLoaded,
        dataSource: data,
        role: "studi-kasus",
        previewStudiKasus: previewStudiKasus,
        editStudiKasus: editStudiKasus,
        deleteStudiKasus: deleteStudiKasus
      })]
    })]
  });
}

/* harmony default export */ const studi_kasus = (studi_kasus_StudiKasus);

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
var __webpack_exports__ = __webpack_require__.X(0, [786,47,533], () => (__webpack_exec__(4565)));
module.exports = __webpack_exports__;

})();