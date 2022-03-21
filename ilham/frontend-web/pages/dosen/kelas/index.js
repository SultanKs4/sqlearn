import { React, useState, useEffect, useCallback } from "react";

import Head from "next/head";
import {
  deleteKelas,
  getKelas,
  postKelas,
  updateKelas,
} from "../../../utils/remote-data/dosen/KelasCRUD";
import { Typography, Row, Col, Button, Alert } from "antd";

import { PlusCircleOutlined } from "@ant-design/icons";

import ModalCustom from "../../../components/Modal";
import FormTambahKelas from "../../../components/dosen/Kelas/FormTambahKelas";
import FormHapusKelas from "../../../components/dosen/Kelas/FormHapusKelas";
import FormEditKelas from "../../../components/dosen/Kelas/FormEditKelas";
import ListComponent from "../../../components/List";
import PageLayout from "../../../components/PageLayout";
import { useSession } from "next-auth/react";

function DaftarKelas() {
  const { data: session } = useSession();

  const [dataKelas, setDataKelas] = useState([]);
  const [isDataKelasLoaded, setIsDataKelasLoaded] = useState(false);

  const [currentKelas, setCurrentKelas] = useState({});

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [modalRole, setModalRole] = useState("");
  const [modalText, setModalText] = useState("");

  const [isAlertActive, setIsAlertActive] = useState(false);
  // ? Mock alert status dan message
  const [alertStatus, setAlertStatus] = useState("success");
  const [alertMessage, setAlertMessage] = useState("Alert muncul");

  useEffect(() => {
    fetchDataKelas();
  }, [session]);

  const fetchDataKelas = useCallback(() => {
    if (session !== undefined)
      getKelas(session?.user?.tokenJWT)
        .then((response) => {
          console.log(response.data);
          setDataKelas(response.data);
          setIsDataKelasLoaded(true);
        })
        .catch(() => console.log("Fetch Data Kelas gagal"));
  }, [session, dataKelas]);

  const handleToggleModal = (state = isModalVisible) =>
    setIsModalVisible((prev) => state || !prev);

  const handleToggleAlert = (state = isAlertActive) =>
    setIsAlertActive((prev) => state || !prev);

  const tambahKelas = () => {
    setModalRole("tambah");
    handleToggleModal();
  };

  const displayModalEditKelas = (kelasObj) => {
    console.log("Selected, ", kelasObj);
    setModalRole("edit");
    setCurrentKelas(kelasObj);
    handleToggleModal();
  };

  const displayModalDeleteKelas = (kelasObj) => {
    setModalRole("delete");
    setCurrentKelas(kelasObj);
    console.log(kelasObj);
    handleToggleModal();
  };

  const aksiTambahKelas = (formKelas) => {
    console.log(formKelas, "ini formKelas");
    postKelas(session?.user?.tokenJWT, formKelas)
      .then(() => {
        handleToggleAlert();
        setTimeout(() => handleToggleAlert(false), 5000);
        handleToggleModal(false);
        setAlertMessage(`Data ${formKelas.name} berhasil ditambahkan`);
      })
      .then(() => fetchDataKelas())
      .catch((err) => console.error(err));
  };

  const aksiEditKelas = (formKelas) => {
    updateKelas(session?.user?.tokenJWT, formKelas, currentKelas?.id)
      .then(() => {
        handleToggleAlert(true);
        handleToggleModal(false);
        setAlertMessage(`Data Kelas ${formKelas.name} berhasil diubah`);
        console.log("Data berhasil diedit", formKelas);
        setTimeout(() => handleToggleAlert(false), 5000);
      })
      .then(() => fetchDataKelas())
      .catch((err) => console.error(err));
  };

  const aksiDeleteKelas = (kelasObj) => {
    deleteKelas(session?.user?.tokenJWT, kelasObj?.id)
      .then(() => {
        handleToggleAlert();
        handleToggleModal(false);
        setAlertMessage(`Data Kelas ${kelasObj.name} berhasil dihapus`);
        setTimeout(() => handleToggleAlert(false), 5000);
      })
      // Fetch Data lagi ketika setelah di delete
      .then(() => fetchDataKelas())
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Head>
        <title>SQLearn | Dosen - Daftar Kelas </title>
      </Head>
      <PageLayout role="dosen">
        <Row justify="space-between">
          <Col>
            <Typography.Title level={2}>Daftar Kelas </Typography.Title>
          </Col>
          <Col>
            <Button type="primary" onClick={tambahKelas}>
              Tambah Kelas <PlusCircleOutlined />
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
          entity="Kelas"
          visible={isModalVisible}
          setVisible={setIsModalVisible}
          confirmLoading={isModalLoading}
          setConfirmLoading={setIsModalLoading}
          modalText={modalText}
          setModalText={setModalText}
          modalContent={
            modalRole === "tambah" ? (
              <FormTambahKelas
                handleSubmit={aksiTambahKelas}
                setVisible={setIsModalVisible}
              />
            ) : modalRole === "edit" ? (
              <FormEditKelas
                handleSubmit={aksiEditKelas}
                setVisible={setIsModalVisible}
                currentKelas={currentKelas}
              />
            ) : (
              <FormHapusKelas
                handleSubmit={aksiDeleteKelas}
                setVisible={setIsModalVisible}
                currentKelas={currentKelas}
              />
            )
          }
        />

        <ListComponent
          isLoading={!isDataKelasLoaded}
          role="list-kelas-dosen"
          displayModalEditKelas={displayModalEditKelas}
          displayModalDeleteKelas={displayModalDeleteKelas}
          dataSource={dataKelas}
        />
      </PageLayout>
    </>
  );
}

export default DaftarKelas;
