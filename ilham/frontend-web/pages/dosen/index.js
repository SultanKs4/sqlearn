// Ini jadwal latihan oleh dosen

import { React, useCallback, useEffect, useState } from "react";

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
  Radio,
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
import ListComponent from "../../components/List";
import {
  deleteJadwal,
  getJadwal,
  mockGetJadwal,
  postJadwal,
  updateJadwal,
} from "../../utils/remote-data/dosen/JadwalCRUD";
import RadioFilterCategory from "../../components/RadioFilterCategory";
import { useSession } from "next-auth/react";

function Jadwal() {
  const { data: session } = useSession();

  const [currentJadwal, setCurrentJadwal] = useState({});
  const [formObj, setFormObj] = useState({});

  const [dataJadwal, setDataJadwal] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const [jadwalFiltered, setJadwalFiltered] = useState([]);
  const [isFilterActive, setIsFilterActive] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [modalRole, setModalRole] = useState("");
  const [modalText, setModalText] = useState("");

  const [isAlertActive, setIsAlertActive] = useState(false);

  // ? Mock alert status dan message
  const [alertStatus, setAlertStatus] = useState("success");
  const [alertMessage, setAlertMessage] = useState("Alert muncul");

  const handleToggleModal = (state = isModalVisible) =>
    setIsModalVisible((prev) => state || !prev);

  const handleToggleAlert = (state = isAlertActive) =>
    setIsAlertActive((prev) => state || !prev);

  useEffect(() => {
    fetchDataJadwal();
  }, [session]);

  const fetchDataJadwal = useCallback(() => {
    if (session !== undefined)
      getJadwal(session?.user?.tokenJWT).then((res) => {
        setDataJadwal(res?.data);
        setIsDataLoaded(true);
      });
  }, [session, dataJadwal]);

  const tambahJadwal = () => {
    setModalRole("tambah");
    handleToggleModal();
  };

  const displayModalEditJadwal = (jadwalObj) => {
    setModalRole("edit");
    setCurrentJadwal(jadwalObj);
    handleToggleModal();
  };

  const displayModalDeleteJadwal = (jadwalObj) => {
    setModalRole("delete");
    setCurrentJadwal(jadwalObj);
    handleToggleModal();
  };

  const aksiTambahJadwal = (formJadwal) => {
    console.log("formJadwal", formJadwal);
    postJadwal(session?.user?.tokenJWT, formJadwal)
      .then(() => {
        handleToggleAlert(true);
        handleToggleModal(false);
        setAlertMessage(
          `Data jadwal "${formJadwal?.description}" berhasil ditambahkan`
        );
        setTimeout(() => handleToggleAlert(false), 5000);
      })
      .then(() => fetchDataJadwal())
      .catch((err) => console.log(err));
  };

  const aksiEditJadwal = (formJadwal) => {
    console.log("formJadwal", formJadwal);
    updateJadwal(session?.user?.tokenJWT, formJadwal, currentJadwal?.id)
      .then(() => {
        handleToggleAlert(true);
        handleToggleModal(false);
        setAlertMessage(
          `Data jadwal "${formJadwal?.description}" berhasil diubah`
        );
        setTimeout(() => handleToggleAlert(false), 5000);
      })
      .then(() => fetchDataJadwal())
      .catch((err) => console.log(err));
  };

  const aksiDeleteJadwal = (formJadwal) => {
    console.log("formJadwal", formJadwal);
    deleteJadwal(session?.user?.tokenJWT, formJadwal?.id)
      .then(() => {
        handleToggleAlert(true);
        handleToggleModal(false);
        setAlertMessage(
          `Data jadwal ${formJadwal?.description} berhasil dihapus`
        );
        setTimeout(() => handleToggleAlert(false), 5000);
      })
      .then(() => fetchDataJadwal())
      .catch((err) => console.log(err));
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
            onClose={() => handleToggleAlert()}
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
                  setFormObj={setFormObj}
                />
              ) : modalRole === "edit" ? (
                <FormEditJadwal
                  currentJadwal={currentJadwal}
                  handleSubmit={aksiEditJadwal}
                  setVisible={setIsModalVisible}
                  setFormObj={setFormObj}
                />
              ) : (
                <FormHapusJadwal
                  currentJadwal={currentJadwal}
                  handleSubmit={aksiDeleteJadwal}
                  setVisible={setIsModalVisible}
                />
              )
            }
            setModalText={setModalText}
          />
        )}

        <RadioFilterCategory
          data={dataJadwal}
          setIsFilterActive={setIsFilterActive}
          setEntityFiltered={setJadwalFiltered}
        />

        {/* Content asli... */}
        <ListComponent
          isLoading={!isDataLoaded}
          role={"jadwal-dosen"}
          displayModalEditJadwal={displayModalEditJadwal}
          displayModalDeleteJadwal={displayModalDeleteJadwal}
          dataSource={isFilterActive ? jadwalFiltered : dataJadwal}
        />
      </PageLayout>
    </>
  );
}

export default Jadwal;
