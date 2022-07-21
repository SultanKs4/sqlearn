import { React, useCallback, useEffect, useState } from "react";

import Head from "next/head";
import PageLayout from "../../components/PageLayout";

import { Typography, Row, Col, Button, Card, Alert, message } from "antd";

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
import { removeHTML } from "../../utils/common";

function StudiKasus() {
  const { data: session } = useSession();

  const [data, setData] = useState([]);
  const [isDataLoaded, setDataLoaded] = useState(false);

  const [currentStudiKasus, setCurrentStudiKasus] = useState({});

  const [modalRole, setModalRole] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

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
    postStudiKasus(session?.user?.tokenJWT, formStudiKasus)
      .then(() => {
        handleToggleModal(false);
        message.success(
          `Data Pertanyaan 
            ${formStudiKasus.name}
          berhasil ditambahkan`
        );
      })
      .then(() => fetchDataStudiKasus())
      .catch((err) =>
        message.error(
          `Data Pertanyaan ${removeHTML(formStudiKasus.name)} gagal ditambahkan`
        )
      );
  };

  const aksiDeleteStudiKasus = (formStudiKasus) => {
    deleteStudiKasus(session?.user?.tokenJWT, formStudiKasus.id)
      .then(() => {
        handleToggleModal(false);
        message.success(
          `Data Pertanyaan ${removeHTML(formStudiKasus.name)} berhasil dihapus`
        );
      })
      .then(() => fetchDataStudiKasus())
      .catch((err) =>
        message.error(
          `Data Pertanyaan ${removeHTML(formStudiKasus.name)} gagal dihapus`
        )
      );
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

        <ModalCustom
          role={modalRole}
          entity="Studi Kasus"
          visible={isModalVisible}
          setVisible={setIsModalVisible}
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
