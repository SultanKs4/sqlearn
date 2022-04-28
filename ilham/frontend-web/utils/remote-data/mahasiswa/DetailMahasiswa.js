import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
import { axiosWithBearer, URL_STUDENTS_API } from "../api";

const getDetailMahasiswa = async (bearerToken, idMhs) => {
  let response = await axiosWithBearer(bearerToken).get(
    `${URL_STUDENTS_API}/${idMhs}`
  );
  return response.data;
};

export { getDetailMahasiswa };
