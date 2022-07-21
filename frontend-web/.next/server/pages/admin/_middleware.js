// runtime can't be in strict mode because a global variable is assign and maybe created.
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[9002],{

/***/ 19910:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_auth_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43694);
/* harmony import */ var next_auth_middleware__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_middleware__WEBPACK_IMPORTED_MODULE_0__);
 // More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware

/* harmony default export */ __webpack_exports__["default"] = ((0,next_auth_middleware__WEBPACK_IMPORTED_MODULE_0__.withAuth)({
  callbacks: {
    authorized: ({
      token
    }) => (token === null || token === void 0 ? void 0 : token.userRole) === "admin"
  }
}));

/***/ }),

/***/ 86759:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var next_dist_server_web_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84384);

        

        var mod = __webpack_require__(19910)
        var handler = mod.middleware || mod.default;

        if (typeof handler !== 'function') {
          throw new Error('The Middleware "pages/admin/_middleware" must export a `middleware` or a `default` function');
        }

        /* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(opts) {
          return (0,next_dist_server_web_adapter__WEBPACK_IMPORTED_MODULE_0__/* .adapter */ .V)({
              ...opts,
              page: "/admin/_middleware",
              handler,
          })
        }
    

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [726], function() { return __webpack_exec__(86759); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ (_ENTRIES = typeof _ENTRIES === "undefined" ? {} : _ENTRIES)["middleware_pages/admin/_middleware"] = __webpack_exports__;
/******/ }
]);