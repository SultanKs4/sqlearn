import { React, useEffect, useState } from "react";

import Head from "next/head";
import PageLayout from "../../components/PageLayout";

import { Typography, Row, Col, Button, Alert, Radio } from "antd";

import { PlusCircleOutlined } from "@ant-design/icons";

import ModalCustom from "../../components/Modal";
import FormEditSoal from "../../components/dosen/Soal/FormEditSoal";
import FormHapusSoal from "../../components/dosen/Soal/FormHapusSoal";
import { getSoal } from "../../utils/remote-data/dosen/SoalCRUD";
import ListComponent from "../../components/List";
import FormTambahSoal from "../../components/dosen/Soal/FormTambahSoal";
import RadioFilterCategory from "../../components/RadioFilterCategory";

function HalamanSoal() {
  const [formObj, setFormObj] = useState({});

  const [currentSoal, setCurrentSoal] = useState({});

  const [dataSoal, setDataSoal] = useState([]);
  const [soalFiltered, setSoalFiltered] = useState([]);

  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [modalRole, setModalRole] = useState("");
  const [modalText, setModalText] = useState("");

  const [isAlertActive, setIsAlertActive] = useState(false);
  // ? Mock alert status dan message
  const [alertStatus, setAlertStatus] = useState("success");
  const [alertMessage, setAlertMessage] = useState("Alert muncul");

  useEffect(() => {
    getSoal().then((response) => {
      console.log(response.data);
      setDataSoal(response.data);
      setIsDataLoaded(true);
    });
  }, []);

  const handleToggleModal = () => setIsModalVisible((prev) => !prev);
  const handleToggleAlert = () => setIsAlertActive((prev) => !prev);

  const tambahSoal = () => {
    setModalRole("tambah");
    handleToggleModal();

    // Mungkin ini nanti dibagian modal
    // TODO : Call POST API request dari SoalCRUD.js
    // setCurrentSoal(SoalDariForm)
    // setAlertMessage(`Data Soal ${currentSoal.nama} berhasil ditambahkan`);
  };

  const editSoal = (soalObj) => {
    setModalRole("edit");
    setCurrentSoal(soalObj);
    handleToggleModal();

    // Mungkin ini nanti dibagian modal
    // TODO : Call PUT API request dari SoalCRUD.js
    // ? Mock alert status
    // setAlertStatus("success");
    // setAlertMessage(`Data Soal ${currentSoal.nama} berhasil diubah`);
    // handleToggleAlert();
  };

  const deleteSoal = (soalObj) => {
    setModalRole("delete");
    setCurrentSoal(soalObj);
    handleToggleModal();

    // Mungkin ini nanti dibagian modal
    // TODO : Call DELETE API request dari SoalCRUD.js
    // ? Mock alert status
    // setAlertStatus("success");
    // setAlertMessage(`Data Soal ${currentSoal.nama} berhasil dihapus`);
    // handleToggleAlert();
  };

  const aksiTambahSoal = (formSoal) => {
    // TODO : Call POST API request dari SoalCRUD.js
    // ...
    handleToggleModal();
    handleToggleAlert();

    setAlertMessage(`Data berhasil ditambahkan`);

    console.log("Hasil submit tambah", formSoal);
  };

  const aksiEditSoal = (formSoal) => {
    // TODO : Call DELETE API request dari SoalCRUD.js
    // ...
    handleToggleModal();
    setAlertMessage(`Data  berhasil diubah`);
    handleToggleAlert();

    console.log("Data berhasil diubah", formSoal);
  };

  const aksiDeleteSoal = (formSoal) => {
    // TODO : Call DELETE API request dari SoalCRUD.js
    // ...
    handleToggleModal();
    setAlertMessage(`Data  berhasil dihapus`);
    handleToggleAlert();

    console.log("Data terhapus", formSoal);
  };

  return (
    <>
      <Head>
        <title>SQLearn | Dosen - Soal </title>
      </Head>
      <PageLayout role="dosen">
        <Row justify="space-between">
          <Col>
            <Typography.Title level={2}>Soal </Typography.Title>
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

        {isModalVisible && (
          <ModalCustom
            role={modalRole}
            entity="Soal"
            visible={isModalVisible}
            setVisible={setIsModalVisible}
            confirmLoading={isModalLoading}
            setConfirmLoading={setIsModalLoading}
            modalText={modalText}
            setModalText={setModalText}
            modalContent={
              modalRole === "tambah" ? (
                <FormTambahSoal
                  handleSubmit={aksiTambahSoal}
                  setVisible={setIsModalVisible}
                  setFormObj={setFormObj}
                />
              ) : modalRole === "edit" ? (
                <FormEditSoal
                  handleSubmit={aksiEditSoal}
                  setVisible={setIsModalVisible}
                  setFormObj={setFormObj}
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
        )}

        <RadioFilterCategory
          data={dataSoal}
          setIsFilterActive={setIsFilterActive}
          setEntityFiltered={setSoalFiltered}
        />

        {/* Content asli... */}
        <ListComponent
          showDetail
          isLoading={!isDataLoaded}
          dataSource={isFilterActive ? soalFiltered : dataSoal}
          role={"data-soal-dosen"}
          editSoal={editSoal}
          deleteSoal={deleteSoal}
        />
      </PageLayout>
    </>
  );
}

export default HalamanSoal;
