import { axiosWithBearer, URL_NILAI_MHS_API } from "../api";

const getScore = async (bearerToken) => {
  let response = await axiosWithBearer(bearerToken).get(`${URL_NILAI_MHS_API}`);
  return response.data;
};

const getScoreByClassID = async (bearerToken, classID) => {
  let response = await axiosWithBearer(bearerToken).get(
    `${URL_NILAI_MHS_API}/student?kelas=${classID}`
  );
  return response.data;
};

const postScore = async (bearerToken, values) => {
  let response = await axiosWithBearer(bearerToken).post(
    URL_NILAI_MHS_API,
    values
  );

  return response.data;
};

const updateScore = async (bearerToken, values, classID) => {
  let response = await axiosWithBearer(bearerToken).put(
    `${URL_NILAI_MHS_API}/${classID}`,
    values
  );
  return response.data;
};

const deleteScore = async (bearerToken, classID) => {
  let response = await axiosWithBearer(bearerToken).delete(
    `${URL_NILAI_MHS_API}/${classID}`
  );
  return response.data;
};

export { getScore, getScoreByClassID, postScore, updateScore, deleteScore };
