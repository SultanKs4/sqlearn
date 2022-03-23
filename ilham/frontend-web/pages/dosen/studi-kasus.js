import { React, useCallback, useEffect, useState } from "react";

import Head from "next/head";
import PageLayout from "../../components/PageLayout";

import { Typography, Row, Col, Button, Card, Alert } from "antd";

import { PlusCircleOutlined } from "@ant-design/icons";

import ModalCustom from "../../components/Modal";

import ListComponent from "../../components/List";
import FormHapusStudiKasus from "../../components/dosen/StudiKasus/FormHapusStudiKasus";
import FormTambahStudiKasus from "../../components/dosen/StudiKasus/FormTambahStudiKasus";
import PreviewStudiKasus from "../../components/dosen/StudiKasus/PreviewStudiKasus";
import {
  deleteStudiKasus,
  getStudiKasus,
  postStudiKasus,
} from "../../utils/remote-data/dosen/StudiKasus";
import { useSession } from "next-auth/react";

function StudiKasus() {
  const { data: session } = useSession();

  const [data, setData] = useState([]);
  const [isDataLoaded, setDataLoaded] = useState(false);

  const [currentStudiKasus, setCurrentStudiKasus] = useState({});

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [modalRole, setModalRole] = useState("");
  const [modalText, setModalText] = useState("");
  const [isAlertActive, setIsAlertActive] = useState(false);

  // ? Mock alert status dan message
  const [alertStatus, setAlertStatus] = useState("success");
  const [alertMessage, setAlertMessage] = useState("Alert muncul");

  useEffect(() => {
    fetchDataStudiKasus();
  }, [session]);

  const fetchDataStudiKasus = useCallback(() => {
    if (session !== undefined)
      getStudiKasus(session?.user?.tokenJWT).then((response) => {
        setData(response.data);
        setDataLoaded(true);
      });
  }, [session, data]);

  const handleToggleModal = (state = isModalVisible) =>
    setIsModalVisible((prev) => state || !prev);

  const handleToggleAlert = (state = isAlertActive) =>
    setIsAlertActive((prev) => state || !prev);

  const previewStudiKasus = (studiKasusObj) => {
    setCurrentStudiKasus(studiKasusObj);
    setModalRole("preview");
    handleToggleModal();
  };

  const tambahStudiKasus = () => {
    setModalRole("tambah");
    handleToggleModal();
  };

  const displayModalDeleteStudiKasus = (studiKasusObj) => {
    setModalRole("delete");
    setCurrentStudiKasus(studiKasusObj);
    handleToggleModal();
  };

  const aksiTambahStudiKasus = (formStudiKasus) => {
    console.log("formStudiKasus", formStudiKasus);
    // postStudiKasus(session?.user?.tokenJWT, formStudiKasus.id)
    //   .then(() => {
    //     handleToggleAlert(true);
    //     handleToggleModal(false);
    //     setAlertMessage(
    //       `Data Pertanyaan ${removeHTML(formStudiKasus.name)} berhasil dihapus`
    //     );
    //     setTimeout(() => handleToggleAlert(false), 5000);
    //   })
    //   .then(() => fetchDataStudiKasus())
    //   .catch((err) => console.log(err));
  };

  const aksiDeleteStudiKasus = (formStudiKasus) => {
    // ! (Bug BE) : Untuk remove studi kasus, responsenya error 500 tapi studi kasusnya ke-delete
    console.log("formStudiKasus", formStudiKasus);
    deleteStudiKasus(session?.user?.tokenJWT, formStudiKasus.id)
      .then(() => {
        handleToggleAlert(true);
        handleToggleModal(false);
        setAlertMessage(
          `Data Pertanyaan ${removeHTML(formStudiKasus.name)} berhasil dihapus`
        );
        setTimeout(() => handleToggleAlert(false), 5000);
      })
      .then(() => fetchDataStudiKasus())
      .catch((err) => console.log(err));
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
          modalText={modalText}
          setModalText={setModalText}
          modalContent={
            modalRole === "tambah" ? (
              <FormTambahStudiKasus
                handleSubmit={aksiTambahStudiKasus}
                setVisible={setIsModalVisible}
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

        <ListComponent
          isLoading={!isDataLoaded}
          dataSource={data}
          role={"studi-kasus"}
          previewStudiKasus={previewStudiKasus}
          deleteStudiKasus={displayModalDeleteStudiKasus}
        />
      </PageLayout>
    </>
  );
}

export default StudiKasus;
