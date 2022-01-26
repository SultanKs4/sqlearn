import { React, useEffect, useState } from "react";

import Head from "next/head";
import { Typography, Row, Col, Button, Skeleton, Tooltip, Alert } from "antd";

import { PlusCircleOutlined, LeftOutlined } from "@ant-design/icons";
import PageLayout from "../../../components/PageLayout";
import { mockGetKelas } from "../../../utils/remote-data/dosen/KelasCRUD";
import { useRouter } from "next/router";
import ModalCustom from "../../../components/Modal";
import FormTambahMahasiswa from "../../../components/dosen/Kelas/FormTambahMahasiswa";
import FormEditMahasiswa from "../../../components/dosen/Kelas/FormEditMahasiswa";
import ListComponent from "../../../components/List";
import FormHapusMahasiswa from "../../../components/dosen/Kelas/FormHapusMahasiswa";
import { mockGetMhsPerKelas } from "../../../utils/remote-data/dosen/MahasiswaCRUD";

function MahasiswaByID() {
  const router = useRouter();
  const [formObj, setFormObj] = useState({});

  const [DataKelas, setDataKelas] = useState({});
  const [isDataKelasLoaded, setIsDataKelasLoaded] = useState(false);

  const [dataMhsPerKelas, setDataMhsPerKelas] = useState([]);
  const [isDataMhsLoaded, setIsDataMhsLoaded] = useState(false);

  const [currentMhs, setCurrentMhs] = useState({});
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

  const tambahMahasiswa = () => {
    setModalRole("tambah");
    handleToggleModal();
  };

  const editMahasiswa = (MahasiswaObj) => {
    console.log("Selected, ", MahasiswaObj);
    setModalRole("edit");
    setCurrentMhs(MahasiswaObj);
    handleToggleModal();
  };

  const deleteMahasiswa = (MahasiswaObj) => {
    setModalRole("delete");
    setCurrentMhs(MahasiswaObj);
    handleToggleModal();
  };

  const aksiTambahMahasiswa = (formMahasiswa) => {
    // TODO : Call POST API request dari MahasiswaCRUD.js
    // ...
    handleToggleAlert();
    setTimeout(() => handleToggleAlert(false), 5000);
    handleToggleModal();
    setAlertMessage(
      `Data ${formMahasiswa.nama_mahasiswa} berhasil ditambahkan`
    );
    console.log("Hasil submit tambah", formMahasiswa);
  };

  const aksiEditMahasiswa = (formMahasiswa) => {
    // TODO : Call PUT API request dari MahasiswaCRUD.js
    // ...
    handleToggleAlert();
    setTimeout(() => handleToggleAlert(false), 5000);
    handleToggleModal();
    setAlertMessage(
      `Data Mahasiswa ${formMahasiswa.nama_mahasiswa} berhasil diubah`
    );
    handleToggleAlert();
    console.log("Data berhasil diedit", formMahasiswa);
  };

  const aksiDeleteMahasiswa = (formMahasiswa) => {
    // TODO : Call DELETE API request dari MahasiswaCRUD.js
    // ...
    handleToggleAlert();
    setTimeout(() => handleToggleAlert(false), 5000);
    handleToggleModal();
    setAlertMessage(
      `Data Mahasiswa ${formMahasiswa.nama_mahasiswa} berhasil dihapus`
    );
    handleToggleAlert();
    console.log("Data terhapus", formMahasiswa);
  };

  useEffect(() => {
    mockGetKelas(1).then((response) => {
      setDataKelas(
        response.data.find(
          (item) => parseInt(router.query.idKelas) === parseInt(item.id)
        )
      );
      setIsDataKelasLoaded(true);
    });

    mockGetMhsPerKelas(1).then((res) => {
      console.log(res.data);
      setDataMhsPerKelas(res.data);
      setIsDataMhsLoaded(true);
    });
  }, []);

  return (
    <>
      <>
        <Head>
          <title>SQLearn | Dosen - Daftar Mahasiswa </title>
        </Head>
        <PageLayout role="dosen">
          <Row justify="space-between">
            <Row gutter={30}>
              <Col>
                <Tooltip title="Kembali" placement="bottom">
                  <Button
                    onClick={() => router.push("/dosen/Mahasiswa")}
                    style={{
                      marginTop: ".2em",
                      backgroundColor: "#231e8f",
                      color: "white",
                    }}
                    icon={<LeftOutlined />}
                  />
                </Tooltip>
              </Col>
              <Col>
                {isDataKelasLoaded ? (
                  <Typography.Title level={2}>
                    {`Kelas ${DataKelas?.nama}`}{" "}
                  </Typography.Title>
                ) : (
                  <Skeleton
                    active
                    paragraph={false}
                    title={{ width: "20vw" }}
                    style={{ marginBottom: "1em" }}
                  />
                )}
              </Col>
            </Row>

            <Col>
              <Button type="primary" onClick={tambahMahasiswa}>
                Tambah Mahasiswa <PlusCircleOutlined />
              </Button>{" "}
            </Col>
          </Row>

          {/* Content asli... */}

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
            entity={`Mahasiswa di ${DataKelas?.nama}`}
            visible={isModalVisible}
            setVisible={setIsModalVisible}
            confirmLoading={isModalLoading}
            setConfirmLoading={setIsModalLoading}
            modalContent={
              modalRole === "tambah" ? (
                <FormTambahMahasiswa
                  handleSubmit={aksiTambahMahasiswa}
                  setVisible={setIsModalVisible}
                  setFormObj={setFormObj}
                />
              ) : modalRole === "edit" ? (
                <FormEditMahasiswa
                  handleSubmit={aksiEditMahasiswa}
                  setVisible={setIsModalVisible}
                  setFormObj={setFormObj}
                  currentMhs={currentMhs}
                />
              ) : (
                <FormHapusMahasiswa
                  handleSubmit={aksiDeleteMahasiswa}
                  setVisible={setIsModalVisible}
                  currentMhs={currentMhs}
                />
              )
            }
          />

          <ListComponent
            isLoading={!isDataMhsLoaded}
            role="daftar-mahasiswa-per-kelas"
            editMahasiswa={editMahasiswa}
            deleteMahasiswa={deleteMahasiswa}
            dataSource={dataMhsPerKelas}
          />
        </PageLayout>
      </>
    </>
  );
}

export default MahasiswaByID;
