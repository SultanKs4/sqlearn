import axios from "axios";

const getPaketSoal = async () => {
  let response = await axios.get("");
  return response.data;
};

const getPaketSoalByID = async (paketID) => {
  let response = await axios.get("");
  return response.data;
};

const postPaketSoal = async () => {
  let response = await axios.post("");
  return response.data;
};

const updatePaketSoal = async () => {
  let response = await axios.put("");
  return response.data;
};

const deletePaketSoal = async () => {
  let response = await axios.delete("");
  return response.data;
};

const mockGetAllCaseStudy = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            nama: "Paket Soal A",
            jumlahSoal: 5,
            durasi: 120,
          },
          {
            nama: "Paket Soal B",
            jumlahSoal: 5,
            durasi: 120,
          },
          {
            nama: "Paket Soal C",
            jumlahSoal: 5,
            durasi: 120,
          },
        ],
      });
    }, 1000);
  });
};

export {
  getPaketSoal,
  getPaketSoalByID,
  postPaketSoal,
  updatePaketSoal,
  deletePaketSoal,
  mockGetAllCaseStudy,
};
