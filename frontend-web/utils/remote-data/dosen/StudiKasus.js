import { axiosWithBearer, uploadSQLFile, URL_CASE_STUDY_API } from "../api";

const getStudiKasus = async (bearerToken) => {
  let response = await axiosWithBearer(bearerToken).get(
    `${URL_CASE_STUDY_API}`
  );
  return response.data;
};

const getDataTableStudiKasus = async (bearerToken, caseStudyID, tableName) => {
  let response = await axiosWithBearer(bearerToken).get(
    `${URL_CASE_STUDY_API}/${caseStudyID}/data/${tableName}`
  );
  return response.data;
};

const propsSQLUpload = (bearerToken, setFileList) => {
  const props = {
    name: "file",
    accept: "application/sql , .sql",
    beforeUpload: (file) => {
      setFileList(file);
      return false;
    },
    action: `${URL_CASE_STUDY_API}`,
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  };
  return props;
};

const getStudiKasusByID = async (bearerToken, studiKasusID) => {
  let response = await axiosWithBearer(bearerToken).get(
    `${URL_CASE_STUDY_API}/${studiKasusID}`
  );
  return response.data;
};

const postStudiKasus = async (bearerToken, values) => {
  // Convert to Form data
  let bodyFormData = new FormData();

  Object.keys(values).forEach((key) => {
    bodyFormData.append(key, values[key]);
  });

  let response = await axiosWithBearer(bearerToken).post(
    `${URL_CASE_STUDY_API}`,
    bodyFormData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

const updateStudiKasus = async (bearerToken, values, studiKasusID) => {
  let response = await axiosWithBearer(bearerToken).put(
    `${URL_CASE_STUDY_API}/${studiKasusID}`,
    values
  );
  return response.data;
};

const deleteStudiKasus = async (bearerToken, studiKasusID) => {
  let response = await axiosWithBearer(bearerToken).delete(
    `${URL_CASE_STUDY_API}/${studiKasusID}`
  );
  return response.data;
};

export {
  getStudiKasus,
  getStudiKasusByID,
  postStudiKasus,
  updateStudiKasus,
  deleteStudiKasus,
  getDataTableStudiKasus,
  propsSQLUpload,
};
