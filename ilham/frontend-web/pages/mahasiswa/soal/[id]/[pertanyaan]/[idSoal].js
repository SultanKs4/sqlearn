import { React, useState, useEffect } from "react";
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
  Tooltip,
  Form,
  Input,
} from "antd";

import {
  LeftOutlined,
  RightOutlined,
  ConsoleSqlOutlined,
} from "@ant-design/icons";

import PageLayout from "../../../../../components/PageLayout";
import { mockGetSoalByID } from "../../../../../utils/remote-data/mahasiswa/Soal";
import SQLContainer from "../../../../../components/mahasiswa/Soal/SQLContainer";

function LatihanSoal() {
  const router = useRouter();

  const [dataPertanyaan, setDataPertanyaan] = useState([]);
  const [isDataPertanyaanLoaded, setIsDataPertanyaanLoaded] = useState(false);
  const [isPreviewTable, setIsPreviewTable] = useState(false);

  const [isAlertActive, setIsAlertActive] = useState(false);
  const [alertStatus, setAlertStatus] = useState("success");
  const [alertMessage, setAlertMessage] = useState("Alert muncul");

  // ? Untuk simpan jawaban kalau soalini berkategori close-ended
  const [boxes, setBoxes] = useState([]);

  // ? Untuk simpan jawaban kalau soalini berkategori open-ended
  const [form] = Form.useForm();

  const onDragEnd = (result, boxes, setBoxes) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = boxes[source.droppableId];
      const destColumn = boxes[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setBoxes({
        ...boxes,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = boxes[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setBoxes({
        ...boxes,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  useEffect(() => {
    mockGetSoalByID().then((response) => {
      setDataPertanyaan(
        response.data.find(
          (item) => parseInt(item.id) === parseInt(router.query.idSoal)
        )
      );
      setIsDataPertanyaanLoaded(true);
    });
  }, [router.query.idSoal]);

  useEffect(() => {
    console.log("ini dataPertanyaan", dataPertanyaan);
    setBoxes({
      sql_parts: {
        items: dataPertanyaan?.sql_components,
      },
      sql_constructed: {
        items: [],
      },
    });
  }, [dataPertanyaan]);

  // useEffect(() => {
  //   console.log(boxes?.sql_constructed?.items?.map((item) => item.content));
  // }, [boxes]);

  const previewTable = () => {
    setIsPreviewTable((prev) => !prev);
    console.log("table preview");
  };

  const submitAnswer = (values) => {
    if (dataPertanyaan?.kategori === "Open-Ended") {
      console.log(values);
    } else {
      console.log(
        boxes?.sql_constructed?.items?.map((item) => item.content).join(" ")
      );
    }
    // TODO : Call POST API request dari ... , terus define try catch nya disini
    // ? Kalau berhasil alertMessage = 'success', kalau gagal alertMessage = 'error'
    setIsAlertActive(true);
    setTimeout(() => setIsAlertActive(false), 5000);
    setAlertMessage(`Jawaban berhasil disimpan !`);
  };

  const testQuery = () => {
    if (dataPertanyaan?.kategori === "Open-Ended") {
    } else {
    }
    // TODO : Call POST API request dari ... , terus define try catch nya disini
    // ? Kalau berhasil alertMessage = 'success', kalau gagal alertMessage = 'error'
    setIsAlertActive(true);
    setTimeout(() => setIsAlertActive(false), 5000);
    setAlertMessage(`Jawaban anda benar !`);
  };

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
                    marginBottom: "4em",
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
              Preview Table
            </Button>
            <Row
              style={{
                marginTop: "1em",
                display: isPreviewTable ? "block" : "none",
              }}
            >
              <img src="https://via.placeholder.com/320x200"></img>
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
                <h2 className="title-part">01:59:00</h2>
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
                setBoxes={setBoxes}
                onDragEnd={onDragEnd}
              />
            )}

            <Row style={{ marginTop: "1em" }} justify="space-between">
              <Col>
                <Button type="primary" onClick={() => testQuery()}>
                  Test Query
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
