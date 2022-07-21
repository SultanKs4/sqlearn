"use strict";
exports.id = 286;
exports.ids = [286];
exports.modules = {

/***/ 5286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);





function RadioFilterCategory({
  setIsFilterActive,
  setEntityFiltered,
  data
}) {
  const filterCategory = e => {
    console.log(e.target.value);
    e.target.value === "Semua" ? setIsFilterActive(false) : setIsFilterActive(true);
    setEntityFiltered(data.filter(item => {
      if (e.target.value === "Tanpa Kategori") return (item === null || item === void 0 ? void 0 : item.kategori) === "-";else return (item === null || item === void 0 ? void 0 : item.kategori) === e.target.value;
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_0__.Row, {
    style: {
      marginBottom: "1em"
    },
    justify: "space-between",
    gutter: 8,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
      children: [" ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Typography.Title, {
        level: 4,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: "Pilih Kategori "
        })
      }), " "]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Radio.Group, {
        defaultValue: "Semua",
        buttonStyle: "solid",
        onChange: e => filterCategory(e),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_0__.Row, {
          justify: "center",
          gutter: 8,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Radio.Button, {
              value: "Semua",
              children: "Semua"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Radio.Button, {
              value: "Close-Ended",
              children: "Close-Ended"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Radio.Button, {
              value: "Open-Ended",
              children: "Open-Ended"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Col, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Radio.Button, {
              value: "Tanpa Kategori",
              children: "Tanpa Kategori"
            })
          })]
        })
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadioFilterCategory);

/***/ })

};
;