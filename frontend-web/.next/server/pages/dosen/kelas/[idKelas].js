"use strict";
(() => {
var exports = {};
exports.id = 64;
exports.ids = [64];
exports.modules = {

/***/ 4554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _idKelas_)
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
// EXTERNAL MODULE: ./utils/remote-data/dosen/KelasCRUD.js
var KelasCRUD = __webpack_require__(4264);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/Modal.js
var Modal = __webpack_require__(9151);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/dosen/Kelas/FormTambahMahasiswa.js





function FormTambahMahasiswa({
  setFormObj,
  setVisible,
  handleSubmit
}) {
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
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      gutter: 10,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        span: 12,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "nama_mahasiswa",
          label: "Nama Mahasiswa",
          rules: [{
            required: true,
            message: "Masukkan nama Mahasiswa!"
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            prefix: /*#__PURE__*/jsx_runtime_.jsx(icons_.UserOutlined, {}),
            placeholder: ` Contoh : Muhammad Ilham . . .`
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        span: 12,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "nim_mahasiswa",
          label: "NIM Mahasiswa",
          rules: [{
            required: true,
            message: "Masukkan NIM Mahasiswa!"
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            prefix: /*#__PURE__*/jsx_runtime_.jsx(icons_.UserOutlined, {}),
            placeholder: ` Contoh : 18417200xx   . . .`
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

/* harmony default export */ const Kelas_FormTambahMahasiswa = (FormTambahMahasiswa);
;// CONCATENATED MODULE: ./components/dosen/Kelas/FormEditMahasiswa.js






function FormEditMahasiswa({
  currentMhs,
  setFormObj,
  setVisible,
  handleSubmit
}) {
  const [form] = external_antd_.Form.useForm();
  (0,external_react_.useEffect)(() => {
    form.setFieldsValue({
      nama_mahasiswa: currentMhs === null || currentMhs === void 0 ? void 0 : currentMhs.nama,
      nim_mahasiswa: currentMhs === null || currentMhs === void 0 ? void 0 : currentMhs.nim
    });
  }, [currentMhs]);

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
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      gutter: 10,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        span: 12,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "nama_mahasiswa",
          label: "Nama Mahasiswa",
          rules: [{
            required: true,
            message: "Masukkan nama Mahasiswa!"
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            prefix: /*#__PURE__*/jsx_runtime_.jsx(icons_.UserOutlined, {}),
            placeholder: ` Contoh : Muhammad Ilham . . .`
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        span: 12,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "nim_mahasiswa",
          label: "NIM Mahasiswa",
          rules: [{
            required: true,
            message: "Masukkan NIM Mahasiswa!"
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            prefix: /*#__PURE__*/jsx_runtime_.jsx(icons_.UserOutlined, {}),
            placeholder: ` Contoh : 18417200xx   . . .`
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

/* harmony default export */ const Kelas_FormEditMahasiswa = (FormEditMahasiswa);
// EXTERNAL MODULE: ./components/List.js
var List = __webpack_require__(2047);
;// CONCATENATED MODULE: ./components/dosen/Kelas/FormHapusMahasiswa.js
const _excluded = ["form", "currentMahasiswa", "setVisible", "handleSubmit"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function FormHapusMahasiswa(_ref) {
  let {
    form,
    currentMahasiswa,
    setVisible,
    handleSubmit
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      justify: "center",
      children: "Apakah Anda yakin ingin menghapus Mahasiswa ini ?"
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
          onClick: () => handleSubmit(currentMahasiswa),
          children: "Ya, Hapus"
        })
      })]
    })]
  });
}

/* harmony default export */ const Kelas_FormHapusMahasiswa = (FormHapusMahasiswa);
;// CONCATENATED MODULE: ./utils/remote-data/dosen/MahasiswaCRUD.js
const mockGetMhsPerKelas = (kelas_id = 1) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [{
          nama: "Muhammad Ilham Adhim",
          nim: "1841720076"
        }, {
          nama: "Dharma Y",
          nim: "1841720076"
        }, {
          nama: "Rasyid M",
          nim: "1841720076"
        }, {
          nama: "Sultan A",
          nim: "1841720076"
        }, {
          nama: "Ilham Rizky",
          nim: "1841720076"
        }]
      });
    });
  }, 1000);
};


;// CONCATENATED MODULE: ./pages/dosen/kelas/[idKelas].js

















function MahasiswaByID() {
  const router = (0,router_.useRouter)();
  const {
    0: formObj,
    1: setFormObj
  } = (0,external_react_.useState)({});
  const {
    0: DataKelas,
    1: setDataKelas
  } = (0,external_react_.useState)({});
  const {
    0: isDataKelasLoaded,
    1: setIsDataKelasLoaded
  } = (0,external_react_.useState)(false);
  const {
    0: dataMhsPerKelas,
    1: setDataMhsPerKelas
  } = (0,external_react_.useState)([]);
  const {
    0: isDataMhsLoaded,
    1: setIsDataMhsLoaded
  } = (0,external_react_.useState)(false);
  const {
    0: currentMhs,
    1: setCurrentMhs
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

  const tambahMahasiswa = () => {
    setModalRole("tambah");
    handleToggleModal();
  };

  const editMahasiswa = MahasiswaObj => {
    console.log("Selected, ", MahasiswaObj);
    setModalRole("edit");
    setCurrentMhs(MahasiswaObj);
    handleToggleModal();
  };

  const deleteMahasiswa = MahasiswaObj => {
    setModalRole("delete");
    setCurrentMhs(MahasiswaObj);
    handleToggleModal();
  };

  const aksiTambahMahasiswa = formMahasiswa => {
    // TODO : Call POST API request dari MahasiswaCRUD.js
    // ...
    handleToggleAlert();
    setTimeout(() => handleToggleAlert(false), 5000);
    handleToggleModal();
    setAlertMessage(`Data ${formMahasiswa.nama_mahasiswa} berhasil ditambahkan`);
    console.log("Hasil submit tambah", formMahasiswa);
  };

  const aksiEditMahasiswa = formMahasiswa => {
    // TODO : Call PUT API request dari MahasiswaCRUD.js
    // ...
    handleToggleAlert();
    setTimeout(() => handleToggleAlert(false), 5000);
    handleToggleModal();
    setAlertMessage(`Data Mahasiswa ${formMahasiswa.nama_mahasiswa} berhasil diubah`);
    handleToggleAlert();
    console.log("Data berhasil diedit", formMahasiswa);
  };

  const aksiDeleteMahasiswa = formMahasiswa => {
    // TODO : Call DELETE API request dari MahasiswaCRUD.js
    // ...
    handleToggleAlert();
    setTimeout(() => handleToggleAlert(false), 5000);
    handleToggleModal();
    setAlertMessage(`Data Mahasiswa ${formMahasiswa.nama_mahasiswa} berhasil dihapus`);
    handleToggleAlert();
    console.log("Data terhapus", formMahasiswa);
  };

  (0,external_react_.useEffect)(() => {
    (0,KelasCRUD/* mockGetKelas */.PQ)(1).then(response => {
      setDataKelas(response.data.find(item => parseInt(router.query.idKelas) === parseInt(item.id)));
      setIsDataKelasLoaded(true);
    });
    mockGetMhsPerKelas(1).then(res => {
      console.log(res.data);
      setDataMhsPerKelas(res.data);
      setIsDataMhsLoaded(true);
    });
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "SQLearn | Dosen - Daftar Mahasiswa "
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(PageLayout/* default */.Z, {
      role: "dosen",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
        justify: "space-between",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
          gutter: 30,
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
            children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Tooltip, {
              title: "Kembali",
              placement: "bottom",
              children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
                onClick: () => router.push("/dosen/kelas"),
                style: {
                  marginTop: ".2em",
                  backgroundColor: "#231e8f",
                  color: "white"
                },
                icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.LeftOutlined, {})
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
            children: isDataKelasLoaded ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Typography.Title, {
              level: 2,
              children: [`Kelas ${DataKelas === null || DataKelas === void 0 ? void 0 : DataKelas.nama}`, " "]
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
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Button, {
            type: "primary",
            onClick: tambahMahasiswa,
            children: ["Tambah Mahasiswa ", /*#__PURE__*/jsx_runtime_.jsx(icons_.PlusCircleOutlined, {})]
          }), " "]
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
        entity: `Mahasiswa di ${DataKelas === null || DataKelas === void 0 ? void 0 : DataKelas.nama}`,
        visible: isModalVisible,
        setVisible: setIsModalVisible,
        confirmLoading: isModalLoading,
        setConfirmLoading: setIsModalLoading,
        modalContent: modalRole === "tambah" ? /*#__PURE__*/jsx_runtime_.jsx(Kelas_FormTambahMahasiswa, {
          handleSubmit: aksiTambahMahasiswa,
          setVisible: setIsModalVisible,
          setFormObj: setFormObj
        }) : modalRole === "edit" ? /*#__PURE__*/jsx_runtime_.jsx(Kelas_FormEditMahasiswa, {
          handleSubmit: aksiEditMahasiswa,
          setVisible: setIsModalVisible,
          setFormObj: setFormObj,
          currentMhs: currentMhs
        }) : /*#__PURE__*/jsx_runtime_.jsx(Kelas_FormHapusMahasiswa, {
          handleSubmit: aksiDeleteMahasiswa,
          setVisible: setIsModalVisible,
          currentMhs: currentMhs
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(List/* default */.Z, {
        isLoading: !isDataMhsLoaded,
        role: "daftar-mahasiswa-per-kelas",
        editMahasiswa: editMahasiswa,
        deleteMahasiswa: deleteMahasiswa,
        dataSource: dataMhsPerKelas
      })]
    })]
  });
}

/* harmony default export */ const _idKelas_ = (MahasiswaByID);

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
var __webpack_exports__ = __webpack_require__.X(0, [786,47,593,264], () => (__webpack_exec__(4554)));
module.exports = __webpack_exports__;

})();