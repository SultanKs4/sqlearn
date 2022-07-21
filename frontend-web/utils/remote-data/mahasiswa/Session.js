// ? Ini session ketika pengerjaan soal (klik button kerjakan)

import { axiosWithBearer, URL_SESSION_API } from "../api";

const createSession = async (bearerToken, jadwalID) => {
  let response = await axiosWithBearer(bearerToken).post(
    `${URL_SESSION_API}/${jadwalID}`
  );
  return response.data;
};

const finishSession = async (bearerToken, sessionID) => {
  let response = await axiosWithBearer(bearerToken).post(
    `${URL_SESSION_API}/grade/${sessionID}`
  );
  return response.data;
};

export { createSession, finishSession };
