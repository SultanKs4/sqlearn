import axios from "axios";

import moment from "moment";

const mockJadwalData = [
  {
    id: 1,
    jadwal_nama: "Jadwal 1",
    tanggal_mulai: moment("2022-02-21 12:00"),
    tanggal_akhir: moment("2022-02-22 14:00"),
    kelas_nama: "TI-1C",
    studi_kasus_nama: "Studi Kasus B",
    paket_soal: "Paket Soal A",
    kategori: 1,
  },
  {
    id: 2,
    jadwal_nama: "Jadwal 2",
    tanggal_mulai: moment("2022-02-23 07:00"),
    tanggal_akhir: moment("2022-02-23 21:59"),
    kelas_nama: "TI-1G",
    studi_kasus_nama: "Studi Kasus B",
    paket_soal: "Paket Soal B",
    kategori: 2,
  },
  {
    id: 3,
    jadwal_nama: "Jadwal 3",
    tanggal_mulai: moment("2022-02-24 10:00"),
    tanggal_akhir: moment("2022-02-26 23:59"),
    kelas_nama: "TI-1H",
    studi_kasus_nama: "Studi Kasus A",
    paket_soal: "Paket Soal D",
    kategori: 1,
  },
  {
    id: 4,
    jadwal_nama: "Jadwal 4",
    tanggal_mulai: moment("2022-02-21 00:01"),
    tanggal_akhir: moment("2022-02-20 23:59"),
    kelas_nama: "TI-1C",
    studi_kasus_nama: "Studi Kasus B",
    paket_soal: "Paket Soal D",
    kategori: 2,
  },
];

const getJadwal = async () => {
  let response = await axios.get("");
  return response.data;
};

const mockGetJadwalByID = async (jadwalID) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: mockJadwalData.filter((item) => item.id === parseInt(jadwalID)),
      });
    }, 1000);
  });
};

const getJadwalByID = async (jadwalID) => {
  let response = await axios.get("");
  return response.data;
};

const postJadwal = async () => {
  let response = await axios.post("");
  return response.data;
};

const updateJadwal = async () => {
  let response = await axios.put("");
  return response.data;
};

const deleteJadwal = async () => {
  let response = await axios.delete("");
  return response.data;
};

const mockGetJadwal = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: mockJadwalData,
      });
    }, 1000);
  });
};

export {
  getJadwal,
  getJadwalByID,
  postJadwal,
  updateJadwal,
  deleteJadwal,
  mockGetJadwal,
  mockGetJadwalByID,
};
