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

function Jadwal() {
  const [currentJadwal, setCurrentJadwal] = useState({});

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

  const tambahJadwal = () => {
    setModalRole("tambah");
    handleToggleModal();

    // Mungkin ini nanti dibagian modal
    // TODO : Call POST API request dari JadwalCRUD.js
    // setCurrentJadwal(JadwalDariForm)
    // setAlertMessage(`Data Jadwal ${currentJadwal.nama} berhasil ditambahkan`);
  };

  const editJadwal = jadwalObj => {
    setModalRole("edit");
    setCurrentJadwal(jadwalObj);
    handleToggleModal();

    // Mungkin ini nanti dibagian modal
    // TODO : Call PUT API request dari JadwalCRUD.js
    // ? Mock alert status
    // setAlertStatus("success");
    // setAlertMessage(`Data Jadwal ${currentJadwal.nama} berhasil diubah`);
    // handleToggleAlert();
  };

  const deleteJadwal = jadwalObj => {
    setModalRole("delete");
    setCurrentJadwal(jadwalObj);
    handleToggleModal();

    // Mungkin ini nanti dibagian modal
    // TODO : Call DELETE API request dari JadwalCRUD.js
    // ? Mock alert status
    // setAlertStatus("success");
    // setAlertMessage(`Data Jadwal ${currentJadwal.nama} berhasil dihapus`);
    // handleToggleAlert();
  };

  return (
    <>
      <Head>
        <title>SQLearn | Dosen - Jadwal </title>
      </Head>
      <PageLayout role="dosen">
        <Row justify="space-between">
          <Col>
            <Typography.Title level={2}>Jadwal </Typography.Title>
          </Col>
          <Col>
            <Button type="primary" onClick={tambahJadwal}>
              Tambah Jadwal <PlusCircleOutlined />
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
            entity="Jadwal"
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

export default Jadwal;
