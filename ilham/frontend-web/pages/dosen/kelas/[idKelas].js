import { React, useCallback, useEffect, useState } from "react";

import Head from "next/head";
import { Typography, Row, Col, Button, Skeleton, Tooltip, Alert } from "antd";

import { PlusCircleOutlined, LeftOutlined } from "@ant-design/icons";
import PageLayout from "../../../components/PageLayout";
import { getMhsKelasByID } from "../../../utils/remote-data/dosen/KelasCRUD";
import { useRouter } from "next/router";
import ModalCustom from "../../../components/Modal";
import FormTambahMahasiswa from "../../../components/dosen/Kelas/FormTambahMahasiswa";
import FormEditMahasiswa from "../../../components/dosen/Kelas/FormEditMahasiswa";
import ListComponent from "../../../components/List";
import FormHapusMahasiswa from "../../../components/dosen/Kelas/FormHapusMahasiswa";
import {
  deleteMhs,
  mockGetMhsPerKelas,
  postMhs,
} from "../../../utils/remote-data/dosen/MahasiswaCRUD";
import { useSession } from "next-auth/react";

function MahasiswaByID() {
  const { data: session } = useSession();

  const router = useRouter();

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

  useEffect(() => {
    fetchDataMahasiswa();
  }, [session, router.query.idKelas]);

  const fetchDataMahasiswa = useCallback(() => {
    if (session !== undefined)
      getMhsKelasByID(session?.user?.tokenJWT, router.query.idKelas)
        .then((res) => {
          setDataKelas(res.data);
          setIsDataKelasLoaded(true);
          setDataMhsPerKelas(res.data.students);
          setIsDataMhsLoaded(true);
        })
        .catch(() => console.log("Fetch data mahasiswa gagal"));
  }, [session, dataMhsPerKelas]);

  const handleToggleModal = (state = isModalVisible) =>
    setIsModalVisible((prev) => state || !prev);

  const handleToggleAlert = (state = isAlertActive) =>
    setIsAlertActive((prev) => state || !prev);

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
    // ? (Bearer Token, values, idKelas)
    postMhs(session?.user?.tokenJWT, formMahasiswa, router.query.idKelas)
      .then(() => {
        handleToggleAlert();
        handleToggleModal(false);
        setAlertMessage(`Data ${formMahasiswa.name} berhasil ditambahkan`);
        console.log("Hasil submit tambah", formMahasiswa);
        setTimeout(() => handleToggleAlert(false), 5000);
      })
      .then(() => fetchDataMahasiswa())
      .catch((err) => console.log(err));
  };

  // const aksiEditMahasiswa = (formMahasiswa) => {
  //   // TODO : Call PUT API request dari MahasiswaCRUD.js
  //   // ...
  //   handleToggleAlert();
  //   setTimeout(() => handleToggleAlert(false), 5000);
  //   handleToggleModal();
  //   setAlertMessage(
  //     `Data Mahasiswa ${formMahasiswa.nama_mahasiswa} berhasil diubah`
  //   );
  //   handleToggleAlert();
  //   console.log("Data berhasil diedit", formMahasiswa);
  // };

  const aksiDeleteMahasiswa = (formMahasiswa) => {
    deleteMhs(session?.user?.tokenJWT, router.query.idKelas, currentMhs.id)
      .then(() => {
        handleToggleAlert();
        handleToggleModal(false);
        setAlertMessage(
          `Data Mahasiswa ${formMahasiswa.name} berhasil dihapus`
        );
        handleToggleAlert();
        console.log("Data terhapus", formMahasiswa);
        setTimeout(() => handleToggleAlert(false), 5000);
      })
      .then(() => fetchDataMahasiswa())
      .catch((err) => console.log(err));
  };

  return (
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
                  onClick={() => router.push("/dosen/kelas")}
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
                  {`Kelas ${DataKelas?.name}`}{" "}
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
          entity={`Mahasiswa di ${DataKelas?.name}`}
          visible={isModalVisible}
          setVisible={setIsModalVisible}
          confirmLoading={isModalLoading}
          setConfirmLoading={setIsModalLoading}
          modalContent={
            modalRole === "tambah" ? (
              <FormTambahMahasiswa
                handleSubmit={aksiTambahMahasiswa}
                setVisible={setIsModalVisible}
              />
            ) : (
              // ) : modalRole === "edit" ? (
              //   <FormEditMahasiswa
              //     handleSubmit={aksiEditMahasiswa}
              //     setVisible={setIsModalVisible}
              //     setFormObj={setFormObj}
              //     currentMhs={currentMhs}
              //   />
              // )
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
  );
}

export default MahasiswaByID;
