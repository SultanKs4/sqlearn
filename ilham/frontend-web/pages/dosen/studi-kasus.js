import { React, useEffect, useState } from "react";

import Head from "next/head";
import PageLayout from "../../components/PageLayout";

import { Typography, Row, Col, Button, Card, Alert } from "antd";

import { PlusCircleOutlined } from "@ant-design/icons";

import ModalCustom from "../../components/Modal";

import ListComponent from "../../components/List";
import FormHapusStudiKasus from "../../components/dosen/StudiKasus/FormHapusStudiKasus";
import FormTambahStudiKasus from "../../components/dosen/StudiKasus/FormTambahStudiKasus";
import PreviewStudiKasus from "../../components/dosen/StudiKasus/PreviewStudiKasus";
import { mockGetAllStudiKasus } from "../../utils/remote-data/dosen/StudiKasus";

function StudiKasus() {
  const [data, setData] = useState([]);
  const [isDataLoaded, setDataLoaded] = useState(false);

  const [formObj, setFormObj] = useState({});
  const [currentStudiKasus, setCurrentStudiKasus] = useState({});

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [modalRole, setModalRole] = useState("");
  const [modalText, setModalText] = useState("");

  const [isAlertActive, setIsAlertActive] = useState(true);

  // ? Mock alert status dan message
  const [alertStatus, setAlertStatus] = useState("success");
  const [alertMessage, setAlertMessage] = useState("Alert muncul");

  useEffect(() => {
    mockGetAllStudiKasus().then((response) => {
      setData(response.data);
      setDataLoaded(true);
    });
  }, []);

  const handleToggleModal = () => setIsModalVisible((prev) => !prev);
  const handleToggleAlert = () => setIsAlertActive(true);

  const previewStudiKasus = (studiKasusObj) => {
    setCurrentStudiKasus(studiKasusObj);
    setModalRole("preview");
    handleToggleModal();
  };

  const tambahStudiKasus = () => {
    setModalRole("tambah");
    handleToggleModal();
  };

  const editStudiKasus = (studiKasusObj) => {
    setModalRole("edit");
    setCurrentStudiKasus(studiKasusObj);
    handleToggleModal();
  };

  const deleteStudiKasus = (studiKasusObj) => {
    setModalRole("delete");
    setCurrentStudiKasus(studiKasusObj);
    handleToggleModal();
  };

  const aksiTambahStudiKasus = (formStudiKasus) => {
    // TODO : Call POST API request dari StudiKasusCRUD.js
    // ...
    handleToggleModal();
    handleToggleAlert();

    setAlertMessage(
      `Data ${formStudiKasus.studi_kasus_nama} berhasil ditambahkan`
    );

    console.log("Hasil submit tambah", formStudiKasus);
  };

  const aksiDeleteStudiKasus = (formStudiKasus) => {
    // TODO : Call DELETE API request dari StudiKasusCRUD.js
    // ...
    handleToggleModal();
    setAlertMessage(`Data ${formStudiKasus.studi_kasus_nama} berhasil dihapus`);
    handleToggleAlert();

    console.log("Data terhapus", formStudiKasus);
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

        {isAlertActive ? (
          <Alert
            message={alertMessage}
            type={alertStatus}
            closable
            showIcon
            banner
            style={{ marginBottom: "1em" }}
          />
        ) : null}

        <ModalCustom
          role={modalRole}
          entity="Studi Kasus"
          visible={isModalVisible}
          setVisible={setIsModalVisible}
          confirmLoading={isModalLoading}
          setConfirmLoading={setIsModalLoading}
          setModalText={setModalText}
          modalContent={
            modalRole === "tambah" ? (
              <FormTambahStudiKasus
                handleSubmit={aksiTambahStudiKasus}
                setVisible={setIsModalVisible}
                setFormObj={setFormObj}
              />
            ) : modalRole === "preview" ? (
              <PreviewStudiKasus currentStudiKasus={currentStudiKasus} />
            ) : (
              <FormHapusStudiKasus
                handleSubmit={aksiDeleteStudiKasus}
                setVisible={setIsModalVisible}
                currentStudiKasus={currentStudiKasus}
              />
            )
          }
        />

        <Card>
          <ListComponent
            isLoading={!isDataLoaded}
            dataSource={data}
            role={"studi-kasus"}
            previewStudiKasus={previewStudiKasus}
            editStudiKasus={editStudiKasus}
            deleteStudiKasus={deleteStudiKasus}
          />
        </Card>
      </PageLayout>
    </>
  );
}

export default StudiKasus;
