import { axiosWithBearer } from "../api";

const getDosen = async (bearerToken) => {
  let response = await axiosWithBearer(bearerToken).get(
    `${URL_USERS_API}?level=dosen`
  );
  return response.data;
};

const getDosenByID = async (bearerToken, dosenID) => {
  let response = await axiosWithBearer(bearerToken).get(
    `${URL_USERS_API}?level=dosen/${dosenID}`
  );
  return response.data;
};

const postUser = async (bearerToken, values) => {
  let response = await axiosWithBearer(bearerToken).post(
    `${URL_USERS_API}`,
    values
  );
  return response.data;
};

const updateUser = async (bearerToken, values, userID) => {
  let response = await axiosWithBearer(bearerToken).put(
    `${URL_USERS_API}/${userID}`,
    values
  );
  return response.data;
};

const deleteUser = async (bearerToken, userID) => {
  let response = await axiosWithBearer(bearerToken).delete(
    `${URL_USERS_API}/${userID}`
  );
  return response.data;
};

const editPassword = async (bearerToken, userID, values) => {
  let response = await axiosWithBearer(bearerToken).put(
    `${BASE_URL}/api/users/${userID}/password`,
    values
  );
  return response.data;
};

const mockGetDosen = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            nama_dosen: "Dosen A",
            username: "Dosen A",
            nomor_induk: "123123123",
          },
          {
            nama_dosen: "Dosen B",
            username: "Dosen B",
            nomor_induk: "234234234",
          },
          {
            nama_dosen: "Dosen C",
            username: "Dosen C",
            nomor_induk: "345345345",
          },
          {
            nama_dosen: "Dosen D",
            username: "Dosen D",
            nomor_induk: "456456456",
          },
        ],
      });
    }, 1000);
  });
};

export {
  getDosen,
  getDosenByID,
  postUser,
  updateUser,
  deleteUser,
  mockGetDosen,
  editPassword,
};
