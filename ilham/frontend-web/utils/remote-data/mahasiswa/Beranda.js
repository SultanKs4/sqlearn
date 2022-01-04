import "axios";

const getUserInfo = async username => {
  // TODO : API Request GET : ?username={username}
  // ? Output :
  /*
    {
        kelas : "",
        sesi : [],
        username: "",
    }
    */
  let response = await axios.get("");
  return response.data;
};

const getStudiKasus = async (kelasID, sesiID) => {
  // TODO : API Request GET : ?kelasID={kelasID}&sesiID={sesiID}
  let response = await axios.get("");
  return response.data;
};

const getFinishedPractices = async username => {
  // TODO : API Request GET : ?username={username}
  let response = await axios.get("");
  return response.data;
};

export { getUserInfo, getStudiKasus, getFinishedPractices };
