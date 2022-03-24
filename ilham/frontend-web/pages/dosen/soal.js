import { React, useCallback, useEffect, useState } from "react";

import Head from "next/head";
import PageLayout from "../../components/PageLayout";

import { Typography, Row, Col, Button, Alert, Radio } from "antd";

import { PlusCircleOutlined } from "@ant-design/icons";

import ModalCustom from "../../components/Modal";
import FormEditSoal from "../../components/dosen/Soal/FormEditSoal";
import FormHapusSoal from "../../components/dosen/Soal/FormHapusSoal";
import {
  deleteSoal,
  getSoal,
  mockGetSoal,
  postSoal,
  updateSoal,
} from "../../utils/remote-data/dosen/SoalCRUD";
import ListComponent from "../../components/List";
import FormTambahSoal from "../../components/dosen/Soal/FormTambahSoal";
import RadioFilterCategory from "../../components/RadioFilterCategory";
import { useSession } from "next-auth/react";
import { formatToArray, removeHTML } from "../../utils/common";

function HalamanSoal() {
  const { data: session } = useSession();

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
    fetchDataSoal();
  }, [session]);

  const fetchDataSoal = useCallback(() => {
    if (session !== undefined)
      getSoal(session?.user?.tokenJWT).then((res) => {
        setDataSoal(res.data);
        setIsDataLoaded(true);
        formatToArray(res.data[0].answer);
      });

    // mockGetSoal().then((res) => {
    //   setDataSoal(res.data);
    //   setIsDataLoaded(true);
    // });
  }, [session]);

  const handleToggleModal = (state = isModalVisible) =>
    setIsModalVisible((prev) => state || !prev);

  const handleToggleAlert = (state = isAlertActive) =>
    setIsAlertActive((prev) => state || !prev);

  const displayModalTambahSoal = () => {
    setModalRole("tambah");
    handleToggleModal();
  };

  const displayModalEditSoal = (soalObj) => {
    setModalRole("edit");
    setCurrentSoal(soalObj);
    handleToggleModal();
  };

  const displayModalDeleteSoal = (soalObj) => {
    setModalRole("delete");
    setCurrentSoal(soalObj);
    handleToggleModal();
  };

  const aksiTambahSoal = (formSoal) => {
    console.log("formSoal", formSoal);
    //  postSoal(session?.user?.tokenJWT, formSoal)
    //  .then(() => {
    //    handleToggleAlert(true);
    //    handleToggleModal(false);
    //    setAlertMessage(`Data ${removeHTML(formSoal.text)} berhasil ditambahkan`);
    //    setTimeout(() => handleToggleAlert(false), 5000);
    //  })
    //  .then(() => fetchDataSoal())
    //  .catch((err) => console.log(err));
  };

  const aksiEditSoal = (formSoal) => {
    console.log("formSoal", formSoal);
    // updateSoal(session?.user?.tokenJWT, formSoal.id)
    //  .then(() => {
    //    handleToggleAlert(true);
    //    handleToggleModal(false);
    //    setAlertMessage(`Data ${removeHTML(formSoal.text)} berhasil diubah`);
    //    setTimeout(() => handleToggleAlert(false), 5000);
    //  })
    //  .then(() => fetchDataSoal())
    //  .catch((err) => console.log(err));
  };

  const aksiDeleteSoal = (formSoal) => {
    // ! (Error BE) : Internal Server Error 500, cannot delete or update a parent row: a foreign key constraint fails
    // TODO : Perlu bikin soal dulu baru bisa test delete

    deleteSoal(session?.user?.tokenJWT, formSoal.id)
      .then(() => {
        handleToggleAlert(true);
        handleToggleModal(false);
        setAlertMessage(
          `Data Pertanyaan ${removeHTML(formSoal.text)} berhasil dihapus`
        );
        setTimeout(() => handleToggleAlert(false), 5000);
      })
      .then(() => fetchDataSoal())
      .catch((err) => console.log(err));
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
            <Button type="primary" onClick={displayModalTambahSoal}>
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
                />
              ) : modalRole === "edit" ? (
                <FormEditSoal
                  handleSubmit={aksiEditSoal}
                  setVisible={setIsModalVisible}
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
          displayModalEditSoal={displayModalEditSoal}
          displayModalDeleteSoal={displayModalDeleteSoal}
        />
      </PageLayout>
    </>
  );
}

export default HalamanSoal;
