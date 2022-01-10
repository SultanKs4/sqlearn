import axios from "axios";
import { v4 as uuidv4 } from "uuid";

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
            id: uuidv4(),
            nama: "Latihan 1",
            jumlahSoal: 3,
            durasi: "2 jam",
            deadline: "12 jam lagi",
            status: "tersedia",
          },
          {
            id: uuidv4(),
            nama: "Latihan 2",
            jumlahSoal: 5,
            durasi: "2 jam",
            deadline: "-",
            status: "selesai",
            nilai: 100,
            totalPercobaan: 4,
          },
          {
            id: uuidv4(),
            nama: "Latihan 3",
            jumlahSoal: 1,
            durasi: "2 jam",
            deadline: "10 jam lagi",
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
