import Head from "next/head";

import {
  Skeleton,
  Typography,
  Row,
  Col,
  Button,
  Alert,
  Tooltip,
  message,
  Card,
  Collapse,
  Divider,
} from "antd";

import { LeftOutlined } from "@ant-design/icons";

import PageLayout from "../../../../components/PageLayout";
import ListComponent from "../../../../components/List";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  getNilaiMhsByID,
  mockGetNilaiTiapKelas,
  mockKelasDiajar,
} from "../../../../utils/remote-data/dosen/NilaiMahasiswaCRUD";
import ModalCustom from "../../../../components/Modal";
import PreviewLogMahasiswa from "../../../../components/dosen/NilaiMhs/PreviewLogMahasiswa";
import { useSession } from "next-auth/react";
import { removeHTML } from "../../../../utils/common";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function PreviewNilaiTiapKelas() {
  const { Panel } = Collapse;

  const { data: session } = useSession();
  const router = useRouter();

  const [dataNilaiMhs, setDataNilaiMhs] = useState({});
  const [isDataNilaiLoaded, setisDataNilaiLoaded] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [modalRole, setModalRole] = useState("");
  const [modalText, setModalText] = useState("");

  const handleToggleModal = () => setIsModalVisible((prev) => !prev);

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
                  <Col span={8}>Tipe Log</Col>
                  <Col span={8}>Timer</Col>
                </Row>
                {item?.LogSessionStudents.map((itemLog) => (
                  <Card>
                    <Row
                      gutter={10}
                      style={{ marginTop: "1em", textAlign: "center" }}
                    >
                      <Col span={8}>{itemLog.answer}</Col>
                      <Col span={8}>{itemLog.type}</Col>
                      <Col span={8}>{itemLog.timer}</Col>
                    </Row>
                  </Card>
                ))}
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
}

export default PreviewNilaiTiapKelas;
