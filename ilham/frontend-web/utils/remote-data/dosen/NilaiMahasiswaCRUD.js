import axios from "axios";
import { axiosWithBearer, URL_NILAI_MHS_API } from "../api";

// ? Sementara kelas_id = 1
const mockGetNilaiTiapKelas = (kelas_id = 1) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            nama: "Muhammad Ilham Adhim",
            avgNilai: 88,
            avgDurasi: 25.4,
            jumlahLatihanDikerjakan: 20,
            detail: [
              {
                mhsID: 1,
                paket_soal: "Paket B",
                logData: [
                  {
                    attemptTestQuery: 1,
                    soalID: "2",
                    studentAnswer: "SELECT * FROM",
                    timerLeft: "01:59:28",
                    type: "check answer",
                  },
                  {
                    attemptTestQuery: 4,
                    soalID: "2",
                    studentAnswer: "SELECT * FROM",
                    timerLeft: "01:59:14",
                    type: "check answer",
                  },
                  {
                    attemptTestQuery: 3,
                    soalID: "2",
                    studentAnswer: "SELECT * FROM",
                    timerLeft: "01:59:0",
                    type: "answer submitted",
                  },
                ],
              },
              {
                mhsID: 2,
                paket_soal: "Paket B",
                logData: [
                  {
                    attemptTestQuery: 1,
                    soalID: "2",
                    studentAnswer: "SELECT * FROM",
                    timerLeft: "01:59:28",
                    type: "check answer",
                  },
                  {
                    attemptTestQuery: 4,
                    soalID: "2",
                    studentAnswer: "SELECT * FROM",
                    timerLeft: "01:59:14",
                    type: "check answer",
                  },
                  {
                    attemptTestQuery: 3,
                    soalID: "2",
                    studentAnswer: "SELECT * FROM",
                    timerLeft: "01:59:0",
                    type: "answer submitted",
                  },
                ],
              },
            ],
          },
          {
            nama: "Dharma Y",
            avgNilai: 88,
            avgDurasi: 25.4,
            jumlahLatihanDikerjakan: 20,
            detail: [
              {
                mhsID: 1,
                paket_soal: "Paket B",
                logData: [
                  {
                    attemptTestQuery: 1,
                    soalID: "2",
                    studentAnswer: "",
                    timerLeft: "01:56:8",
                    type: "check answer",
                  },
                ],
              },
            ],
          },
          {
            nama: "Rasyid M",
            avgNilai: 88,
            avgDurasi: 25.4,
            jumlahLatihanDikerjakan: 20,
            detail: [
              {
                mhsID: 1,
                paket_soal: "Paket B",
                logData: [
                  {
                    attemptTestQuery: 1,
                    soalID: "2",
                    studentAnswer: "",
                    timerLeft: "01:56:8",
                    type: "check answer",
                  },
                ],
              },
            ],
          },
          {
            nama: "Sultan A",
            avgNilai: 88,
            avgDurasi: 25.4,
            jumlahLatihanDikerjakan: 20,
            detail: [
              {
                mhsID: 1,
                paket_soal: "Paket B",
                logData: [
                  {
                    attemptTestQuery: 1,
                    soalID: "2",
                    studentAnswer: "",
                    timerLeft: "01:56:8",
                    type: "check answer",
                  },
                ],
              },
            ],
          },
          {
            nama: "Ilham Rizky",
            avgNilai: 88,
            avgDurasi: 25.4,
            jumlahLatihanDikerjakan: 20,
            detail: [
              {
                mhsID: 1,
                paket_soal: "Paket B",
                logData: [
                  {
                    attemptTestQuery: 1,
                    soalID: "2",
                    studentAnswer: "",
                    timerLeft: "01:56:8",
                    type: "check answer",
                  },
                ],
              },
            ],
          },
        ],
      });
    });
  }, 1000);
};

const mockKelasDiajar = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            id: 1,
            nama: "TI-1A-2021",
            jumlahMhs: 25,
            semester: 2,
          },
          {
            id: 2,
            nama: "TI-1G-2021",
            jumlahMhs: 22,
            semester: 4,
          },
          {
            id: 3,
            nama: "TI-2D-2020",
            jumlahMhs: 25,
            semester: 4,
          },
          {
            id: 4,
            nama: "TI-2E-2020",
            jumlahMhs: 28,
            semester: 1,
          },
          {
            id: 5,
            nama: "TI-2F-2020",
            jumlahMhs: 30,
            semester: 2,
          },
        ],
      });
    }, 1000);
  });
};

const getNilaiMhs = async (bearerToken) => {
  let response = await axiosWithBearer(bearerToken).get(`${URL_NILAI_MHS_API}`);
  return response.data;
};

const getNilaiMhsByID = async (bearerToken, mhsID) => {
  let response = await axiosWithBearer(bearerToken).get(
    `${URL_NILAI_MHS_API}/${mhsID}`
  );
  return response.data;
};

const postNilaiMhs = async (bearerToken, values) => {
  let response = await axiosWithBearer(bearerToken).post(
    URL_NILAI_MHS_API,
    values
  );

  return response.data;
};

const updateNilaiMhs = async (bearerToken, values, mhsID) => {
  let response = await axiosWithBearer(bearerToken).put(
    `${URL_NILAI_MHS_API}/${mhsID}`,
    values
  );
  return response.data;
};

const deleteNilaiMhs = async (bearerToken, mhsID) => {
  let response = await axiosWithBearer(bearerToken).delete(
    `${URL_NILAI_MHS_API}/${mhsID}`
  );
  return response.data;
};
export {
  mockKelasDiajar,
  getNilaiMhs,
  getNilaiMhsByID,
  postNilaiMhs,
  updateNilaiMhs,
  deleteNilaiMhs,
  mockGetNilaiTiapKelas,
};
