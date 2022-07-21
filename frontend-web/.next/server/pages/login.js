"use strict";
(() => {
var exports = {};
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 7604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__.Select;

const mockValidate = valueInput => {
  if (valueInput.loginTypeValue === "mahasiswa") return valueInput.username === "1841720076" && valueInput.password === "1841720076" ? true : false;else {
    return valueInput.username === "dosencoba" && valueInput.password === "dosencoba" ? true : false;
  }
};

const Login = ({
  providers,
  csrfToken
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const {
    data: session
  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();
  const [form] = antd__WEBPACK_IMPORTED_MODULE_1__.Form.useForm();
  const {
    0: loginType,
    1: setLoginType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("mahasiswa");
  const {
    0: providersAuth,
    1: setProvidersAuth
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  const onRequiredTypeChange = activeRole => setLoginType(activeRole);

  const onFinish = values => {
    var _providersAuth$creden;

    console.log("Received values of form: ", values);
    console.log("redirect to : ", `http://localhost:3000/${values.loginTypeValue}`);
    (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.signIn)(providersAuth === null || providersAuth === void 0 ? void 0 : (_providersAuth$creden = providersAuth.credentials) === null || _providersAuth$creden === void 0 ? void 0 : _providersAuth$creden.id, {
      callbackUrl: `http://localhost:3000/${values.loginTypeValue}`,
      username: values.username,
      loginTypeValue: values.loginTypeValue,
      password: values.password
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.getProviders)().then(result => {
      setProvidersAuth(result);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("title", {
        children: "SQLearn | Login "
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
      align: "middle",
      justify: "center",
      style: {
        minHeight: "100vh"
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {
        style: {
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          width: "400px"
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Form, {
          method: "POST",
          name: "normal_login",
          className: "login-form",
          initialValues: {
            remember: true,
            loginTypeValue: loginType
          },
          form: form,
          onFinish: onFinish,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
            justify: "space-between",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
              children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Text, {
                style: {
                  fontWeight: "bold"
                },
                children: [" ", "Login Sebagai", " "]
              }), " "]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                name: "loginTypeValue",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Select, {
                  onChange: onRequiredTypeChange,
                  style: {
                    width: "150px"
                  },
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(Option, {
                    value: "mahasiswa",
                    children: "Mahasiswa"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(Option, {
                    value: "dosen",
                    children: "Dosen"
                  })]
                })
              })
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
            name: "username",
            tooltip: {
              title: `Bisa menggunakan ${loginType === "mahasiswa" ? "NIM" : "NIDN"}`
            },
            rules: [{
              required: true,
              message: "Please input your Username!"
            }],
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
              prefix: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.UserOutlined, {}),
              placeholder: `Username ${loginType} . . .`
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
            name: "password",
            rules: [{
              required: true,
              message: "Please input your Password!"
            }],
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input.Password, {
              prefix: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.LockOutlined, {}),
              type: "password",
              placeholder: "Password"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
              justify: "space-between",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                  name: "remember",
                  valuePropName: "checked",
                  noStyle: true,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
                    children: "Remember me"
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                  className: "login-form-forgot",
                  onClick: () => {
                    router.push("/forgot_password");
                  },
                  children: "Forgot password"
                })
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
              justify: "space-between",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                  type: "primary",
                  htmlType: "submit",
                  className: "login-form-button",
                  children: "Log in"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                children: ["Or", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                  onClick: () => {
                    router.push("/register");
                  },
                  children: "Register now!"
                })]
              })]
            })
          })]
        })
      })
    })]
  });
}; // Login.getInitialProps = async (context) => {
//   const { req, res } = context;
//   const session = await getSession({ req });
//   if (session && res && session.accessToken) {
//     res.writeHead(302, {
//       Location: "/dosen",
//     });
//     res.end();
//     return;
//   }
//   return {
//     session: undefined,
//     providers: await providers(context),
//     csrfToken: await csrfToken(context),
//   };
// };


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ 7066:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 5725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7604));
module.exports = __webpack_exports__;

})();