import { axiosWithBearer, URL_SETTINGS_API } from "../api";

const getThreshold = async (bearerToken) => {
  let response = await axiosWithBearer(bearerToken).get(
    `${URL_SETTINGS_API}/threshold`
  );
  return response.data;
};

const updateThreshold = async (bearerToken, values) => {
  let response = await axiosWithBearer(bearerToken).put(
    `${URL_SETTINGS_API}/threshold`,
    values
  );
  return response.data;
};
export { getThreshold, updateThreshold };
