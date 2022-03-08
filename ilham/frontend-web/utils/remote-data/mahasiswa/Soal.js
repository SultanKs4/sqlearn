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
        position: 1,
        content: "SELECT",
        role: "clue",
      },
      {
        id: 2,
        position: 2,
        content: "COUNT",
        role: "part",
      },
      {
        id: 3,
        position: 3,
        content: "nama",
        role: "part",
      },
      {
        id: 4,
        position: 4,
        content: "FROM",
        role: "clue",
      },
      {
        id: 5,
        position: 5,
        content: "MAHASISWA",
        role: "part",
      },
      {
        id: 6,
        position: 6,
        content: "Employee",
        role: "part",
      },
      {
        id: 7,
        position: 7,
        content: "STUDENTS",
        role: "part",
      },
    ],
    jawaban_benar: "SELECT COUNT nama FROM MAHASISWA",
    teksSoal: "Dosen ingin mengetahui jumlah mahasiswa yang ada",
    kategori: "Close-Ended",
    finished_time: "23:30:10",
    finished_date: "2022-02-21",
    timer: {
      hours: 2,
      minute: 0,
      seconds: 0,
    },
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
    kategori: "Open-Ended",
    finished_time: "23:30:10",
    finished_date: "2022-02-21",
    timer: {
      hours: 2,
      minute: 0,
      seconds: 0,
    },
  },
  {
    id: 3 /* idSoal */,
    studi_kasus: "Studi Kasus C" /* Soal nya */,
    sql_components: [
      {
        id: 1,
        position: 1,
        content: "SELECT",
        role: "part",
      },
      {
        id: 2,
        position: 2,
        content: "*",
        role: "clue",
      },
      {
        id: 3,
        position: 3,
        content: "nama",
        role: "part",
      },
      {
        id: 4,
        position: 4,
        content: "FROM",
        role: "part",
      },
      {
        id: 5,
        position: 5,
        content: "MAHASISWA",
        role: "clue",
      },
    ],
    jawaban_benar: "SELECT * FROM MAHASISWA",
    teksSoal: "Dosen ingin mengetahui jumlah mahasiswa yang ada",
    kategori: "Close-Ended",
    finished_time: "23:30:10",
    finished_date: "2022-02-21",
    timer: {
      hours: 2,
      minute: 0,
      seconds: 0,
    },
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
