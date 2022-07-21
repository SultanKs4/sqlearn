import { axiosWithBearer, BASE_URL, URL_CLASS_API } from "../api";

const postMhs = async (bearerToken, values, idKelas) => {
  let response = await axiosWithBearer(bearerToken).post(
    `${URL_CLASS_API}/${idKelas}/add`,
    values
  );

  return response.data;
};

const deleteMhs = async (bearerToken, idKelas, mhsID) => {
  let response = await axiosWithBearer(bearerToken).delete(
    `${URL_CLASS_API}/${idKelas}/remove/${mhsID}`
  );
  return response.data;
};

const editPasswordMahasiswa = async (bearerToken, values, mhsID) => {
  let response = await axiosWithBearer(bearerToken).put(
    `${BASE_URL}/api/students/${mhsID}/password`,
    values
  );
  return response.data;
};

export { postMhs, deleteMhs, editPasswordMahasiswa };
