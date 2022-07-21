const mockGetAllPractices = async (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            id: 1,
            nama: "Latihan 1",
            jumlahSoal: 3,
            durasi: "2 jam",
            tanggal_mulai: "2022-02-24 10:00:00",
            tanggal_akhir: "2022-02-24 12:00:00",
            kategori: "Close-Ended",
            status: "tersedia",
          },
          {
            id: 2,
            nama: "Latihan 2",
            jumlahSoal: 5,
            durasi: "2 jam",
            tanggal_akhir: "-",
            status: "selesai",
            nilai: 100,
            kategori: "Close-Ended",
            totalPercobaan: 4,
          },
          {
            id: 3,
            nama: "Latihan 3",
            jumlahSoal: 1,
            durasi: "2 jam",
            tanggal_mulai: "2022-02-24 10:00:00",
            tanggal_akhir: "2022-02-24 12:00:00",
            kategori: "Open-Ended",
            status: "tersedia",
          },
        ],
      });
    }, 1000);
  });
};

export { mockGetAllPractices };
