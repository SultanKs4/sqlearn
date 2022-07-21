exports.id = 786;
exports.ids = [786];
exports.modules = {

/***/ 7786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_PageLayout)
});

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./styles/components/Sider.module.css
var Sider_module = __webpack_require__(4626);
var Sider_module_default = /*#__PURE__*/__webpack_require__.n(Sider_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Sider.js







const {
  Sider
} = external_antd_.Layout;

function SiderComponent({
  role,
  collapsed,
  setCollapsed
}) {
  const router = (0,router_.useRouter)();

  const onCollapse = statusCollapse => setCollapsed(statusCollapse);

  let siderElement;

  switch (role) {
    case "dosen":
      siderElement = /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Menu, {
        theme: "dark",
        defaultSelectedKeys: ["jadwal"],
        selectedKeys: router.pathname.split("/")[2],
        mode: "inline",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu.Item, {
          icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.CalendarOutlined, {}),
          onClick: () => {
            router.push("/dosen");
          },
          children: "Jadwal"
        }, "jadwal"), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu.Item, {
          icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.LaptopOutlined, {}),
          onClick: () => {
            router.push("/dosen/kelas");
          },
          children: "Kelas"
        }, "kelas"), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu.Item, {
          icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.DatabaseOutlined, {}),
          onClick: () => {
            router.push("/dosen/studi-kasus");
          },
          children: "Studi Kasus"
        }, "studi-kasus"), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu.Item, {
          icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.CodeSandboxOutlined, {}),
          onClick: () => {
            router.push("/dosen/paket-soal");
          },
          children: "Paket Soal"
        }, "paket-soal"), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu.Item, {
          icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.FileTextOutlined, {}),
          onClick: () => {
            router.push("/dosen/soal");
          },
          children: "Soal"
        }, "soal"), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu.Item, {
          icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.TeamOutlined, {}),
          onClick: () => {
            router.push("/dosen/nilai-mahasiswa");
          },
          children: "Nilai Mahasiswa"
        }, "nilai-mahasiswa"), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Menu.Item, {
          icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.FormOutlined, {}),
          onClick: () => {
            router.push("/dosen/edit-profile");
          },
          children: [" ", "Ubah Profile"]
        }, "edit-profile")]
      });
      break;

    case "mahasiswa":
      siderElement = /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Menu, {
        theme: "dark",
        defaultSelectedKeys: ["beranda"],
        selectedKeys: router.pathname.split("/")[2],
        mode: "inline",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Menu.Item, {
          icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.HomeOutlined, {}),
          onClick: () => {
            router.push("/mahasiswa");
          },
          children: [" ", "Beranda"]
        }, "beranda"), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Menu.Item, {
          icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.FileTextOutlined, {}),
          onClick: () => {
            router.push("/mahasiswa/soal");
          },
          children: [" ", "Soal"]
        }, "soal"), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Menu.Item, {
          icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.BarChartOutlined, {}),
          onClick: () => {
            router.push("/mahasiswa/lihat-nilai");
          },
          children: [" ", "Lihat Nilai"]
        }, "lihat-nilai"), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Menu.Item, {
          icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.FormOutlined, {}),
          onClick: () => router.push("/mahasiswa/edit-profile"),
          children: [" ", "Ubah Profile"]
        }, "edit-profile")]
      });
      break;

    case "admin":
      siderElement = /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Menu, {
        theme: "dark",
        defaultSelectedKeys: ["daftar-dosen"],
        selectedKeys: router.pathname.split("/")[2],
        mode: "inline",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu.Item, {
          icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.TeamOutlined, {}),
          onClick: () => {
            router.push("/admin");
          },
          children: "Daftar Dosen"
        }, "daftar-dosen"), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Menu.Item, {
          icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.ContainerOutlined, {}),
          onClick: () => {
            router.push("/admin/konfigurasi-penilaian");
          },
          children: [" ", "Konfigurasi Penilaian"]
        }, "konfigurasi-penilaian"), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Menu.Item, {
          icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.FormOutlined, {}),
          onClick: () => {
            router.push("/admin/edit-profile");
          },
          children: [" ", "Ubah Profile"]
        }, "edit-profile")]
      });
      break;

    default:
      break;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Sider, {
    collapsible: true,
    collapsed: collapsed,
    onCollapse: onCollapse,
    className: (Sider_module_default()).sticky_sider,
    style: {
      zIndex: collapsed ? 1 : 2
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "logo"
    }), siderElement]
  });
}

/* harmony default export */ const components_Sider = (SiderComponent);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: ./components/PageLayout.js








const {
  Content,
  Footer,
  Header
} = external_antd_.Layout;

function PageLayout({
  children,
  role,
  username = "1841720076"
}) {
  const {
    0: collapsed,
    1: setCollapsed
  } = (0,external_react_.useState)(false);
  const router = (0,router_.useRouter)();

  const onClick = () => (0,react_.signOut)({
    callbackUrl: "http://localhost:3000/login"
  });

  const menu = /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu, {
    onClick: onClick,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Menu.Item, {
      style: {
        padding: "1em"
      },
      children: ["Logout ", /*#__PURE__*/jsx_runtime_.jsx(icons_.PoweroffOutlined, {}), " "]
    }, "1")
  });

  if (role === "mahasiswa") username = "1841720076";else if (role === "admin") username = "admincoba";else username = "Dosen Coba";
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Layout, {
    style: {
      minHeight: "100vh"
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Sider, {
      role: role,
      collapsed: collapsed,
      setCollapsed: setCollapsed
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Layout, {
      className: "site-layout",
      style: {
        marginLeft: collapsed ? 60 : 200
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {
        className: "site-layout-background",
        style: {
          padding: 0
        },
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
          justify: "space-between",
          style: {
            padding: "0 3em",
            color: "white"
          },
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
            children: [" ", `Welcome, ${username} !`, " "]
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
            children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Dropdown, {
              overlay: menu,
              arrow: true,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                className: "ant-dropdown-link",
                onClick: e => e.preventDefault(),
                children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.UserOutlined, {
                  style: {
                    fontSize: "2em",
                    color: "white"
                  }
                }), /*#__PURE__*/jsx_runtime_.jsx(icons_.DownOutlined, {
                  style: {
                    fontSize: "1em",
                    color: "white"
                  }
                })]
              })
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Content, {
        style: {
          margin: "0 16px"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "site-layout-background",
          style: {
            padding: 24,
            minHeight: 360
          },
          children: children
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Footer, {
        style: {
          textAlign: "center"
        },
        children: ["SQLearn - JTI Polinema", /*#__PURE__*/jsx_runtime_.jsx("br", {})]
      })]
    })]
  });
}

/* harmony default export */ const components_PageLayout = (PageLayout);

/***/ }),

/***/ 4626:
/***/ ((module) => {

// Exports
module.exports = {
	"sticky_sider": "Sider_sticky_sider__MRHpl"
};


/***/ })

};
;