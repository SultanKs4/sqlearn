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

const mockGetPaketSoal = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            id_paket: 1,
            nama: "Paket Soal A",
            durasi: 120,
            pertanyaan: [
              {
                id: 1,
                nama: "Test nama soal 1",
                soal: "Dosen ingin menampilkan semua data tentang mahasiswa.",
                jawaban: "SELECT * FROM mahasiswa",
                studi_kasus: "Studi Kasus A",
                dosen_pembuat: "Dosen Coba",
              },
              {},
            ],
          },
          {
            id_paket: 2,
            nama: "Paket Soal B",
            durasi: 120,
            pertanyaan: [
              {
                id: 2,
                nama: "Test nama soal 2",
                soal: "Dosen ingin menampilkan semua data mahasiswa yang namanya diawali dengan huruf 'D'",
                jawaban: "SELECT * FROM mahasiswa WHERE nama LIKE 'D%'",
                studi_kasus: "Studi Kasus C",
                dosen_pembuat: "Dosen Coba",
              },
              {},
            ],
          },
          {
            id_paket: 3,
            nama: "Paket Soal C",
            durasi: 120,
            pertanyaan: [],
          },
          {
            id_paket: 4,
            nama: "Paket Soal D",
            durasi: 120,
            pertanyaan: [
              {
                id: 3,
                nama: "Test nama soal 3",
                soal: "Dosen ingin mengetahui urutan IPK dari yang paling besar ke yang paling kecil, informasi yang ditampilkan meliputi nama dan ipk mahasiswa tersebut",
                jawaban: "SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC",
                studi_kasus: "Studi Kasus C",
                dosen_pembuat: "Dosen Coba",
              },
              {},
            ],
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
  mockGetPaketSoal,
};
