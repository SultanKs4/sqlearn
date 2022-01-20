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
  Radio,
  Divider,
} from "antd";

import {
  PlusCircleOutlined,
  EditTwoTone,
  DeleteTwoTone,
} from "@ant-design/icons";

import ModalCustom from "../../components/Modal";
import FormEditSoal from "../../components/dosen/Soal/FormEditSoal";
import FormHapusSoal from "../../components/dosen/Soal/FormHapusSoal";
import { getSoal } from "../../utils/remote-data/dosen/SoalCRUD";
import ListComponent from "../../components/List";
import FormTambahSoal from "../../components/dosen/Soal/FormTambahSoal";

function HalamanSoal() {
  const [formObj, setFormObj] = useState({});

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
    getSoal().then((response) => {
      setDataSoal(response.data);
      setIsDataLoaded(true);
    });
  }, []);

  const handleToggleModal = () => setIsModalVisible((prev) => !prev);
  const handleToggleAlert = () => setIsAlertActive((prev) => !prev);

  const tambahSoal = () => {
    setModalRole("tambah");
    handleToggleModal();

    // Mungkin ini nanti dibagian modal
    // TODO : Call POST API request dari SoalCRUD.js
    // setCurrentSoal(SoalDariForm)
    // setAlertMessage(`Data Soal ${currentSoal.nama} berhasil ditambahkan`);
  };

  const editSoal = (soalObj) => {
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

  const deleteSoal = (soalObj) => {
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

  const aksiTambahSoal = (formSoal) => {
    // TODO : Call POST API request dari SoalCRUD.js
    // ...
    handleToggleModal();
    handleToggleAlert();

    setAlertMessage(`Data ${formSoal.nama_soal} berhasil ditambahkan`);

    console.log("Hasil submit tambah", formSoal);
  };

  const aksiEditSoal = (formSoal) => {
    // TODO : Call DELETE API request dari SoalCRUD.js
    // ...
    handleToggleModal();
    setAlertMessage(`Data ${formSoal.nama_soal} berhasil diubah`);
    handleToggleAlert();

    console.log("Data berhasil diubah", formSoal);
  };

  const aksiDeleteSoal = (formSoal) => {
    // TODO : Call DELETE API request dari SoalCRUD.js
    // ...
    handleToggleModal();
    setAlertMessage(`Data ${formSoal.nama} berhasil dihapus`);
    handleToggleAlert();

    console.log("Data terhapus", formSoal);
  };

  const filterCategory = (e) => {
    e.target.value === "Semua"
      ? setIsFilterActive(false)
      : setIsFilterActive(true);

    console.log(e.target.value);
    setSoalFiltered(
      dataSoal.filter((item) => {
        if (e.target.value === "Tanpa Kategori") return item?.kategori === "-";
        else
          return item?.kategori?.toLowerCase() === e.target.value.toLowerCase();
      })
    );
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
            modalContent={
              modalRole === "tambah" ? (
                <FormTambahSoal
                  handleSubmit={aksiTambahSoal}
                  setVisible={setIsModalVisible}
                  setFormObj={setFormObj}
                />
              ) : modalRole === "edit" ? (
                <FormEditSoal
                  handleSubmit={aksiEditSoal}
                  setVisible={setIsModalVisible}
                  setFormObj={setFormObj}
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
        <Row style={{ marginBottom: "1em" }} justify="space-between" gutter={8}>
          <Col>
            {" "}
            <Typography.Title level={4} children={<>Pilih Kategori </>} />{" "}
          </Col>
          <Col>
            <Radio.Group
              defaultValue="Semua"
              buttonStyle="solid"
              onChange={(e) => filterCategory(e)}
            >
              <Row justify="center" gutter={8}>
                <Col>
                  <Radio.Button value="Semua">Semua</Radio.Button>
                </Col>
                <Col>
                  <Radio.Button value="Close-Ended">Close-Ended</Radio.Button>
                </Col>
                <Col>
                  <Radio.Button value="Open-Ended">Open-Ended</Radio.Button>
                </Col>
                <Col>
                  <Radio.Button value="Tanpa Kategori">
                    Tanpa Kategori
                  </Radio.Button>
                </Col>
              </Row>
            </Radio.Group>
          </Col>
        </Row>

        {/* Content asli... */}
        <ListComponent
          isLoading={!isDataLoaded}
          dataSource={isFilterActive ? soalFiltered : dataSoal}
          role={"data-soal-dosen"}
          editSoal={editSoal}
          deleteSoal={deleteSoal}
        />
      </PageLayout>
    </>
  );
}

export default HalamanSoal;
