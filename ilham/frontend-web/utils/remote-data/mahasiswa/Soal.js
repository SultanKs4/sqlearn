import axios from "axios";
import { axiosWithBearer, URL_SESSION_API } from "../api";

//  ? Mock data Soal

const getAllSoal = async (studiKasusID) => {
  // TODO : API Request GET : URL ?studiKasusID={studiKasus}
  let response = await axios.get("");
  return response.data;
};

const getUnansweredQuestion = async (
  bearerToken,
  sessionID,
  questionAnswered
) => {
  let response = await axiosWithBearer(bearerToken).get(
    "https://api.sqlearn.sultanachmad.me/api/questions/session",
    {
      params: {
        session_id: sessionID,
        question_answered: questionAnswered.toString() || [],
      },
    }
  );
  return response.data;
};

const resetOpenEndedDatabase = async (bearerToken, sessionID) => {
  let response = await axiosWithBearer(bearerToken).delete(
    `${URL_SESSION_API}/reset/${sessionID}`
  );
  return response.data;
};

const testQueryBackend = async (bearerToken, values) => {
  let response = await axiosWithBearer(bearerToken).post(
    `${URL_SESSION_API}/answer`,
    values
  );
  return response.data;
};

const submitJawaban = async (bearerToken, values) => {
  let response = await axiosWithBearer(bearerToken).post(
    `${URL_SESSION_API}/answer`,
    values
  );
  return response.data;
};

export {
  getAllSoal,
  getUnansweredQuestion,
  testQueryBackend,
  submitJawaban,
  resetOpenEndedDatabase,
};
