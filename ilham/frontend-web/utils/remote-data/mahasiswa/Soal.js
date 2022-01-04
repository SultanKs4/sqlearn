import "axios";

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

const getSoalByID = async soalID => {
  let response = await axios.get("");
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

export { getAllSoal, getSoalByID, testQuery, submitJawaban };
