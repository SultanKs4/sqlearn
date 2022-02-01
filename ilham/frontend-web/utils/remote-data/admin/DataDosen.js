import axios from "axios";

const getDosen = async () => {
  let response = await axios.get("");
  return response.data;
};

const getDosenByID = async (DosenID) => {
  let response = await axios.get("");
  return response.data;
};

const postDosen = async () => {
  let response = await axios.post("");
  return response.data;
};

const updateDosen = async () => {
  let response = await axios.put("");
  return response.data;
};

const deleteDosen = async () => {
  let response = await axios.delete("");
  return response.data;
};

const mockGetDosen = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            nama_dosen: "Dosen A",
            username: "Dosen A",
            nomor_induk: "123123123",
          },
          {
            nama_dosen: "Dosen B",
            username: "Dosen B",
            nomor_induk: "234234234",
          },
          {
            nama_dosen: "Dosen C",
            username: "Dosen C",
            nomor_induk: "345345345",
          },
          {
            nama_dosen: "Dosen D",
            username: "Dosen D",
            nomor_induk: "456456456",
          },
        ],
      });
    }, 1000);
  });
};

export {
  getDosen,
  getDosenByID,
  postDosen,
  updateDosen,
  deleteDosen,
  mockGetDosen,
};
