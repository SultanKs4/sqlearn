"use strict";
exports.id = 110;
exports.ids = [110];
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

/***/ 4138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5723);
/* harmony import */ var antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_remote_data_dosen_StudiKasus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5533);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
const _excluded = ["currentSoal", "setFormObj", "setVisible", "handleSubmit"],
      _excluded2 = ["kategori"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 0
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 24
    }
  }
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 24,
      offset: 0
    }
  }
};

function FormEditSoal(_ref) {
  var _currentSoal$jawaban$;

  let {
    currentSoal,
    setFormObj,
    setVisible,
    handleSubmit
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [form] = (0,antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_3__.useForm)();
  const {
    0: dataStudiKasus,
    1: setDataStudiKasus
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    0: selectedStudiKasus,
    1: setSelectedStudiKasus
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: selectedKategori,
    1: setSelectedKategori
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(currentSoal === null || currentSoal === void 0 ? void 0 : currentSoal.kategori);
  const {
    0: isEditingForm,
    1: setIsEditingForm
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // ? State ini dipakai jika kategori nya adalah close-ended

  const refButton = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const refButtonPetunjuk = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const {
    0: tagsKomponen,
    1: setTagsKomponen
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((currentSoal === null || currentSoal === void 0 ? void 0 : currentSoal.kategori) === "Close-Ended" ? currentSoal === null || currentSoal === void 0 ? void 0 : (_currentSoal$jawaban$ = currentSoal.jawaban[0]) === null || _currentSoal$jawaban$ === void 0 ? void 0 : _currentSoal$jawaban$.split(" ") : []);
  const {
    0: tagsPetunjuk,
    1: setTagsPetunjuk
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    0: inputTagsKomponenValue,
    1: setInputTagsKomponenValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: inputTagsKomponenVisible,
    1: setInputTagsKomponenVisible
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: inputTagsPetunjukValue,
    1: setInputTagsPetunjukValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: inputTagsPetunjukVisible,
    1: setInputTagsPetunjukVisible
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);

  const normFile = e => console.log("Upload event:", e);

  const validateImageFile = file => {
    if (!file.type.includes("image")) {
      console.log("bukan gambar", file);
      antd__WEBPACK_IMPORTED_MODULE_0__.message.error(`${file.name} is not an image`);
    }

    return file.type.includes("image") ? true : antd__WEBPACK_IMPORTED_MODULE_0__.Upload.LIST_IGNORE;
  };

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

  const onChangeStudiKasus = kelas => {
    setIsEditingForm(true);
    console.log(kelas);
    setSelectedStudiKasus(kelas);
  };

  const onChangeKategori = kategori => {
    setIsEditingForm(true);
    console.log(kategori);
    setSelectedKategori(kategori);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    (0,_utils_remote_data_dosen_StudiKasus__WEBPACK_IMPORTED_MODULE_4__/* .mockGetAllStudiKasus */ .Y)().then(response => setDataStudiKasus(response.data));
    return () => {
      setDataStudiKasus({}); // This worked for me
    };
  }, []);

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  }; // ? Ini untuk menyesuaikan data form dengan remote data dari BE


  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    console.log(form.getFieldsValue());
    form.setFieldsValue(_objectSpread(_objectSpread({}, form), {}, {
      opsi_jawaban: selectedKategori === "Close-Ended" ? tagsKomponen : form.getFieldValue("opsi_jawaban"),
      kategori: selectedKategori
    }));
  }, [tagsKomponen, selectedKategori]); // ? Ini untuk menyesuaikan data form dengan user input

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    form.setFieldsValue(_objectSpread(_objectSpread({}, form), {}, {
      opsi_jawaban: tagsKomponen,
      petunjuk_jawaban: tagsPetunjuk
    }));
  }, [tagsKomponen, tagsPetunjuk]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    console.log("ini currentSoal", currentSoal);
    form.setFieldsValue({
      kategori: selectedKategori,
      teksSoal: currentSoal === null || currentSoal === void 0 ? void 0 : currentSoal.teksSoal,
      opsi_jawaban: currentSoal === null || currentSoal === void 0 ? void 0 : currentSoal.jawaban,
      jawaban_benar: currentSoal === null || currentSoal === void 0 ? void 0 : currentSoal.jawaban_benar,
      dosen_pembuat: currentSoal === null || currentSoal === void 0 ? void 0 : currentSoal.dosen_pembuat,
      studi_kasus: currentSoal === null || currentSoal === void 0 ? void 0 : currentSoal.studi_kasus
    });
  }, [currentSoal]);

  const showInput = () => setInputTagsKomponenVisible(true);

  const showInputPetunjuk = () => setInputTagsPetunjukVisible(true);

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var _refButton$current;

    refButton === null || refButton === void 0 ? void 0 : (_refButton$current = refButton.current) === null || _refButton$current === void 0 ? void 0 : _refButton$current.input.focus();
  }, [inputTagsKomponenVisible]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var _refButtonPetunjuk$cu;

    refButtonPetunjuk === null || refButtonPetunjuk === void 0 ? void 0 : (_refButtonPetunjuk$cu = refButtonPetunjuk.current) === null || _refButtonPetunjuk$cu === void 0 ? void 0 : _refButtonPetunjuk$cu.input.focus();
  }, [inputTagsPetunjukVisible]);

  const handleInputChange = e => setInputTagsKomponenValue(e.target.value);

  const handleInputPetunjukChange = e => setInputTagsPetunjukValue(e.target.value);

  const onRemoveTagsKomponen = removedTag => setTagsKomponen(prevTagsKomponen => prevTagsKomponen.filter(item => item !== removedTag));

  const onAddTagsKomponen = () => {
    setTagsKomponen(prevTagsKomponen => [...prevTagsKomponen, inputTagsKomponenValue]);
    setInputTagsKomponenVisible(false);
    setInputTagsKomponenValue("");
  };

  const onRemoveTagsPetunjuk = removedTag => setTagsPetunjuk(prevTagsPetunjuk => prevTagsPetunjuk.filter(item => item !== removedTag));

  const onAddTagsPetunjuk = () => {
    setTagsPetunjuk(prevTagsPetunjuk => [...prevTagsPetunjuk, inputTagsPetunjukValue]);
    setInputTagsPetunjukVisible(false);
    setInputTagsPetunjukValue("");
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_0__.Form, {
    form: form,
    onFinish: onFinish,
    layout: "vertical",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Row, {
      justify: "space-between",
      gutter: 8,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
        span: 24,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
          name: "kategori",
          label: "Kategori",
          rules: [{
            required: true,
            message: "Mohon masukkan nama Kategori!"
          }],
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_0__.Select, {
            placeholder: "Pilih Kategori . . .",
            onChange: onChangeKategori,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Select.Option, {
              children: "Close-Ended"
            }, "Close-Ended"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Select.Option, {
              children: "Open-Ended"
            }, "Open-Ended")]
          })
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
      name: "teksSoal",
      label: "Teks Soal",
      rules: [{
        required: true,
        message: "Mohon masukkan pertanyaan !"
      }],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Input, {
        prefix: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.ConsoleSqlOutlined, {}),
        placeholder: ` Teks Pertanyaan . . .`
      })
    }), selectedKategori === "-" ? " " : selectedKategori === "Open-Ended" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Form.List, {
      name: "opsi_jawaban",
      rules: [{
        validator: async (_, names) => {
          if (!names || names.length < 1) {
            return Promise.reject(new Error("Masukkan paling sedikit 1 jawaban"));
          }
        }
      }],
      children: (fields, {
        add,
        remove
      }, {
        errors
      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [fields.map((field, index) => /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, _objectSpread(_objectSpread({}, index === 0 ? formItemLayout : formItemLayoutWithOutLabel), {}, {
          label: index === 0 ? "Opsi Jawaban" : "",
          required: false,
          key: field.key
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, _objectSpread(_objectSpread({}, field), {}, {
          validateTrigger: ["onChange", "onBlur"],
          rules: [{
            required: true,
            whitespace: true,
            message: "Masukkan Kunci SQL Query atau hapus field ini"
          }],
          noStyle: true,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Input, {
            placeholder: "Kunci SQL Query . . .",
            style: {
              width: "88%"
            }
          })
        })), fields.length > 1 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.MinusCircleOutlined, {
          style: {
            marginLeft: ".5em"
          },
          className: "dynamic-delete-button",
          onClick: () => remove(field.name)
        }) : null)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Button, {
            type: "dashed",
            onClick: () => add(),
            style: {
              width: "100%"
            },
            icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.PlusOutlined, {}),
            children: "Tambah Opsi Jawaban"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Form.ErrorList, {
            errors: errors
          })]
        })]
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
        name: "opsi_jawaban",
        label: "Opsi Jawaban",
        children: [tagsKomponen.map((item, idx) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Tag, {
          closable: true,
          onClose: () => onRemoveTagsKomponen(item),
          children: item
        }, idx)), inputTagsKomponenVisible && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Input, {
          ref: refButton,
          type: "text",
          size: "small",
          style: {
            width: 78
          },
          value: inputTagsKomponenValue,
          onChange: handleInputChange,
          onBlur: onAddTagsKomponen,
          onPressEnter: onAddTagsKomponen
        }), !inputTagsKomponenVisible && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Button, {
          size: "small",
          type: "dashed",
          onClick: showInput,
          children: "+ Tambah komponen SQL"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
        name: "petunjuk_jawaban",
        label: "Petunjuk Jawaban",
        children: [tagsPetunjuk.map((item, idx) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Tag, {
          closable: true,
          onClose: () => onRemoveTagsPetunjuk(item),
          children: item
        }, idx)), inputTagsPetunjukVisible && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Input, {
          ref: refButtonPetunjuk,
          type: "text",
          size: "small",
          style: {
            width: 78
          },
          value: inputTagsPetunjukValue,
          onChange: handleInputPetunjukChange,
          onBlur: onAddTagsPetunjuk,
          onPressEnter: onAddTagsPetunjuk
        }), !inputTagsPetunjukVisible && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Button, {
          size: "small",
          type: "dashed",
          onClick: showInputPetunjuk,
          children: "+ Tambah komponen petunjuk SQL"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
        name: "jawaban_benar",
        label: "Jawaban Benar",
        rules: [{
          required: true,
          message: "Mohon masukkan jawaban yang benar!"
        }],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Input, {
          prefix: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.ConsoleSqlOutlined, {}),
          placeholder: ` Jawaban Benar . . .`
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
      label: "Preview Hasil",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
        name: "preview_hasil",
        valuePropName: "fileList",
        getValueFromEvent: normFile,
        noStyle: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_0__.Upload.Dragger, {
          multiple: false,
          beforeUpload: file => validateImageFile(file),
          name: "files",
          action: "/upload.do",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
            className: "ant-upload-drag-icon",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.InboxOutlined, {})
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
            className: "ant-upload-text",
            children: "Click or drag file to this area to upload"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
            className: "ant-upload-hint",
            children: "Hanya bisa upload gambar "
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_0__.Row, {
      justify: "space-between",
      gutter: 8,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
        span: 12,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
          name: "dosen_pembuat",
          label: "Dibuat oleh",
          rules: [{
            required: true,
            message: "Mohon masukkan dosen pembuat!"
          }],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Input, {
            disabled: true,
            prefix: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.ConsoleSqlOutlined, {}),
            placeholder: ` Dibuat Oleh . . .`
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
        span: 12,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
          name: "studi_kasus",
          label: "Studi Kasus",
          rules: [{
            required: true,
            message: "Mohon masukkan nama Studi Kasus!"
          }],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Select, {
            placeholder: "Pilih kelas . . .",
            onChange: onChangeStudiKasus,
            children: dataStudiKasus === null || dataStudiKasus === void 0 ? void 0 : dataStudiKasus.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Select.Option, {
              children: item.nama
            }, item.nama))
          })
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Divider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_0__.Row, {
      justify: "end",
      gutter: 10,
      style: {
        padding: 0,
        margin: 0
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Button, {
          onClick: handleCancel,
          children: "Cancel"
        }, "back")
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Button, {
          type: "primary",
          htmlType: "submit",
          children: "Submit"
        }, "submit")
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormEditSoal);

/***/ }),

/***/ 6971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
const _excluded = ["form", "currentSoal", "setVisible", "handleSubmit"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function FormHapusSoal(_ref) {
  let {
    form,
    currentSoal,
    setVisible,
    handleSubmit
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Row, {
      justify: "center",
      children: `Apakah Anda yakin ingin menghapus ${currentSoal.nama} ?`
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_0__.Row, {
      justify: "center",
      style: {
        marginTop: "1em"
      },
      gutter: 10,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Button, {
          ghost: true,
          type: "primary",
          onClick: () => setVisible(false),
          children: "Tidak"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Button, {
          type: "danger",
          ghost: true,
          onClick: () => handleSubmit(currentSoal),
          children: "Ya, Hapus"
        })
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormHapusSoal);

/***/ }),

/***/ 410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$q": () => (/* binding */ getSoal)
/* harmony export */ });
/* unused harmony exports getSoalByID, postSoal, updateSoal, deleteSoal */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const getSoal = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [{
          idSoal: 8,
          nama: "Test nama soal 1",
          teksSoal: "Dosen ingin menampilkan semua data tentang mahasiswa.",
          jawaban: ["SELECT * FROM mahasiswa", "SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa"],
          jawaban_benar: "SELECT * FROM mahasiswa",
          kategori: "Open-Ended",
          studi_kasus: "Studi Kasus A",
          dosen_pembuat: "Dosen Coba"
        }, {
          idSoal: 11,
          nama: "Test nama soal 2",
          teksSoal: "Administrator ingin mengetahui jumlah mahasiswa dari setiap kelas, tampilkan nama kelas dan jumlah mahasiswa dari kelas tersebut",
          jawaban: ["SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas", "SELECT kelas, COUNT(*) as jumlah_mhs FROM mahasiswa GROUP BY kelas", "SELECT kelas, COUNT(nama) as jumlah_mhs FROM mahasiswa GROUP BY kelas", "SELECT kelas, COUNT(kelas) as jumlah_mhs FROM mahasiswa GROUP BY kelas", "SELECT kelas, COUNT(ipk) as jumlah_mhs FROM mahasiswa GROUP BY kelas"],
          jawaban_benar: "SELECT * FROM mahasiswa",
          kategori: "Open-Ended",
          studi_kasus: "Studi Kasus A",
          dosen_pembuat: "Dosen Coba"
        }, {
          idSoal: 9,
          nama: "Test nama soal 2",
          teksSoal: "Dosen ingin menampilkan semua data mahasiswa yang namanya diawali dengan huruf 'D'",
          jawaban: ["SELECT * FROM mahasiswa WHERE nama LIKE 'D%'", "SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa WHERE nama LIKE 'D%'"],
          jawaban_benar: "SELECT * FROM mahasiswa",
          kategori: "Open-Ended",
          studi_kasus: "Studi Kasus C",
          dosen_pembuat: "Dosen Coba"
        }, {
          idSoal: 12,
          nama: "Test nama soal 2",
          teksSoal: "Administrator ingin mengetahui kelas mana yang jumlah mahasiswanya lebih dari 2, tampilkan nama kelas dan jumlah mahasiswa kelas tersebut",
          jawaban: ["SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2 ", "SELECT kelas, COUNT(*) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2", "SELECT kelas, COUNT(nama) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2", "SELECT kelas, COUNT(ipk) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2", "SELECT kelas, COUNT(kelas) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2"],
          jawaban_benar: "SELECT * FROM mahasiswa",
          kategori: "Open-Ended",
          studi_kasus: "Studi Kasus C",
          dosen_pembuat: "Dosen Coba"
        }, {
          idSoal: 15,
          nama: "Test nama soal 2",
          teksSoal: "Administrator ingin melihat tanggal login terakhir dari mahasiswa, tampilkan nama dan waktu login dari mahasiswa tersebut",
          jawaban: ["SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa"],
          jawaban_benar: "SELECT * FROM mahasiswa",
          kategori: "Close-Ended",
          studi_kasus: "Studi Kasus C",
          dosen_pembuat: "Dosen Coba"
        }, {
          idSoal: 16,
          nama: "Test nama soal 2",
          teksSoal: "Administrator ingin menampilkan data nama dan kelas. Data tersebut di dapatkan dengan menggabungkan keseluruhan data antara tabel mahasiswa dan user, dimana data yang memiliki isi yang sama tetap ditampilkan",
          jawaban: ["(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)"],
          jawaban_benar: "SELECT * FROM mahasiswa",
          kategori: "Close-Ended",
          studi_kasus: "Studi Kasus C",
          dosen_pembuat: "Dosen Coba"
        }, {
          idSoal: 10,
          nama: "Test nama soal 3",
          teksSoal: "Dosen ingin mengetahui urutan IPK dari yang paling besar ke yang paling kecil, informasi yang ditampilkan meliputi nama dan ipk mahasiswa tersebut",
          jawaban: ["SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC"],
          jawaban_benar: "SELECT * FROM mahasiswa",
          kategori: "Close-Ended",
          studi_kasus: "Studi Kasus B",
          dosen_pembuat: "Dosen Coba"
        }, {
          idSoal: 13,
          nama: "Test nama soal 3",
          teksSoal: "Dosen ingin mengetahui data mahasiswa dengan IPK antara 3.00 sampe 4.00",
          jawaban: ["SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00", "SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00", "SELECT * FROM mahasiswa WHERE ipk >= 3.00 AND ipk <= 4.00", "SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa WHERE ipk >= 3.00 AND ipk <= 4.00", "SELECT * FROM mahasiswa WHERE ipk >= 3.00", "SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa WHERE ipk >= 3.00"],
          jawaban_benar: "SELECT * FROM mahasiswa",
          kategori: "Open-Ended",
          studi_kasus: "Studi Kasus B",
          dosen_pembuat: "Dosen Coba"
        }, {
          idSoal: 14,
          nama: "Test nama soal 3",
          teksSoal: "Dosen ingin melihat data mahasiswa yang nilai IPKnya paling kecil. Petunjuk: Gunakan SubQuery",
          jawaban: ["SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)", "SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)", "SELECT * FROM mahasiswa ORDER BY ipk LIMIT 1", "SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa ORDER BY ipk LIMIT 1"],
          jawaban_benar: "SELECT * FROM mahasiswa",
          kategori: "Open-Ended",
          studi_kasus: "Studi Kasus B",
          dosen_pembuat: "Dosen Coba"
        }, {
          idSoal: 17,
          nama: "Soal baru",
          teksSoal: "Soal baru",
          jawaban: [],
          jawaban_benar: "SELECT * FROM mahasiswa",
          kategori: "-",
          studi_kasus: "Studi Kasus B",
          dosen_pembuat: "Dosen Coba"
        }]
      });
    }, 1000);
  });
};

const getSoalByID = async soalID => {
  let response = await axios.get("");
  return response.data;
};

const postSoal = async () => {
  let response = await axios.post("");
  return response.data;
};

const updateSoal = async () => {
  let response = await axios.put("");
  return response.data;
};

const deleteSoal = async () => {
  let response = await axios.delete("");
  return response.data;
};



/***/ })

};
;