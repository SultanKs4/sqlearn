"use strict";
(() => {
var exports = {};
exports.id = 964;
exports.ids = [964];
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

/***/ 9171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ admin)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: ./components/PageLayout.js + 1 modules
var PageLayout = __webpack_require__(7786);
// EXTERNAL MODULE: ./components/Modal.js
var Modal = __webpack_require__(9151);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/admin/AturDosen/FormTambahDosen.js
const _excluded = ["setFormObj", "setVisible", "handleSubmit"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function FormTambahDosen(_ref) {
  let {
    setFormObj,
    setVisible,
    handleSubmit
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const onFinish = values => {
    setFormObj(values);
    handleSubmit(values);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Form, {
    onFinish: onFinish,
    layout: "vertical",
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        span: 22,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "nomor_induk",
          label: "Nomor Induk",
          rules: [{
            required: true,
            message: "Masukkan nama Nomor Induk!"
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            prefix: /*#__PURE__*/jsx_runtime_.jsx(icons_.CodeSandboxOutlined, {}),
            placeholder: ` Nomor Induk Dosen . . . `
          })
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      gutter: 20,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "nama_dosen",
          label: "Nama Dosen",
          rules: [{
            required: true,
            message: "Masukkan nama Dosen!"
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            prefix: /*#__PURE__*/jsx_runtime_.jsx(icons_.UserOutlined, {}),
            placeholder: ` Nama Dosen . . . `
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "username",
          label: "Username",
          rules: [{
            required: true,
            message: "Mohon masukkan Username untuk dosen!"
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            prefix: /*#__PURE__*/jsx_runtime_.jsx(icons_.UserOutlined, {}),
            placeholder: ` Username . . . `
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

/* harmony default export */ const AturDosen_FormTambahDosen = (FormTambahDosen);
// EXTERNAL MODULE: ./components/List.js
var List = __webpack_require__(2047);
;// CONCATENATED MODULE: ./components/admin/AturDosen/FormEditDosen.js
const FormEditDosen_excluded = ["currentDosen", "setFormObj", "setVisible", "handleSubmit"];

function FormEditDosen_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = FormEditDosen_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function FormEditDosen_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function FormEditDosen(_ref) {
  let {
    currentDosen,
    setFormObj,
    setVisible,
    handleSubmit
  } = _ref,
      props = FormEditDosen_objectWithoutProperties(_ref, FormEditDosen_excluded);

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
      nomor_induk: currentDosen === null || currentDosen === void 0 ? void 0 : currentDosen.nomor_induk,
      nama_dosen: currentDosen === null || currentDosen === void 0 ? void 0 : currentDosen.nama_dosen,
      username: currentDosen === null || currentDosen === void 0 ? void 0 : currentDosen.username
    });
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Form, {
    form: form,
    onFinish: onFinish,
    layout: "vertical",
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        span: 22,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "nomor_induk",
          label: "Nomor Induk",
          rules: [{
            required: true,
            message: "Masukkan nama Nomor Induk!"
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            prefix: /*#__PURE__*/jsx_runtime_.jsx(icons_.CodeSandboxOutlined, {}),
            placeholder: ` Nomor Induk Dosen . . . `
          })
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      gutter: 20,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "nama_dosen",
          label: "Nama Dosen",
          rules: [{
            required: true,
            message: "Masukkan nama Dosen!"
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            prefix: /*#__PURE__*/jsx_runtime_.jsx(icons_.UserOutlined, {}),
            placeholder: ` Nama Dosen . . . `
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "username",
          label: "Username",
          rules: [{
            required: true,
            message: "Mohon masukkan Username untuk dosen!"
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            prefix: /*#__PURE__*/jsx_runtime_.jsx(icons_.UserOutlined, {}),
            placeholder: ` Username . . . `
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

/* harmony default export */ const AturDosen_FormEditDosen = (FormEditDosen);
;// CONCATENATED MODULE: ./components/admin/AturDosen/FormHapusDosen.js
const FormHapusDosen_excluded = ["form", "currentDosen", "setVisible", "handleSubmit"];

function FormHapusDosen_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = FormHapusDosen_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function FormHapusDosen_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function FormHapusDosen(_ref) {
  let {
    form,
    currentDosen,
    setVisible,
    handleSubmit
  } = _ref,
      props = FormHapusDosen_objectWithoutProperties(_ref, FormHapusDosen_excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      justify: "center",
      children: "Apakah Anda yakin ingin menghapus Dosen ini ?"
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
          onClick: () => handleSubmit(currentDosen),
          children: "Ya, Hapus"
        })
      })]
    })]
  });
}

/* harmony default export */ const AturDosen_FormHapusDosen = (FormHapusDosen);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
;// CONCATENATED MODULE: ./utils/remote-data/admin/DataDosen.js


const getDosen = async () => {
  let response = await axios.get("");
  return response.data;
};

const getDosenByID = async DosenID => {
  let response = await axios.get("");
  return response.data;
};

const postDosen = async () => {
  let response = await axios.post("");
  return response.data;
};

const updateDosen = async () => {
  let response = await axios.put("");
  return response.data;
};

const deleteDosen = async () => {
  let response = await axios.delete("");
  return response.data;
};

const mockGetDosen = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [{
          nama_dosen: "Dosen A",
          username: "Dosen A",
          nomor_induk: "123123123"
        }, {
          nama_dosen: "Dosen B",
          username: "Dosen B",
          nomor_induk: "234234234"
        }, {
          nama_dosen: "Dosen C",
          username: "Dosen C",
          nomor_induk: "345345345"
        }, {
          nama_dosen: "Dosen D",
          username: "Dosen D",
          nomor_induk: "456456456"
        }]
      });
    }, 1000);
  });
};


;// CONCATENATED MODULE: ./pages/admin/index.js
// ? Ini daftar-dosen















function DaftarDosen() {
  const {
    0: formObj,
    1: setFormObj
  } = (0,external_react_.useState)({});
  const {
    0: currentDosen,
    1: setCurrentDosen
  } = (0,external_react_.useState)({});
  const {
    0: dataDosen,
    1: setDataDosen
  } = (0,external_react_.useState)([]);
  const {
    0: isDataLoaded,
    1: setIsDataLoaded
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
    // ? Ini mock api datadosen
    mockGetDosen().then(response => {
      setDataDosen(response.data);
      setIsDataLoaded(true);
    });
  }, []);
  (0,external_react_.useEffect)(() => {
    console.log(isAlertActive);
  }, [isAlertActive]);

  const tambahDosen = () => {
    setModalRole("tambah");
    handleToggleModal();
  };

  const editDosen = dosenObj => {
    setModalRole("edit");
    setCurrentDosen(dosenObj);
    handleToggleModal();
  };

  const deleteDosen = dosenObj => {
    setModalRole("delete");
    setCurrentDosen(dosenObj);
    handleToggleModal();
  };

  const aksiTambahDosen = formDosen => {
    // TODO : Call POST API request dari DosenCRUD.js
    // ...
    handleToggleModal();
    handleToggleAlert();
    setAlertMessage(`Data ${formDosen.nama_dosen} berhasil ditambahkan`);
    setTimeout(() => handleToggleAlert(false), 5000);
    console.log("Hasil submit tambah", formDosen);
  };

  const aksiEditDosen = formDosen => {
    // TODO : Call DELETE API request dari DosenCRUD.js
    // ...
    handleToggleModal();
    handleToggleAlert();
    setAlertMessage(`Data ${formDosen.nama_dosen} berhasil diubah`);
    setTimeout(() => handleToggleAlert(false), 5000);
    console.log("Data berhasil diubah", formDosen);
  };

  const aksiDeleteDosen = formDosen => {
    // TODO : Call DELETE API request dari DosenCRUD.js
    // ...
    handleToggleModal();
    handleToggleAlert();
    setAlertMessage(`Data ${formDosen.nama_dosen} berhasil dihapus`);
    setTimeout(() => handleToggleAlert(), 5000);
    console.log("Data terhapus", formDosen);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "SQLearn | Admin - Daftar Dosen "
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(PageLayout/* default */.Z, {
      role: "admin",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Card, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
          justify: "space-between",
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Typography.Title, {
            level: 3,
            style: {
              marginBottom: "1em"
            },
            children: "Daftar Dosen"
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Button, {
              type: "primary",
              onClick: tambahDosen,
              children: ["Tambah Dosen ", /*#__PURE__*/jsx_runtime_.jsx(icons_.PlusCircleOutlined, {})]
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
          entity: "Dosen",
          visible: isModalVisible,
          setVisible: setIsModalVisible,
          confirmLoading: isModalLoading,
          setConfirmLoading: setIsModalLoading,
          modalText: modalText,
          setModalText: setModalText,
          modalContent: modalRole === "tambah" ? /*#__PURE__*/jsx_runtime_.jsx(AturDosen_FormTambahDosen, {
            handleSubmit: aksiTambahDosen,
            setVisible: setIsModalVisible,
            setFormObj: setFormObj
          }) : modalRole === "edit" ? /*#__PURE__*/jsx_runtime_.jsx(AturDosen_FormEditDosen, {
            handleSubmit: aksiEditDosen,
            setVisible: setIsModalVisible,
            setFormObj: setFormObj,
            currentDosen: currentDosen
          }) : /*#__PURE__*/jsx_runtime_.jsx(AturDosen_FormHapusDosen, {
            handleSubmit: aksiDeleteDosen,
            setVisible: setIsModalVisible,
            currentDosen: currentDosen
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(List/* default */.Z, {
          dataSource: dataDosen,
          isLoading: !isDataLoaded,
          role: "admin-data-dosen",
          editDosen: editDosen,
          deleteDosen: deleteDosen
        })]
      })
    })]
  });
}

/* harmony default export */ const admin = (DaftarDosen);

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [786,47], () => (__webpack_exec__(9171)));
module.exports = __webpack_exports__;

})();