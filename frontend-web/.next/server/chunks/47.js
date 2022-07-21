"use strict";
exports.id = 47;
exports.ids = [47];
exports.modules = {

/***/ 2047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3242);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
const _excluded = ["isLoading", "dataSource", "role", "showDetail"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










function ListComponent(_ref) {
  var _props$kelas;

  let {
    isLoading,
    dataSource,
    role,
    showDetail
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  if (isLoading) {
    let skeleton = ["", ""];
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List, {
      itemLayout: "horizontal",
      dataSource: skeleton,
      renderItem: item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
          loading: true,
          active: true,
          title: true
        })
      })
    });
  }

  let icon = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: " "
  });

  let emptyDescription = "";

  switch (role) {
    case "studi-kasus":
      emptyDescription = "Studi Kasus";
      icon = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.DatabaseOutlined, {
        style: {
          fontSize: "3em"
        }
      });
      break;

    case "list-kelas-dosen":
      icon = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.LaptopOutlined, {});
      break;

    case "jadwal-dosen":
      emptyDescription = "Jadwal";
      icon = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.CalendarOutlined, {
        style: {
          fontSize: "3em",
          color: "gray",
          marginTop: "1em"
        }
      });
      break;

    case "paket-soal-dosen":
      emptyDescription = "Paket Soal";
      icon = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.CodeSandboxOutlined, {
        style: {
          fontSize: "3em",
          color: "gray",
          marginTop: "1em"
        }
      });
      break;

    case "soal-tiap-paket-dosen":
      emptyDescription = "Soal";
      icon = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.FileTextOutlined, {
        style: {
          fontSize: "3em",
          color: "gray",
          marginTop: "1em"
        }
      });
      break;

    case "data-soal-dosen":
      emptyDescription = "Soal";
      icon = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.FileTextOutlined, {
        style: {
          fontSize: "3em",
          color: "gray",
          marginTop: "1em"
        }
      });
      break;

    case "daftar-mahasiswa-per-kelas":
      emptyDescription = "Mahasiswa";
      icon = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.UserOutlined, {
        style: {
          fontSize: "3em",
          color: "gray",
          marginTop: "1em"
        }
      });
      break;

    default:
      break;
  }

  if (dataSource.length === 0) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Empty, {
      image: icon,
      description: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Text, {
        style: {
          color: "gray",
          fontWeight: "bold"
        },
        children: ["Tidak ada data ", emptyDescription]
      })
    })
  }); // ? Untuk setiap role disini, mempunyai showDetail yang berbeda dan tidak mempengaruhi satu sama lain

  switch (role) {
    case "studi-kasus":
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List, {
        itemLayout: "horizontal",
        dataSource: dataSource,
        renderItem: item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
          style: {
            padding: 0
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {
            style: {
              width: "100vw",
              marginBottom: ".4em"
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
              justify: "space-around",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                span: 18,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                  gutter: 50,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Text, {
                      style: {
                        fontWeight: "bold"
                      },
                      children: item.nama
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.DatabaseOutlined, {
                      style: {
                        fontSize: "1.2em",
                        marginRight: ".5em"
                      }
                    }), "Database ", item.database]
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                span: 6,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                  gutter: 20,
                  justify: "end",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                      type: "primary",
                      icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.SearchOutlined, {}),
                      size: "medium",
                      onClick: () => props.previewStudiKasus(item)
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                      type: "danger",
                      icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.DeleteOutlined, {}),
                      size: "medium",
                      onClick: () => props.deleteStudiKasus(item)
                    })
                  })]
                })
              })]
            })
          })
        })
      });

    case "list-kelas-dosen":
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List, {
        itemLayout: "horizontal",
        dataSource: dataSource,
        renderItem: item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
          style: {
            padding: 0,
            marginBottom: ".5em"
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {
            style: {
              width: "100vw"
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
              justify: "space-around",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                span: 18,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                  gutter: 50,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.LaptopOutlined, {
                      style: {
                        fontSize: "1.2em",
                        marginRight: ".5em"
                      }
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Text, {
                      style: {
                        fontWeight: "bold"
                      },
                      children: item.name
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.UserOutlined, {
                      style: {
                        fontSize: "1.2em",
                        marginRight: ".5em"
                      }
                    }), item === null || item === void 0 ? void 0 : item.jumlahMhs, " orang"]
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                span: 6,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                  gutter: 20,
                  justify: "end",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
                      title: "Preview Kelas",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        type: "primary",
                        icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.SearchOutlined, {}),
                        onClick: () => router.push(`/dosen/kelas/${item.id}`)
                      })
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
                      title: "Ubah Kelas",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        type: "primary",
                        icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.EditOutlined, {}),
                        size: "medium",
                        onClick: () => props.editKelas(item)
                      })
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
                      title: "Hapus Kelas",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        type: "danger",
                        icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.DeleteOutlined, {}),
                        size: "medium",
                        onClick: () => props.deleteKelas(item)
                      })
                    })
                  })]
                })
              })]
            })
          })
        })
      });

    case "lihat-nilai":
      let topThreeStudents = dataSource.slice().splice(0, 3);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List, {
          itemLayout: "horizontal",
          dataSource: props.displayAllData ? dataSource : topThreeStudents,
          renderItem: item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
              justify: "space-around",
              style: {
                width: "100vw"
              },
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                span: 18,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                  gutter: [50],
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    span: 8,
                    children: item.nama
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    span: 6,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.ConsoleSqlOutlined, {
                      style: {
                        fontSize: "1.2em",
                        marginRight: ".5em"
                      }
                    }), item.jumlahLatihanDikerjakan, " Pertanyaan"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    span: 5,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.FieldTimeOutlined, {
                      style: {
                        fontSize: "1.2em",
                        marginRight: ".5em"
                      }
                    }), item.avgDurasi, " menit"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    span: 5,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.FormOutlined, {
                      style: {
                        fontSize: "1.2em",
                        marginRight: ".5em"
                      }
                    }), "Nilai :", item.avgNilai]
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                span: 4,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                  gutter: 20,
                  justify: "end",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
                      title: "Preview Nilai Mhs",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        type: "primary",
                        icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.SearchOutlined, {}),
                        style: {
                          color: "white",
                          backgroundColor: "purple"
                        },
                        size: "medium",
                        onClick: () => props.previewDetailNilai(item)
                      })
                    })
                  })
                })
              })]
            })
          })
        }), !props.displayAllData && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Paragraph, {
          underline: true,
          style: {
            color: "grey",
            textAlign: "center",
            marginTop: "1em"
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
            title: `Preview Kelas untuk melihat daftar mahasiswa dalam kelas ${(props === null || props === void 0 ? void 0 : (_props$kelas = props.kelas) === null || _props$kelas === void 0 ? void 0 : _props$kelas.nama) || "ini"}`,
            children: ["Terdapat total ", dataSource.length, " mahasiswa"]
          })
        })]
      });

    case "sesi-latihan-mahasiswa":
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List, {
        itemLayout: "horizontal",
        dataSource: dataSource,
        renderItem: item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
            justify: "space-around",
            style: {
              width: "100vw"
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
              span: 18,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                gutter: [10],
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                  span: showDetail ? 4 : 6,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Text, {
                    style: {
                      fontWeight: "bold"
                    },
                    children: item.nama
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                  span: showDetail ? 6 : 9,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.ConsoleSqlOutlined, {
                    style: {
                      fontSize: "1.2em",
                      marginRight: ".5em"
                    }
                  }), item.jumlahSoal, " Pertanyaan"]
                }), item.hasOwnProperty("nilai") && showDetail && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                  span: showDetail ? 6 : 9,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.FormOutlined, {
                    style: {
                      fontSize: "1.2em",
                      marginRight: ".5em"
                    }
                  }), "Skor : ", item.nilai]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                  span: showDetail ? 6 : 9,
                  children: item.hasOwnProperty("nilai") ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.IssuesCloseOutlined, {
                      style: {
                        fontSize: "1.2em",
                        marginRight: ".5em"
                      }
                    }), `${item.totalPercobaan}x percobaan`]
                  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    style: {
                      color: (0,_utils_common__WEBPACK_IMPORTED_MODULE_2__/* .countTimeDifference */ .wP)(moment__WEBPACK_IMPORTED_MODULE_0___default()(), moment__WEBPACK_IMPORTED_MODULE_0___default()(item === null || item === void 0 ? void 0 : item.tanggal_akhir)).toLowerCase().includes("terlewat") && "red"
                    },
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.FieldTimeOutlined, {
                      style: {
                        fontSize: "1.2em",
                        marginRight: ".5em"
                      }
                    }), (0,_utils_common__WEBPACK_IMPORTED_MODULE_2__/* .countTimeDifference */ .wP)(moment__WEBPACK_IMPORTED_MODULE_0___default()(), moment__WEBPACK_IMPORTED_MODULE_0___default()(item === null || item === void 0 ? void 0 : item.tanggal_akhir))]
                  })
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
              span: 6,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                gutter: 20,
                justify: "end",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                  children: item.hasOwnProperty("nilai") ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                    style: {
                      color: "#52c41a"
                    },
                    children: (0,_utils_common__WEBPACK_IMPORTED_MODULE_2__/* .ucfirst */ .Ps)(item.status)
                  }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                    ghost: true,
                    type: "primary",
                    icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.EditOutlined, {}),
                    size: "medium",
                    onClick: () => props.kerjakanLatihan(item.id),
                    children: "Kerjakan"
                  })
                })
              })
            })]
          })
        }, item.id)
      });

    case "jadwal-dosen":
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List, {
        itemLayout: "horizontal",
        dataSource: dataSource,
        renderItem: item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Badge.Ribbon, {
          text: (item === null || item === void 0 ? void 0 : item.kategori) === "-" ? "Kosong" : item === null || item === void 0 ? void 0 : item.kategori,
          color: (item === null || item === void 0 ? void 0 : item.kategori) === "Close-Ended" ? "geekblue" : "purple",
          placement: "start",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
            style: {
              padding: 0
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {
              style: {
                width: "100vw",
                marginBottom: ".4em"
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                justify: "space-around",
                style: {
                  marginTop: "1em"
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                  span: 18,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                    gutter: [50],
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                      span: 4,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Text, {
                        style: {
                          fontWeight: "bold"
                        },
                        children: item.jadwal_nama
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                      span: 4,
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.LaptopOutlined, {
                        style: {
                          fontSize: "1.2em",
                          marginRight: ".5em"
                        }
                      }), item.kelas_nama]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                      span: 6,
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.DatabaseOutlined, {
                        style: {
                          fontSize: "1.2em",
                          marginRight: ".5em"
                        }
                      }), item.studi_kasus_nama]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                      span: 8,
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.FieldTimeOutlined, {
                        style: {
                          fontSize: "1.2em",
                          marginRight: ".5em"
                        }
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                        style: {
                          color: (0,_utils_common__WEBPACK_IMPORTED_MODULE_2__/* .countTimeDifference */ .wP)(moment__WEBPACK_IMPORTED_MODULE_0___default()(), item === null || item === void 0 ? void 0 : item.tanggal_akhir).toLowerCase().includes("terlewat") && "red"
                        },
                        children: (0,_utils_common__WEBPACK_IMPORTED_MODULE_2__/* .countTimeDifference */ .wP)(moment__WEBPACK_IMPORTED_MODULE_0___default()(), item === null || item === void 0 ? void 0 : item.tanggal_akhir)
                      })]
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                  span: 6,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                    gutter: 20,
                    justify: "end",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
                        title: "Edit Jadwal",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                          type: "primary",
                          icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.EditOutlined, {}),
                          size: "medium",
                          onClick: () => props.editJadwal(item)
                        })
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
                        title: "Hapus Jadwal",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                          type: "danger",
                          icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.DeleteOutlined, {}),
                          size: "medium",
                          onClick: () => props.deleteJadwal(item)
                        })
                      })
                    })]
                  })
                })]
              })
            })
          })
        })
      });

    case "paket-soal-dosen":
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List, {
        itemLayout: "horizontal",
        dataSource: dataSource,
        renderItem: item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Badge.Ribbon, {
          text: (item === null || item === void 0 ? void 0 : item.kategori) === "-" ? "Kosong" : item === null || item === void 0 ? void 0 : item.kategori,
          color: (item === null || item === void 0 ? void 0 : item.kategori) === "Close-Ended" ? "geekblue" : "purple",
          placement: "start",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
            style: {
              padding: 0
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {
              style: {
                width: "100vw",
                marginBottom: ".4em"
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                justify: "space-between",
                style: {
                  marginTop: "1em"
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                  span: 18,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                    gutter: [50],
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Text, {
                        style: {
                          fontWeight: "bold"
                        },
                        children: item.nama
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.ConsoleSqlOutlined, {
                        style: {
                          fontSize: "1.2em",
                          marginRight: ".5em"
                        }
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Text, {
                        style: {
                          color: item.pertanyaan.length > 0 ? "black" : "red"
                        },
                        children: `${item.pertanyaan.length} Pertanyaan`
                      })]
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                  span: 6,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                    gutter: 20,
                    justify: "end",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
                        title: "Lihat Paket Soal",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                          type: "primary",
                          icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.SearchOutlined, {}),
                          size: "medium",
                          onClick: () => props.previewPaket(item === null || item === void 0 ? void 0 : item.id_paket)
                        })
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
                        title: "Hapus Paket Soal",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                          type: "danger",
                          icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.DeleteOutlined, {}),
                          size: "medium",
                          onClick: () => props.deletePaket(item)
                        })
                      })
                    })]
                  })
                })]
              })
            })
          })
        })
      });

    case "soal-tiap-paket-dosen":
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List, {
        itemLayout: "horizontal",
        dataSource: dataSource,
        renderItem: item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
          style: {
            padding: 0
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {
            style: {
              width: "100vw",
              marginBottom: ".4em"
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
              justify: "space-between",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                span: 20,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.DatabaseOutlined, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Text, {
                      style: {
                        fontWeight: "bold",
                        marginLeft: "1em"
                      },
                      children: item.studi_kasus
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                  justify: "space-between",
                  style: {
                    margin: "1em 0"
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    children: [" ", item.teksSoal, " "]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                  justify: "space-between",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Text, {
                      children: "Opsi Jawaban : "
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List, {
                      size: "small",
                      dataSource: item.jawaban,
                      locale: {
                        emptyText: "Opsi Jawaban belum dibuat"
                      },
                      renderItem: opsi => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
                        children: opsi
                      })
                    })]
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
                    title: "Edit Soal",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                      type: "primary",
                      icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.EditOutlined, {}),
                      size: "medium",
                      onClick: () => props.editPilihSoal(item)
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                  style: {
                    margin: 0,
                    padding: 4
                  }
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
                  title: "Hapus Soal",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                    type: "danger",
                    icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.DeleteOutlined, {}),
                    onClick: () => props.deleteSoal(item)
                  })
                })]
              })]
            })
          })
        })
      });

    case "data-soal-mahasiswa":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List, {
          itemLayout: "horizontal",
          dataSource: dataSource,
          renderItem: item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
            style: {
              padding: 0
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {
              style: {
                width: "100vw",
                marginBottom: ".4em"
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                justify: "space-between",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                  span: 20,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                      style: {
                        paddingTop: "1em"
                      },
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.DatabaseOutlined, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Text, {
                        style: {
                          fontWeight: "bold",
                          marginLeft: "1em"
                        },
                        children: item.studi_kasus
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                    justify: "space-between",
                    style: {
                      margin: "1em 0"
                    },
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                      children: [" ", item.teksSoal, " "]
                    })
                  })]
                })
              })
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
          justify: "center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
            title: "Kerjakan Soal",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
              type: "primary",
              icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.EditOutlined, {}),
              children: "Kerjakan",
              onClick: () => props.kerjakanLatihan()
            })
          })
        })]
      });

    case "data-soal-dosen":
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List, {
        itemLayout: "horizontal",
        dataSource: dataSource,
        renderItem: item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Badge.Ribbon, {
          text: (item === null || item === void 0 ? void 0 : item.kategori) === "-" ? "Kosong" : item === null || item === void 0 ? void 0 : item.kategori,
          color: (item === null || item === void 0 ? void 0 : item.kategori) === "Close-Ended" ? "geekblue" : "purple",
          placement: "start",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
            style: {
              padding: 0
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {
              style: {
                width: "100vw",
                marginBottom: ".4em"
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                justify: "space-between",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                  span: 20,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                      style: {
                        paddingTop: "1em"
                      },
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.DatabaseOutlined, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Text, {
                        style: {
                          fontWeight: "bold",
                          marginLeft: "1em"
                        },
                        children: item.studi_kasus
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                    justify: "space-between",
                    style: {
                      margin: "1em 0"
                    },
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                      children: [" ", item.teksSoal, " "]
                    })
                  }), showDetail && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                    justify: "space-between",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Text, {
                        children: "Jawaban Query : "
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List, {
                        size: "small",
                        dataSource: item.jawaban,
                        locale: {
                          emptyText: "Opsi Jawaban belum dibuat"
                        },
                        renderItem: opsi => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
                          children: opsi
                        })
                      })]
                    })
                  })]
                }), showDetail && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
                      title: "Edit Soal",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        type: "primary",
                        icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.EditOutlined, {}),
                        size: "medium",
                        onClick: () => props.editSoal(item)
                      })
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                    style: {
                      margin: 0,
                      padding: 4
                    }
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
                    title: "Hapus Soal",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                      type: "danger",
                      icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.DeleteOutlined, {}),
                      onClick: () => props.deleteSoal(item)
                    })
                  })]
                })]
              })
            })
          })
        })
      });

    case "daftar-mahasiswa-per-kelas":
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List, {
        itemLayout: "horizontal",
        dataSource: dataSource,
        renderItem: item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
          style: {
            padding: 0
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {
            style: {
              width: "100vw",
              marginBottom: ".4em"
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
              justify: "space-around",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                span: 18,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                  gutter: 20,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    span: 8,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.UserOutlined, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Text, {
                      style: {
                        marginLeft: "1em"
                      },
                      children: item === null || item === void 0 ? void 0 : item.nama
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    span: 6,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Text, {
                      children: item === null || item === void 0 ? void 0 : item.nim
                    })
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                span: 6,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                  gutter: 20,
                  justify: "end",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                      type: "primary",
                      icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.EditOutlined, {}),
                      size: "medium",
                      onClick: () => props.editMahasiswa(item)
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                      type: "danger",
                      icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.DeleteOutlined, {}),
                      size: "medium",
                      onClick: () => props.deleteMahasiswa(item)
                    })
                  })]
                })
              })]
            })
          })
        })
      });

    case "admin-data-dosen":
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List, {
        itemLayout: "horizontal",
        dataSource: dataSource,
        renderItem: item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
          style: {
            padding: 0
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {
            style: {
              width: "100vw",
              marginBottom: ".4em"
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
              justify: "space-around",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                span: 18,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                  gutter: 20,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    span: 8,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.UserOutlined, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Text, {
                      style: {
                        marginLeft: "1em"
                      },
                      children: item === null || item === void 0 ? void 0 : item.nama_dosen
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    span: 6,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Typography.Text, {
                      children: item === null || item === void 0 ? void 0 : item.nomor_induk
                    })
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                span: 6,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
                  gutter: 20,
                  justify: "end",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                      type: "primary",
                      icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.EditOutlined, {}),
                      size: "medium",
                      onClick: () => props.editDosen(item)
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                      type: "danger",
                      icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.DeleteOutlined, {}),
                      size: "medium",
                      onClick: () => props.deleteDosen(item)
                    })
                  })]
                })
              })]
            })
          })
        })
      });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListComponent);

/***/ }),

/***/ 3242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ps": () => (/* binding */ ucfirst),
/* harmony export */   "wP": () => (/* binding */ countTimeDifference),
/* harmony export */   "nK": () => (/* binding */ isObjectEmpty)
/* harmony export */ });
/* unused harmony export getHours */
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const ucfirst = word => word.charAt(0).toUpperCase() + word.slice(1);
const countTimeDifference = (startDate = moment__WEBPACK_IMPORTED_MODULE_0___default()(), endDate) => {
  let duration = moment__WEBPACK_IMPORTED_MODULE_0___default().duration(endDate.diff(startDate));
  if (duration.asHours() < 0) return `Terlewat ${Math.abs(parseInt(duration.asHours()))} jam`;
  return duration.asDays() < 1 ? `${parseInt(duration.asHours())} jam lagi` : `${parseInt(duration.asDays())} hari lagi`;
};
const getHours = minutes => minutes / 60;
const isObjectEmpty = obj => Object.entries(obj).length === 0;

/***/ })

};
;