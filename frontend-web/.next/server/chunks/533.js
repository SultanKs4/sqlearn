"use strict";
exports.id = 533;
exports.ids = [533];
exports.modules = {

/***/ 5533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ mockGetAllStudiKasus),
/* harmony export */   "e0": () => (/* binding */ mockGetAllDataStudiKasus)
/* harmony export */ });
/* unused harmony exports getStudiKasus, getStudiKasusByID, postStudiKasus, updateStudiKasus, deleteStudiKasus */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const getStudiKasus = async () => {
  let response = await axios.get("");
  return response.data;
};

const getStudiKasusByID = async studiKasusID => {
  let response = await axios.get("");
  return response.data;
};

const postStudiKasus = async () => {
  let response = await axios.get("");
  return response.data;
};

const updateStudiKasus = async () => {
  let response = await axios.get("");
  return response.data;
};

const deleteStudiKasus = async () => {
  let response = await axios.get("");
  return response.data;
};

const mockGetAllStudiKasus = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [{
          id: 1,
          nama: "Studi Kasus A",
          database: "Universitas",
          db_id: 1
        }, {
          id: 2,
          nama: "Studi Kasus B",
          database: "Rumah Sakit",
          db_id: 2
        }, {
          id: 3,
          nama: "Studi Kasus C",
          database: "SDN Coba 1",
          db_id: 3
        }]
      });
    }, 1000);
  });
};

const mockGetAllDataStudiKasus = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [{
          db_id: 1,
          nama_db: "Universitas",
          content: [{
            table: "mahasiswa",
            column: ["id_mhs", "nama", "kelas", "ipk"],
            data: [{
              id_mhs: 1,
              nama: "Ilham",
              kelas: 1,
              ipk: 5
            }, {
              id_mhs: 2,
              nama: "Muhammad A",
              kelas: 2,
              ipk: 5
            }, {
              id_mhs: 3,
              nama: "Adhim",
              kelas: 3,
              ipk: 5
            }, {
              id_mhs: 4,
              nama: "Orang lain",
              kelas: 4,
              ipk: 5
            }, {
              id_mhs: 5,
              nama: "Orang lain lagi",
              kelas: 4,
              ipk: 5
            }]
          }, {
            table: "user",
            column: ["id_user", "username", "waktu_login", "id_mhs"],
            data: [{
              id_user: 1,
              username: "Ilham",
              waktu_login: 1,
              id_mhs: 1
            }, {
              id_user: 2,
              username: "Muhammad A",
              waktu_login: "2021-04-14T03:40:49.000Z",
              id_mhs: 2
            }, {
              id_user: 3,
              username: "Adhim",
              waktu_login: "2021-04-14T03:40:49.000Z",
              id_mhs: 3
            }, {
              id_user: 4,
              username: "Orang lain",
              waktu_login: "2021-04-14T03:40:49.000Z",
              id_mhs: 4
            }]
          }]
        }, {
          db_id: 2,
          nama_db: "Rumah Sakit",
          content: [{
            table: "pasien",
            column: ["id_pasien", "nama", "ruang", "penyakit"],
            data: [{
              id_pasien: 1,
              nama: "Ilham",
              ruang: "Bougenvile",
              penyakit: 5
            }, {
              id_pasien: 2,
              nama: "Muhammad A",
              ruang: "Dahlia",
              penyakit: 5
            }, {
              id_pasien: 3,
              nama: "Adhim",
              ruang: "Edelweiss",
              penyakit: 5
            }, {
              id_pasien: 4,
              nama: "Orang lain",
              ruang: "Bougenvile",
              penyakit: 5
            }]
          }]
        }, {
          db_id: 3,
          nama_db: "SDN Coba 1",
          content: [{
            table: "siswa",
            column: ["id_siswa", "nama", "kelas"],
            data: [{
              id_siswa: 1,
              nama: "Ilham",
              kelas: 2
            }, {
              id_siswa: 2,
              nama: "Muhammad A",
              kelas: 4
            }, {
              id_siswa: 3,
              nama: "Adhim",
              kelas: 3
            }, {
              id_siswa: 4,
              nama: "Orang lain",
              kelas: 4
            }, {
              id_siswa: 5,
              nama: "Orang lain lagi",
              kelas: 4
            }]
          }, {
            table: "guru",
            column: ["id_guru", "nama", "pengajar"],
            data: [{
              id_guru: 1,
              nama: "Ilham",
              pengajar: "Bahasa Indonesia"
            }, {
              id_guru: 2,
              nama: "Muhammad A",
              pengajar: "Bahasa Indonesia"
            }, {
              id_guru: 3,
              nama: "Adhim",
              pengajar: "Matematika"
            }, {
              id_guru: 4,
              nama: "Orang lain",
              pengajar: "Matematika"
            }, {
              id_guru: 5,
              nama: "Orang lain lagi",
              pengajar: "IPA"
            }]
          }]
        }]
      });
    }, 1000);
  });
};



/***/ })

};
;