"use strict";
(() => {
var exports = {};
exports.id = 749;
exports.ids = [749];
exports.modules = {

/***/ 7133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _idSoal_)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: ./components/PageLayout.js + 1 modules
var PageLayout = __webpack_require__(7786);
// EXTERNAL MODULE: ./utils/remote-data/mahasiswa/Soal.js
var Soal = __webpack_require__(8489);
;// CONCATENATED MODULE: external "react-beautiful-dnd"
const external_react_beautiful_dnd_namespaceObject = require("react-beautiful-dnd");
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/mahasiswa/Soal/SQLQueryParts.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const SQLQueryParts = ({
  sqlParts
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
      children: "Komponen SQL"
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_beautiful_dnd_namespaceObject.Droppable, {
      droppableId: "sql_parts",
      direction: "horizontal",
      children: (provided, snapshot) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", _objectSpread(_objectSpread({}, provided.droppableProps), {}, {
        ref: provided.innerRef,
        style: {
          background: snapshot.isDraggingOver ? "lightblue" : "lightgrey",
          padding: 4,
          width: "45vw",
          minHeight: 80,
          overflow: "auto",
          display: "flex"
        },
        children: [sqlParts === null || sqlParts === void 0 ? void 0 : sqlParts.map((item, index) => {
          return /*#__PURE__*/jsx_runtime_.jsx(external_react_beautiful_dnd_namespaceObject.Draggable, {
            draggableId: item.id.toString(),
            index: index,
            children: (provided, snapshot) => {
              return /*#__PURE__*/jsx_runtime_.jsx("div", _objectSpread(_objectSpread(_objectSpread({
                ref: provided.innerRef
              }, provided.draggableProps), provided.dragHandleProps), {}, {
                style: _objectSpread({
                  userSelect: "none",
                  padding: 16,
                  width: 200,
                  textAlign: "center",
                  marginLeft: 10,
                  backgroundColor: snapshot.isDragging ? "#263B4A" : "#456C86",
                  color: "white"
                }, provided.draggableProps.style),
                children: item.content
              }));
            }
          }, item.id.toString());
        }), provided.placeholder]
      }))
    }, "sql_parts")]
  });
};

/* harmony default export */ const Soal_SQLQueryParts = (SQLQueryParts);
;// CONCATENATED MODULE: ./components/mahasiswa/Soal/SQLAnswerBox.js
function SQLAnswerBox_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function SQLAnswerBox_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SQLAnswerBox_ownKeys(Object(source), true).forEach(function (key) { SQLAnswerBox_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SQLAnswerBox_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SQLAnswerBox_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const SQLAnswerBox = ({
  boxes,
  jawaban,
  isDragging
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
      children: "Jawaban SQL"
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_beautiful_dnd_namespaceObject.Droppable, {
      droppableId: "sql_constructed",
      direction: "horizontal",
      children: (provided, snapshot) => {
        var _boxes$sql_constructe, _boxes$sql_constructe2;

        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", SQLAnswerBox_objectSpread(SQLAnswerBox_objectSpread({}, provided.droppableProps), {}, {
          ref: provided.innerRef,
          style: {
            background: snapshot.isDraggingOver ? "lightblue" : "lightgrey",
            padding: 4,
            width: "45vw",
            minHeight: 80,
            overflow: "auto",
            display: "flex"
          },
          children: [boxes === null || boxes === void 0 ? void 0 : (_boxes$sql_constructe = boxes.sql_constructed) === null || _boxes$sql_constructe === void 0 ? void 0 : (_boxes$sql_constructe2 = _boxes$sql_constructe.items) === null || _boxes$sql_constructe2 === void 0 ? void 0 : _boxes$sql_constructe2.map((item, index) => {
            return /*#__PURE__*/jsx_runtime_.jsx(external_react_beautiful_dnd_namespaceObject.Draggable, {
              draggableId: item.id.toString(),
              index: index,
              isDragDisabled: item.content === "___" || item.role === "clue" ? true : false,
              children: (provided, snapshot) => {
                return /*#__PURE__*/jsx_runtime_.jsx("div", SQLAnswerBox_objectSpread(SQLAnswerBox_objectSpread(SQLAnswerBox_objectSpread({
                  ref: provided.innerRef
                }, provided.draggableProps), provided.dragHandleProps), {}, {
                  style: SQLAnswerBox_objectSpread({
                    userSelect: "none",
                    padding: 16,
                    width: 200,
                    textAlign: "center",
                    marginLeft: 10,
                    backgroundColor: snapshot.isDragging ? "#263B4A" : "#456C86",
                    color: "white"
                  }, provided.draggableProps.style),
                  children: item.content
                }));
              }
            }, item.id.toString());
          }), provided.placeholder]
        }));
      }
    }, "sql_constructed")]
  });
};

/* harmony default export */ const Soal_SQLAnswerBox = (SQLAnswerBox);
;// CONCATENATED MODULE: ./components/mahasiswa/Soal/SQLContainer.js









const SQLContainer = ({
  boxes,
  setBoxes,
  jawaban,
  sqlUncomplete,
  setSqlUncomplete,
  onDragEnd
}) => {
  var _boxes$sql_parts;

  const {
    0: isDragging,
    1: setIsDragging
  } = (0,external_react_.useState)(false);
  const {
    0: fetchClue,
    1: setFetchClue
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    var _boxes$sql_constructe, _boxes$sql_constructe2;

    if (boxes.length !== 0) setFetchClue(boxes === null || boxes === void 0 ? void 0 : (_boxes$sql_constructe = boxes.sql_constructed) === null || _boxes$sql_constructe === void 0 ? void 0 : (_boxes$sql_constructe2 = _boxes$sql_constructe.items) === null || _boxes$sql_constructe2 === void 0 ? void 0 : _boxes$sql_constructe2.map(item => item.content.toLowerCase()));
  }, [boxes]); // ? Ini kalau mau hintnya statis (hint berubah ketika ganti soal)

  (0,external_react_.useEffect)(() => {
    if (sqlUncomplete === undefined || (sqlUncomplete === null || sqlUncomplete === void 0 ? void 0 : sqlUncomplete.length) === 0) setSqlUncomplete(jawaban === null || jawaban === void 0 ? void 0 : jawaban.split(" ").map((partJawaban, idx) => {
      if (fetchClue !== null && fetchClue !== void 0 && fetchClue.includes(partJawaban.toLowerCase())) return partJawaban;else return "___";
    }));
  }, [fetchClue]); // // ? Ini kalau mau hintnya dinamis (menyesuaikan input drag and drop mahasiswa).
  // useEffect(() => {
  //   // ? Ini kalau mau hintnya dinamis (menyesuaikan input drag and drop mahasiswa).
  //   setSqlUncomplete(
  //     jawaban?.split(" ").map((partJawaban, idx) => {
  //       if (fetchClue.includes(partJawaban.toLowerCase())) return partJawaban;
  //       else return "___";
  //     })
  //   );
  // }, [fetchClue]);

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_beautiful_dnd_namespaceObject.DragDropContext, {
      onDragStart: () => setIsDragging(true),
      onDragEnd: result => {
        onDragEnd(result, boxes, setBoxes);
        setIsDragging(false);
      },
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
        justify: "space-between",
        style: {
          marginBottom: "1em"
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
          children: "SQL Hints : "
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
          children: sqlUncomplete === null || sqlUncomplete === void 0 ? void 0 : sqlUncomplete.map((item, id) => /*#__PURE__*/jsx_runtime_.jsx("span", {
            style: {
              paddingLeft: ".5em"
            },
            children: item
          }, id))
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Soal_SQLQueryParts, {
        sqlParts: boxes === null || boxes === void 0 ? void 0 : (_boxes$sql_parts = boxes.sql_parts) === null || _boxes$sql_parts === void 0 ? void 0 : _boxes$sql_parts.items
      }), /*#__PURE__*/jsx_runtime_.jsx(Soal_SQLAnswerBox, {
        boxes: boxes,
        jawaban: jawaban,
        isDragging: isDragging
      })]
    })
  });
};

/* harmony default export */ const Soal_SQLContainer = (SQLContainer);
;// CONCATENATED MODULE: external "react-timer-hook"
const external_react_timer_hook_namespaceObject = require("react-timer-hook");
;// CONCATENATED MODULE: ./components/CountdownTimer.js





function CountdownTimer({
  expiryTimestamp,
  setTimerLeft
}) {
  const {
    seconds,
    minutes,
    hours,
    isRunning
  } = (0,external_react_timer_hook_namespaceObject.useTimer)({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called")
  });
  (0,external_react_.useEffect)(() => {
    setTimerLeft(`${hours}:${minutes}:${seconds}`);
    window.localStorage.setItem("timerLeft", JSON.stringify({
      hour: hours,
      minute: minutes,
      second: seconds
    }));
  }, [seconds]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    style: {
      textAlign: "center"
    },
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      style: {
        fontSize: "1.2em"
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        children: hours
      }), ":", /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: minutes
      }), ":", /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: seconds
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: !isRunning && "Waktu habis"
    })]
  });
}

/* harmony default export */ const components_CountdownTimer = (CountdownTimer);
// EXTERNAL MODULE: ./utils/context/JadwalContext.js
var JadwalContext = __webpack_require__(5904);
;// CONCATENATED MODULE: ./pages/mahasiswa/soal/[idPaket]/[pertanyaan]/[idSoal].js
function _idSoal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _idSoal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _idSoal_ownKeys(Object(source), true).forEach(function (key) { _idSoal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _idSoal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _idSoal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















function LatihanSoal() {
  var _dataPertanyaan$next;

  const router = (0,router_.useRouter)();
  const {
    timer
  } = (0,external_react_.useContext)(JadwalContext/* JadwalContext */.e);
  const {
    0: dataPertanyaan,
    1: setDataPertanyaan
  } = (0,external_react_.useState)([]);
  const {
    0: isDataPertanyaanLoaded,
    1: setIsDataPertanyaanLoaded
  } = (0,external_react_.useState)(false);
  const {
    0: isTimeLoaded,
    1: setIsTimeLoaded
  } = (0,external_react_.useState)(false);
  const {
    0: scheduleDate,
    1: setScheduleDate
  } = (0,external_react_.useState)(new Date());
  const {
    0: isAnswerSaved,
    1: setIsAnswerSaved
  } = (0,external_react_.useState)(false);
  const {
    0: isPreviewTable,
    1: setIsPreviewTable
  } = (0,external_react_.useState)(false);
  const {
    0: logData,
    1: setLogData
  } = (0,external_react_.useState)([]);
  const {
    0: timerLeftCounter,
    1: setTimerLeftCounter
  } = (0,external_react_.useState)("");
  const {
    0: isAlertActive,
    1: setIsAlertActive
  } = (0,external_react_.useState)(false);
  const {
    0: alertStatus,
    1: setAlertStatus
  } = (0,external_react_.useState)("success");
  const {
    0: alertMessage,
    1: setAlertMessage
  } = (0,external_react_.useState)("Alert muncul"); // ? Untuk simpan jawaban kalau soal ini berkategori close-ended

  const {
    0: boxes,
    1: setBoxes
  } = (0,external_react_.useState)([]); // ? ini untuk hint sql parts close-ended

  const {
    0: sqlUncomplete,
    1: setSqlUncomplete
  } = (0,external_react_.useState)([]);
  const {
    0: currentPart,
    1: setCurrentPart
  } = (0,external_react_.useState)(null); // ? Untuk simpan jawaban kalau soal ini berkategori open-ended

  const [form] = external_antd_.Form.useForm();
  (0,external_react_.useEffect)(() => {
    setIsAnswerSaved(false);
    setBoxes([]);
    setSqlUncomplete([]);
    console.clear();
    (0,Soal/* mockGetSoalByID */.S7)(parseInt(router.query.idSoal)).then(response => {
      var _response$data, _response$data$next;

      setDataPertanyaan(response.data);
      setIsDataPertanyaanLoaded(true);
      resetLog();
      console.log((_response$data = response.data) === null || _response$data === void 0 ? void 0 : (_response$data$next = _response$data.next) === null || _response$data$next === void 0 ? void 0 : _response$data$next.soalID, "ini id next soal");
    });
  }, [router.query.idSoal]);
  (0,external_react_.useEffect)(() => {
    // ? Biar timernya tetap berjalan dan tidak reset ketika direset
    if (isDataPertanyaanLoaded && dataPertanyaan !== undefined) {
      var _window;

      const backupTimer = JSON.parse((_window = window) === null || _window === void 0 ? void 0 : _window.localStorage.getItem("timerLeft"));
      const currentTime = new Date();
      const {
        hour,
        minute,
        second
      } = timer === null || timer === void 0 ? void 0 : timer.format;
      setScheduleDate(currentTime.setHours(currentTime.getHours() + hour, currentTime.getMinutes() + minute, currentTime.getSeconds() + second));

      if (hour === 0 && minute === 0 && second === 0) {
        setScheduleDate(currentTime.setHours(currentTime.getHours() + backupTimer.hour, currentTime.getMinutes() + backupTimer.minute, currentTime.getSeconds() + backupTimer.second));
      }

      setIsTimeLoaded(true);
    }
  }, [isDataPertanyaanLoaded, dataPertanyaan]);
  (0,external_react_.useEffect)(() => {
    var _dataPertanyaan$sql_c, _dataPertanyaan$sql_c2;

    setBoxes({
      sql_parts: {
        items: dataPertanyaan === null || dataPertanyaan === void 0 ? void 0 : (_dataPertanyaan$sql_c = dataPertanyaan.sql_components) === null || _dataPertanyaan$sql_c === void 0 ? void 0 : _dataPertanyaan$sql_c.filter(item => item.role === "part")
      },
      sql_constructed: {
        items: dataPertanyaan === null || dataPertanyaan === void 0 ? void 0 : (_dataPertanyaan$sql_c2 = dataPertanyaan.sql_components) === null || _dataPertanyaan$sql_c2 === void 0 ? void 0 : _dataPertanyaan$sql_c2.filter(item => item.role === "clue")
      }
    });
  }, [dataPertanyaan]);
  (0,external_react_.useEffect)(() => {
    // ? Save Log ketika ada pergerakan komponen drag-and-drop
    if (currentPart !== null) saveLog(currentPart, "move");
  }, [boxes, currentPart]);

  const onDragEnd = (result, boxes, setBoxes) => {
    if (!result.destination) return;
    const {
      source,
      destination
    } = result;

    if (source.droppableId !== destination.droppableId) {
      //  ? Ini dijalankan ketika elemen drag and drop nya dipindah ke field yang berbeda
      const sourceColumn = boxes[source.droppableId];
      const destColumn = boxes[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setBoxes(_idSoal_objectSpread(_idSoal_objectSpread({}, boxes), {}, {
        [source.droppableId]: _idSoal_objectSpread(_idSoal_objectSpread({}, sourceColumn), {}, {
          items: sourceItems
        }),
        [destination.droppableId]: _idSoal_objectSpread(_idSoal_objectSpread({}, destColumn), {}, {
          items: destItems
        })
      }));
    } else {
      //  ? Ini dijalankan ketika elemen drag and drop nya dipindah ke field yang sama
      const column = boxes[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setBoxes(_idSoal_objectSpread(_idSoal_objectSpread({}, boxes), {}, {
        [source.droppableId]: _idSoal_objectSpread(_idSoal_objectSpread({}, column), {}, {
          items: copiedItems
        })
      }));
    } // ? Set Log per Drag & Drop


    setCurrentPart(result);
  };

  const previewTable = () => {
    setIsPreviewTable(prev => !prev);
    console.log("table preview");
  };

  const resetLog = () => {
    console.log("resetted log");
    setLogData([]);
    setCurrentPart(null);
  };

  const submitAnswer = values => {
    saveLog(values, "submit"); // TODO : Call POST API request dari ... , terus define try catch nya disini
    // ? Kalau berhasil alertMessage = 'success' dan reset lognya, kalau gagal alertMessage = 'error', lognya tetep

    setIsAlertActive(true);
    setTimeout(() => setIsAlertActive(false), 5000);
    setAlertMessage(`Jawaban berhasil disimpan !`);
    setTimeout(() => {
      resetLog();
    }, 500);
    setIsAnswerSaved(true);
  };

  const saveLog = (values, role) => {
    setLogData(tempLogData => {
      var _boxes$sql_constructe, _boxes$sql_constructe2;

      return [...tempLogData, {
        timerLeft: timerLeftCounter,
        type: role,
        answer: (dataPertanyaan === null || dataPertanyaan === void 0 ? void 0 : dataPertanyaan.kategori) === "Open-Ended" ? values === null || values === void 0 ? void 0 : values.jawaban_siswa : boxes === null || boxes === void 0 ? void 0 : (_boxes$sql_constructe = boxes.sql_constructed) === null || _boxes$sql_constructe === void 0 ? void 0 : (_boxes$sql_constructe2 = _boxes$sql_constructe.items) === null || _boxes$sql_constructe2 === void 0 ? void 0 : _boxes$sql_constructe2.map(item => item.content).join(" "),
        answer_json: role === "move" ? {
          from: values.source,
          to: values.destination
        } : {}
      }];
    });
  };

  const testQuery = values => {
    saveLog(values, "test"); // TODO : Call POST API request dari ... , terus define try catch nya disini
    // ? Kalau berhasil alertMessage = 'success' dan reset lognya, kalau gagal alertMessage = 'error', lognya tetep

    setIsAlertActive(true);
    setTimeout(() => setIsAlertActive(false), 5000);
    setAlertMessage(`Jawaban anda benar !`);
    setTimeout(() => {
      resetLog();
    }, 500);
  };

  (0,external_react_.useEffect)(() => {
    console.group("info LogData");
    console.log(logData);
    console.groupEnd();
  }, [logData]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "SQLearn | Mahasiswa - Soal "
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(PageLayout/* default */.Z, {
      role: "mahasiswa",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
        gutter: 10,
        style: {
          marginTop: "2em"
        },
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
          lg: 9,
          style: {
            padding: "0 1em"
          },
          children: [isDataPertanyaanLoaded ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Typography.Title, {
              level: 3,
              children: "Pertanyaan"
            }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Typography.Paragraph, {
              style: {
                marginBottom: "2em",
                textAlign: "justify"
              },
              children: dataPertanyaan === null || dataPertanyaan === void 0 ? void 0 : dataPertanyaan.teksSoal
            })]
          }) : /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Skeleton, {
            active: true,
            paragraph: false,
            title: {
              width: "20vw"
            },
            style: {
              marginBottom: "1em"
            }
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
            type: "primary",
            onClick: () => previewTable(),
            children: "Preview Hasil Query"
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
            style: {
              marginTop: "1em",
              display: isPreviewTable ? "block" : "none"
            },
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "https://via.placeholder.com/380x200"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
            style: {
              marginTop: "1em"
            },
            children: (dataPertanyaan === null || dataPertanyaan === void 0 ? void 0 : (_dataPertanyaan$next = dataPertanyaan.next) === null || _dataPertanyaan$next === void 0 ? void 0 : _dataPertanyaan$next.soalID) !== false ? /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button // disabled={isAnswerSaved ? false : true}
            , {
              type: "primary",
              onClick: () => {
                var _dataPertanyaan$next2;

                resetLog();
                router.push(`/mahasiswa/soal/${parseInt(router.query.idPaket)}/pertanyaan/${dataPertanyaan === null || dataPertanyaan === void 0 ? void 0 : (_dataPertanyaan$next2 = dataPertanyaan.next) === null || _dataPertanyaan$next2 === void 0 ? void 0 : _dataPertanyaan$next2.soalID}`);
              },
              children: "Soal Selanjutnya"
            }) : /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button // disabled={isAnswerSaved ? false : true}
            , {
              type: "primary",
              ghost: true,
              onClick: () => {
                resetLog();
                router.push(`/mahasiswa/soal/${parseInt(router.query.idPaket)}/ujian-selesai`);
              },
              children: "Akhiri ujian"
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
          lg: 1,
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Divider, {
            type: "vertical",
            style: {
              height: "80vh"
            }
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
          lg: 14,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
            justify: "space-between",
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
              children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
                className: "title-part",
                children: "SQL Query"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
              style: {
                textAlign: "right"
              },
              children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
                className: "title-part",
                children: isTimeLoaded ? /*#__PURE__*/jsx_runtime_.jsx(components_CountdownTimer, {
                  expiryTimestamp: scheduleDate,
                  setTimerLeft: setTimerLeftCounter
                }) : "Loading. . ."
              })
            })]
          }), (dataPertanyaan === null || dataPertanyaan === void 0 ? void 0 : dataPertanyaan.kategori) === "Open-Ended" ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form, {
              form: form,
              layout: "vertical",
              children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Form.Item, {
                name: "jawaban_siswa",
                children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
                  prefix: /*#__PURE__*/jsx_runtime_.jsx(icons_.ConsoleSqlOutlined, {}),
                  placeholder: ` Masukkan Jawaban SQL Disini . . .`
                })
              })
            })
          }) : /*#__PURE__*/jsx_runtime_.jsx(Soal_SQLContainer, {
            boxes: boxes,
            jawaban: dataPertanyaan === null || dataPertanyaan === void 0 ? void 0 : dataPertanyaan.jawaban_benar,
            sqlUncomplete: sqlUncomplete,
            setSqlUncomplete: setSqlUncomplete,
            setBoxes: setBoxes,
            onDragEnd: onDragEnd
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
            style: {
              marginTop: "1em"
            },
            justify: "space-between",
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Row, {
                gutter: 10,
                children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
                    type: "primary",
                    onClick: () => testQuery((dataPertanyaan === null || dataPertanyaan === void 0 ? void 0 : dataPertanyaan.kategori) === "Open-Ended" ? form.getFieldsValue() : ""),
                    children: "Test Query"
                  })
                }), (dataPertanyaan === null || dataPertanyaan === void 0 ? void 0 : dataPertanyaan.kategori) === "Open-Ended" && /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
                    type: "danger" // TODO : Tambah event handler untuk reset db
                    ,
                    onClick: () => {},
                    children: "Reset Database"
                  })
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
              children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
                style: {
                  backgroundColor: "#003A8C",
                  color: "white"
                },
                onClick: () => submitAnswer((dataPertanyaan === null || dataPertanyaan === void 0 ? void 0 : dataPertanyaan.kategori) === "Open-Ended" ? form.getFieldsValue() : ""),
                htmlType: "submit",
                children: "Simpan Jawaban"
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
            children: isAlertActive && /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Alert, {
              message: alertMessage,
              type: alertStatus,
              closable: true,
              showIcon: true,
              style: {
                marginTop: "1em",
                width: "100%"
              }
            })
          })]
        })]
      })
    })]
  });
}

/* harmony default export */ const _idSoal_ = (LatihanSoal);

/***/ }),

/***/ 7066:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 5725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

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
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [786,113], () => (__webpack_exec__(7133)));
module.exports = __webpack_exports__;

})();