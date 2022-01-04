import "axios";

const getStudiKasus = async () => {
  let response = await axios.get("");
  return response.data;
};

const getStudiKasusByID = async studiKasusID => {
  let response = await axios.get("");
  return response.data;
};

const postStudiKasus = async () => {
  let response = await axios.get("");
  return response.data;
};

const updateStudiKasus = async () => {
  let response = await axios.get("");
  return response.data;
};

const deleteStudiKasus = async () => {
  let response = await axios.get("");
  return response.data;
};

export {
  getStudiKasus,
  getStudiKasusByID,
  postStudiKasus,
  updateStudiKasus,
  deleteStudiKasus
};
