// ? Ini daftar-dosen

import { React, useState, useEffect } from "react";

import Head from "next/head";
import { Alert, Card, Typography, Row, Col, Button } from "antd";
import PageLayout from "../../components/PageLayout";
import ModalCustom from "../../components/Modal";
import FormTambahDosen from "../../components/admin/AturDosen/FormTambahDosen";
import ListComponent from "../../components/List";

import {
  PlusCircleOutlined,
  EditTwoTone,
  DeleteTwoTone,
} from "@ant-design/icons";
import FormEditDosen from "../../components/admin/AturDosen/FormEditDosen";
import FormHapusDosen from "../../components/admin/AturDosen/FormHapusDosen";
import { mockGetDosen } from "../../utils/remote-data/admin/DataDosen";

function DaftarDosen() {
  const [formObj, setFormObj] = useState({});

  const [currentDosen, setCurrentDosen] = useState({});

  const [dataDosen, setDataDosen] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

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
    // ? Ini mock api datadosen
    mockGetDosen().then((response) => {
      setDataDosen(response.data);
      setIsDataLoaded(true);
    });
  }, []);

  useEffect(() => {
    console.log(isAlertActive);
  }, [isAlertActive]);

  const tambahDosen = () => {
    setModalRole("tambah");
    handleToggleModal();
  };

  const editDosen = (dosenObj) => {
    setModalRole("edit");
    setCurrentDosen(dosenObj);
    handleToggleModal();
  };

  const deleteDosen = (dosenObj) => {
    setModalRole("delete");
    setCurrentDosen(dosenObj);
    handleToggleModal();
  };

  const aksiTambahDosen = (formDosen) => {
    // TODO : Call POST API request dari DosenCRUD.js
    // ...
    handleToggleModal();
    handleToggleAlert();
    setAlertMessage(`Data ${formDosen.nama_dosen} berhasil ditambahkan`);
    setTimeout(() => handleToggleAlert(false), 5000);
    console.log("Hasil submit tambah", formDosen);
  };

  const aksiEditDosen = (formDosen) => {
    // TODO : Call DELETE API request dari DosenCRUD.js
    // ...

    handleToggleModal();
    handleToggleAlert();
    setAlertMessage(`Data ${formDosen.nama_dosen} berhasil diubah`);
    setTimeout(() => handleToggleAlert(false), 5000);
    console.log("Data berhasil diubah", formDosen);
  };

  const aksiDeleteDosen = (formDosen) => {
    // TODO : Call DELETE API request dari DosenCRUD.js
    // ...
    handleToggleModal();
    handleToggleAlert();
    setAlertMessage(`Data ${formDosen.nama_dosen} berhasil dihapus`);
    setTimeout(() => handleToggleAlert(), 5000);
    console.log("Data terhapus", formDosen);
  };

  return (
    <>
      <Head>
        <title>SQLearn | Admin - Daftar Dosen </title>
      </Head>
      <PageLayout role="admin">
        <Card>
          <Row justify="space-between">
            <Typography.Title level={3} style={{ marginBottom: "1em" }}>
              Daftar Dosen
            </Typography.Title>
            <Col>
              <Button type="primary" onClick={tambahDosen}>
                Tambah Dosen <PlusCircleOutlined />
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
              entity="Dosen"
              visible={isModalVisible}
              setVisible={setIsModalVisible}
              modalText={modalText}
              modalContent={
                modalRole === "tambah" ? (
                  <FormTambahDosen
                    handleSubmit={aksiTambahDosen}
                    setVisible={setIsModalVisible}
                    setFormObj={setFormObj}
                  />
                ) : modalRole === "edit" ? (
                  <FormEditDosen
                    handleSubmit={aksiEditDosen}
                    setVisible={setIsModalVisible}
                    setFormObj={setFormObj}
                    currentDosen={currentDosen}
                  />
                ) : (
                  <FormHapusDosen
                    handleSubmit={aksiDeleteDosen}
                    setVisible={setIsModalVisible}
                    currentDosen={currentDosen}
                  />
                )
              }
            />
          )}

          {/* Content Asli */}
          <ListComponent
            dataSource={dataDosen}
            isLoading={!isDataLoaded}
            role="admin-data-dosen"
            editDosen={editDosen}
            deleteDosen={deleteDosen}
          />
        </Card>
      </PageLayout>
    </>
  );
}

export default DaftarDosen;
