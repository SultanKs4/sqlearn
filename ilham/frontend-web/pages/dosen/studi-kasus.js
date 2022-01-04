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

function StudiKasus() {
  const [currentStudiKasus, setCurrentStudiKasus] = useState({});

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

  const tambahStudiKasus = () => {
    setModalRole("tambah");
    handleToggleModal();

    // Mungkin ini nanti dibagian modal
    // TODO : Call POST API request dari StudiKasusCRUD.js
    // setCurrentStudiKasus(StudiKasusDariForm)
    // setAlertMessage(`DatastudiKasus ${currentStudiKasus.nama} berhasil ditambahkan`);
  };

  const editStudiKasus = studiKasusObj => {
    setModalRole("edit");
    setCurrentStudiKasus(studiKasusObj);
    handleToggleModal();

    // Mungkin ini nanti dibagian modal
    // TODO : Call PUT API request dari StudiKasusCRUD.js
    // ? Mock alert status
    // setAlertStatus("success");
    // setAlertMessage(`DatastudiKasus ${currentStudiKasus.nama} berhasil diubah`);
    // handleToggleAlert();
  };

  const deleteStudiKasus = studiKasusObj => {
    setModalRole("delete");
    setCurrentStudiKasus(studiKasusObj);
    handleToggleModal();

    // Mungkin ini nanti dibagian modal
    // TODO : Call DELETE API request dari StudiKasusCRUD.js
    // ? Mock alert status
    // setAlertStatus("success");
    // setAlertMessage(`DatastudiKasus ${currentStudiKasus.nama} berhasil dihapus`);
    // handleToggleAlert();
  };

  return (
    <>
      <Head>
        <title>SQLearn | Dosen - Studi Kasus </title>
      </Head>
      <PageLayout role="dosen">
        <Row justify="space-between">
          <Col>
            <Typography.Title level={2}>Studi Kasus </Typography.Title>
          </Col>
          <Col>
            <Button type="primary" onClick={tambahStudiKasus}>
              Tambah Studi Kasus <PlusCircleOutlined />
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
            entity="Studi Kasus"
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

export default StudiKasus;
