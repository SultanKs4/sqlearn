import { React, useState } from "react";

import Head from "next/head";
import PageLayout from "../../components/PageLayout";

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
  ConsoleSqlOutlined,
  SearchOutlined,
  EditOutlined,
  FieldTimeOutlined,
  DeleteOutlined
} from "@ant-design/icons";

import ModalCustom from "../../components/Modal";

import { getHours } from "../../utils/common";

const mockStudiKasus = [
  {
    nama: "Studi Kasus A",
    jumlahSoal: 5,
    durasi: 120
  },
  {
    nama: "Studi Kasus B",
    jumlahSoal: 5,
    durasi: 120
  },
  {
    nama: "Studi Kasus C",
    jumlahSoal: 5,
    durasi: 120
  }
];

function StudiKasus() {
  const [data, setData] = useState(mockStudiKasus);
  const [isDataLoaded, setDataLoaded] = useState(false);

  const [currentStudiKasus, setCurrentStudiKasus] = useState({});

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [modalRole, setModalRole] = useState("");
  const [modalText, setModalText] = useState("");

  const [isAlertActive, setIsAlertActive] = useState(true);
  // ? Mock alert status dan message
  const [alertStatus, setAlertStatus] = useState("success");
  const [alertMessage, setAlertMessage] = useState("Alert muncul");

  const handleToggleModal = () => setIsModalVisible(true);
  const handleToggleAlert = () => setIsAlertActive(true);

  const previewStudiKasus = studiKasusObj => {
    setModalRole("preview");
    handleToggleModal();
    setModalText(`Ini  ${studiKasusObj.nama}`);
  };

  const tambahStudiKasus = () => {
    setModalRole("tambah");
    handleToggleModal();

    // Mungkin ini nanti dibagian modal
    // TODO : Call POST API request dari StudiKasusCRUD.js
    // setCurrentStudiKasus(StudiKasusDariForm)
    // setAlertMessage(`DatastudiKasus ${currentStudiKasus.nama} berhasil ditambahkan`);
  };

  const editStudiKasus = studiKasusObj => {
    setModalRole("edit");
    setCurrentStudiKasus(studiKasusObj);
    handleToggleModal();
    setModalText(`Ini  ${studiKasusObj.nama}`);

    // Mungkin ini nanti dibagian modal
    // TODO : Call PUT API request dari StudiKasusCRUD.js
    // ? Mock alert status
    // setAlertStatus("success");
    // setAlertMessage(`DatastudiKasus ${currentStudiKasus.nama} berhasil diubah`);
    // handleToggleAlert();
  };

  const deleteStudiKasus = studiKasusObj => {
    setModalRole("delete");
    setCurrentStudiKasus(studiKasusObj);
    handleToggleModal();
    setModalText(`Ini  ${studiKasusObj.nama}`);

    // Mungkin ini nanti dibagian modal
    // TODO : Call DELETE API request dari StudiKasusCRUD.js
    // ? Mock alert status
    // setAlertStatus("success");
    // setAlertMessage(`DatastudiKasus ${currentStudiKasus.nama} berhasil dihapus`);
    // handleToggleAlert();
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
            entity="Studi Kasus"
            visible={isModalVisible}
            setVisible={setIsModalVisible}
            confirmLoading={isModalLoading}
            setConfirmLoading={setIsModalLoading}
            modalText={modalText}
            setModalText={setModalText}
          />
        )}
        <Card>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Row justify="space-around" style={{ width: "100vw" }}>
                  <Col span={18}>
                    <Row gutter={[50]}>
                      <Col>{item.nama}</Col>
                      <Col>
                        {" "}
                        <ConsoleSqlOutlined
                          style={{ fontSize: "1.5em" }}
                        />{" "}
                        {item.jumlahSoal} Pertanyaan{" "}
                      </Col>
                      <Col>
                        <FieldTimeOutlined style={{ fontSize: "1.5em" }} />{" "}
                        {getHours(item.durasi)} Jam
                      </Col>
                    </Row>
                  </Col>

                  <Col span={6}>
                    <Row gutter={20} justify="end">
                      <Col>
                        <Button
                          type="primary"
                          icon={<SearchOutlined />}
                          size={"medium"}
                          onClick={() => previewStudiKasus(item)}
                        ></Button>
                      </Col>
                      <Col>
                        <Button
                          type="primary"
                          icon={<EditOutlined />}
                          size={"medium"}
                          onClick={() => editStudiKasus(item)}
                        ></Button>
                      </Col>
                      <Col>
                        <Button
                          type="danger"
                          icon={<DeleteOutlined />}
                          size={"medium"}
                          onClick={() => deleteStudiKasus(item)}
                        ></Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </List.Item>
            )}
          />
        </Card>
      </PageLayout>
    </>
  );
}

export default StudiKasus;
