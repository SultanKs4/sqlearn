import axios from "axios";
import moment from "moment";

const getUserInfo = async (username) => {
  // TODO : API Request GET : ?username={username}
  // ? Output :
  /*
    {
        kelas : "",
        sesi : [],
        username: "",
    }
    */
  let response = await axios.get("");
  return response.data;
};

const getStudiKasus = async (kelasID, sesiID) => {
  // TODO : API Request GET : ?kelasID={kelasID}&sesiID={sesiID}
  let response = await axios.get("");
  return response.data;
};

const getFinishedPractices = async (username) => {
  // TODO : API Request GET : ?username={username}
  let response = await axios.get("");
  return response.data;
};

const getAvailablePractices = async (username) => {
  // TODO : API Request GET : ?username={username}
  let response = await axios.get("");
  return response.data;
};

const mockGetAllPractices = async (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            id: 1,
            nama: "Latihan 1",
            jumlahSoal: 3,
            durasi: "2 jam",
            tanggal_akhir: moment("2022-01-26 07:00"),
            kategori: 1,
            status: "tersedia",
          },
          {
            id: 2,
            nama: "Latihan 2",
            jumlahSoal: 5,
            durasi: "2 jam",
            tanggal_akhir: "-",
            status: "selesai",
            nilai: 100,
            kategori: 1,
            totalPercobaan: 4,
          },
          {
            id: 3,
            nama: "Latihan 3",
            jumlahSoal: 1,
            durasi: "2 jam",
            tanggal_akhir: moment("2022-01-25 07:00"),
            kategori: 2,
            status: "tersedia",
          },
        ],
      });
    }, 1000);
  });
};

export {
  getUserInfo,
  getStudiKasus,
  getFinishedPractices,
  getAvailablePractices,
  mockGetAllPractices,
};
