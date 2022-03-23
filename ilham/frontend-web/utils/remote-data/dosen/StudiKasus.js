import { axiosWithBearer, URL_CASE_STUDY_API } from "../api";

const getStudiKasus = async (bearerToken) => {
  let response = await axiosWithBearer(bearerToken).get(
    `${URL_CASE_STUDY_API}`
  );
  return response.data;
};

const getStudiKasusByID = async (bearerToken, studiKasusID) => {
  let response = await axiosWithBearer(bearerToken).get(
    `${URL_CASE_STUDY_API}/${studiKasusID}`
  );
  return response.data;
};

const postStudiKasus = async (bearerToken, values) => {
  let response = await axiosWithBearer(bearerToken).post(
    URL_CASE_STUDY_API,
    values
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

const mockGetAllStudiKasus = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            id: 1,
            nama: "Studi Kasus A",
            database: "Universitas",
            db_id: 1,
          },
          {
            id: 2,
            nama: "Studi Kasus B",
            database: "Rumah Sakit",
            db_id: 2,
          },
          {
            id: 3,
            nama: "Studi Kasus C",
            database: "SDN Coba 1",
            db_id: 3,
          },
        ],
      });
    }, 1000);
  });
};

const mockGetAllDataStudiKasus = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            db_id: 1,
            nama_db: "Universitas",
            content: [
              {
                table: "mahasiswa",
                column: ["id_mhs", "nama", "kelas", "ipk"],
                data: [
                  {
                    id_mhs: 1,
                    nama: "Ilham",
                    kelas: 1,
                    ipk: 5,
                  },
                  {
                    id_mhs: 2,
                    nama: "Muhammad A",
                    kelas: 2,
                    ipk: 5,
                  },
                  {
                    id_mhs: 3,
                    nama: "Adhim",
                    kelas: 3,
                    ipk: 5,
                  },
                  {
                    id_mhs: 4,
                    nama: "Orang lain",
                    kelas: 4,
                    ipk: 5,
                  },
                  {
                    id_mhs: 5,
                    nama: "Orang lain lagi",
                    kelas: 4,
                    ipk: 5,
                  },
                ],
              },
              {
                table: "user",
                column: ["id_user", "username", "waktu_login", "id_mhs"],
                data: [
                  {
                    id_user: 1,
                    username: "Ilham",
                    waktu_login: 1,
                    id_mhs: 1,
                  },
                  {
                    id_user: 2,
                    username: "Muhammad A",
                    waktu_login: "2021-04-14T03:40:49.000Z",
                    id_mhs: 2,
                  },
                  {
                    id_user: 3,
                    username: "Adhim",
                    waktu_login: "2021-04-14T03:40:49.000Z",

                    id_mhs: 3,
                  },
                  {
                    id_user: 4,
                    username: "Orang lain",
                    waktu_login: "2021-04-14T03:40:49.000Z",

                    id_mhs: 4,
                  },
                ],
              },
            ],
          },
          {
            db_id: 2,
            nama_db: "Rumah Sakit",
            content: [
              {
                table: "pasien",
                column: ["id_pasien", "nama", "ruang", "penyakit"],
                data: [
                  {
                    id_pasien: 1,
                    nama: "Ilham",
                    ruang: "Bougenvile",
                    penyakit: 5,
                  },
                  {
                    id_pasien: 2,
                    nama: "Muhammad A",
                    ruang: "Dahlia",
                    penyakit: 5,
                  },
                  {
                    id_pasien: 3,
                    nama: "Adhim",
                    ruang: "Edelweiss",
                    penyakit: 5,
                  },
                  {
                    id_pasien: 4,
                    nama: "Orang lain",
                    ruang: "Bougenvile",
                    penyakit: 5,
                  },
                ],
              },
            ],
          },
          {
            db_id: 3,
            nama_db: "SDN Coba 1",
            content: [
              {
                table: "siswa",
                column: ["id_siswa", "nama", "kelas"],
                data: [
                  {
                    id_siswa: 1,
                    nama: "Ilham",
                    kelas: 2,
                  },
                  {
                    id_siswa: 2,
                    nama: "Muhammad A",
                    kelas: 4,
                  },
                  {
                    id_siswa: 3,
                    nama: "Adhim",
                    kelas: 3,
                  },
                  {
                    id_siswa: 4,
                    nama: "Orang lain",
                    kelas: 4,
                  },
                  {
                    id_siswa: 5,
                    nama: "Orang lain lagi",
                    kelas: 4,
                  },
                ],
              },
              {
                table: "guru",
                column: ["id_guru", "nama", "pengajar"],
                data: [
                  {
                    id_guru: 1,
                    nama: "Ilham",
                    pengajar: "Bahasa Indonesia",
                  },
                  {
                    id_guru: 2,
                    nama: "Muhammad A",
                    pengajar: "Bahasa Indonesia",
                  },
                  {
                    id_guru: 3,
                    nama: "Adhim",
                    pengajar: "Matematika",
                  },
                  {
                    id_guru: 4,
                    nama: "Orang lain",
                    pengajar: "Matematika",
                  },
                  {
                    id_guru: 5,
                    nama: "Orang lain lagi",
                    pengajar: "IPA",
                  },
                ],
              },
            ],
          },
        ],
      });
    }, 1000);
  });
};

export {
  getStudiKasus,
  getStudiKasusByID,
  postStudiKasus,
  updateStudiKasus,
  deleteStudiKasus,
  mockGetAllStudiKasus,
  mockGetAllDataStudiKasus,
};
