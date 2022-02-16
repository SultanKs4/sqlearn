import axios from "axios";

const getPaketSoal = async () => {
  let response = await axios.get("");
  return response.data;
};

const getPaketSoalByID = async (paketID) => {
  let response = await axios.get("");
  return response.data;
};

const postPaketSoal = async () => {
  let response = await axios.post("");
  return response.data;
};

const updatePaketSoal = async () => {
  let response = await axios.put("");
  return response.data;
};

const deletePaketSoal = async () => {
  let response = await axios.delete("");
  return response.data;
};

const mockGetPaketSoal = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            id_paket: 1,
            nama: "Paket Soal A",
            studi_kasus: "Studi Kasus A",
            durasi: 120,
            kategori: 2,
            pertanyaan: [
              {
                idSoal: 8,
                nama: "Test nama soal 1",
                teksSoal:
                  "Dosen ingin menampilkan semua data tentang mahasiswa.",
                jawaban: [
                  "SELECT * FROM mahasiswa",
                  "SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa",
                ],
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
                studi_kasus: "Studi Kasus A",
                dosen_pembuat: "Dosen Coba",
              },
            ],
          },
          {
            id_paket: 2,
            nama: "Paket Soal B",
            studi_kasus: "Studi Kasus C",
            durasi: 120,
            kategori: 1,
            pertanyaan: [
              {
                idSoal: 9,
                nama: "Test nama soal 2",
                teksSoal:
                  "Dosen ingin menampilkan semua data mahasiswa yang namanya diawali dengan huruf 'D'",
                jawaban: [
                  "SELECT * FROM mahasiswa WHERE nama LIKE 'D%'",
                  "SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa WHERE nama LIKE 'D%'",
                ],
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
                studi_kasus: "Studi Kasus C",
                dosen_pembuat: "Dosen Coba",
              },
            ],
          },
          {
            id_paket: 3,
            nama: "Paket Soal C",
            studi_kasus: "-",
            durasi: 120,
            kategori: 1,
            pertanyaan: [],
          },
          {
            id_paket: 4,
            nama: "Paket Soal D",
            studi_kasus: "Studi Kasus B",
            durasi: 120,
            kategori: 2,
            pertanyaan: [
              {
                idSoal: 10,
                nama: "Test nama soal 3",
                teksSoal:
                  "Dosen ingin mengetahui urutan IPK dari yang paling besar ke yang paling kecil, informasi yang ditampilkan meliputi nama dan ipk mahasiswa tersebut",
                jawaban: ["SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC"],
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
                studi_kasus: "Studi Kasus B",
                dosen_pembuat: "Dosen Coba",
              },
            ],
          },
        ],
      });
    }, 1000);
  });
};

export {
  getPaketSoal,
  getPaketSoalByID,
  postPaketSoal,
  updatePaketSoal,
  deletePaketSoal,
  mockGetPaketSoal,
};
