import axios from "axios";
import { axiosWithBearer, BASE_URL, URL_CLASS_API } from "../api";

const getKelas = async (bearerToken) => {
  let response = await axiosWithBearer(bearerToken).get(`${URL_CLASS_API}`);
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
  let response = await axiosWithBearer(bearerToken).get(
    `${URL_CLASS_API}/${kelasID}`
  );
  return response.data;
};

// TODO : Handle Upload Excel File

const addMahasiswaByExcel = (bearerToken, kelasID, setFileList, fileList) => {
  //   const props = {
  //     name: "file",
  //     beforeUpload: (file) => {
  //       setFileList((state) => ({
  //         fileList: [...state, file],
  //       }));
  //       return false;
  //     },
  //     accept:
  //       "application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  //     action: `${URL_CLASS_API}/upload`,
  //     headers: {
  //       Authorization: `Bearer ${bearerToken}`,
  //     },
  //   };
  //   return props;
};

// const handleUploadExcel = (fileList) => {

// }

const downloadExcelTemplate = async () => {
  axios({
    url: `${BASE_URL}/static/daftar_mahasiswa.xlsx`,
    method: "GET",
    responseType: "blob", // important
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "daftar_mahasiswa.xlsx"); //or any other extension
    document.body.appendChild(link);
    link.click();
  });
};

const postKelas = async (bearerToken, values) => {
  let response = await axiosWithBearer(bearerToken).post(URL_CLASS_API, values);
  return response.data;
};

const updateKelas = async (bearerToken, values, kelasID) => {
  let response = await axiosWithBearer(bearerToken).put(
    `${URL_CLASS_API}/${kelasID}`,
    values
  );
  return response.data;
};

const deleteKelas = async (bearerToken, kelasID) => {
  let response = await axiosWithBearer(bearerToken).delete(
    `${URL_CLASS_API}/${kelasID}`
  );
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
  downloadExcelTemplate,
};
