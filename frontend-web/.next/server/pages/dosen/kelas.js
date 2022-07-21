"use strict";
(() => {
var exports = {};
exports.id = 665;
exports.ids = [665];
exports.modules = {

/***/ 7681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ kelas)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./utils/remote-data/dosen/KelasCRUD.js
var KelasCRUD = __webpack_require__(4264);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: ./components/Modal.js
var Modal = __webpack_require__(9151);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/dosen/Kelas/FormTambahKelas.js
const _excluded = ["form", "setFormObj", "setVisible", "handleSubmit"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function FormTambahKelas(_ref) {
  let {
    form,
    setFormObj,
    setVisible,
    handleSubmit
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    Option
  } = external_antd_.Select;

  const onFinish = values => {
    setFormObj(values);
    handleSubmit(values);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  const normFile = e => console.log("Upload event:", e);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Form, {
    onFinish: onFinish,
    layout: "vertical",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      gutter: 10,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        span: 13,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "kelas_nama",
          label: "Nama Kelas",
          extra: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: ["Format [Prodi]-[Kelas]-[Tahun] ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " Contoh: TI-1A-2021"]
          }),
          rules: [{
            required: true,
            message: "Masukkan nama kelas!"
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            prefix: /*#__PURE__*/jsx_runtime_.jsx(icons_.LaptopOutlined, {}),
            placeholder: ` Format [Prodi]-[Kelas]-[Tahun] . . .`
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "semester",
          label: "Semester",
          rules: [{
            required: true,
            message: "Mohon masukkan data semester!"
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Select, {
            placeholder: "Pilih semester . . .",
            style: {
              width: "200px"
            },
            children: [1, 2, 3, 4, 5, 6, 7, 8].map(item => /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Select.Option, {
              children: item
            }, item))
          })
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
        label: "Upload Data Kelas",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "excelFile",
          valuePropName: "fileList",
          getValueFromEvent: normFile,
          noStyle: true,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Upload.Dragger, {
            multiple: false,
            accept: "application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            name: "files",
            action: "/upload.do",
            style: {
              padding: "3em"
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "ant-upload-drag-icon",
              children: /*#__PURE__*/jsx_runtime_.jsx(icons_.InboxOutlined, {})
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "ant-upload-text",
              children: "Click or drag file to this area to upload"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              className: "ant-upload-hint",
              children: ["Hanya bisa upload file .xlsx atau .xls", " "]
            })]
          })
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

/* harmony default export */ const Kelas_FormTambahKelas = (FormTambahKelas);
;// CONCATENATED MODULE: ./components/dosen/Kelas/FormHapusKelas.js
const FormHapusKelas_excluded = ["form", "currentKelas", "setVisible", "handleSubmit"];

function FormHapusKelas_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = FormHapusKelas_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function FormHapusKelas_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function FormHapusKelas(_ref) {
  let {
    form,
    currentKelas,
    setVisible,
    handleSubmit
  } = _ref,
      props = FormHapusKelas_objectWithoutProperties(_ref, FormHapusKelas_excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      justify: "center",
      children: "Apakah Anda yakin ingin menghapus kelas ini ?"
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
          onClick: () => handleSubmit(currentKelas),
          children: "Ya, Hapus"
        })
      })]
    })]
  });
}

/* harmony default export */ const Kelas_FormHapusKelas = (FormHapusKelas);
;// CONCATENATED MODULE: ./components/dosen/Kelas/FormEditKelas.js
const FormEditKelas_excluded = ["setFormObj", "setVisible", "handleSubmit", "currentKelas"];

function FormEditKelas_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = FormEditKelas_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function FormEditKelas_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








function FormEditKelas_FormTambahKelas(_ref) {
  let {
    setFormObj,
    setVisible,
    handleSubmit,
    currentKelas
  } = _ref,
      props = FormEditKelas_objectWithoutProperties(_ref, FormEditKelas_excluded);

  const [form] = external_antd_.Form.useForm();

  const onFinish = values => {
    setFormObj(values);
    handleSubmit(values);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  (0,external_react_.useEffect)(() => {
    form.setFieldsValue({
      kelas_nama: currentKelas === null || currentKelas === void 0 ? void 0 : currentKelas.nama,
      semester: currentKelas === null || currentKelas === void 0 ? void 0 : currentKelas.semester
    });
  }, [currentKelas]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Form, {
    form: form,
    onFinish: onFinish,
    layout: "vertical",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      gutter: 10,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        span: 13,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "kelas_nama",
          label: "Nama Kelas",
          extra: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: ["Format [Prodi]-[Kelas]-[Tahun] ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " Contoh: TI-1A-2021"]
          }),
          rules: [{
            required: true,
            message: "Masukkan nama kelas!"
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            prefix: /*#__PURE__*/jsx_runtime_.jsx(icons_.LaptopOutlined, {}),
            placeholder: ` Format [Prodi]-[Kelas]-[Tahun] . . .`
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "semester",
          label: "Semester",
          rules: [{
            required: true,
            message: "Mohon masukkan data semester!"
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Select, {
            placeholder: "Pilih semester . . .",
            style: {
              width: "200px"
            },
            children: [1, 2, 3, 4, 5, 6, 7, 8].map(item => /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Select.Option, {
              children: item
            }, item))
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

/* harmony default export */ const FormEditKelas = (FormEditKelas_FormTambahKelas);
// EXTERNAL MODULE: ./components/List.js
var List = __webpack_require__(2047);
// EXTERNAL MODULE: ./components/PageLayout.js + 1 modules
var PageLayout = __webpack_require__(7786);
;// CONCATENATED MODULE: ./pages/dosen/kelas/index.js















function DaftarKelas() {
  const {
    0: dataKelas,
    1: setDataKelas
  } = (0,external_react_.useState)([]);
  const {
    0: isDataKelasLoaded,
    1: setIsDataKelasLoaded
  } = (0,external_react_.useState)(false);
  const {
    0: currentKelas,
    1: setCurrentKelas
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
  (0,external_react_.useEffect)(() => {
    (0,KelasCRUD/* mockGetKelas */.PQ)().then(response => {
      console.log(response.data);
      setDataKelas(response.data);
      setIsDataKelasLoaded(true);
    }).catch(() => console.log("error"));
  }, []);

  const handleToggleModal = () => setIsModalVisible(prev => !prev);

  const handleToggleAlert = () => setIsAlertActive(prev => !prev);

  const tambahKelas = () => {
    setModalRole("tambah");
    handleToggleModal();
  };

  const editKelas = kelasObj => {
    console.log("Selected, ", kelasObj);
    setModalRole("edit");
    setCurrentKelas(kelasObj);
    handleToggleModal();
  };

  const deleteKelas = kelasObj => {
    setModalRole("delete");
    setCurrentKelas(kelasObj);
    handleToggleModal();
  };

  const aksiTambahKelas = formKelas => {
    // TODO : Call POST API request dari KelasCRUD.js
    // ...
    handleToggleAlert();
    setTimeout(() => handleToggleAlert(false), 5000);
    handleToggleModal();
    setAlertMessage(`Data ${formKelas.kelas_nama} berhasil ditambahkan`);
    console.log("Hasil submit tambah", formKelas);
  };

  const aksiEditKelas = formKelas => {
    // TODO : Call PUT API request dari KelasCRUD.js
    // ...
    handleToggleAlert();
    setTimeout(() => handleToggleAlert(false), 5000);
    handleToggleModal();
    setAlertMessage(`Data Kelas ${formKelas.kelas_nama} berhasil diubah`);
    handleToggleAlert();
    console.log("Data berhasil diedit", formKelas);
  };

  const aksiDeleteKelas = formKelas => {
    // TODO : Call DELETE API request dari KelasCRUD.js
    // ...
    handleToggleAlert();
    setTimeout(() => handleToggleAlert(false), 5000);
    handleToggleModal();
    setAlertMessage(`Data Kelas ${formKelas.nama} berhasil dihapus`);
    handleToggleAlert();
    console.log("Data terhapus", formKelas);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "SQLearn | Dosen - Daftar Kelas "
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(PageLayout/* default */.Z, {
      role: "dosen",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
        justify: "space-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Typography.Title, {
            level: 2,
            children: "Daftar Kelas "
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Button, {
            type: "primary",
            onClick: tambahKelas,
            children: ["Tambah Kelas ", /*#__PURE__*/jsx_runtime_.jsx(icons_.PlusCircleOutlined, {})]
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
        entity: "Kelas",
        visible: isModalVisible,
        setVisible: setIsModalVisible,
        confirmLoading: isModalLoading,
        setConfirmLoading: setIsModalLoading,
        modalText: modalText,
        setModalText: setModalText,
        modalContent: modalRole === "tambah" ? /*#__PURE__*/jsx_runtime_.jsx(Kelas_FormTambahKelas, {
          handleSubmit: aksiTambahKelas,
          setVisible: setIsModalVisible,
          setFormObj: setFormObj
        }) : modalRole === "edit" ? /*#__PURE__*/jsx_runtime_.jsx(FormEditKelas, {
          handleSubmit: aksiEditKelas,
          setVisible: setIsModalVisible,
          setFormObj: setFormObj,
          currentKelas: currentKelas
        }) : /*#__PURE__*/jsx_runtime_.jsx(Kelas_FormHapusKelas, {
          handleSubmit: aksiDeleteKelas,
          setVisible: setIsModalVisible,
          currentKelas: currentKelas
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(List/* default */.Z, {
        isLoading: !isDataKelasLoaded,
        role: "list-kelas-dosen",
        editKelas: editKelas,
        deleteKelas: deleteKelas,
        dataSource: dataKelas
      })]
    })]
  });
}

/* harmony default export */ const kelas = (DaftarKelas);

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
var __webpack_exports__ = __webpack_require__.X(0, [786,47,593,264], () => (__webpack_exec__(7681)));
module.exports = __webpack_exports__;

})();