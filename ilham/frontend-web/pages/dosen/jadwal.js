import { React, useEffect, useState } from "react";

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
  Alert,
  Form,
} from "antd";

import {
  PlusCircleOutlined,
  EditTwoTone,
  DeleteTwoTone,
} from "@ant-design/icons";

import ModalCustom from "../../components/Modal";
import FormTambahJadwal from "../../components/dosen/Jadwal/FormTambahJadwal";
import FormEditJadwal from "../../components/dosen/Jadwal/FormEditJadwal";
import FormHapusJadwal from "../../components/dosen/Jadwal/FormHapusJadwal";

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
  };

  const editJadwal = (jadwalObj) => {
    setModalRole("edit");
    setCurrentJadwal(jadwalObj);
    handleToggleModal();
  };

  const deleteJadwal = (jadwalObj) => {
    setModalRole("delete");
    setCurrentJadwal(jadwalObj);
    handleToggleModal();
  };

  const aksiTambahJadwal = (formJadwal) => {
    // TODO : Call POST API request dari JadwalCRUD.js
    // ...
    console.log("Hasil submit tambah", formJadwal);
  };

  const aksiEditJadwal = (formJadwal) => {
    // TODO : Call PUT API request dari JadwalCRUD.js
    // ...
    setAlertMessage(`Data Jadwal ${currentJadwal.nama} berhasil diubah`);
    handleToggleAlert();
    console.log("Data berhasil diedit", formJadwal);
  };

  const aksiDeleteJadwal = (formJadwal) => {
    // TODO : Call DELETE API request dari JadwalCRUD.js
    // ...
    setAlertMessage(`Data Jadwal ${currentJadwal.nama} berhasil dihapus`);
    handleToggleAlert();
    console.log("Data terhapus", formJadwal);
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
            modalContent={
              modalRole === "tambah" ? (
                <FormTambahJadwal
                  handleSubmit={aksiTambahJadwal}
                  setVisible={setIsModalVisible}
                  setCurrentJadwal={setCurrentJadwal}
                />
              ) : modalRole === "edit" ? (
                <FormEditJadwal
                  handleSubmit={aksiEditJadwal}
                  setVisible={setIsModalVisible}
                  setCurrentJadwal={setCurrentJadwal}
                />
              ) : (
                <FormHapusJadwal
                  handleSubmit={aksiDeleteJadwal}
                  setVisible={setIsModalVisible}
                  setCurrentJadwal={setCurrentJadwal}
                />
              )
            }
            setModalText={setModalText}
          />
        )}

        {/* Content asli... */}
      </PageLayout>
    </>
  );
}

export default Jadwal;
