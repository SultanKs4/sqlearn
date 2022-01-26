const mockGetMhsPerKelas = (kelas_id = 1) => {
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

export { mockGetMhsPerKelas };
