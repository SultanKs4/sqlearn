import axios from "axios";
import { mockAPIURL } from "../api";

const getKelas = async lecturerID => {
  let response = await axios.get(
    `${mockAPIURL}/kelas?lecturerID=${lecturerID}`
  );
  return response.data;
};

const getKelasByID = async kelasID => {
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

export { getKelas, getKelasByID, postKelas, updateKelas, deleteKelas };
