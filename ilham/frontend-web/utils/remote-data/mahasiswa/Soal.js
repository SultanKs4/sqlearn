import axios from "axios";
import {
  axiosWithBearer,
  URL_SESSION_API,
  URL_UNANSWERED_QUESTIONS,
} from "../api";

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
        content: "(nama)",
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
    next: {
      soalID: 2,
    },
  },
  {
    id: 2 /* idSoal */,
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
        content: "kelas",
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
        content: "Karyawan",
        role: "part",
      },
      {
        id: 7,
        position: 7,
        content: "Murid",
        role: "part",
      },
    ],
    jawaban_benar: "SELECT nama kelas FROM MAHASISWA",
    teksSoal: "Dosen ingin mengetahui informasi nama dan kelas dari mahasiswa",
    kategori: "Close-Ended",
    next: {
      soalID: 4,
    },
  },
  {
    id: 3 /* idSoal */,
    studi_kasus: "Studi Kasus B" /* Soal nya */,
    sql_components: [],
    jawaban_benar:
      "SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas",
    teksSoal:
      "Administrator ingin mengetahui jumlah mahasiswa dari setiap kelas, tampilkan nama kelas dan jumlah mahasiswa dari kelas tersebut",
    kategori: "Open-Ended",
    next: {
      soalID: 5,
    },
  },
  {
    id: 4 /* idSoal */,
    studi_kasus: "Studi Kasus B" /* Soal nya */,
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
    next: {
      soalID: false,
    },
  },
  {
    id: 5 /* idSoal */,
    studi_kasus: "Studi Kasus B" /* Soal nya */,
    sql_components: [],
    jawaban_benar: "SELECT * FROM mahasiswa WHERE nama LIKE 'D%'",
    teksSoal:
      "Dosen ingin menampilkan semua data mahasiswa yang namanya diawali dengan huruf 'D'",
    kategori: "Open-Ended",
    next: {
      soalID: false,
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

const mockGetSoalByCategory = async (kategori) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: data.filter((item) => item.kategori === kategori),
      });
    }, 1000);
  });
};

// TODO : 1 jadwal = 1 studi paket soal
const mockGetSoalByID = async (jadwalID) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: data.find((item) => item.id === jadwalID),
      });
    }, 1000);
  });
};

const getUnansweredQuestion = async (
  bearerToken,
  sessionID,
  questionAnswered
) => {
  let response = await axiosWithBearer(bearerToken).get(
    "https://api.sqlearn.sultanachmad.me/api/questions/session",
    {
      params: {
        session_id: sessionID,
        question_answered: questionAnswered.toString() || [],
      },
    }
  );
  return response.data;
};

const resetOpenEndedDatabase = async (bearerToken, sessionID) => {
  let response = await axiosWithBearer(bearerToken).delete(
    `${URL_SESSION_API}/reset/${sessionID}`
  );
  return response.data;
};

const testQueryBackend = async (bearerToken, values) => {
  let response = await axiosWithBearer(bearerToken).post(
    `${URL_SESSION_API}/answer`,
    values
  );
  return response.data;
};

const submitJawaban = async (bearerToken, values) => {
  let response = await axiosWithBearer(bearerToken).post(
    `${URL_SESSION_API}/answer`,
    values
  );
  return response.data;
};

export {
  getAllSoal,
  mockGetAllSoal,
  getUnansweredQuestion,
  testQueryBackend,
  submitJawaban,
  mockGetSoalByID,
  mockGetSoalByCategory,
  resetOpenEndedDatabase,
};
