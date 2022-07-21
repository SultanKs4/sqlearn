(() => {
var exports = {};
exports.id = 974;
exports.ids = [974];
exports.modules = {

/***/ 5372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 9151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 3382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ mahasiswa)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/PageLayout.js + 1 modules
var PageLayout = __webpack_require__(7786);
// EXTERNAL MODULE: ./components/EmptyData.js
var EmptyData = __webpack_require__(5372);
// EXTERNAL MODULE: ./components/Modal.js
var Modal = __webpack_require__(9151);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: ./styles/mahasiswa/beranda.module.css
var beranda_module = __webpack_require__(6243);
var beranda_module_default = /*#__PURE__*/__webpack_require__.n(beranda_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/mahasiswa/ProfilMahasiswa.js






function ProfilMahasiswa() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Card, {
    style: {
      minHeight: "60vh"
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Typography.Title, {
      level: 2,
      children: " Profil "
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Divider, {}), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      justify: "center",
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Avatar, {
        size: 64,
        icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.UserOutlined, {})
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      className: (beranda_module_default()).row_profile,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        span: 12,
        children: "NIM"
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        span: 12,
        className: (beranda_module_default()).text_right,
        children: "1841720076"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      className: (beranda_module_default()).row_profile,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        span: 12,
        children: "Username"
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        span: 12,
        className: (beranda_module_default()).text_right,
        children: "1841720076"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      className: (beranda_module_default()).row_profile,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        span: 12,
        children: "Nama"
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        span: 12,
        className: (beranda_module_default()).text_right,
        children: "Muhammad Ilham Adhim"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      className: (beranda_module_default()).row_profile,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        span: 12,
        children: "Kelas"
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        span: 12,
        className: (beranda_module_default()).text_right,
        children: "TI-4I"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      className: (beranda_module_default()).row_profile,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        span: 12,
        children: "Dosen Pengampu Basis Data"
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        span: 12,
        className: (beranda_module_default()).text_right,
        children: "Mr. Ilham Adhim"
      })]
    })]
  });
}

/* harmony default export */ const mahasiswa_ProfilMahasiswa = (ProfilMahasiswa);
// EXTERNAL MODULE: ./utils/common.js
var common = __webpack_require__(3242);
;// CONCATENATED MODULE: ./components/mahasiswa/StudiKasusBeranda.js





const mockPaketSoal = [{
  nama: "Paket Soal A",
  jumlahSoal: 5,
  durasi: 120
}, {
  nama: "Paket Soal B",
  jumlahSoal: 5,
  durasi: 120
}, {
  nama: "Paket Soal C",
  jumlahSoal: 5,
  durasi: 120
}];

function StudiKasusBeranda({
  data = mockPaketSoal,
  previewStudiKasus
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(external_antd_.List, {
    itemLayout: "horizontal",
    dataSource: data,
    renderItem: item => /*#__PURE__*/jsx_runtime_.jsx(external_antd_.List.Item, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
        justify: "space-between",
        style: {
          width: "100vw"
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
          children: item.nama
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
          children: [" ", /*#__PURE__*/jsx_runtime_.jsx(icons_.ConsoleSqlOutlined, {
            style: {
              fontSize: "1.5em"
            }
          }), " ", item.jumlahSoal, " Pertanyaan", " "]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.FieldTimeOutlined, {
            style: {
              fontSize: "1.5em"
            }
          }), " "]
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
            type: "primary",
            shape: "round",
            icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.SearchOutlined, {}),
            size: "medium",
            onClick: () => previewStudiKasus(item),
            children: "Preview"
          })
        })]
      })
    })
  });
}

/* harmony default export */ const mahasiswa_StudiKasusBeranda = (StudiKasusBeranda);
// EXTERNAL MODULE: ./utils/remote-data/mahasiswa/Beranda.js
var Beranda = __webpack_require__(992);
// EXTERNAL MODULE: ./components/List.js
var List = __webpack_require__(2047);
;// CONCATENATED MODULE: ./pages/mahasiswa/index.js
//  ? Ini beranda mahasiswa















const {
  TabPane
} = external_antd_.Tabs;

function mahasiswa_Beranda() {
  const router = (0,router_.useRouter)();
  const {
    0: dataProfile,
    1: setDataProfile
  } = (0,external_react_.useState)([]);
  const {
    0: dataLatihan,
    1: setDataLatihan
  } = (0,external_react_.useState)([]);
  const {
    0: dataFilteredLatihan,
    1: setDataFilteredLatihan
  } = (0,external_react_.useState)([]);
  const {
    0: dataStudiKasus,
    1: setDataStudiKasus
  } = (0,external_react_.useState)([]);
  const {
    0: activeFilterLatihan,
    1: setActiveFilterLatihan
  } = (0,external_react_.useState)("tersedia");
  const {
    0: isDataProfileLoaded,
    1: setIsDataProfileLoaded
  } = (0,external_react_.useState)(false);
  const {
    0: isDataLatihanLoaded,
    1: setIsDataLatihanLoaded
  } = (0,external_react_.useState)(false);
  const {
    0: isDataStudiKasusLoaded,
    1: setIsDataStudiKasusLoaded
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

  const handleToggleModal = () => setIsModalVisible(prev => !prev);

  const previewStudiKasus = studObj => {
    setModalRole("preview");
    handleToggleModal();
    setModalText(`Ini  ${studObj.nama}`);
  };

  const handleKerjakanLatihan = id => {
    router.push(`/mahasiswa/soal/${id}`);
  }; // ? key = status : "tersedia" || "selesai"


  const switchTabPractice = key => {
    let status = key; // TODO : Kalau sudah bikin di mockapi ini diuncomment

    setActiveFilterLatihan(status);
    setDataFilteredLatihan(dataLatihan.filter(item => item.status === status));
  };

  (0,external_react_.useEffect)(() => {
    // TODO : Consume Data Profil (State Loading dan Data)
    // TODO : Consume Data Latihan (State Loading dan Data)
    (0,Beranda/* mockGetAllPractices */.we)().then(responseData => {
      setDataLatihan(responseData.data);
      setIsDataLatihanLoaded(true);
      setDataFilteredLatihan(responseData.data.filter(item => item.status === activeFilterLatihan));
    }); // TODO : Consume Data Studi Kasus (State Loading dan Data)
  }, []);
  (0,external_react_.useEffect)(() => {
    console.log(dataFilteredLatihan);
  }, [dataFilteredLatihan, dataLatihan]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "SQLearn | Mahasiswa - Beranda "
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(PageLayout/* default */.Z, {
      role: "mahasiswa",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Modal/* default */.Z, {
        role: modalRole,
        entity: "Studi Kasus",
        visible: isModalVisible,
        setVisible: setIsModalVisible,
        confirmLoading: isModalLoading,
        setConfirmLoading: setIsModalLoading,
        modalText: modalText,
        setModalText: setModalText
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
        gutter: [10, 10],
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
          sm: 24,
          md: 10,
          lg: 10,
          children: /*#__PURE__*/jsx_runtime_.jsx(mahasiswa_ProfilMahasiswa, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
          sm: 24,
          md: 14,
          lg: 14,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Card, {
            style: {
              height: "100%"
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Typography.Title, {
              level: 2,
              children: " Latihan "
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Tabs, {
              defaultActiveKey: "tersedia",
              onChange: switchTabPractice,
              children: [/*#__PURE__*/jsx_runtime_.jsx(TabPane, {
                tab: "Tersedia",
                children: dataFilteredLatihan.length > 0 ? /*#__PURE__*/jsx_runtime_.jsx(List/* default */.Z, {
                  dataSource: dataFilteredLatihan,
                  isLoading: !isDataLatihanLoaded,
                  role: "sesi-latihan-mahasiswa",
                  kerjakanLatihan: handleKerjakanLatihan
                }) : /*#__PURE__*/jsx_runtime_.jsx(EmptyData/* default */.Z, {
                  description: "Tidak ada latihan tersedia",
                  withAction: false
                })
              }, "tersedia"), /*#__PURE__*/jsx_runtime_.jsx(TabPane, {
                tab: "Selesai",
                children: dataFilteredLatihan.length > 0 ? /*#__PURE__*/jsx_runtime_.jsx(List/* default */.Z, {
                  dataSource: dataFilteredLatihan,
                  isLoading: !isDataLatihanLoaded,
                  role: "sesi-latihan-mahasiswa",
                  kerjakanLatihan: handleKerjakanLatihan
                }) : /*#__PURE__*/jsx_runtime_.jsx(EmptyData/* default */.Z, {
                  description: "Tidak ada Latihan yang telah dikerjakan",
                  withAction: true,
                  textAction: "Lihat Nilai",
                  toURL: "/mahasiswa/lihat-nilai"
                })
              }, "selesai")]
            })]
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
        style: {
          marginTop: "1em"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
          span: 24,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Card, {
            style: {
              minHeight: "50vh"
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Typography.Title, {
              level: 3,
              children: "Studi Kasus Tersedia"
            }), /*#__PURE__*/jsx_runtime_.jsx(mahasiswa_StudiKasusBeranda, {
              previewStudiKasus: previewStudiKasus
            }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Divider, {})]
          })
        })
      })]
    })]
  });
}

/* harmony default export */ const mahasiswa = (mahasiswa_Beranda);

/***/ }),

/***/ 6243:
/***/ ((module) => {

// Exports
module.exports = {
	"row_profile": "beranda_row_profile___wfJB",
	"text_right": "beranda_text_right__1qmRI"
};


/***/ }),

/***/ 7066:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons");

/***/ }),

/***/ 5725:
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 2245:
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ 1649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [786,47,992], () => (__webpack_exec__(3382)));
module.exports = __webpack_exports__;

})();