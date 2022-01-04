import "axios";

const getKelas = async () => {
  let response = await axios.get("");
  return response.data;
};

const getKelasByID = async kelasID => {
  let response = await axios.get("");
  return response.data;
};

const postKelas = async () => {
  let response = await axios.get("");
  return response.data;
};

const updateKelas = async () => {
  let response = await axios.get("");
  return response.data;
};

const deleteKelas = async () => {
  let response = await axios.get("");
  return response.data;
};

export { getKelas, getKelasByID, postKelas, updateKelas, deleteKelas };
