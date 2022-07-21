import Head from "next/head";

import {
  Skeleton,
  Typography,
  Row,
  Col,
  Button,
  Tooltip,
  message,
  Card,
  Collapse,
  Divider,
} from "antd";

import {
  LeftOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  CodeOutlined,
} from "@ant-design/icons";

import PageLayout from "../../../../components/PageLayout";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getNilaiMhsByID } from "../../../../utils/remote-data/dosen/NilaiMahasiswaCRUD";
import { useSession } from "next-auth/react";
import { removeHTML } from "../../../../utils/common";

const PreviewNilaiTiapKelas = () => {
  const { Panel } = Collapse;

  const { data: session } = useSession();
  const router = useRouter();

  const [dataNilaiMhs, setDataNilaiMhs] = useState({});
  const [isDataNilaiLoaded, setisDataNilaiLoaded] = useState(false);

  useEffect(() => {
    if (session !== undefined)
      getNilaiMhsByID(
        session?.user?.tokenJWT,
        parseInt(router?.query?.id_mhs),
        parseInt(router.query.jadwalID)
      )
        .then((res) => {
          setDataNilaiMhs(res.data);
          setisDataNilaiLoaded(true);
        })
        .catch(() => message.error("Terjadi kesalahan saat mengambil data"));
  }, [router.query.id_mhs]);

  return (
    <>
      <Head>
        <title>SQLearn | Dosen - Detail Nilai Kelas </title>
      </Head>
      <PageLayout role="dosen">
        <Row justify="space-between">
          <Col>
            <Row gutter={30}>
              <Col>
                <Tooltip title="Kembali" placement="bottom">
                  <Button
                    onClick={() => router.push("/dosen/nilai-mahasiswa")}
                    style={{
                      marginTop: ".2em",
                      backgroundColor: "#231e8f",
                      color: "white",
                    }}
                    icon={<LeftOutlined />}
                  />
                </Tooltip>
              </Col>
              <Col>
                {" "}
                <Typography.Title level={3}> Kembali</Typography.Title>{" "}
              </Col>
            </Row>
          </Col>
        </Row>

        <Card>
          <Typography.Title level={3}>Detail Nilai Mahasiswa</Typography.Title>
          <Row></Row>
          <Row justify="start">Nama : {dataNilaiMhs?.student?.name}</Row>
          <Row justify="start">
            Jadwal : {dataNilaiMhs?.schedule?.description}
          </Row>
          <Divider />

          <Typography.Title style={{ marginTop: "1em" }} level={4}>
            {" "}
            Daftar Log{" "}
          </Typography.Title>

          <Collapse style={{ marginTop: "1em" }} defaultActiveKey={["1"]}>
            {dataNilaiMhs?.answer?.map((item, id) => (
              <Panel header={removeHTML(item.text)} key={id}>
                <Row style={{ textAlign: "center" }}>
                  <Col span={8}>Input Mahasiswa</Col>
                  <Col span={4}>Tipe Log</Col>
                  <Col span={6}>Timer</Col>
                  <Col span={6}>Jawaban Benar</Col>
                </Row>
                {item?.LogSessionStudents.map((itemLog) => {
                  console.log(itemLog);
                  return (
                    <Card>
                      <Row
                        gutter={10}
                        style={{ marginTop: "1em", textAlign: "center" }}
                      >
                        <Col span={8}>{itemLog.answer}</Col>
                        <Col span={4}>{itemLog.type}</Col>
                        <Col span={6}>{itemLog.timer}</Col>
                        {itemLog.type !== "move" ? (
                          <Col span={6}>
                            {itemLog.is_equal ? (
                              <div>
                                <CheckCircleOutlined
                                  style={{ color: "green", fontSize: "2em" }}
                                />
                                <div>Correct</div>
                              </div>
                            ) : (
                              <div>
                                <CloseCircleOutlined
                                  style={{ color: "red", fontSize: "2em" }}
                                />
                                <div>False</div>
                              </div>
                            )}
                          </Col>
                        ) : (
                          <Col span={6}>
                            <CodeOutlined style={{ fontSize: "2em" }} />
                            <div>Process</div>
                          </Col>
                        )}
                      </Row>
                    </Card>
                  );
                })}
              </Panel>
            ))}
          </Collapse>
        </Card>

        {isDataNilaiLoaded ? (
          <Typography.Title level={2}></Typography.Title>
        ) : (
          <Skeleton
            active
            paragraph={false}
            title={{ width: "20vw" }}
            style={{ marginBottom: "1em" }}
          />
        )}
      </PageLayout>
    </>
  );
};

export default PreviewNilaiTiapKelas;
