"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 7926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
;// CONCATENATED MODULE: ./utils/remote-data/api.js
const BASE_URL = "https://api.sqlearn.sultanachmad.me"; // ? BACKEND WEB
// API KELAS

const URL_CLASS_API = `${BASE_URL}/api/classes`; // API PAKET SOAL

const URL_CONTAINER_API = `${BASE_URL}/api/containers`;
const URL_CASE_STUDY_API = `${BASE_URL}/api/casestudies`;
const URL_QUESTION_API = `${BASE_URL}/api/questions`;
const URL_SCHEDULE_API = `${BASE_URL}/api/schedules`;
const URL_SESSION_API = `${BASE_URL}/api/sessions`;
const URL_LOGIN_API = `${BASE_URL}/api/users/login`; // ? BACKEND ASSESMENT

const URL_CREATE_DB_API = `${BASE_URL}/api/v2/database/create/testcreate`;
const URL_DESC_TABLE_API = `${BASE_URL}/api/v2/database/desc_table/auto_assess_tes`;
const URL_ASSESMENT_MULTI_KEY_API = `${BASE_URL}/api/v2/assessment/multi_key`;
const URL_ASSESMENT_SINGLE_KEY_API = `${BASE_URL}/api/v2/assessment/single_key`;
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js



 // For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options

/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [credentials_default()({
    // The name to display on the sign in form (e.g. "Sign in with...")
    name: "Credentials",

    async authorize(credentials, req) {
      // Add logic here to look up the user from the credentials supplied
      const {
        username,
        password
      } = credentials;
      const response = await external_axios_default().post(URL_LOGIN_API, {
        username,
        password
      });

      if (response) {
        // Any object returned will be saved in `user` property of the JWT
        console.log("Login berhasil ", response.data);
        return response.data;
      } else {
        // If you return null then an error will be displayed advising the user to check their details.
        console.log("Login failed");
        return null; // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      }
    }

  })],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    signOut: "/login",
    error: "/login" // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // ? (used for check email message)
    // newUser: '/auth/new-user' // ? New users will be directed here on first sign in (leave the property out if not of interest)

  },
  callbacks: {
    jwt: async ({
      token,
      user
    }) => {
      if (user) {
        token.id = user.data.user.id;
        token.username = user.data.user.username;
        token.userRole = user.data.user.role;
        token.accessToken = user.data.user.accessToken;
      }

      return token;
    },
    session: async ({
      session,
      token
    }) => {
      if (token) {
        session.user = token;
        session.accessToken = token.accessToken;
      }

      console.log("ini session", session);
      console.log("kalau ini token", token);
      return session;
    }
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET
  }
}));

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7926));
module.exports = __webpack_exports__;

})();