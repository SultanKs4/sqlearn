import axios from "axios";

/* TODO beberapa fitur untuk Soal.js:
    1. Fetch Data Soal -> @param id
    2. Test Query -> @param SQL Query
    3. Submit jawaban -> @param SQL Query, log timer, log berapa kali dia test query
*/

//  ? Mock data Soal
const data = [
  {
    id: 1 /* idSoal */,
    studi_kasus: "Studi Kasus B" /* Soal nya */,
    sql_components: [
      {
        id: 1,
        content: "SELECT",
      },
      {
        id: 2,
        content: "COUNT",
      },
      {
        id: 3,
        content: "nama",
      },
      {
        id: 4,
        content: "FROM",
      },
      {
        id: 5,
        content: "MAHASISWA",
      },
      {
        id: 6,
        content: "Employee",
      },
      {
        id: 7,
        content: "STUDENTS",
      },
    ],
    jawaban_benar: "SELECT COUNT nama FROM MAHASISWA",
    teksSoal: "Dosen ingin mengetahui jumlah mahasiswa yang ada",
    kategori: 1,
    finished_time: "01:30:10",
    finished_date: "2022-02-21",
  },
  {
    id: 2 /* idSoal */,
    studi_kasus: "Studi Kasus B" /* Soal nya */,
    sql_components: [
      {
        id: 1,
        content: "SELECT",
      },
      {
        id: 2,
        content: "kelas",
      },
      {
        id: 3,
        content: ",COUNT(id_mahasiswa)",
      },
      {
        id: 4,
        content: "as",
      },
      {
        id: 5,
        content: "jumlah_mhs",
      },
      {
        id: 6,
        content: "FROM",
      },
      {
        id: 7,
        content: "mahasiswa",
      },
      {
        id: 7,
        content: "GROUP BY",
      },
      {
        id: 7,
        content: "kelas",
      },
      {
        id: 7,
        content: "mahasiswa",
      },
    ],
    jawaban_benar:
      "SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas",
    teksSoal:
      "Administrator ingin mengetahui jumlah mahasiswa dari setiap kelas, tampilkan nama kelas dan jumlah mahasiswa dari kelas tersebut",
    kategori: 2,
    finished_time: "01:30:10",
    finished_date: "2022-02-21",
  },
];

const getAllSoal = async (studiKasusID) => {
  // TODO : API Request GET : URL ?studiKasusID={studiKasus}
  let response = await axios.get("");
  return response.data;
};

const mockGetAllSoal = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: data,
      });
    }, 1000);
  });
};

// TODO : 1 jadwal = 1 studi paket soal
const mockGetSoalByID = async (jadwalID) => {
  console.log(data, jadwalID);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: data.find((item) => item.id === jadwalID),
      });
    }, 1000);
  });
};

const getSoalByID = async (soalID) => {
  let response = await axios.get("");
  //   ? Output :
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

const testQuery = async (sqlQuery) => {
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

export {
  getAllSoal,
  mockGetAllSoal,
  getSoalByID,
  testQuery,
  submitJawaban,
  mockGetSoalByID,
};
