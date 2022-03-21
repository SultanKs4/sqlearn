import axios from "axios";
import { URL_CLASS_API } from "../api";

const mockGetMhsPerKelas = (mhsID = 1) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            nama: "Muhammad Ilham Adhim",
            nim: "1841720076",
          },
          {
            nama: "Dharma Y",
            nim: "1841720076",
          },
          {
            nama: "Rasyid M",
            nim: "1841720076",
          },
          {
            nama: "Sultan A",
            nim: "1841720076",
          },
          {
            nama: "Ilham Rizky",
            nim: "1841720076",
          },
        ],
      });
    });
  }, 1000);
};

const postMhs = async (bearerToken, values, idKelas) => {
  let response = await axios.post(`${URL_CLASS_API}/${idKelas}/add`, values, {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  });

  return response.data;
};

const deleteMhs = async (bearerToken, idKelas, mhsID) => {
  let response = await axios.delete(
    `${URL_CLASS_API}/${idKelas}/remove/${mhsID}`,
    {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    }
  );
  return response.data;
};
export { mockGetMhsPerKelas, postMhs, deleteMhs };
