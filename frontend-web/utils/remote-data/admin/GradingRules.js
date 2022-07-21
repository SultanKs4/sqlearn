import { axiosWithBearer, URL_SETTINGS_API } from "../api";

const getGradingRules = async (bearerToken) => {
  let response = await axiosWithBearer(bearerToken).get(
    `${URL_SETTINGS_API}/rules`
  );
  return response.data;
};

const getGradingRulesByType = async (bearerToken, type) => {
  let response = await axiosWithBearer(bearerToken).get(
    `${URL_SETTINGS_API}/rules?type=${type}`
  );
  return response.data;
};

const updateGradingRules = async (bearerToken, values, rulesID) => {
  let response = await axiosWithBearer(bearerToken).put(
    `${URL_SETTINGS_API}/rules/${rulesID}`,
    values
  );
  return response.data;
};

const postGradingRules = async (bearerToken, values) => {
  let response = await axiosWithBearer(bearerToken).post(
    `${URL_SETTINGS_API}/rules`,
    values
  );
  return response.data;
};

const deleteGradingRules = async (bearerToken, rulesID) => {
  let response = await axiosWithBearer(bearerToken).delete(
    `${URL_SETTINGS_API}/rules/${rulesID}`
  );
  return response.data;
};

export {
  getGradingRules,
  getGradingRulesByType,
  postGradingRules,
  updateGradingRules,
  deleteGradingRules,
};
