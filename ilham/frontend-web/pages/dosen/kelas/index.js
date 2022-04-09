import { React, useState, useEffect, useCallback } from "react";

import Head from "next/head";
import {
  deleteKelas,
  downloadExcelTemplate,
  getKelas,
  postKelas,
  updateKelas,
} from "../../../utils/remote-data/dosen/KelasCRUD";
import { Typography, Row, Col, Button, Alert, message } from "antd";

import {
  PlusCircleOutlined,
  VerticalAlignBottomOutlined,
} from "@ant-design/icons";

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

  const tambahKelas = () => {
    setModalRole("tambah");
    handleToggleModal();
  };

  const displayModalEditKelas = (kelasObj) => {
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
    console.log("formKelas", formKelas);
    postKelas(session?.user?.tokenJWT, formKelas)
      .then(() => {
        handleToggleModal(false);
        message.success(`Data ${formKelas.name} berhasil ditambahkan`);
      })
      .then(() => fetchDataKelas())
      .catch((err) =>
        message.error(`Data ${formKelas.name} gagal ditambahkan`)
      );
  };

  const aksiEditKelas = (formKelas) => {
    updateKelas(session?.user?.tokenJWT, formKelas, currentKelas?.id)
      .then(() => {
        handleToggleModal(false);
        message.success(`Data ${formKelas.name} berhasil diubah`);
      })
      .then(() => fetchDataKelas())
      .catch((err) => message.error(`Data ${formKelas.name} gagal diubah`));
  };

  const aksiDeleteKelas = (kelasObj) => {
    deleteKelas(session?.user?.tokenJWT, kelasObj?.id)
      .then(() => {
        handleToggleModal(false);
        message.success(`Data ${kelasObj.name} berhasil dihapus`);
      })
      .then(() => fetchDataKelas())
      .catch((err) => message.error(`Data ${kelasObj.name} gagal dihapus`));
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
            <Row justify="space-between" gutter={20}>
              <Col>
                <Button
                  style={{ backgroundColor: "green", color: "white" }}
                  onClick={() => downloadExcelTemplate()}
                >
                  Download Template Excel <VerticalAlignBottomOutlined />
                </Button>
              </Col>
              <Col>
                <Button type="primary" onClick={tambahKelas}>
                  Tambah Kelas <PlusCircleOutlined />
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>

        <ModalCustom
          role={modalRole}
          entity="Kelas"
          visible={isModalVisible}
          setVisible={setIsModalVisible}
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
