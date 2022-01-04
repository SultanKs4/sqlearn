import "axios";

const getPaketSoal = async () => {
  let response = await axios.get("");
  return response.data;
};

const getPaketSoalByID = async paketID => {
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

export {
  getPaketSoal,
  getPaketSoalByID,
  postPaketSoal,
  updatePaketSoal,
  deletePaketSoal
};
