import axios from "axios";

/* TODO beberapa fitur untuk Soal.js:
    1. Fetch Data Soal -> @param id
    2. Test Query -> @param SQL Query
    3. Submit jawaban -> @param SQL Query, log timer, log berapa kali dia test query
*/

const getAllSoal = async studiKasusID => {
  // TODO : API Request GET : URL ?studiKasusID={studiKasus}
  let response = await axios.get("");
  return response.data;
};

const mockGetSoalByID = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1 /* idSoal */,
        studi_kasus: "" /* Soal nya */,

        sql_components: [
          {
            id: 1,
            content: "SELECT"
          },
          {
            id: 2,
            content: "COUNT"
          },
          {
            id: 3,
            content: "nama"
          },
          {
            id: 4,
            content: "FROM"
          },
          {
            id: 5,
            content: "MAHASISWA"
          },
          {
            id: 6,
            content: "Employee"
          },
          {
            id: 7,
            content: "STUDENTS"
          }
        ],
        correct_answer: "SELECT COUNT nama FROM STUDENTS"
      });
    }, 1000);
  });
};

const getSoalByID = async soalID => {
  let response = await axios.get("");
  //   ? Output :
  /* 
    {
      sql-components : [
        {
        id : 1,
        content : "SELECT"
      },
      {
        id : 2,
        content : "COUNT"
      },
      {
        id : 3,
        content : "nama"
      },
      {
        id : 4,
        content : "FROM"
      },
      {
        id : 5,
        content : "MAHASISWA"
      },
      {
        id : 6,
        content : "Employee"
      },
      {
        id : 7,
        content : "STUDENTS"
      },
    ],
    }  
  */
  return response.data;
};

const testQuery = async sqlQuery => {
  // TODO : API Request POST: URL ?soalID={soalID, studiKasusID, username} data : attempt++
  // ...
  // TODO : API Request GET: URL ?soalID={soalID}
  //   ? Output :
  /* 
  {
    checkResult : boolean,
    attempt : number
  }  
  */

  let response = await axios.get("");
  return response.data;
};

const submitJawaban = async (sqlQuery, timer, attempts, username) => {
  // TODO : API Request POST : URL ?username={username} data : {sqlQuery, timer, attempts }

  let response = await axios.post("");
  return response.data;
};

export { getAllSoal, getSoalByID, testQuery, submitJawaban, mockGetSoalByID };
