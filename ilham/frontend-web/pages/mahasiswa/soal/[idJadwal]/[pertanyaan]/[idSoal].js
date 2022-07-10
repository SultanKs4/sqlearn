import { React, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import {
  Row,
  Col,
  Skeleton,
  Typography,
  Button,
  Divider,
  Form,
  Input,
  Alert,
  Table,
  Collapse,
  message,
} from "antd";

import { ConsoleSqlOutlined } from "@ant-design/icons";

import PageLayout from "../../../../../components/PageLayout";
import SQLContainer from "../../../../../components/mahasiswa/Soal/SQLContainer";
import CountdownTimer from "../../../../../components/CountdownTimer";
import { getSoalByID } from "../../../../../utils/remote-data/dosen/SoalCRUD";
import { useSession } from "next-auth/react";
import { URL_IMAGES } from "../../../../../utils/remote-data/api";
import { removeHTML } from "../../../../../utils/common";
import ModalCustom from "../../../../../components/Modal";
import FormResetDatabase from "../../../../../components/mahasiswa/Soal/FormResetDatabase";

import useBoxes from "../../../../../utils/hooks/PengerjaanSoal/useBoxes";
import useNextQuestion from "../../../../../utils/hooks/PengerjaanSoal/useNextQuestion";
import useLogs from "../../../../../utils/hooks/PengerjaanSoal/useLogs";
import useInitializeTimer from "../../../../../utils/hooks/PengerjaanSoal/useInitializeTimer";
import ModalFinishSession from "../../../../../components/mahasiswa/Soal/ModalFinishSession";
import useCountUpTimer from "../../../../../utils/hooks/PengerjaanSoal/useCountUpTimer";
import { finishSession } from "../../../../../utils/remote-data/mahasiswa/Session";
import TextArea from "antd/lib/input/TextArea";

function LatihanSoal() {
  const router = useRouter();

  const { data: session } = useSession();
  const [timerUp] = useCountUpTimer();

  const [availableTableFromQuestion, setAvailableTableFromQuestion] = useState(
    []
  );

  // Ketika akhiri sesi
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const [currentTables, setCurrentTables] = useState([]);
  const [currentColumns, setCurrentColumns] = useState([]);
  const [isFeedbackDisplayed, setIsFeedbackDisplayed] = useState(false);
  const [feedbackContent, setFeedbackContent] = useState({});

  const [dataPertanyaan, setDataPertanyaan] = useState([]);
  const [currentPart, setCurrentPart] = useState(null);
  const [isDataPertanyaanLoaded, setIsDataPertanyaanLoaded] = useState(false);

  const [isPreviewTable, setIsPreviewTable] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalRole, setModalRole] = useState("");

  const handleToggleModal = () => setIsModalVisible((prev) => !prev);

  const [isTimeLoaded, scheduleDate, timerLeftCounter, setTimerLeftCounter] =
    useInitializeTimer(isDataPertanyaanLoaded, dataPertanyaan);

  const [boxes, setBoxes, resetBox] = useBoxes(
    isDataPertanyaanLoaded,
    dataPertanyaan
  );

  const [logData, saveLog, resetLog] = useLogs(
    boxes,
    dataPertanyaan,
    timerLeftCounter,
    timerUp,
    // scheduleDate,
    setCurrentPart
  );

  const [
    dataNextPertanyaan,
    isAnswerSaved,
    setIsAnswerSaved,
    setIsTestingQuery,
  ] = useNextQuestion(
    logData,
    resetLog,
    setCurrentTables,
    setCurrentColumns,
    setIsFeedbackDisplayed,
    setFeedbackContent
  );

  // ? Untuk simpan jawaban kalau soal ini berQuestionLabel?.name open-ended
  const [form] = Form.useForm();

  const fetchDataPertanyaan = useCallback(() => {
    if (session !== undefined && router?.query?.idSoal !== undefined) {
      getSoalByID(session?.user?.tokenJWT, router?.query?.idSoal).then(
        (response) => {
          setIsAnswerSaved(false);
          setBoxes([]);
          form.setFieldsValue({ jawaban_siswa: "" });
          console.clear();
          setDataPertanyaan(response.data);
          setIsDataPertanyaanLoaded(true);

          // Ini reset daftar tabel ketika ganti soal
          setAvailableTableFromQuestion([]);

          // Ini reset tabel dan kolom untuk feedback ketika test query
          setCurrentTables([]);
          setCurrentColumns([]);
          setIsFeedbackDisplayed(false);

          // Reassign daftar tabel yang ada di soal
          Object.keys(response.data?.tables).map((item) =>
            setAvailableTableFromQuestion((prev, id) => [
              ...prev,
              {
                id: id,
                table: item,
                columns: response.data?.tables[item] || [],
              },
            ])
          );
        }
      );
    }
  }, [session, router.query.idSoal]);

  useEffect(() => {
    fetchDataPertanyaan();
  }, [fetchDataPertanyaan]);

  useEffect(() => {
    // ? Save Log ketika ada pergerakan komponen drag-and-drop
    if (currentPart !== null) saveLog(currentPart, "move");
  }, [boxes, currentPart]);

  const previewTable = () => setIsPreviewTable((prev) => !prev);

  const submitAnswer = (values) => {
    saveLog(values, "submit");
    setIsTestingQuery(true);
  };

  const testQuery = (values) => {
    saveLog(values, "test");
    setIsTestingQuery(true);
  };

  const onClickButtonNext = () => {
    resetLog();

    if (dataNextPertanyaan !== null)
      router.push(
        `/mahasiswa/soal/${parseInt(router.query.idJadwal)}/pertanyaan/${
          dataNextPertanyaan?.id
        }?session_id=${router.query?.session_id}`
      );
    else {
      setModalRole("akhiri");
      setIsModalVisible(true);
    }
  };

  const handleAkhiriSesi = () => {
    setIsButtonLoading(true);
    finishSession(session?.user?.tokenJWT, router.query?.session_id)
      .then((res) => {
        message.success("Anda telah menyelesaikan ujian ! ");
        setTimeout(() => {
          router.push(
            `/mahasiswa/soal/${parseInt(router.query.idJadwal)}/ujian-selesai`
          );
        }, [3000]);
      })
      .catch((err) => message.error("Mohon coba beberapa saat lagi"));
  };

  // ? If the timer is over, ya end the session
  useEffect(() => {
    if (timerLeftCounter === "00:00:00") handleAkhiriSesi();
  }, [timerLeftCounter]);

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
                  {removeHTML(dataPertanyaan?.text) || dataPertanyaan?.text}
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

            <Row>
              {" "}
              <h2> Daftar Tabel</h2>{" "}
            </Row>
            <Row
              style={{
                margin: "1em 0",
              }}
            >
              <Col span="24">
                {isDataPertanyaanLoaded &&
                  availableTableFromQuestion?.map((item, idPanel) => (
                    <Collapse key={idPanel}>
                      <Collapse.Panel
                        header={`Tabel ${item?.table}`}
                        key={item.id}
                      >
                        Daftar Kolom :
                        <ul>
                          {item?.columns?.map((column, id) => (
                            <li key={id}> {column}</li>
                          ))}
                        </ul>
                      </Collapse.Panel>
                    </Collapse>
                  ))}
              </Col>
            </Row>

            <Button type="primary" onClick={() => previewTable()}>
              Preview Hasil Query
            </Button>
            <Row
              style={{
                marginTop: "1em",
                display: isPreviewTable ? "block" : "none",
              }}
            >
              {isDataPertanyaanLoaded && (
                <img
                  width={380}
                  src={URL_IMAGES + dataPertanyaan?.answer_pic}
                  alt={`${URL_IMAGES}/${dataPertanyaan?.answer_pic}`}
                />
              )}
            </Row>
            <Row style={{ marginTop: "1em" }}>
              <Button
                disabled={isAnswerSaved ? false : true}
                type="primary"
                onClick={onClickButtonNext}
              >
                {dataNextPertanyaan !== null
                  ? "Soal Selanjutnya"
                  : "Akhiri Ujian"}
              </Button>
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
                      // timerStartCounter={timerStartCounter}
                      // setTimerStartCounter={setTimerStartCounter}
                      setTimerLeft={setTimerLeftCounter}
                    />
                  ) : (
                    "Loading. . ."
                  )}
                </h2>
              </Col>
            </Row>
            {dataPertanyaan?.QuestionLabel?.name === "Open-Ended" ? (
              <>
                <Form form={form} layout="vertical">
                  <Form.Item name="jawaban_siswa">
                    <TextArea
                      autoComplete="off"
                      style={{
                        fontWeight: "bold",
                        fontFamily:
                          "Courier Bold, Courier New, Courier, monospace",
                      }}
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
                setBoxes={setBoxes}
                setCurrentPart={setCurrentPart}
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
                          dataPertanyaan?.QuestionLabel?.name === "Open-Ended"
                            ? form.getFieldsValue()
                            : ""
                        )
                      }
                    >
                      Test Query
                    </Button>
                  </Col>
                  {dataPertanyaan?.QuestionLabel?.name === "Open-Ended" && (
                    <Col>
                      <Button
                        type="danger"
                        onClick={() => {
                          setModalRole("delete");
                          handleToggleModal();
                        }}
                      >
                        Reset Database
                      </Button>
                    </Col>
                  )}
                </Row>
              </Col>
              <Col>
                <Row gutter={10}>
                  {dataPertanyaan?.QuestionLabel?.name === "Close-Ended" && (
                    <Col>
                      <Button
                        style={{ backgroundColor: "red", color: "white" }}
                        onClick={resetBox}
                      >
                        Reset
                      </Button>
                    </Col>
                  )}

                  <Col>
                    <Button
                      style={{ backgroundColor: "#003A8C", color: "white" }}
                      onClick={() =>
                        submitAnswer(
                          dataPertanyaan?.QuestionLabel?.name === "Open-Ended"
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
            {isFeedbackDisplayed && (
              <Row style={{ marginTop: "1em" }}>
                <Col span={24}>
                  <Alert
                    type={feedbackContent?.data?.is_equal ? "success" : "error"}
                    description={
                      <>
                        <h1 style={{ textAlign: "center" }}>
                          {feedbackContent?.data?.message}
                        </h1>
                        Hasil Query :
                        <Row justify="center">
                          <Table
                            style={{
                              overflowX: "scroll",
                            }}
                            columns={currentColumns}
                            dataSource={currentTables}
                            pagination={false}
                          />
                        </Row>{" "}
                      </>
                    }
                  />
                </Col>
              </Row>
            )}
            {isModalVisible && (
              <ModalCustom
                role={modalRole}
                entity={modalRole === "delete" ? "Database" : "Ujian"}
                visible={isModalVisible}
                setVisible={setIsModalVisible}
                modalContent={
                  modalRole === "delete" ? (
                    <FormResetDatabase setVisible={setIsModalVisible} />
                  ) : (
                    <ModalFinishSession
                      isButtonLoading={isButtonLoading}
                      handleSubmit={handleAkhiriSesi}
                      setVisible={setIsModalVisible}
                    />
                  )
                }
              />
            )}
          </Col>
        </Row>
      </PageLayout>
    </>
  );
}

export default LatihanSoal;
