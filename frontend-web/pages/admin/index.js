// ? Ini daftar-dosen

import { React, useState, useEffect, useCallback } from "react";

import Head from "next/head";
import { Card, Typography, Row, Col, Button, message } from "antd";
import PageLayout from "../../components/PageLayout";
import ModalCustom from "../../components/Modal";
import FormTambahDosen from "../../components/admin/AturDosen/FormTambahDosen";
import ListComponent from "../../components/List";

import { PlusCircleOutlined } from "@ant-design/icons";
import FormEditDosen from "../../components/admin/AturDosen/FormEditDosen";
import FormHapusDosen from "../../components/admin/AturDosen/FormHapusDosen";
import {
  deleteUser,
  getDosen,
  postUser,
  updateUser,
} from "../../utils/remote-data/admin/DataUser";
import { useSession } from "next-auth/react";

function DaftarDosen() {
  const { data: session } = useSession();
  const [currentDosen, setCurrentDosen] = useState({});

  const [dataDosen, setDataDosen] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [modalRole, setModalRole] = useState("");

  const handleToggleModal = () => setIsModalVisible((prev) => !prev);

  const fetchDataDosen = useCallback(() => {
    if (session !== undefined)
      getDosen(session?.user?.tokenJWT).then((res) => {
        setDataDosen(res?.data);
        setIsDataLoaded(true);
      });
  }, [session]);

  useEffect(() => {
    fetchDataDosen();
  }, [fetchDataDosen]);

  const tambahDosen = () => {
    setModalRole("tambah");
    handleToggleModal();
  };

  const editDosen = (dosenObj) => {
    setModalRole("edit");
    setCurrentDosen(dosenObj);
    handleToggleModal();
  };

  const deleteDosen = (dosenObj) => {
    setModalRole("delete");
    setCurrentDosen(dosenObj);
    handleToggleModal();
  };

  const aksiTambahDosen = (formDosen) => {
    postUser(session?.user?.tokenJWT, formDosen)
      .then((res) => {
        message.success("Berhasil menambahkan dosen");
        fetchDataDosen();
      })
      .catch(() => message.error("Gagal menambahkan dosen"));
  };

  const aksiEditDosen = (formDosen) => {
    updateUser(session?.user?.tokenJWT, formDosen, currentDosen?.id)
      .then((res) => {
        message.success("Berhasil mengubah dosen");
        fetchDataDosen();
      })
      .catch(() => message.error("Gagal mengubah dosen"));
  };

  const aksiDeleteDosen = (formDosen) => {
    deleteUser(session?.user?.tokenJWT, currentDosen?.id)
      .then((res) => {
        message.success("Berhasil menghapus dosen");
        fetchDataDosen();
      })
      .catch(() => message.error("Gagal menghapus dosen"));
  };

  return (
    <>
      <Head>
        <title>SQLearn | Admin - Daftar Dosen </title>
      </Head>
      <PageLayout role="admin">
        <Card>
          <Row justify="space-between">
            <Typography.Title level={3} style={{ marginBottom: "1em" }}>
              Daftar Dosen
            </Typography.Title>
            <Col>
              <Button type="primary" onClick={tambahDosen}>
                Tambah Dosen <PlusCircleOutlined />
              </Button>
            </Col>
          </Row>

          {isModalVisible && (
            <ModalCustom
              role={modalRole}
              entity="Dosen"
              visible={isModalVisible}
              setVisible={setIsModalVisible}
              modalContent={
                modalRole === "tambah" ? (
                  <FormTambahDosen
                    handleSubmit={aksiTambahDosen}
                    setVisible={setIsModalVisible}
                  />
                ) : modalRole === "edit" ? (
                  <FormEditDosen
                    handleSubmit={aksiEditDosen}
                    setVisible={setIsModalVisible}
                    currentDosen={currentDosen}
                  />
                ) : (
                  <FormHapusDosen
                    handleSubmit={aksiDeleteDosen}
                    setVisible={setIsModalVisible}
                    currentDosen={currentDosen}
                  />
                )
              }
            />
          )}

          {/* Content Asli */}
          <ListComponent
            dataSource={dataDosen}
            isLoading={!isDataLoaded}
            role="admin-data-dosen"
            editDosen={editDosen}
            deleteDosen={deleteDosen}
          />
        </Card>
      </PageLayout>
    </>
  );
}

export default DaftarDosen;
