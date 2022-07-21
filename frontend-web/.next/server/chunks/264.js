"use strict";
exports.id = 264;
exports.ids = [264];
exports.modules = {

/***/ 4264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j$": () => (/* binding */ getKelas),
/* harmony export */   "PQ": () => (/* binding */ mockGetKelas)
/* harmony export */ });
/* unused harmony exports getKelasByID, postKelas, updateKelas, deleteKelas */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3143);



const getKelas = async () => {
  let response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${_api__WEBPACK_IMPORTED_MODULE_1__/* .URL_CLASS_API */ .Yv}`, {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo1LCJyb2xlIjoiZG9zZW4ifSwiaWF0IjoxNjQ2NDYxNTczfQ.s26EwVazSln8jLtMTXtym8aodRvvADK_Ik_-jVGiFb4"
    }
  });
  return response.data;
};

const mockGetKelas = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [{
          id: 1,
          nama: "TI-1A-2021",
          jumlahMhs: 25,
          semester: 2
        }, {
          id: 2,
          nama: "TI-1G-2021",
          jumlahMhs: 22,
          semester: 4
        }, {
          id: 3,
          nama: "TI-2D-2020",
          jumlahMhs: 25,
          semester: 4
        }, {
          id: 4,
          nama: "TI-2E-2020",
          jumlahMhs: 28,
          semester: 1
        }, {
          id: 5,
          nama: "TI-2F-2020",
          jumlahMhs: 30,
          semester: 2
        }]
      });
    }, 1000);
  });
};

const getKelasByID = async kelasID => {
  let response = await axios.get(`${mockAPIURL}/kelas/${kelasID}`);
  return response.data;
};

const postKelas = async () => {
  let response = await axios.post("");
  return response.data;
};

const updateKelas = async () => {
  let response = await axios.put("");
  return response.data;
};

const deleteKelas = async () => {
  let response = await axios.delete("");
  return response.data;
};



/***/ })

};
;