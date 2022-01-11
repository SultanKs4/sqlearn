import axios from "axios";

const getStudiKasus = async () => {
  let response = await axios.get("");
  return response.data;
};

const getStudiKasusByID = async (studiKasusID) => {
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
        data: [
          {
            nama: "Studi Kasus A",
            jumlahSoal: 5,
            durasi: 120,
            paketSoal: "Paket Soal B",
          },
          {
            nama: "Studi Kasus B",
            jumlahSoal: 5,
            durasi: 120,
            paketSoal: "Paket Soal C",
          },
          {
            nama: "Studi Kasus C",
            jumlahSoal: 5,
            durasi: 120,
            paketSoal: "Paket Soal C",
          },
        ],
      });
    }, 1000);
  });
};

export {
  getStudiKasus,
  getStudiKasusByID,
  postStudiKasus,
  updateStudiKasus,
  deleteStudiKasus,
  mockGetAllStudiKasus,
};
