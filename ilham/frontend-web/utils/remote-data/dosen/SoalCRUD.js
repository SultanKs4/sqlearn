import { axiosWithBearer, URL_QUESTION_API } from "../api";

const mockGetSoal = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            idSoal: 8,
            nama: "Test nama soal 1",
            teksSoal: "Dosen ingin menampilkan semua data tentang mahasiswa.",
            jawaban: [
              "SELECT * FROM mahasiswa",
              "SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa",
            ],
            jawaban_benar: "SELECT * FROM mahasiswa",
            kategori: "Open-Ended",
            studi_kasus: "Studi Kasus A",
            dosen_pembuat: "Dosen Coba",
          },
          {
            idSoal: 11,
            nama: "Test nama soal 2",
            teksSoal:
              "Administrator ingin mengetahui jumlah mahasiswa dari setiap kelas, tampilkan nama kelas dan jumlah mahasiswa dari kelas tersebut",
            jawaban: [
              "SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas",
              "SELECT kelas, COUNT(*) as jumlah_mhs FROM mahasiswa GROUP BY kelas",
              "SELECT kelas, COUNT(nama) as jumlah_mhs FROM mahasiswa GROUP BY kelas",
              "SELECT kelas, COUNT(kelas) as jumlah_mhs FROM mahasiswa GROUP BY kelas",
              "SELECT kelas, COUNT(ipk) as jumlah_mhs FROM mahasiswa GROUP BY kelas",
            ],
            jawaban_benar: "SELECT * FROM mahasiswa",
            kategori: "Open-Ended",
            studi_kasus: "Studi Kasus A",
            dosen_pembuat: "Dosen Coba",
          },
          {
            idSoal: 9,
            nama: "Test nama soal 2",
            teksSoal:
              "Dosen ingin menampilkan semua data mahasiswa yang namanya diawali dengan huruf 'D'",
            jawaban: [
              "SELECT * FROM mahasiswa WHERE nama LIKE 'D%'",
              "SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa WHERE nama LIKE 'D%'",
            ],
            jawaban_benar: "SELECT * FROM mahasiswa",
            kategori: "Open-Ended",
            studi_kasus: "Studi Kasus C",
            dosen_pembuat: "Dosen Coba",
          },
          {
            idSoal: 12,
            nama: "Test nama soal 2",
            teksSoal:
              "Administrator ingin mengetahui kelas mana yang jumlah mahasiswanya lebih dari 2, tampilkan nama kelas dan jumlah mahasiswa kelas tersebut",
            jawaban: [
              "SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2 ",
              "SELECT kelas, COUNT(*) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2",
              "SELECT kelas, COUNT(nama) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2",
              "SELECT kelas, COUNT(ipk) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2",
              "SELECT kelas, COUNT(kelas) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2",
            ],
            jawaban_benar: "SELECT * FROM mahasiswa",
            kategori: "Open-Ended",
            studi_kasus: "Studi Kasus C",
            dosen_pembuat: "Dosen Coba",
          },
          {
            idSoal: 15,
            nama: "Test nama soal 2",
            teksSoal:
              "Administrator ingin melihat tanggal login terakhir dari mahasiswa, tampilkan nama dan waktu login dari mahasiswa tersebut",
            jawaban: [
              "SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa",
            ],
            jawaban_benar: "SELECT * FROM mahasiswa",
            kategori: "Close-Ended",

            studi_kasus: "Studi Kasus C",
            dosen_pembuat: "Dosen Coba",
          },
          {
            idSoal: 16,
            nama: "Test nama soal 2",
            teksSoal:
              "Administrator ingin menampilkan data nama dan kelas. Data tersebut di dapatkan dengan menggabungkan keseluruhan data antara tabel mahasiswa dan user, dimana data yang memiliki isi yang sama tetap ditampilkan",
            jawaban: [
              "(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)",
            ],
            jawaban_benar: "SELECT * FROM mahasiswa",
            kategori: "Close-Ended",
            studi_kasus: "Studi Kasus C",
            dosen_pembuat: "Dosen Coba",
          },
          {
            idSoal: 10,
            nama: "Test nama soal 3",
            teksSoal:
              "Dosen ingin mengetahui urutan IPK dari yang paling besar ke yang paling kecil, informasi yang ditampilkan meliputi nama dan ipk mahasiswa tersebut",
            jawaban: ["SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC"],
            jawaban_benar: "SELECT * FROM mahasiswa",
            kategori: "Close-Ended",

            studi_kasus: "Studi Kasus B",
            dosen_pembuat: "Dosen Coba",
          },
          {
            idSoal: 13,
            nama: "Test nama soal 3",
            teksSoal:
              "Dosen ingin mengetahui data mahasiswa dengan IPK antara 3.00 sampe 4.00",
            jawaban: [
              "SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00",
              "SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00",
              "SELECT * FROM mahasiswa WHERE ipk >= 3.00 AND ipk <= 4.00",
              "SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa WHERE ipk >= 3.00 AND ipk <= 4.00",
              "SELECT * FROM mahasiswa WHERE ipk >= 3.00",
              "SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa WHERE ipk >= 3.00",
            ],
            jawaban_benar: "SELECT * FROM mahasiswa",
            kategori: "Open-Ended",
            studi_kasus: "Studi Kasus B",
            dosen_pembuat: "Dosen Coba",
          },
          {
            idSoal: 14,
            nama: "Test nama soal 3",
            teksSoal:
              "Dosen ingin melihat data mahasiswa yang nilai IPKnya paling kecil. Petunjuk: Gunakan SubQuery",
            jawaban: [
              "SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)",
              "SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)",
              "SELECT * FROM mahasiswa ORDER BY ipk LIMIT 1",
              "SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa ORDER BY ipk LIMIT 1",
            ],
            jawaban_benar: "SELECT * FROM mahasiswa",
            kategori: "Open-Ended",
            studi_kasus: "Studi Kasus B",
            dosen_pembuat: "Dosen Coba",
          },
          {
            idSoal: 17,
            nama: "Soal baru",
            teksSoal: "Soal baru",
            jawaban: [],
            jawaban_benar: "SELECT * FROM mahasiswa",
            kategori: "-",
            studi_kasus: "Studi Kasus B",
            dosen_pembuat: "Dosen Coba",
          },
        ],
      });
    }, 1000);
  });
};

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
  console.log(values, "values");
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
  }

  return response.data;
};

const updateSoal = async (bearerToken, values, soalID) => {
  let response = await axiosWithBearer(bearerToken).put(
    `${URL_QUESTION_API}/${soalID}`,
    values
  );
  return response.data;
};

const deleteSoal = async (bearerToken, soalID) => {
  let response = await axiosWithBearer(bearerToken).delete(
    `${URL_QUESTION_API}/${soalID}`
  );
  return response.data;
};

export {
  mockGetSoal,
  getSoal,
  getSoalByID,
  postSoal,
  updateSoal,
  deleteSoal,
  propsUploadImage,
  getSoalByCaseStudyByCategory,
};
