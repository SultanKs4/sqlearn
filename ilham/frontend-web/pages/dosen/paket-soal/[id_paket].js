import Head from "next/head";

import {
  Skeleton,
  Typography,
  Row,
  Col,
  Button,
  List,
  Card,
  Alert,
  Popover,
  Tooltip,
} from "antd";

import { LeftOutlined, PlusCircleOutlined } from "@ant-design/icons";

import PageLayout from "../../../components/PageLayout";
import ModalCustom from "../../../components/Modal";
import { mockGetPaketSoal } from "../../../utils/remote-data/dosen/PaketSoalCRUD";
import ListComponent from "../../../components/List";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FormPilihSoal from "../../../components/dosen/Soal/FormPilihSoal";
import FormEditSoal from "../../../components/dosen/Soal/FormEditSoal";
import FormHapusSoal from "../../../components/dosen/Soal/FormHapusSoal";
import FormEditPilihSoal from "../../../components/dosen/Soal/FormEditPiihSoal";

function PreviewPaket() {
  const router = useRouter();

  const [dataPaket, setDataPaket] = useState({});
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const [currentSoal, setCurrentSoal] = useState({});

  const [formObj, setFormObj] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [modalRole, setModalRole] = useState("");
  const [modalText, setModalText] = useState("");

  const [isAlertActive, setIsAlertActive] = useState(true);
  // ? Mock alert status dan message
  const [alertStatus, setAlertStatus] = useState("success");
  const [alertMessage, setAlertMessage] = useState("Alert muncul");

  const handleToggleModal = () => setIsModalVisible((prev) => !prev);
  const handleToggleAlert = () => setIsAlertActive(true);

  useEffect(() => {
    mockGetPaketSoal().then((response) => {
      setDataPaket(
        response?.data?.find(
          (item) => parseInt(item.id_paket) === parseInt(router.query.id_paket)
        )
      );
      setIsDataLoaded(true);
    });
  }, []);

  const tambahSoal = () => {
    setModalRole("tambah");
    handleToggleModal();
  };

  const editPilihSoal = (soalObj) => {
    console.log(soalObj);
    setModalRole("edit");
    setCurrentSoal(soalObj);
    handleToggleModal();
  };

  const deleteSoal = (soalObj) => {
    setModalRole("delete");
    setCurrentSoal(soalObj);
    handleToggleModal();
  };

  const aksiTambahSoal = (formSoal) => {
    // TODO : Call POST API request dari SoalCRUD.js
    // ...
    handleToggleModal();
    handleToggleAlert();

    setAlertMessage(`Data ${formSoal.nama} berhasil ditambahkan`);

    console.log("Hasil submit tambah", formSoal);
  };

  const aksiEditSoal = (formSoal) => {
    // TODO : Call DELETE API request dari SoalCRUD.js
    // ...
    handleToggleModal();
    setAlertMessage(`Data ${formSoal.nama} berhasil dihapus`);
    handleToggleAlert();

    console.log("Data terhapus", formSoal);
  };

  const aksiDeleteSoal = (formSoal) => {
    // TODO : Call DELETE API request dari SoalCRUD.js
    // ...
    handleToggleModal();
    setAlertMessage(`Data ${formSoal.nama} berhasil dihapus`);
    handleToggleAlert();

    console.log("Data terhapus", formSoal);
  };
  return (
    <>
      <Head>
        <title>SQLearn | Dosen - Paket Paket</title>
      </Head>
      <PageLayout role="dosen">
        <Row justify="space-between">
          <Col>
            <Row gutter={30}>
              <Col>
                <Tooltip title="Kembali" placement="bottom">
                  <Button
                    onClick={() => router.push("/dosen/paket-soal")}
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
                {isDataLoaded ? (
                  <Typography.Title level={2}>
                    {dataPaket.nama}
                  </Typography.Title>
                ) : (
                  <Skeleton
                    active
                    paragraph={false}
                    title={{ width: "20vw" }}
                    style={{ marginBottom: "1em" }}
                  />
                )}
              </Col>
            </Row>
          </Col>
          <Col>
            <Button type="primary" onClick={tambahSoal}>
              Tambah Soal <PlusCircleOutlined />
            </Button>
          </Col>
        </Row>
        {isAlertActive && (
          <Alert
            message={alertMessage}
            type={alertStatus}
            closable
            showIcon
            banner
            style={{ marginBottom: "1em" }}
          />
        )}

        <ModalCustom
          role={modalRole}
          entity={`Soal untuk ${dataPaket?.nama}`}
          visible={isModalVisible}
          setVisible={setIsModalVisible}
          confirmLoading={isModalLoading}
          setConfirmLoading={setIsModalLoading}
          setModalText={setModalText}
          modalContent={
            modalRole === "tambah" ? (
              <FormPilihSoal
                handleSubmit={aksiTambahSoal}
                setVisible={setIsModalVisible}
                setFormObj={setFormObj}
              />
            ) : modalRole === "edit" ? (
              <FormEditPilihSoal
                handleSubmit={aksiEditSoal}
                setVisible={setIsModalVisible}
                currentSoal={currentSoal}
              />
            ) : (
              <FormHapusSoal
                handleSubmit={aksiDeleteSoal}
                setVisible={setIsModalVisible}
                currentSoal={currentSoal}
              />
            )
          }
        />
        {/* Content asli */}
        <ListComponent
          isLoading={!isDataLoaded}
          dataSource={dataPaket?.pertanyaan}
          role={"soal-tiap-paket-dosen"}
          editPilihSoal={editPilihSoal}
          deleteSoal={deleteSoal}
        />
      </PageLayout>
    </>
  );
}

export default PreviewPaket;
