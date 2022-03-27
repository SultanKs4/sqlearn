import { React, useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import {
  Row,
  Col,
  Skeleton,
  Typography,
  Button,
  Divider,
  Alert,
  Form,
  Input,
} from "antd";

import { ConsoleSqlOutlined } from "@ant-design/icons";

import PageLayout from "../../../../../components/PageLayout";
import { mockGetSoalByID } from "../../../../../utils/remote-data/mahasiswa/Soal";
import SQLContainer from "../../../../../components/mahasiswa/Soal/SQLContainer";
import CountdownTimer from "../../../../../components/CountdownTimer";
import { JadwalContext } from "../../../../../utils/context/JadwalContext";

function LatihanSoal() {
  const router = useRouter();

  const { timer } = useContext(JadwalContext);

  const [dataPertanyaan, setDataPertanyaan] = useState([]);
  const [isDataPertanyaanLoaded, setIsDataPertanyaanLoaded] = useState(false);
  const [isTimeLoaded, setIsTimeLoaded] = useState(false);
  const [scheduleDate, setScheduleDate] = useState(new Date());

  const [isAnswerSaved, setIsAnswerSaved] = useState(false);

  const [isPreviewTable, setIsPreviewTable] = useState(false);
  const [logData, setLogData] = useState([]);

  const [timerLeftCounter, setTimerLeftCounter] = useState("");

  const [isAlertActive, setIsAlertActive] = useState(false);
  const [alertStatus, setAlertStatus] = useState("success");
  const [alertMessage, setAlertMessage] = useState("Alert muncul");

  // ? Untuk simpan jawaban kalau soal ini berkategori close-ended
  const [boxes, setBoxes] = useState([]);

  const [currentPart, setCurrentPart] = useState(null);

  // ? Untuk simpan jawaban kalau soal ini berkategori open-ended
  const [form] = Form.useForm();

  useEffect(() => {
    setIsAnswerSaved(false);
    setBoxes([]);
    console.clear();
    mockGetSoalByID(parseInt(router.query.idSoal)).then((response) => {
      setDataPertanyaan(response.data);
      setIsDataPertanyaanLoaded(true);
      resetLog();
      // console.log(response.data?.next?.soalID, "ini id next soal");
    });
  }, [router.query.idSoal, dataPertanyaan]);

  useEffect(() => {
    // ? Biar timernya tetap berjalan dan tidak reset ketika direset
    if (isDataPertanyaanLoaded && dataPertanyaan !== undefined) {
      const backupTimer = JSON.parse(window?.localStorage.getItem("timerLeft"));
      const currentTime = new Date();
      const { hour, minute, second } = timer?.format;
      setScheduleDate(
        currentTime.setHours(
          currentTime.getHours() + hour,
          currentTime.getMinutes() + minute,
          currentTime.getSeconds() + second
        )
      );

      if (hour === 0 && minute === 0 && second === 0) {
        setScheduleDate(
          currentTime.setHours(
            currentTime.getHours() + backupTimer.hour,
            currentTime.getMinutes() + backupTimer.minute,
            currentTime.getSeconds() + backupTimer.second
          )
        );
      }
      setIsTimeLoaded(true);
      setupBoxes();
    }
  }, [isDataPertanyaanLoaded, dataPertanyaan]);

  const setupBoxes = () => {
    let fetchClue = dataPertanyaan?.sql_components?.filter(
      (item) => item.role === "clue"
    );

    let clueComparisonWithAnswer = fetchClue?.map((item) =>
      item.content.toLowerCase()
    );

    let sqlUncomplete = dataPertanyaan?.jawaban_benar
      .split(" ")
      .map((partJawaban, idx) => {
        if (clueComparisonWithAnswer?.includes(partJawaban?.toLowerCase()))
          return partJawaban;
        else return "___";
      });

    // Ini assign boxes ketika pertanyaan di load

    let createBoxes = {
      sql_parts: {
        items: dataPertanyaan?.sql_components?.filter(
          (item) => item.role === "part"
        ),
      },
      sql_clues: {
        items: fetchClue,
      },
      sql_constructed: {
        items: sqlUncomplete?.map((item, idx) => {
          return {
            id: idx,
            position: idx,
            content: item,
            role: item === "__" ? "part" : "clue",
          };
        }),
      },
    };

    setBoxes(createBoxes);
  };

  useEffect(() => {
    // ? Save Log ketika ada pergerakan komponen drag-and-drop
    if (currentPart !== null) saveLog(currentPart, "move");
  }, [boxes, currentPart]);

  const onDragEnd = (result, boxes, setBoxes) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      // ? Ini kalau drag dari komponen SQL dan drop ke Jawaban SQL
      let destinationParts = destination.droppableId.split("_");
      let destinationKey = `${destinationParts[0]}_${destinationParts[1]}`;
      let idDest = destinationParts[2]; // ? Output : id

      let destColumn = boxes[destinationKey].items;

      let sourceItems = [...boxes[source.droppableId].items];

      let destItems = destColumn;

      const [removed] = sourceItems.splice(source.index, 1);
      destItems[idDest] = removed;

      setBoxes({
        ...boxes,
        sql_parts: {
          items: sourceItems,
        },
        sql_constructed: {
          items: destItems,
        },
      });
    }
    // ? Set Log per Drag & Drop
    setCurrentPart(result);
  };

  useEffect(() => {
    console.log(boxes, "boxes");
  }, [boxes]);

  const previewTable = () => {
    setIsPreviewTable((prev) => !prev);
    console.log("table preview");
  };

  const resetLog = () => {
    console.log("resetted log");
    setLogData([]);
    setCurrentPart(null);
  };

  const submitAnswer = (values) => {
    saveLog(values, "submit");

    // TODO : Call POST API request dari ... , terus define try catch nya disini
    // ? Kalau berhasil alertMessage = 'success' dan reset lognya, kalau gagal alertMessage = 'error', lognya tetep

    setIsAlertActive(true);
    setTimeout(() => setIsAlertActive(false), 5000);
    setAlertMessage(`Jawaban berhasil disimpan !`);

    setTimeout(() => {
      resetLog();
    }, 500);
    setIsAnswerSaved(true);
  };

  // TODO : Update untuk sql_constructed dan sql_parts untuk lognya
  const saveLog = (values, role) => {
    setLogData((tempLogData) => [
      ...tempLogData,
      {
        timerLeft: timerLeftCounter,
        type: role,
        answer:
          dataPertanyaan?.kategori === "Open-Ended"
            ? values?.jawaban_siswa
            : boxes?.sql_constructed?.items
                ?.map((item) => item.content)
                .join(" "),
        answer_json:
          role === "move"
            ? {
                from: values.source,
                to: values.destination,
              }
            : {},
      },
    ]);
  };

  const testQuery = (values) => {
    saveLog(values, "test");

    // TODO : Call POST API request dari ... , terus define try catch nya disini
    // ? Kalau berhasil alertMessage = 'success' dan reset lognya, kalau gagal alertMessage = 'error', lognya tetep
    setIsAlertActive(true);
    setTimeout(() => setIsAlertActive(false), 5000);
    setAlertMessage(`Jawaban anda benar !`);

    setTimeout(() => {
      resetLog();
    }, 500);
  };

  const resetBox = () => {
    setupBoxes();
    saveLog(null, "reset");
  };

  useEffect(() => {
    console.group("info LogData");
    console.log(logData);
    console.groupEnd();
  }, [logData]);

  return (
    <>
      <Head>
        <title>SQLearn | Mahasiswa - Soal </title>
      </Head>
      <PageLayout role="mahasiswa">
        <Row gutter={10} style={{ marginTop: "2em" }}>
          <Col lg={9} style={{ padding: "0 1em" }}>
            {isDataPertanyaanLoaded ? (
              <>
                <Typography.Title level={3}>Pertanyaan</Typography.Title>
                <Typography.Paragraph
                  style={{
                    marginBottom: "2em",
                    textAlign: "justify",
                  }}
                >
                  {dataPertanyaan?.teksSoal}
                </Typography.Paragraph>
              </>
            ) : (
              <Skeleton
                active
                paragraph={false}
                title={{ width: "20vw" }}
                style={{ marginBottom: "1em" }}
              />
            )}
            <Button type="primary" onClick={() => previewTable()}>
              Preview Hasil Query
            </Button>

            <Row
              style={{
                marginTop: "1em",
                display: isPreviewTable ? "block" : "none",
              }}
            >
              <img src="https://via.placeholder.com/380x200"></img>
            </Row>

            <Row style={{ marginTop: "1em" }}>
              {dataPertanyaan?.next?.soalID !== false ? (
                <Button
                  // disabled={isAnswerSaved ? false : true}
                  type="primary"
                  onClick={() => {
                    resetLog();
                    router.push(
                      `/mahasiswa/soal/${parseInt(
                        router.query.idPaket
                      )}/pertanyaan/${dataPertanyaan?.next?.soalID}`
                    );
                  }}
                >
                  Soal Selanjutnya
                </Button>
              ) : (
                <Button
                  // disabled={isAnswerSaved ? false : true}
                  type="primary"
                  ghost
                  onClick={() => {
                    resetLog();
                    router.push(
                      `/mahasiswa/soal/${parseInt(
                        router.query.idPaket
                      )}/ujian-selesai`
                    );
                  }}
                >
                  Akhiri ujian
                </Button>
              )}
            </Row>
          </Col>
          <Col lg={1}>
            <Divider type="vertical" style={{ height: "80vh" }} />
          </Col>
          <Col lg={14}>
            <Row justify="space-between">
              <Col>
                <h2 className="title-part">SQL Query</h2>
              </Col>
              <Col style={{ textAlign: "right" }}>
                <h2 className="title-part">
                  {isTimeLoaded ? (
                    <CountdownTimer
                      expiryTimestamp={scheduleDate}
                      setTimerLeft={setTimerLeftCounter}
                    />
                  ) : (
                    "Loading. . ."
                  )}
                </h2>
              </Col>
            </Row>
            {dataPertanyaan?.kategori === "Open-Ended" ? (
              <>
                <Form form={form} layout="vertical">
                  <Form.Item name="jawaban_siswa">
                    <Input
                      prefix={<ConsoleSqlOutlined />}
                      placeholder={` Masukkan Jawaban SQL Disini . . .`}
                    />
                  </Form.Item>
                </Form>
              </>
            ) : (
              <SQLContainer
                boxes={boxes}
                jawaban={dataPertanyaan?.jawaban_benar}
                // sqlUncomplete={sqlUncomplete}
                // setSqlUncomplete={setSqlUncomplete}
                setBoxes={setBoxes}
                onDragEnd={onDragEnd}
              />
            )}

            <Row style={{ marginTop: "1em" }} justify="space-between">
              <Col>
                <Row gutter={10}>
                  <Col>
                    <Button
                      type="primary"
                      onClick={() =>
                        testQuery(
                          dataPertanyaan?.kategori === "Open-Ended"
                            ? form.getFieldsValue()
                            : ""
                        )
                      }
                    >
                      Test Query
                    </Button>
                  </Col>
                  {dataPertanyaan?.kategori === "Open-Ended" && (
                    <Col>
                      <Button
                        type="danger"
                        // TODO : Tambah event handler untuk reset db
                        onClick={() => {}}
                      >
                        Reset Database
                      </Button>
                    </Col>
                  )}
                </Row>
              </Col>
              <Col>
                <Row gutter={10}>
                  <Col>
                    <Button
                      style={{ backgroundColor: "red", color: "white" }}
                      onClick={resetBox}
                    >
                      Reset
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      style={{ backgroundColor: "#003A8C", color: "white" }}
                      onClick={() =>
                        submitAnswer(
                          dataPertanyaan?.kategori === "Open-Ended"
                            ? form.getFieldsValue()
                            : ""
                        )
                      }
                      htmlType="submit"
                    >
                      Simpan Jawaban
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              {isAlertActive && (
                <Alert
                  message={alertMessage}
                  type={alertStatus}
                  closable
                  showIcon
                  style={{ marginTop: "1em", width: "100%" }}
                />
              )}
            </Row>
          </Col>
        </Row>
      </PageLayout>
    </>
  );
}

export default LatihanSoal;
