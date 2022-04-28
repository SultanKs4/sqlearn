// Ini jadwal latihan oleh dosen

import { React, useCallback, useEffect, useState } from "react";

import Head from "next/head";
import PageLayout from "../../components/PageLayout";
import { Typography, Row, Col, Button, message } from "antd";

import { PlusCircleOutlined } from "@ant-design/icons";

import ModalCustom from "../../components/Modal";
import FormTambahJadwal from "../../components/dosen/Jadwal/FormTambahJadwal";
import FormEditJadwal from "../../components/dosen/Jadwal/FormEditJadwal";
import FormHapusJadwal from "../../components/dosen/Jadwal/FormHapusJadwal";
import ListComponent from "../../components/List";
import {
  deleteJadwal,
  getJadwal,
  postJadwal,
  updateJadwal,
} from "../../utils/remote-data/dosen/JadwalCRUD";
import RadioFilterCategory from "../../components/RadioFilterCategory";
import { useSession } from "next-auth/react";

function Jadwal() {
  const { data: session } = useSession();

  const [currentJadwal, setCurrentJadwal] = useState({});

  const [dataJadwal, setDataJadwal] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const [jadwalFiltered, setJadwalFiltered] = useState([]);
  const [isFilterActive, setIsFilterActive] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [modalRole, setModalRole] = useState("");

  const handleToggleModal = (state = isModalVisible) =>
    setIsModalVisible((prev) => state || !prev);

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
    postJadwal(session?.user?.tokenJWT, formJadwal)
      .then(() => {
        handleToggleModal(false);
        message.success(`Data ${formJadwal.description} berhasil ditambahkan`);
      })
      .then(() => fetchDataJadwal())
      .catch((err) =>
        message.error(`Data ${formJadwal.description} gagal ditambahkan`)
      );
  };

  const aksiEditJadwal = (formJadwal) => {
    updateJadwal(session?.user?.tokenJWT, formJadwal, currentJadwal?.id)
      .then(() => {
        handleToggleModal(false);
        message.success(`Data ${formJadwal.description} berhasil diubah`);
      })
      .then(() => fetchDataJadwal())
      .catch((err) =>
        message.error(`Data ${formJadwal.description} gagal diubah`)
      );
  };

  const aksiDeleteJadwal = (formJadwal) => {
    deleteJadwal(session?.user?.tokenJWT, formJadwal?.id)
      .then(() => {
        handleToggleModal(false);
        message.success(`Data ${formJadwal.description} berhasil dihapus`);
      })
      .then(() => fetchDataJadwal())
      .catch((err) =>
        message.error(`Data ${formJadwal.description} gagal dihapus`)
      );
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

        {isModalVisible && (
          <ModalCustom
            role={modalRole}
            entity="Jadwal"
            visible={isModalVisible}
            setVisible={setIsModalVisible}
            modalContent={
              modalRole === "tambah" ? (
                <FormTambahJadwal
                  handleSubmit={aksiTambahJadwal}
                  setVisible={setIsModalVisible}
                />
              ) : modalRole === "edit" ? (
                <FormEditJadwal
                  currentJadwal={currentJadwal}
                  handleSubmit={aksiEditJadwal}
                  setVisible={setIsModalVisible}
                />
              ) : (
                <FormHapusJadwal
                  currentJadwal={currentJadwal}
                  handleSubmit={aksiDeleteJadwal}
                  setVisible={setIsModalVisible}
                />
              )
            }
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
