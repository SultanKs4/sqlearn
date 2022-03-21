import axios from "axios";
import { URL_CLASS_API } from "../api";

const getKelas = async () => {
  let response = await axios.get(`${URL_CLASS_API}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo1LCJyb2xlIjoiZG9zZW4ifSwiaWF0IjoxNjQ2NDYxNTczfQ.s26EwVazSln8jLtMTXtym8aodRvvADK_Ik_-jVGiFb4",
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

const getKelasByID = async (kelasID) => {
  let response = await axios.get(`${mockAPIURL}/kelas/${kelasID}`);
  return response.data;
};

const postKelas = async () => {
  let response = await axios.post("");
  return response.data;
};

const updateKelas = async () => {
  let response = await axios.put("");
  return response.data;
};

const deleteKelas = async () => {
  let response = await axios.delete("");
  return response.data;
};

export {
  getKelas,
  getKelasByID,
  postKelas,
  updateKelas,
  deleteKelas,
  mockGetKelas,
};
