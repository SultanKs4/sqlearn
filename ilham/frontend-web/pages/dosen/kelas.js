import { React, useState, useEffect } from "react";

import Head from "next/head";
import PageLayout from "../../components/PageLayout";
import EmptyData from "../../components/EmptyData";
import { getKelas } from "../../utils/remote-data/dosen/KelasCRUD";
import {
  Skeleton,
  Typography,
  Row,
  Col,
  Button,
  List,
  Card,
  Alert,
} from "antd";

import {
  PlusCircleOutlined,
  EditTwoTone,
  DeleteTwoTone,
} from "@ant-design/icons";

import ModalCustom from "../../components/Modal";
import FormTambahKelas from "../../components/dosen/Kelas/FormTambahKelas";
import FormHapusKelas from "../../components/dosen/Kelas/FormHapusKelas";
import FormEditKelas from "../../components/dosen/Kelas/FormEditKelas";

function DaftarKelas() {
  const [dataKelas, setDataKelas] = useState([]);
  const [isDataKelasLoaded, setIsDataKelasLoaded] = useState(false);

  const [currentKelas, setCurrentKelas] = useState({});
  const [formObj, setFormObj] = useState({});

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [modalRole, setModalRole] = useState("");
  const [modalText, setModalText] = useState("");

  const [isAlertActive, setIsAlertActive] = useState(true);
  // ? Mock alert status dan message
  const [alertStatus, setAlertStatus] = useState("success");
  const [alertMessage, setAlertMessage] = useState("Alert muncul");

  useEffect(() => {
    getKelas(1).then((data) => {
      setIsDataKelasLoaded(true);
      setDataKelas(data);
    });
  }, []);

  const handleToggleModal = () => setIsModalVisible((prev) => !prev);
  const handleToggleAlert = () => setIsAlertActive(true);

  const tambahKelas = () => {
    setModalRole("tambah");
    handleToggleModal();
  };

  const editKelas = (kelasObj) => {
    console.log("Selected, ", kelasObj);
    setModalRole("edit");
    setCurrentKelas(kelasObj);
    handleToggleModal();
  };

  const deleteKelas = (kelasObj) => {
    setModalRole("delete");
    setCurrentKelas(kelasObj);
    handleToggleModal();
  };

  const aksiTambahKelas = (formKelas) => {
    // TODO : Call POST API request dari KelasCRUD.js
    // ...
    setAlertMessage(`Data ${formKelas.name} berhasil ditambahkan`);
    console.log("Hasil submit tambah", formKelas);
  };

  const aksiEditKelas = (formKelas) => {
    // TODO : Call PUT API request dari KelasCRUD.js
    // ...
    handleToggleModal();
    setAlertMessage(`Data Kelas ${formKelas.name} berhasil diubah`);
    handleToggleAlert();
    console.log("Data berhasil diedit", formKelas);
  };

  const aksiDeleteKelas = (formKelas) => {
    // TODO : Call DELETE API request dari KelasCRUD.js
    // ...
    handleToggleModal();
    setAlertMessage(`Data Kelas ${formKelas.name} berhasil dihapus`);
    handleToggleAlert();
    console.log("Data terhapus", formKelas);
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
            <Button type="primary" onClick={tambahKelas}>
              Tambah Kelas <PlusCircleOutlined />
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

        <ModalCustom
          role={modalRole}
          entity="Kelas"
          visible={isModalVisible}
          setVisible={setIsModalVisible}
          confirmLoading={isModalLoading}
          setConfirmLoading={setIsModalLoading}
          modalText={modalText}
          setModalText={setModalText}
          modalContent={
            modalRole === "tambah" ? (
              <FormTambahKelas
                handleSubmit={aksiTambahKelas}
                setVisible={setIsModalVisible}
                setFormObj={setFormObj}
              />
            ) : modalRole === "edit" ? (
              <FormEditKelas
                handleSubmit={aksiEditKelas}
                setVisible={setIsModalVisible}
                setFormObj={setFormObj}
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

        {isDataKelasLoaded ? (
          dataKelas.length > 0 ? (
            <List
              grid={{ gutter: 16, column: 4 }}
              dataSource={dataKelas}
              renderItem={(item) => (
                <List.Item>
                  <Card>
                    <Row>
                      <Col flex="1">{item.name}</Col>
                      <Col>
                        <Button onClick={() => editKelas(item)}>
                          <EditTwoTone twoToneColor="#52c41a" />
                        </Button>
                      </Col>
                      <Col>
                        <Button onClick={() => deleteKelas(item)}>
                          <DeleteTwoTone twoToneColor="#eb2f96" />
                        </Button>
                      </Col>
                    </Row>
                  </Card>
                </List.Item>
              )}
            />
          ) : (
            <EmptyData description="Tidak ada kelas" />
          )
        ) : (
          <Skeleton active={true} />
        )}
      </PageLayout>
    </>
  );
}

export default DaftarKelas;
