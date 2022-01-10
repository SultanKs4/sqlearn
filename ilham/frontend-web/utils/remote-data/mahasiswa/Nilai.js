import { v4 as uuidv4 } from "uuid";

// ? totalPercobaan ini adalah banyaknya jumlah test query yang dijalankan dalam setiap sesi pengerjaan mhs
const getAllDaftarNilai = (username) => {
  // TODO : API Request GET : URL ?username={username}
  // ? Output
  /* 
    { 
        jumlahSoal : number, 
        nilai : number,
        totalPercobaan : number
    }
    */
};

const mockGetAllDaftarNilai = async (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            id: uuidv4(),
            nama: "Latihan 2",
            jumlahSoal: 5,
            durasi: "2 jam",
            deadline: "-",
            status: "selesai",
            nilai: 100,
            totalPercobaan: 4,
          },
        ],
      });
    }, 1000);
  });
};

export { getAllDaftarNilai, mockGetAllDaftarNilai };
