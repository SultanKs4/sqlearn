import { React, useCallback, useEffect, useState } from "react";

import Head from "next/head";

import { Typography, Row, Col, Button, Alert, message } from "antd";

import { PlusCircleOutlined } from "@ant-design/icons";

import PageLayout from "../../../components/PageLayout";
import ModalCustom from "../../../components/Modal";
import {
  deletePaketSoal,
  getPaketSoal,
  postPaketSoal,
} from "../../../utils/remote-data/dosen/PaketSoalCRUD";
import ListComponent from "../../../components/List";
import FormTambahPaket from "../../../components/dosen/PaketSoal/FormTambahPaket";
import FormHapusPaket from "../../../components/dosen/PaketSoal/FormHapusPaket";
import { useRouter } from "next/router";
import RadioFilterCategory from "../../../components/RadioFilterCategory";
import { useSession } from "next-auth/react";

function PaketSoal() {
  const { data: session } = useSession();

  const router = useRouter();

  const [currentPaket, setCurrentPaket] = useState({});

  const [dataPaket, setDataPaket] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const [paketFiltered, setPaketFiltered] = useState([]);
  const [isFilterActive, setIsFilterActive] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [modalRole, setModalRole] = useState("");
  const [modalText, setModalText] = useState("");

  const handleToggleModal = () => setIsModalVisible((prev) => !prev);

  useEffect(() => {
    fetchDataPaketSoal();
  }, [session]);

  const fetchDataPaketSoal = useCallback(() => {
    if (session !== undefined)
      getPaketSoal(session?.user?.tokenJWT).then((response) => {
        setDataPaket(response.data);
        setIsDataLoaded(true);
      });
  }, [session, dataPaket]);

  const previewPaket = (id) => router.push(`/dosen/paket-soal/${id}`);

  const tambahPaket = () => {
    setModalRole("tambah");
    handleToggleModal();
  };

  const deletePaket = (paketObj) => {
    setModalRole("delete");
    setCurrentPaket(paketObj);
    handleToggleModal();
  };

  const aksiTambahPaket = (formPaket) => {
    postPaketSoal(session?.user?.tokenJWT, formPaket)
      .then(() => {
        handleToggleModal(false);
        message.success(
          `Data Pertanyaan  ${formPaket.description} berhasil ditambahkan`
        );
      })
      .then(() => fetchDataPaketSoal())
      .catch((err) =>
        message.error(
          `Data Pertanyaan  ${formPaket.description} gagal ditambahkan`
        )
      );
  };

  const aksiDeletePaket = (formPaket) => {
    deletePaketSoal(session?.user?.tokenJWT, formPaket?.id)
      .then(() => {
        handleToggleModal(false);
        message.success(
          `Data Pertanyaan  ${formPaket.description} berhasil dihapus`
        );
      })
      .then(() => fetchDataPaketSoal())
      .catch((err) =>
        message.error(`Data Pertanyaan  ${formPaket.description} gagal dihapus`)
      );
  };

  return (
    <>
      <Head>
        <title>SQLearn | Dosen - Paket Paket</title>
      </Head>
      <PageLayout role="dosen">
        <Row justify="space-between">
          <Col>
            <Typography.Title level={2}>Paket Soal</Typography.Title>
          </Col>
          <Col>
            <Button type="primary" onClick={tambahPaket}>
              Tambah Paket <PlusCircleOutlined />
            </Button>
          </Col>
        </Row>

        {isModalVisible && (
          <ModalCustom
            role={modalRole}
            entity="Paket Soal"
            visible={isModalVisible}
            setVisible={setIsModalVisible}
            modalText={modalText}
            modalContent={
              modalRole === "tambah" ? (
                <FormTambahPaket
                  handleSubmit={aksiTambahPaket}
                  setVisible={setIsModalVisible}
                />
              ) : (
                <FormHapusPaket
                  handleSubmit={aksiDeletePaket}
                  setVisible={setIsModalVisible}
                  currentPaket={currentPaket}
                />
              )
            }
          />
        )}

        <RadioFilterCategory
          data={dataPaket}
          setIsFilterActive={setIsFilterActive}
          setEntityFiltered={setPaketFiltered}
        />
        {/* Content asli... */}
        <ListComponent
          isLoading={!isDataLoaded}
          dataSource={isFilterActive ? paketFiltered : dataPaket}
          role={"paket-soal-dosen"}
          previewPaket={previewPaket}
          deletePaket={deletePaket}
        />
      </PageLayout>
    </>
  );
}

export default PaketSoal;
