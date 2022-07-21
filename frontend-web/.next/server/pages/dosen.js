"use strict";
(() => {
var exports = {};
exports.id = 737;
exports.ids = [737];
exports.modules = {

/***/ 8594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ dosen)
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
// EXTERNAL MODULE: ./utils/remote-data/dosen/KelasCRUD.js
var KelasCRUD = __webpack_require__(4264);
// EXTERNAL MODULE: ./utils/common.js
var common = __webpack_require__(3242);
// EXTERNAL MODULE: ./utils/remote-data/dosen/PaketSoalCRUD.js
var PaketSoalCRUD = __webpack_require__(8576);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/dosen/Jadwal/FormTambahJadwal.js
const _excluded = ["setFormObj", "setVisible", "handleSubmit"],
      _excluded2 = ["kategori"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










function FormTambahJadwal(_ref) {
  let {
    setFormObj,
    setVisible,
    handleSubmit
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    Option
  } = external_antd_.Select;
  const {
    0: dataKelas,
    1: setDataKelas
  } = (0,external_react_.useState)([]);
  const {
    0: dataPaketSoal,
    1: setDataPaketSoal
  } = (0,external_react_.useState)([]);
  const {
    0: selectedKelas,
    1: setSelectedKelas
  } = (0,external_react_.useState)({}); // ? : Kategori 1 = Close-ended, 2 = Open-Ended

  const {
    0: selectedKategori,
    1: setSelectedKategori
  } = (0,external_react_.useState)({});

  const onChangeKelas = kelas => setSelectedKelas(kelas);

  const onChangeKategori = kategori => {
    console.log(kategori);
    setSelectedKategori(kategori);
  };

  (0,external_react_.useEffect)(() => {
    (0,KelasCRUD/* getKelas */.j$)(1).then(data => setDataKelas(data));
    (0,PaketSoalCRUD/* mockGetPaketSoal */.nA)().then(response => setDataPaketSoal(response.data));
  }, []);

  const onFinish = _ref2 => {
    let {
      kategori
    } = _ref2,
        values = _objectWithoutProperties(_ref2, _excluded2);

    setFormObj(values);
    handleSubmit(_objectSpread({
      kategori: selectedKategori === "Close-Ended" ? 1 : 2
    }, values));
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Form, {
    onFinish: onFinish,
    layout: "vertical",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      gutter: 20,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "jadwal_nama",
          label: "Nama Jadwal",
          rules: [{
            required: true,
            message: "Masukkan nama jadwal!"
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            prefix: /*#__PURE__*/jsx_runtime_.jsx(icons_.ScheduleOutlined, {}),
            placeholder: ` Jadwal . . .`
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "kategori",
          label: "Kategori",
          tooltip: {
            title: `Jadwal ini menggunakan kategori ${(0,common/* isObjectEmpty */.nK)(selectedKategori) ? " yang dipilih " : selectedKategori}`
          },
          rules: [{
            required: true,
            message: "Mohon pilih Kategori!"
          }],
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Select, {
            placeholder: "Pilih Kategori . . .",
            onChange: onChangeKategori,
            style: {
              width: "200px"
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx(Option, {
              children: "Open-Ended"
            }, "Open-Ended"), /*#__PURE__*/jsx_runtime_.jsx(Option, {
              children: "Close-Ended"
            }, "Close-Ended")]
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      gutter: 20,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "tanggal_mulai",
          label: "Waktu Mulai",
          rules: [{
            type: "object",
            required: true,
            message: "Mohon tentukan waktu mulai!"
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.DatePicker, {
            showTime: true,
            placeholder: "Pilih waktu . . .",
            style: {
              width: "200px"
            },
            format: "YYYY-MM-DD HH:mm"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "tanggal_akhir",
          label: "Waktu Selesai",
          rules: [{
            type: "object",
            required: true,
            message: "Mohon tentukan waktu selesai!"
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.DatePicker, {
            showTime: true,
            placeholder: "Pilih waktu . . .",
            style: {
              width: "200px"
            },
            format: "YYYY-MM-DD HH:mm"
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      gutter: 20,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "kelas_nama",
          label: "Kelas",
          tooltip: {
            title: `Jadwal ini akan terlihat oleh kelas ${(0,common/* isObjectEmpty */.nK)(selectedKelas) ? " yang dipilih " : selectedKelas}`
          },
          rules: [{
            required: true,
            message: "Mohon pilih kelas!"
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Select, {
            mode: "multiple",
            placeholder: "Pilih kelas . . .",
            onChange: onChangeKelas,
            style: {
              width: "200px"
            },
            children: dataKelas === null || dataKelas === void 0 ? void 0 : dataKelas.map(item => /*#__PURE__*/jsx_runtime_.jsx(Option, {
              children: item.name
            }, item.name))
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "paket_soal",
          label: "Paket Soal",
          rules: [{
            required: true,
            message: "Pilih paket soal!"
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Select, {
            placeholder: "Pilih paket soal . . .",
            style: {
              width: "200px"
            },
            children: dataPaketSoal.map(item => /*#__PURE__*/(0,jsx_runtime_.jsxs)(Option, {
              children: [" ", item === null || item === void 0 ? void 0 : item.nama, " "]
            }, item === null || item === void 0 ? void 0 : item.id_paket))
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

/* harmony default export */ const Jadwal_FormTambahJadwal = (FormTambahJadwal);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: ./utils/remote-data/dosen/StudiKasus.js
var StudiKasus = __webpack_require__(5533);
;// CONCATENATED MODULE: ./components/dosen/Jadwal/FormEditJadwal.js
const FormEditJadwal_excluded = ["currentJadwal", "setFormObj", "setVisible", "handleSubmit"],
      FormEditJadwal_excluded2 = ["kategori"];

function FormEditJadwal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function FormEditJadwal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { FormEditJadwal_ownKeys(Object(source), true).forEach(function (key) { FormEditJadwal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { FormEditJadwal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function FormEditJadwal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function FormEditJadwal_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = FormEditJadwal_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function FormEditJadwal_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












function FormEditJadwal(_ref) {
  let {
    currentJadwal,
    setFormObj,
    setVisible,
    handleSubmit
  } = _ref,
      props = FormEditJadwal_objectWithoutProperties(_ref, FormEditJadwal_excluded);

  const [form] = external_antd_.Form.useForm();
  const {
    Option
  } = external_antd_.Select;
  const {
    0: dataKelas,
    1: setDataKelas
  } = (0,external_react_.useState)([]);
  const {
    0: dataPaketSoal,
    1: setDataPaketSoal
  } = (0,external_react_.useState)([]);
  const {
    0: selectedKelas,
    1: setSelectedKelas
  } = (0,external_react_.useState)({});
  const {
    0: selectedKategori,
    1: setSelectedKategori
  } = (0,external_react_.useState)({});

  const onChangeKelas = kelas => setSelectedKelas(kelas);

  const onChangeKategori = kategori => {
    setSelectedKategori(kategori);
  };

  (0,external_react_.useEffect)(() => {
    (0,KelasCRUD/* mockGetKelas */.PQ)(1).then(response => setDataKelas(response.data));
    (0,PaketSoalCRUD/* mockGetPaketSoal */.nA)().then(response => setDataPaketSoal(response.data));
  }, []);
  (0,external_react_.useEffect)(() => {
    form.setFieldsValue({
      jadwal_nama: currentJadwal === null || currentJadwal === void 0 ? void 0 : currentJadwal.jadwal_nama,
      tanggal_mulai: currentJadwal === null || currentJadwal === void 0 ? void 0 : currentJadwal.tanggal_mulai,
      tanggal_akhir: currentJadwal === null || currentJadwal === void 0 ? void 0 : currentJadwal.tanggal_akhir,
      kelas_nama: currentJadwal === null || currentJadwal === void 0 ? void 0 : currentJadwal.kelas_nama,
      paket_soal: currentJadwal === null || currentJadwal === void 0 ? void 0 : currentJadwal.paket_soal,
      kategori: currentJadwal === null || currentJadwal === void 0 ? void 0 : currentJadwal.kategori // ? Kategori 1 = Close-ended, 2 = Open-Ended

    });
  }, [currentJadwal]);

  const onFinish = _ref2 => {
    let {
      kategori
    } = _ref2,
        values = FormEditJadwal_objectWithoutProperties(_ref2, FormEditJadwal_excluded2);

    setFormObj(values);
    handleSubmit(FormEditJadwal_objectSpread({
      kategori: selectedKategori === "Close-Ended" ? 1 : 2
    }, values));
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
      gutter: 20,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "jadwal_nama",
          label: "Nama Jadwal",
          rules: [{
            required: true,
            message: "Masukkan nama jadwal!"
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            prefix: /*#__PURE__*/jsx_runtime_.jsx(icons_.ScheduleOutlined, {}),
            placeholder: ` Jadwal . . .`
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "kategori",
          label: "Kategori",
          tooltip: {
            title: `Jadwal ini menggunakan kategori ${(0,common/* isObjectEmpty */.nK)(selectedKategori) ? " yang dipilih " : selectedKategori}`
          },
          rules: [{
            required: true,
            message: "Mohon pilih Kategori!"
          }],
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Select, {
            placeholder: "Pilih Kategori . . .",
            onChange: onChangeKategori,
            style: {
              width: "200px"
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx(Option, {
              children: "Open-Ended"
            }, "Open-Ended"), /*#__PURE__*/jsx_runtime_.jsx(Option, {
              children: "Close-Ended"
            }, "Close-Ended")]
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      gutter: 20,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "tanggal_mulai",
          label: "Waktu Mulai",
          rules: [{
            type: "object",
            required: true,
            message: "Mohon tentukan waktu mulai!"
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.DatePicker, {
            showTime: true,
            placeholder: "Pilih waktu . . .",
            style: {
              width: "200px"
            },
            format: "YYYY-MM-DD HH:mm"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "tanggal_akhir",
          label: "Waktu Selesai",
          rules: [{
            type: "object",
            required: true,
            message: "Mohon tentukan waktu selesai!"
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.DatePicker, {
            showTime: true,
            placeholder: "Pilih waktu . . .",
            style: {
              width: "200px"
            },
            format: "YYYY-MM-DD HH:mm"
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      gutter: 20,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "kelas_nama",
          label: "Kelas",
          tooltip: {
            title: `Jadwal ini akan terlihat oleh kelas ${(0,common/* isObjectEmpty */.nK)(selectedKelas) ? " yang dipilih " : selectedKelas}`
          },
          rules: [{
            required: true,
            message: "Mohon pilih kelas!"
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Select, {
            mode: "multiple",
            placeholder: "Pilih kelas . . .",
            onChange: onChangeKelas,
            style: {
              width: "200px"
            },
            children: dataKelas === null || dataKelas === void 0 ? void 0 : dataKelas.map(item => /*#__PURE__*/jsx_runtime_.jsx(Option, {
              children: item.name
            }, item.name))
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "paket_soal",
          label: "Paket Soal",
          rules: [{
            required: true,
            message: "Pilih paket soal!"
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Select, {
            placeholder: "Pilih paket soal . . .",
            style: {
              width: "200px"
            },
            children: dataPaketSoal.map(item => /*#__PURE__*/(0,jsx_runtime_.jsxs)(Option, {
              children: [" ", item === null || item === void 0 ? void 0 : item.nama, " "]
            }, item === null || item === void 0 ? void 0 : item.id_paket))
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

/* harmony default export */ const Jadwal_FormEditJadwal = (FormEditJadwal);
;// CONCATENATED MODULE: ./components/dosen/Jadwal/FormHapusJadwal.js
const FormHapusJadwal_excluded = ["form", "currentJadwal", "setVisible", "handleSubmit"];

function FormHapusJadwal_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = FormHapusJadwal_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function FormHapusJadwal_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function FormHapusJadwal(_ref) {
  let {
    form,
    currentJadwal,
    setVisible,
    handleSubmit
  } = _ref,
      props = FormHapusJadwal_objectWithoutProperties(_ref, FormHapusJadwal_excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      justify: "center",
      children: "Apakah Anda yakin ingin menghapus jadwal ini ?"
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
          onClick: () => handleSubmit(),
          children: "Ya, Hapus"
        })
      })]
    })]
  });
}

/* harmony default export */ const Jadwal_FormHapusJadwal = (FormHapusJadwal);
// EXTERNAL MODULE: ./components/List.js
var List = __webpack_require__(2047);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
;// CONCATENATED MODULE: ./utils/remote-data/dosen/JadwalCRUD.js


const mockJadwalData = [{
  id: 1,
  jadwal_nama: "Jadwal 1",
  tanggal_mulai: external_moment_default()("2022-02-21 12:00"),
  tanggal_akhir: external_moment_default()("2022-02-22 14:00"),
  kelas_nama: "TI-1C",
  studi_kasus_nama: "Studi Kasus B",
  paket_soal: "Paket Soal A",
  kategori: "Close-Ended"
}, {
  id: 2,
  jadwal_nama: "Jadwal 2",
  tanggal_mulai: external_moment_default()("2022-02-23 07:00"),
  tanggal_akhir: external_moment_default()("2022-02-23 21:59"),
  kelas_nama: "TI-1G",
  studi_kasus_nama: "Studi Kasus B",
  paket_soal: "Paket Soal B",
  kategori: "Open-Ended"
}, {
  id: 3,
  jadwal_nama: "Jadwal 3",
  tanggal_mulai: external_moment_default()("2022-02-24 10:00"),
  tanggal_akhir: external_moment_default()("2022-02-26 23:59"),
  kelas_nama: "TI-1H",
  studi_kasus_nama: "Studi Kasus A",
  paket_soal: "Paket Soal D",
  kategori: "Close-Ended"
}, {
  id: 4,
  jadwal_nama: "Jadwal 4",
  tanggal_mulai: external_moment_default()("2022-02-21 00:01"),
  tanggal_akhir: external_moment_default()("2022-02-20 23:59"),
  kelas_nama: "TI-1C",
  studi_kasus_nama: "Studi Kasus B",
  paket_soal: "Paket Soal D",
  kategori: "Open-Ended"
}];

const getJadwal = async () => {
  let response = await axios.get("");
  return response.data;
};

const mockGetJadwalByID = async jadwalID => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: mockJadwalData.filter(item => item.id === parseInt(jadwalID))
      });
    }, 1000);
  });
};

const getJadwalByID = async jadwalID => {
  let response = await axios.get("");
  return response.data;
};

const postJadwal = async () => {
  let response = await axios.post("");
  return response.data;
};

const updateJadwal = async () => {
  let response = await axios.put("");
  return response.data;
};

const deleteJadwal = async () => {
  let response = await axios.delete("");
  return response.data;
};

const mockGetJadwal = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: mockJadwalData
      });
    }, 1000);
  });
};


// EXTERNAL MODULE: ./components/RadioFilterCategory.js
var RadioFilterCategory = __webpack_require__(5286);
;// CONCATENATED MODULE: ./pages/dosen/index.js
// Ini jadwal latihan oleh dosen
















function Jadwal() {
  const {
    0: currentJadwal,
    1: setCurrentJadwal
  } = (0,external_react_.useState)({});
  const {
    0: formObj,
    1: setFormObj
  } = (0,external_react_.useState)({});
  const {
    0: dataJadwal,
    1: setDataJadwal
  } = (0,external_react_.useState)([]);
  const {
    0: isDataLoaded,
    1: setIsDataLoaded
  } = (0,external_react_.useState)(false);
  const {
    0: jadwalFiltered,
    1: setJadwalFiltered
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
    mockGetJadwal().then(response => {
      setDataJadwal(response.data);
      setIsDataLoaded(true);
    });
  }, []);

  const tambahJadwal = () => {
    setModalRole("tambah");
    handleToggleModal();
  };

  const editJadwal = jadwalObj => {
    console.log(jadwalObj);
    setModalRole("edit");
    setCurrentJadwal(jadwalObj);
    handleToggleModal();
  };

  const deleteJadwal = jadwalObj => {
    console.log(jadwalObj);
    setModalRole("delete");
    setCurrentJadwal(jadwalObj);
    handleToggleModal();
  };

  const aksiTambahJadwal = formJadwal => {
    // TODO : Call POST API request dari JadwalCRUD.js
    // ...
    handleToggleAlert();
    setTimeout(() => handleToggleAlert(false), 5000);
    handleToggleModal();
    setAlertMessage(`Data ${formJadwal.jadwal_nama} berhasil ditambahkan`);
    console.log("Hasil submit tambah", formJadwal);
  };

  const aksiEditJadwal = formJadwal => {
    // TODO : Call PUT API request dari JadwalCRUD.js
    // ...
    setAlertMessage(`Data Jadwal ${currentJadwal.nama} berhasil diubah`);
    handleToggleAlert();
    setTimeout(() => handleToggleAlert(false), 5000);
    console.log("Data berhasil diedit", formJadwal);
  };

  const aksiDeleteJadwal = formJadwal => {
    // TODO : Call DELETE API request dari JadwalCRUD.js
    // ...
    setAlertMessage(`Data Jadwal ${currentJadwal.nama} berhasil dihapus`);
    handleToggleAlert();
    setTimeout(() => handleToggleAlert(false), 5000);
    console.log("Data terhapus", formJadwal);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "SQLearn | Dosen - Jadwal "
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(PageLayout/* default */.Z, {
      role: "dosen",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
        justify: "space-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Typography.Title, {
            level: 2,
            children: "Jadwal "
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Button, {
            type: "primary",
            onClick: tambahJadwal,
            children: ["Tambah Jadwal ", /*#__PURE__*/jsx_runtime_.jsx(icons_.PlusCircleOutlined, {})]
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
        },
        onClose: () => handleToggleAlert()
      }), isModalVisible && /*#__PURE__*/jsx_runtime_.jsx(Modal/* default */.Z, {
        role: modalRole,
        entity: "Jadwal",
        visible: isModalVisible,
        setVisible: setIsModalVisible,
        confirmLoading: isModalLoading,
        setConfirmLoading: setIsModalLoading,
        modalText: modalText,
        modalContent: modalRole === "tambah" ? /*#__PURE__*/jsx_runtime_.jsx(Jadwal_FormTambahJadwal, {
          handleSubmit: aksiTambahJadwal,
          setVisible: setIsModalVisible,
          setFormObj: setFormObj
        }) : modalRole === "edit" ? /*#__PURE__*/jsx_runtime_.jsx(Jadwal_FormEditJadwal, {
          currentJadwal: currentJadwal,
          handleSubmit: aksiEditJadwal,
          setVisible: setIsModalVisible,
          setFormObj: setFormObj
        }) : /*#__PURE__*/jsx_runtime_.jsx(Jadwal_FormHapusJadwal, {
          currentJadwal: currentJadwal,
          handleSubmit: aksiDeleteJadwal,
          setVisible: setIsModalVisible
        }),
        setModalText: setModalText
      }), /*#__PURE__*/jsx_runtime_.jsx(RadioFilterCategory/* default */.Z, {
        data: dataJadwal,
        setIsFilterActive: setIsFilterActive,
        setEntityFiltered: setJadwalFiltered
      }), /*#__PURE__*/jsx_runtime_.jsx(List/* default */.Z, {
        isLoading: !isDataLoaded,
        role: "jadwal-dosen",
        editJadwal: editJadwal,
        deleteJadwal: deleteJadwal,
        dataSource: isFilterActive ? jadwalFiltered : dataJadwal
      })]
    })]
  });
}

/* harmony default export */ const dosen = (Jadwal);

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
var __webpack_exports__ = __webpack_require__.X(0, [786,47,593,533,286,576,264], () => (__webpack_exec__(8594)));
module.exports = __webpack_exports__;

})();