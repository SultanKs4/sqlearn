"use strict";
(() => {
var exports = {};
exports.id = 461;
exports.ids = [461];
exports.modules = {

/***/ 3838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ soal)
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
// EXTERNAL MODULE: ./components/dosen/Soal/FormEditSoal.js
var FormEditSoal = __webpack_require__(4138);
// EXTERNAL MODULE: ./components/dosen/Soal/FormHapusSoal.js
var FormHapusSoal = __webpack_require__(6971);
// EXTERNAL MODULE: ./utils/remote-data/dosen/SoalCRUD.js
var SoalCRUD = __webpack_require__(410);
// EXTERNAL MODULE: ./components/List.js
var List = __webpack_require__(2047);
// EXTERNAL MODULE: external "antd/lib/form/Form"
var Form_ = __webpack_require__(5723);
// EXTERNAL MODULE: ./utils/remote-data/dosen/StudiKasus.js
var StudiKasus = __webpack_require__(5533);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/dosen/Soal/FormTambahSoal.js
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

function FormTambahSoal(_ref) {
  let {
    currentSoal,
    setFormObj,
    setVisible,
    handleSubmit
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [form] = (0,Form_.useForm)();
  const {
    0: dataStudiKasus,
    1: setDataStudiKasus
  } = (0,external_react_.useState)([]);
  const {
    0: selectedStudiKasus,
    1: setSelectedStudiKasus
  } = (0,external_react_.useState)("");
  const {
    0: selectedKategori,
    1: setSelectedKategori
  } = (0,external_react_.useState)(1); // ? State ini dipakai jika kategori nya adalah close-ended

  const refButton = (0,external_react_.useRef)(null);
  const refButtonPetunjuk = (0,external_react_.useRef)(null);
  const {
    0: tagsKomponen,
    1: setTagsKomponen
  } = (0,external_react_.useState)([]);
  const {
    0: tagsPetunjuk,
    1: setTagsPetunjuk
  } = (0,external_react_.useState)([]);
  const {
    0: inputTagsKomponenValue,
    1: setInputTagsKomponenValue
  } = (0,external_react_.useState)("");
  const {
    0: inputTagsKomponenVisible,
    1: setInputTagsKomponenVisible
  } = (0,external_react_.useState)(false);
  const {
    0: inputTagsPetunjukValue,
    1: setInputTagsPetunjukValue
  } = (0,external_react_.useState)("");
  const {
    0: inputTagsPetunjukVisible,
    1: setInputTagsPetunjukVisible
  } = (0,external_react_.useState)(false);

  const onChangeStudiKasus = kelas => {
    console.log(kelas);
    setSelectedStudiKasus(kelas);
  };

  const onChangeKategori = kategori => {
    console.log(kategori);
    setSelectedKategori(kategori);
  };

  (0,external_react_.useEffect)(() => {
    (0,StudiKasus/* mockGetAllStudiKasus */.Y)().then(response => setDataStudiKasus(response.data));
    form.setFieldsValue({
      dosen_pembuat: "Dosen Coba"
    });
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

  const normFile = e => console.log("Upload event:", e);

  (0,external_react_.useEffect)(() => {
    form.setFieldsValue(_objectSpread(_objectSpread({}, form), {}, {
      opsi_jawaban: tagsKomponen,
      petunjuk_jawaban: tagsPetunjuk
    }));
  }, [tagsKomponen, tagsPetunjuk]);

  const validateImageFile = file => {
    if (!file.type.includes("image")) {
      console.log("bukan gambar", file);
      external_antd_.message.error(`${file.name} is not an image`);
    }

    return file.type.includes("image") ? true : external_antd_.Upload.LIST_IGNORE;
  };

  const showInput = () => setInputTagsKomponenVisible(true);

  const showInputPetunjuk = () => setInputTagsPetunjukVisible(true);

  (0,external_react_.useEffect)(() => {
    var _refButton$current;

    refButton === null || refButton === void 0 ? void 0 : (_refButton$current = refButton.current) === null || _refButton$current === void 0 ? void 0 : _refButton$current.input.focus();
  }, [inputTagsKomponenVisible]);
  (0,external_react_.useEffect)(() => {
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

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Form, {
    form: form,
    onFinish: onFinish,
    layout: "vertical",
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      justify: "space-between",
      gutter: 8,
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        span: 24,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "kategori",
          label: "Kategori",
          rules: [{
            required: true,
            message: "Mohon masukkan nama Kategori!"
          }],
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Select, {
            placeholder: "Pilih Kategori . . .",
            onChange: onChangeKategori,
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Select.Option, {
              children: "Close-Ended"
            }, "Close-Ended"), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Select.Option, {
              children: "Open-Ended"
            }, "Open-Ended")]
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
      name: "teksSoal",
      label: "Teks Soal",
      rules: [{
        required: true,
        message: "Mohon masukkan pertanyaan !"
      }],
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
        prefix: /*#__PURE__*/jsx_runtime_.jsx(icons_.ConsoleSqlOutlined, {}),
        placeholder: ` Teks Pertanyaan . . .`
      })
    }), selectedKategori === "Open-Ended" ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.List, {
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
        }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [fields.map((field, index) => /*#__PURE__*/(0,external_react_.createElement)(external_antd_.Form.Item, _objectSpread(_objectSpread({}, index === 0 ? formItemLayout : formItemLayoutWithOutLabel), {}, {
            label: index === 0 ? "Opsi Jawaban" : "",
            required: false,
            key: field.key
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, _objectSpread(_objectSpread({}, field), {}, {
            validateTrigger: ["onChange", "onBlur"],
            rules: [{
              required: true,
              whitespace: true,
              message: "Masukkan Kunci SQL Query atau hapus field ini"
            }],
            noStyle: true,
            children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
              placeholder: "Kunci SQL Query . . .",
              style: {
                width: "88%"
              }
            })
          })), fields.length > 1 ? /*#__PURE__*/jsx_runtime_.jsx(icons_.MinusCircleOutlined, {
            style: {
              marginLeft: ".5em"
            },
            className: "dynamic-delete-button",
            onClick: () => remove(field.name)
          }) : null)), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Form.Item, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
              type: "dashed",
              onClick: () => add(),
              style: {
                width: "100%"
              },
              icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.PlusOutlined, {}),
              children: "Tambah Opsi Jawaban"
            }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.ErrorList, {
              errors: errors
            })]
          })]
        })
      })
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Form.Item, {
        name: "opsi_jawaban",
        label: "Opsi Jawaban",
        children: [tagsKomponen.map((item, idx) => /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Tag, {
          closable: true,
          onClose: () => onRemoveTagsKomponen(item),
          children: item
        }, idx)), inputTagsKomponenVisible && /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
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
        }), !inputTagsKomponenVisible && /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
          size: "small",
          type: "dashed",
          onClick: showInput,
          children: "+ Tambah komponen SQL"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Form.Item, {
        name: "petunjuk_jawaban",
        label: "Petunjuk Jawaban",
        children: [tagsPetunjuk.map((item, idx) => /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Tag, {
          closable: true,
          onClose: () => onRemoveTagsPetunjuk(item),
          children: item
        }, idx)), inputTagsPetunjukVisible && /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
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
        }), !inputTagsPetunjukVisible && /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
          size: "small",
          type: "dashed",
          onClick: showInputPetunjuk,
          children: "+ Tambah komponen petunjuk SQL"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
        name: "jawaban_benar",
        label: "Jawaban Benar",
        rules: [{
          required: true,
          message: "Mohon masukkan jawaban yang benar!"
        }],
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
          prefix: /*#__PURE__*/jsx_runtime_.jsx(icons_.ConsoleSqlOutlined, {}),
          placeholder: ` Jawaban Benar . . .`
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
      label: "Preview Hasil",
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
        name: "preview_hasil",
        valuePropName: "fileList",
        getValueFromEvent: normFile,
        noStyle: true,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Upload.Dragger, {
          multiple: false,
          beforeUpload: file => validateImageFile(file),
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
            children: "Hanya bisa upload gambar "
          })]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
      justify: "space-between",
      gutter: 8,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        span: 12,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "dosen_pembuat",
          label: "Dibuat oleh",
          rules: [{
            required: true,
            message: "Mohon masukkan dosen pembuat!"
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
            disabled: true,
            prefix: /*#__PURE__*/jsx_runtime_.jsx(icons_.ConsoleSqlOutlined, {}),
            placeholder: ` Dibuat Oleh . . .`
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        span: 12,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
          name: "studi_kasus",
          label: "Studi Kasus",
          rules: [{
            required: true,
            message: "Mohon masukkan nama Studi Kasus!"
          }],
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Select, {
            placeholder: "Pilih Studi Kasus . . .",
            onChange: onChangeStudiKasus,
            children: dataStudiKasus === null || dataStudiKasus === void 0 ? void 0 : dataStudiKasus.map(item => /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Select.Option, {
              children: item.nama
            }, item.nama))
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

/* harmony default export */ const Soal_FormTambahSoal = (FormTambahSoal);
// EXTERNAL MODULE: ./components/RadioFilterCategory.js
var RadioFilterCategory = __webpack_require__(5286);
;// CONCATENATED MODULE: ./pages/dosen/soal.js
















function HalamanSoal() {
  const {
    0: formObj,
    1: setFormObj
  } = (0,external_react_.useState)({});
  const {
    0: currentSoal,
    1: setCurrentSoal
  } = (0,external_react_.useState)({});
  const {
    0: dataSoal,
    1: setDataSoal
  } = (0,external_react_.useState)([]);
  const {
    0: soalFiltered,
    1: setSoalFiltered
  } = (0,external_react_.useState)([]);
  const {
    0: isDataLoaded,
    1: setIsDataLoaded
  } = (0,external_react_.useState)(false);
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
  (0,external_react_.useEffect)(() => {
    (0,SoalCRUD/* getSoal */.$q)().then(response => {
      console.log(response.data);
      setDataSoal(response.data);
      setIsDataLoaded(true);
    });
  }, []);

  const handleToggleModal = () => setIsModalVisible(prev => !prev);

  const handleToggleAlert = () => setIsAlertActive(prev => !prev);

  const tambahSoal = () => {
    setModalRole("tambah");
    handleToggleModal(); // Mungkin ini nanti dibagian modal
    // TODO : Call POST API request dari SoalCRUD.js
    // setCurrentSoal(SoalDariForm)
    // setAlertMessage(`Data Soal ${currentSoal.nama} berhasil ditambahkan`);
  };

  const editSoal = soalObj => {
    setModalRole("edit");
    setCurrentSoal(soalObj);
    handleToggleModal(); // Mungkin ini nanti dibagian modal
    // TODO : Call PUT API request dari SoalCRUD.js
    // ? Mock alert status
    // setAlertStatus("success");
    // setAlertMessage(`Data Soal ${currentSoal.nama} berhasil diubah`);
    // handleToggleAlert();
  };

  const deleteSoal = soalObj => {
    setModalRole("delete");
    setCurrentSoal(soalObj);
    handleToggleModal(); // Mungkin ini nanti dibagian modal
    // TODO : Call DELETE API request dari SoalCRUD.js
    // ? Mock alert status
    // setAlertStatus("success");
    // setAlertMessage(`Data Soal ${currentSoal.nama} berhasil dihapus`);
    // handleToggleAlert();
  };

  const aksiTambahSoal = formSoal => {
    // TODO : Call POST API request dari SoalCRUD.js
    // ...
    handleToggleModal();
    handleToggleAlert();
    setAlertMessage(`Data berhasil ditambahkan`);
    console.log("Hasil submit tambah", formSoal);
  };

  const aksiEditSoal = formSoal => {
    // TODO : Call DELETE API request dari SoalCRUD.js
    // ...
    handleToggleModal();
    setAlertMessage(`Data  berhasil diubah`);
    handleToggleAlert();
    console.log("Data berhasil diubah", formSoal);
  };

  const aksiDeleteSoal = formSoal => {
    // TODO : Call DELETE API request dari SoalCRUD.js
    // ...
    handleToggleModal();
    setAlertMessage(`Data  berhasil dihapus`);
    handleToggleAlert();
    console.log("Data terhapus", formSoal);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "SQLearn | Dosen - Soal "
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(PageLayout/* default */.Z, {
      role: "dosen",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
        justify: "space-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Typography.Title, {
            level: 2,
            children: "Soal "
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
      }), isModalVisible && /*#__PURE__*/jsx_runtime_.jsx(Modal/* default */.Z, {
        role: modalRole,
        entity: "Soal",
        visible: isModalVisible,
        setVisible: setIsModalVisible,
        confirmLoading: isModalLoading,
        setConfirmLoading: setIsModalLoading,
        modalText: modalText,
        setModalText: setModalText,
        modalContent: modalRole === "tambah" ? /*#__PURE__*/jsx_runtime_.jsx(Soal_FormTambahSoal, {
          handleSubmit: aksiTambahSoal,
          setVisible: setIsModalVisible,
          setFormObj: setFormObj
        }) : modalRole === "edit" ? /*#__PURE__*/jsx_runtime_.jsx(FormEditSoal/* default */.Z, {
          handleSubmit: aksiEditSoal,
          setVisible: setIsModalVisible,
          setFormObj: setFormObj,
          currentSoal: currentSoal
        }) : /*#__PURE__*/jsx_runtime_.jsx(FormHapusSoal/* default */.Z, {
          handleSubmit: aksiDeleteSoal,
          setVisible: setIsModalVisible,
          currentSoal: currentSoal
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(RadioFilterCategory/* default */.Z, {
        data: dataSoal,
        setIsFilterActive: setIsFilterActive,
        setEntityFiltered: setSoalFiltered
      }), /*#__PURE__*/jsx_runtime_.jsx(List/* default */.Z, {
        showDetail: true,
        isLoading: !isDataLoaded,
        dataSource: isFilterActive ? soalFiltered : dataSoal,
        role: "data-soal-dosen",
        editSoal: editSoal,
        deleteSoal: deleteSoal
      })]
    })]
  });
}

/* harmony default export */ const soal = (HalamanSoal);

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [786,47,533,286,110], () => (__webpack_exec__(3838)));
module.exports = __webpack_exports__;

})();