import "axios";

const getJadwal = async () => {
  let response = await axios.get("");
  return response.data;
};

const getJadwalByID = async jadwalID => {
  let response = await axios.get("");
  return response.data;
};

const postJadwal = async () => {
  let response = await axios.get("");
  return response.data;
};

const updateJadwal = async () => {
  let response = await axios.get("");
  return response.data;
};

const deleteJadwal = async () => {
  let response = await axios.get("");
  return response.data;
};

export { getJadwal, getJadwalByID, postJadwal, updateJadwal, deleteJadwal };
