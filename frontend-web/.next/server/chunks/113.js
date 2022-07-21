"use strict";
exports.id = 113;
exports.ids = [113];
exports.modules = {

/***/ 5904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ JadwalContext),
/* harmony export */   "Q": () => (/* binding */ JadwalProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
 // Create Context object.


const JadwalContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  timer: "",
  addTimer: () => {}
});
const JadwalProvider = props => {
  const {
    0: timer,
    1: setTimer
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    text: "",
    format: {
      hour: 0,
      minute: 0,
      second: 0
    }
  });

  const addTimer = timerObj => setTimer(timerObj);

  const contextValue = {
    timer,
    addTimer
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(JadwalContext.Provider, {
    value: contextValue,
    children: props.children
  });
};

/***/ }),

/***/ 8489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S7": () => (/* binding */ mockGetSoalByID),
/* harmony export */   "yE": () => (/* binding */ mockGetSoalByCategory)
/* harmony export */ });
/* unused harmony exports getAllSoal, mockGetAllSoal, getSoalByID, testQuery, submitJawaban */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* TODO beberapa fitur untuk Soal.js:
    1. Fetch Data Soal -> @param id
    2. Test Query -> @param SQL Query
    3. Submit jawaban -> @param SQL Query, log timer, log berapa kali dia test query
*/
//  ? Mock data Soal

const data = [{
  id: 1
  /* idSoal */
  ,
  studi_kasus: "Studi Kasus B"
  /* Soal nya */
  ,
  sql_components: [{
    id: 1,
    position: 1,
    content: "SELECT",
    role: "clue"
  }, {
    id: 2,
    position: 2,
    content: "COUNT",
    role: "part"
  }, {
    id: 3,
    position: 3,
    content: "nama",
    role: "part"
  }, {
    id: 4,
    position: 4,
    content: "FROM",
    role: "clue"
  }, {
    id: 5,
    position: 5,
    content: "MAHASISWA",
    role: "part"
  }, {
    id: 6,
    position: 6,
    content: "Employee",
    role: "part"
  }, {
    id: 7,
    position: 7,
    content: "STUDENTS",
    role: "part"
  }],
  jawaban_benar: "SELECT COUNT nama FROM MAHASISWA",
  teksSoal: "Dosen ingin mengetahui jumlah mahasiswa yang ada",
  kategori: "Close-Ended",
  next: {
    soalID: 2
  }
}, {
  id: 2
  /* idSoal */
  ,
  studi_kasus: "Studi Kasus B"
  /* Soal nya */
  ,
  sql_components: [{
    id: 1,
    position: 1,
    content: "SELECT",
    role: "clue"
  }, {
    id: 2,
    position: 2,
    content: "kelas",
    role: "clue"
  }, {
    id: 3,
    position: 3,
    content: "nama",
    role: "part"
  }, {
    id: 4,
    position: 4,
    content: "FROM",
    role: "clue"
  }, {
    id: 5,
    position: 5,
    content: "MAHASISWA",
    role: "part"
  }, {
    id: 6,
    position: 6,
    content: "Karyawan",
    role: "part"
  }, {
    id: 7,
    position: 7,
    content: "Murid",
    role: "part"
  }],
  jawaban_benar: "SELECT nama kelas FROM MAHASISWA",
  teksSoal: "Dosen ingin mengetahui informasi nama dan kelas dari mahasiswa",
  kategori: "Close-Ended",
  next: {
    soalID: 4
  }
}, {
  id: 3
  /* idSoal */
  ,
  studi_kasus: "Studi Kasus B"
  /* Soal nya */
  ,
  sql_components: [],
  jawaban_benar: "SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas",
  teksSoal: "Administrator ingin mengetahui jumlah mahasiswa dari setiap kelas, tampilkan nama kelas dan jumlah mahasiswa dari kelas tersebut",
  kategori: "Open-Ended",
  next: {
    soalID: 5
  }
}, {
  id: 4
  /* idSoal */
  ,
  studi_kasus: "Studi Kasus B"
  /* Soal nya */
  ,
  sql_components: [{
    id: 1,
    position: 1,
    content: "SELECT",
    role: "part"
  }, {
    id: 2,
    position: 2,
    content: "*",
    role: "clue"
  }, {
    id: 3,
    position: 3,
    content: "nama",
    role: "part"
  }, {
    id: 4,
    position: 4,
    content: "FROM",
    role: "part"
  }, {
    id: 5,
    position: 5,
    content: "MAHASISWA",
    role: "clue"
  }],
  jawaban_benar: "SELECT * FROM MAHASISWA",
  teksSoal: "Dosen ingin mengetahui jumlah mahasiswa yang ada",
  kategori: "Close-Ended",
  next: {
    soalID: false
  }
}, {
  id: 5
  /* idSoal */
  ,
  studi_kasus: "Studi Kasus B"
  /* Soal nya */
  ,
  sql_components: [],
  jawaban_benar: "SELECT * FROM mahasiswa WHERE nama LIKE 'D%'",
  teksSoal: "Dosen ingin menampilkan semua data mahasiswa yang namanya diawali dengan huruf 'D'",
  kategori: "Open-Ended",
  next: {
    soalID: false
  }
}];

const getAllSoal = async studiKasusID => {
  // TODO : API Request GET : URL ?studiKasusID={studiKasus}
  let response = await axios.get("");
  return response.data;
};

const mockGetAllSoal = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: data
      });
    }, 1000);
  });
};

const mockGetSoalByCategory = async kategori => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: data.filter(item => item.kategori === kategori)
      });
    }, 1000);
  });
}; // TODO : 1 jadwal = 1 studi paket soal


const mockGetSoalByID = async jadwalID => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: data.find(item => item.id === jadwalID)
      });
    }, 1000);
  });
};

const getSoalByID = async soalID => {
  let response = await axios.get(""); //   ? Output :

  /* 
    {
      sql-components : [
        {
        id : 1,
        content : "SELECT"
      },
      {
        id : 2,
        content : "COUNT"
      },
      {
        id : 3,
        content : "nama"
      },
      {
        id : 4,
        content : "FROM"
      },
      {
        id : 5,
        content : "MAHASISWA"
      },
      {
        id : 6,
        content : "Employee"
      },
      {
        id : 7,
        content : "STUDENTS"
      },
    ],
    }  
  */

  return response.data;
};

const testQuery = async sqlQuery => {
  // TODO : API Request POST: URL ?soalID={soalID, studiKasusID, username} data : attempt++
  // ...
  // TODO : API Request GET: URL ?soalID={soalID}
  //   ? Output :

  /* 
  {
    checkResult : boolean,
    attempt : number
  }  
  */
  let response = await axios.get("");
  return response.data;
};

const submitJawaban = async (sqlQuery, timer, attempts, username) => {
  // TODO : API Request POST : URL ?username={username} data : {sqlQuery, timer, attempts }
  let response = await axios.post("");
  return response.data;
};



/***/ })

};
;