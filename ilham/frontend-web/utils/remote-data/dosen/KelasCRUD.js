import axios from "axios";
import { URL_CLASS_API } from "../api";

const getKelas = async (bearerToken) => {
  let response = await axios.get(`${URL_CLASS_API}`, {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  });
  return response.data;
};

const mockGetKelas = () => {
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

const getMhsKelasByID = async (bearerToken, kelasID) => {
  let response = await axios.get(`${URL_CLASS_API}/${kelasID}`, {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  });
  return response.data;
};

// TODO : Handle Upload Excel File

const addMahasiswaByExcel = () => {};

const postKelas = async (bearerToken, values) => {
  let response = await axios.post(URL_CLASS_API, values, {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  });

  return response.data;
};

const updateKelas = async (bearerToken, values, kelasID) => {
  let response = await axios.put(`${URL_CLASS_API}/${kelasID}`, values, {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  });
  return response.data;
};

const deleteKelas = async (bearerToken, kelasID) => {
  let response = await axios.delete(`${URL_CLASS_API}/${kelasID}`, {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  });
  return response.data;
};

export {
  getKelas,
  getMhsKelasByID,
  postKelas,
  updateKelas,
  deleteKelas,
  mockGetKelas,
  addMahasiswaByExcel,
};
