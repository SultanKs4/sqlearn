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
  Alert
} from "antd";

import {
  PlusCircleOutlined,
  EditTwoTone,
  DeleteTwoTone
} from "@ant-design/icons";

import ModalCustom from "../../components/Modal";

function DaftarKelas() {
  const [dataKelas, setDataKelas] = useState([]);
  const [isDataKelasLoaded, setIsDataKelasLoaded] = useState(false);

  const [currentKelas, setCurrentKelas] = useState({});

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [modalRole, setModalRole] = useState("");
  const [modalText, setModalText] = useState("");

  const [isAlertActive, setIsAlertActive] = useState(true);
  // ? Mock alert status dan message
  const [alertStatus, setAlertStatus] = useState("success");
  const [alertMessage, setAlertMessage] = useState("Alert muncul");

  useEffect(() => {
    getKelas(1).then(data => {
      setIsDataKelasLoaded(true);
      setDataKelas(data);
    });
  }, []);

  const handleToggleModal = () => setIsModalVisible(true);
  const handleToggleAlert = () => setIsAlertActive(true);

  const tambahKelas = () => {
    setModalRole("tambah");
    handleToggleModal();

    // Mungkin ini nanti dibagian modal
    // TODO : Call POST API request dari KelasCRUD.js
    // setCurrentKelas(kelasDariForm)
    // setAlertMessage(`Data Kelas ${currentKelas.nama} berhasil ditambahkan`);
  };

  const editKelas = kelasObj => {
    setModalRole("edit");
    setCurrentKelas(kelasObj);
    handleToggleModal();

    // Mungkin ini nanti dibagian modal
    // TODO : Call PUT API request dari KelasCRUD.js
    // ? Mock alert status
    // setAlertStatus("success");
    // setAlertMessage(`Data Kelas ${currentKelas.nama} berhasil diubah`);
    // handleToggleAlert();
  };

  const deleteKelas = kelasObj => {
    setModalRole("delete");
    setCurrentKelas(kelasObj);
    handleToggleModal();

    // Mungkin ini nanti dibagian modal
    // TODO : Call DELETE API request dari KelasCRUD.js
    // ? Mock alert status
    // setAlertStatus("success");
    // setAlertMessage(`Data Kelas ${currentKelas.nama} berhasil dihapus`);
    // handleToggleAlert();
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

        {isModalVisible && (
          <ModalCustom
            role={modalRole}
            entity="Kelas"
            visible={isModalVisible}
            setVisible={setIsModalVisible}
            confirmLoading={isModalLoading}
            setConfirmLoading={setIsModalLoading}
            modalText={modalText}
            setModalText={setModalText}
          />
        )}

        {isDataKelasLoaded ? (
          dataKelas.length > 0 ? (
            <List
              grid={{ gutter: 16, column: 4 }}
              dataSource={dataKelas}
              renderItem={item => (
                <List.Item>
                  <Card>
                    <Row>
                      <Col flex="1">{item.name}</Col>
                      <Col>
                        <Button>
                          <EditTwoTone twoToneColor="#52c41a" />
                        </Button>
                      </Col>
                      <Col>
                        <Button>
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
