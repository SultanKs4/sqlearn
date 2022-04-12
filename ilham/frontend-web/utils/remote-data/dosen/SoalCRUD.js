import { message } from "antd";
import { axiosWithBearer, URL_QUESTION_API } from "../api";

const getSoal = async (bearerToken) => {
  let response = await axiosWithBearer(bearerToken).get(`${URL_QUESTION_API}`);
  return response.data;
};

const getSoalByCaseStudyByCategory = async (
  bearerToken,
  caseStudyID,
  labelID
) => {
  let response = await axiosWithBearer(bearerToken).get(
    `${URL_QUESTION_API}?case_study=${caseStudyID}&label_id=${labelID}`
  );
  return response.data;
};

const getSoalByID = async (bearerToken, soalID) => {
  let response = await axiosWithBearer(bearerToken).get(
    `${URL_QUESTION_API}/${soalID}`
  );
  return response.data;
};

const propsUploadImage = (bearerToken, setFileList) => {
  const props = {
    name: "file",
    beforeUpload: (file) => {
      setFileList(file);
      return false;
    },
    accept: "image/png, image/jpeg, image/jpg",
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  };
  return props;
};

const postSoal = async (bearerToken, values) => {
  let response;
  if (values?.answer_pic !== undefined) {
    // Convert to Form data
    let bodyFormData = new FormData();

    Object.keys(values).forEach((key) => {
      bodyFormData.append(key, values[key]);
    });

    response = await axiosWithBearer(bearerToken).post(
      URL_QUESTION_API,
      bodyFormData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  } else message.error("Please upload image");

  return response.data;
};

const updateSoal = async (bearerToken, values) => {
  let response;

  if (values?.answer_pic !== undefined) {
    // Convert to Form data
    let bodyFormData = new FormData();

    Object.keys(values).forEach((key) => {
      bodyFormData.append(key, values[key]);
    });

    response = await axiosWithBearer(bearerToken).put(
      `${URL_QUESTION_API}/${values?.id}`,
      bodyFormData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  } else message.error("Please upload image");

  return response.data;
};

const deleteSoal = async (bearerToken, soalID) => {
  let response = await axiosWithBearer(bearerToken).delete(
    `${URL_QUESTION_API}/${soalID}`
  );
  return response.data;
};

export {
  getSoal,
  getSoalByID,
  postSoal,
  updateSoal,
  deleteSoal,
  propsUploadImage,
  getSoalByCaseStudyByCategory,
};
