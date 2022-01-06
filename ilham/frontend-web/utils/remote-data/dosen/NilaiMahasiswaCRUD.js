import axios from "axios";

import { mockAPIURL } from "../api";

const getNilaiMhs = async lecturerID => {
  let response = await axios.get("");
  return response.data;
};

const mockKelasDiajar = async lecturerID => {
  let response = await axios.get(
    `${mockAPIURL}/kelas?lecturerID=${lecturerID}`
  );
  return response.data;
};

const getNilaiMhsByID = async username => {
  let response = await axios.get("");
  return response.data;
};

const postNilaiMhs = async () => {
  let response = await axios.post("");
  return response.data;
};

const updateNilaiMhs = async () => {
  let response = await axios.put("");
  return response.data;
};

const deleteNilaiMhs = async () => {
  let response = await axios.delete("");
  return response.data;
};

export {
  mockKelasDiajar,
  getNilaiMhs,
  getNilaiMhsByID,
  postNilaiMhs,
  updateNilaiMhs,
  deleteNilaiMhs
};
