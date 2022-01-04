import "axios";

const getSoal = async () => {
  let response = await axios.get("");
  return response.data;
};

const getSoalByID = async soalID => {
  let response = await axios.get("");
  return response.data;
};

const postSoal = async () => {
  let response = await axios.post("");
  return response.data;
};

const updateSoal = async () => {
  let response = await axios.put("");
  return response.data;
};

const deleteSoal = async () => {
  let response = await axios.delete("");
  return response.data;
};

export { getSoal, getSoalByID, postSoal, updateSoal, deleteSoal };
