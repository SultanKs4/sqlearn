import axios from "axios";

const login = async ({ username, password }) => {
  /* TODO:
    1. Make API request for login with POST Method
    2. Store the credentials to Local Storage
*/

  axios.post("");
};

const logout = async () => {
  /* TODO:
    1. Make API request for logout with POST Method
    2. Remove credentials from Local Storage
*/

  axios.post("");
};

const register = async ({ username, password }, role) => {
  /* TODO:
    1. Make API request for register with POST Method
    2. Redirect to Login Page
*/
  axios.post("");
};

const changePassword = async username => {
  /* TODO:
    1. Make API request for changePassword with POST Method
    2. Redirect to Login Page
*/
  axios.post("");
};

export { login, logout, register, changePassword };
