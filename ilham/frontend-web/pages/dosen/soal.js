import { React, useState } from "react";

import Head from "next/head";
import PageLayout from "../../components/PageLayout";

import {
  Skeleton,
  Typography,
  Row,
  Col,
  Button,
  List,
  Card,
  Alert
} from "antd";

import {
  PlusCircleOutlined,
  EditTwoTone,
  DeleteTwoTone
} from "@ant-design/icons";

import ModalCustom from "../../components/Modal";

function HalamanSoal() {
  const [currentSoal, setCurrentSoal] = useState({});

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [modalRole, setModalRole] = useState("");
  const [modalText, setModalText] = useState("");

  const [isAlertActive, setIsAlertActive] = useState(true);
  // ? Mock alert status dan message
  const [alertStatus, setAlertStatus] = useState("success");
  const [alertMessage, setAlertMessage] = useState("Alert muncul");

  const handleToggleModal = () => setIsModalVisible(true);
  const handleToggleAlert = () => setIsAlertActive(true);

  const tambahSoal = () => {
    setModalRole("tambah");
    handleToggleModal();

    // Mungkin ini nanti dibagian modal
    // TODO : Call POST API request dari SoalCRUD.js
    // setCurrentSoal(SoalDariForm)
    // setAlertMessage(`Data Soal ${currentSoal.nama} berhasil ditambahkan`);
  };

  const editSoal = soalObj => {
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

  const deleteSoal = soalObj => {
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
          />
        )}

        {/* Content asli... */}
      </PageLayout>
    </>
  );
}

export default HalamanSoal;
