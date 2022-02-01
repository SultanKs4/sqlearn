import { React, useEffect, useState } from "react";

import Head from "next/head";

import { Typography, Row, Col, Button, Alert } from "antd";

import { PlusCircleOutlined } from "@ant-design/icons";

import PageLayout from "../../../components/PageLayout";
import ModalCustom from "../../../components/Modal";
import { mockGetPaketSoal } from "../../../utils/remote-data/dosen/PaketSoalCRUD";
import ListComponent from "../../../components/List";
import FormTambahPaket from "../../../components/dosen/PaketSoal/FormTambahPaket";
import FormHapusPaket from "../../../components/dosen/PaketSoal/FormHapusPaket";
import { useRouter } from "next/router";
import RadioFilterCategory from "../../../components/RadioFilterCategory";

function PaketSoal() {
  const router = useRouter();

  const [currentPaket, setCurrentPaket] = useState({});
  const [formObj, setFormObj] = useState({});

  const [dataPaket, setDataPaket] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const [paketFiltered, setPaketFiltered] = useState([]);
  const [isFilterActive, setIsFilterActive] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [modalRole, setModalRole] = useState("");
  const [modalText, setModalText] = useState("");

  const [isAlertActive, setIsAlertActive] = useState(false);
  // ? Mock alert status dan message
  const [alertStatus, setAlertStatus] = useState("success");
  const [alertMessage, setAlertMessage] = useState("Alert muncul");

  const handleToggleModal = () => setIsModalVisible((prev) => !prev);
  const handleToggleAlert = () => setIsAlertActive((prev) => !prev);

  useEffect(() => {
    mockGetPaketSoal().then((response) => {
      setDataPaket(response.data);
      setIsDataLoaded(true);
    });
  }, []);

  useEffect(() => {
    console.log(isAlertActive);
  }, [isAlertActive]);

  const previewPaket = (id) => {
    router.push(`/dosen/paket-soal/${id}`);
  };

  const tambahPaket = () => {
    setModalRole("tambah");
    handleToggleModal();
  };

  const deletePaket = (paketObj) => {
    setModalRole("delete");
    setCurrentPaket(paketObj);
    handleToggleModal();
  };

  const aksiTambahPaket = (formPaket) => {
    // TODO : Call POST API request dari PaketSoalCRUD.js
    handleToggleModal();
    handleToggleAlert();
    setAlertMessage(`Data ${formPaket.paket_nama} berhasil ditambahkan`);
    setTimeout(() => handleToggleAlert(false), 5000);
    console.log("Hasil submit tambah", formPaket);
  };

  const aksiDeletePaket = (formPaket) => {
    // TODO : Call DELETE API request dari PaketSoalCRUD.js
    // ...
    handleToggleModal();
    handleToggleAlert();
    setAlertMessage(`Data Paket ${formPaket.nama} berhasil dihapus`);
    setTimeout(() => handleToggleAlert(false), 5000);
    console.log("Data terhapus", formPaket);
  };

  return (
    <>
      <Head>
        <title>SQLearn | Dosen - Paket Paket</title>
      </Head>
      <PageLayout role="dosen">
        <Row justify="space-between">
          <Col>
            <Typography.Title level={2}>Paket Soal</Typography.Title>
          </Col>
          <Col>
            <Button type="primary" onClick={tambahPaket}>
              Tambah Paket <PlusCircleOutlined />
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

        {isModalVisible && (
          <ModalCustom
            role={modalRole}
            entity="Paket Soal"
            visible={isModalVisible}
            setVisible={setIsModalVisible}
            confirmLoading={isModalLoading}
            setConfirmLoading={setIsModalLoading}
            modalText={modalText}
            setModalText={setModalText}
            modalContent={
              modalRole === "tambah" ? (
                <FormTambahPaket
                  handleSubmit={aksiTambahPaket}
                  setVisible={setIsModalVisible}
                  setFormObj={setFormObj}
                />
              ) : (
                <FormHapusPaket
                  handleSubmit={aksiDeletePaket}
                  setVisible={setIsModalVisible}
                  currentPaket={currentPaket}
                />
              )
            }
          />
        )}

        <RadioFilterCategory
          data={dataPaket}
          setIsFilterActive={setIsFilterActive}
          setEntityFiltered={setPaketFiltered}
        />
        {/* Content asli... */}
        <ListComponent
          isLoading={!isDataLoaded}
          dataSource={isFilterActive ? paketFiltered : dataPaket}
          role={"paket-soal-dosen"}
          previewPaket={previewPaket}
          deletePaket={deletePaket}
        />
      </PageLayout>
    </>
  );
}

export default PaketSoal;
