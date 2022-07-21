"use strict";
(() => {
var exports = {};
exports.id = 218;
exports.ids = [218];
exports.modules = {

/***/ 8406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ nilai_mahasiswa)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: ./utils/remote-data/dosen/NilaiMahasiswaCRUD.js
var NilaiMahasiswaCRUD = __webpack_require__(265);
// EXTERNAL MODULE: ./components/PageLayout.js + 1 modules
var PageLayout = __webpack_require__(7786);
// EXTERNAL MODULE: ./components/List.js
var List = __webpack_require__(2047);
// EXTERNAL MODULE: ./components/Modal.js
var Modal = __webpack_require__(9151);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/SearchBar.js



const {
  Search
} = external_antd_.Input;

function SearchBar({
  searchKey = "nama",
  role = "",
  dataSource,
  isSearching,
  setIsSearching,
  setSearchResult
}) {
  const {
    0: searchValue,
    1: setSearchValue
  } = (0,external_react_.useState)("");
  const {
    0: key
  } = (0,external_react_.useState)(searchKey);

  const onSearch = value => {
    if (value === "") {
      setIsSearching(false);
      setSearchResult(dataSource);
    } else setIsSearching(true);

    setSearchValue(value);
  };

  const doSearch = (0,external_react_.useCallback)(() => {
    if (isSearching) setSearchResult(dataSource.filter(item => item[key].toLowerCase().includes(searchValue.toLowerCase())));
  }, [isSearching, searchValue]);
  (0,external_react_.useEffect)(() => {
    doSearch();
  }, [doSearch]);
  return /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
    style: {
      marginBottom: "1em"
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(Search, {
      placeholder: `Cari ${searchKey} ${role} . . .`,
      allowClear: true,
      onSearch: onSearch
    })
  });
}

/* harmony default export */ const components_SearchBar = (SearchBar);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./pages/dosen/nilai-mahasiswa/index.js













const mockNilaiMhs = [{
  nama: "Muhammad Ilham Adhim",
  avgNilai: 88,
  avgDurasi: 25.4,
  jumlahLatihanDikerjakan: 20
}, {
  nama: "Dharma Y",
  avgNilai: 88,
  avgDurasi: 25.4,
  jumlahLatihanDikerjakan: 20
}, {
  nama: "Rasyid M",
  avgNilai: 88,
  avgDurasi: 25.4,
  jumlahLatihanDikerjakan: 20
}, {
  nama: "Sultan A",
  avgNilai: 88,
  avgDurasi: 25.4,
  jumlahLatihanDikerjakan: 20
}, {
  nama: "Ilham Rizky",
  avgNilai: 88,
  avgDurasi: 25.4,
  jumlahLatihanDikerjakan: 20
}];

function HalamanNilai() {
  const router = (0,router_.useRouter)();
  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)([]);
  const {
    0: searchResult,
    1: setSearchResult
  } = (0,external_react_.useState)([]);
  const {
    0: isDataLoaded,
    1: setIsDataLoaded
  } = (0,external_react_.useState)(false);
  const {
    0: isSearching,
    1: setIsSearching
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

  const previewNilaiMhs = nilaiMhsObj => {
    setModalRole("preview");
    handleToggleModal();
    setModalText(`Nilai Rata rata ${nilaiMhsObj.nama} adalah ${nilaiMhsObj.avgNilai}`);
  };

  (0,external_react_.useEffect)(() => {
    (0,NilaiMahasiswaCRUD/* mockKelasDiajar */.Qi)().then(response => {
      setData(response.data);
      setIsDataLoaded(true);
    });
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "SQLearn | Dosen - Rekap Nilai "
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(PageLayout/* default */.Z, {
      role: "dosen",
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
        justify: "space-between",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Typography.Title, {
            level: 2,
            children: "Rekap Nilai "
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Modal/* default */.Z, {
        role: modalRole,
        entity: "Nilai Mahasiswa",
        visible: isModalVisible,
        setVisible: setIsModalVisible,
        confirmLoading: isModalLoading,
        setConfirmLoading: setIsModalLoading,
        modalText: modalText,
        setModalText: setModalText
      }), isDataLoaded ? /*#__PURE__*/jsx_runtime_.jsx(components_SearchBar, {
        dataSource: data,
        searchKey: "nama",
        role: "kelas",
        isSearching: isSearching,
        setIsSearching: setIsSearching,
        setSearchResult: setSearchResult
      }) : /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
        justify: "center",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Spin, {})
      }), isDataLoaded ? /*#__PURE__*/jsx_runtime_.jsx(external_antd_.List, {
        itemLayout: "horizontal",
        dataSource: isSearching ? searchResult : data,
        renderItem: item => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Card, {
          style: {
            marginBottom: "1em"
          },
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
            justify: "space-between",
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Typography.Title, {
                level: 3,
                children: [" ", item.nama, " "]
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
                type: "primary",
                shape: "round",
                icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.RightOutlined, {}),
                onClick: () => router.push(`/dosen/nilai-mahasiswa/kelas/${item.id}`),
                children: "Preview Kelas"
              }), " "]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(List/* default */.Z, {
            role: "lihat-nilai",
            kelas: item,
            isLoading: !isDataLoaded,
            dataSource: mockNilaiMhs,
            previewDetailNilai: previewNilaiMhs
          })]
        })
      }) : /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Skeleton, {
        active: true,
        paragraph: "4",
        avatar: true
      })]
    })]
  });
}

/* harmony default export */ const nilai_mahasiswa = (HalamanNilai);

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
var __webpack_exports__ = __webpack_require__.X(0, [786,47,593,265], () => (__webpack_exec__(8406)));
module.exports = __webpack_exports__;

})();