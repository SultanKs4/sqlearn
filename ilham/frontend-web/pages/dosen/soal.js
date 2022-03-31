import { React, useCallback, useEffect, useState } from "react";

import Head from "next/head";
import PageLayout from "../../components/PageLayout";

import { Typography, Row, Col, Button, Alert, Radio, message } from "antd";

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

  useEffect(() => {
    fetchDataSoal();
  }, [session]);

  const fetchDataSoal = useCallback(() => {
    if (session !== undefined)
      getSoal(session?.user?.tokenJWT).then((res) => {
        setDataSoal(res.data);
        setIsDataLoaded(true);
        // formatToArray(res.data[0].answer);
      });
  }, [session]);

  const handleToggleModal = (state = isModalVisible) =>
    setIsModalVisible((prev) => state || !prev);

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
    // ? Close-ended udah bisa
    postSoal(session?.user?.tokenJWT, formSoal)
      .then(() => {
        handleToggleModal(false);
        message.success(`Data Pertanyaan berhasil ditambahkan`);
      })
      .then(() => fetchDataSoal())
      .catch((err) => message.error(`Data Pertanyaan gagal ditambahkan`));
  };

  const aksiEditSoal = (formSoal) => {
    console.log("formSoal", formSoal);
    // updateSoal(session?.user?.tokenJWT, formSoal.id)
    //   .then(() => {
    //     handleToggleModal(false);
    //     message.success(`Data Pertanyaan berhasil diubah`);
    //   })
    //   .then(() => fetchDataSoal())
    //   .catch((err) => message.error(`Data Pertanyaan gagal diubah`));
  };

  const aksiDeleteSoal = (formSoal) => {
    console.log("formSoal", formSoal);

    deleteSoal(session?.user?.tokenJWT, formSoal.id)
      .then(() => {
        handleToggleModal(false);
        message.success(`Data Pertanyaan berhasil dihapus`);
      })
      .then(() => fetchDataSoal())
      .catch((err) => message.error(`Data Pertanyaan gagal dihapus`));
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
