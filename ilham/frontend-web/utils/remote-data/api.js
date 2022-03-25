import axios from "axios";

export const BASE_URL = "https://api.sqlearn.sultanachmad.me";
// ? BACKEND WEB
// API KELAS
export const URL_CLASS_API = `${BASE_URL}/api/classes`;

// API PAKET SOAL
export const URL_CONTAINER_API = `${BASE_URL}/api/containers`;

export const URL_CASE_STUDY_API = `${BASE_URL}/api/casestudies`;
export const URL_QUESTION_API = `${BASE_URL}/api/questions`;
export const URL_SCHEDULE_API = `${BASE_URL}/api/schedules`;
export const URL_SESSION_API = `${BASE_URL}/api/sessions`;
export const URL_LOGIN_API = `${BASE_URL}/api/login`;

// TODO : Tambah URL_NILAI_MHS_API
export const URL_NILAI_MHS_API = `${BASE_URL}`;

// ? BACKEND ASSESMENT
export const URL_CREATE_DB_API = `${BASE_URL}/api/v2/database/create/testcreate`;
export const URL_DESC_TABLE_API = `${BASE_URL}/api/v2/database/desc_table/auto_assess_tes`;
export const URL_ASSESMENT_MULTI_KEY_API = `${BASE_URL}/api/v2/assessment/multi_key`;
export const URL_ASSESMENT_SINGLE_KEY_API = `${BASE_URL}/api/v2/assessment/single_key`;

export const axiosWithBearer = (bearerToken) =>
  axios.create({
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  });
