import { React, useState, useEffect } from "react";

import Head from "next/head";
import PageLayout from "../../components/PageLayout";
import EmptyData from "../../components/EmptyData";
import ModalCustom from "../../components/Modal";

import {
  Typography,
  Row,
  Col,
  Divider,
  Card,
  Tabs} from "antd";

import {} from "@ant-design/icons";

import ProfilMahasiswa from "../../components/mahasiswa/ProfilMahasiswa";
import StudiKasusBeranda from "../../components/mahasiswa/StudiKasusBeranda";

const { TabPane } = Tabs;

function Beranda() {
  const [dataProfile, setDataProfile] = useState([]);
  const [dataLatihan, setDataLatihan] = useState([]);
  const [dataStudiKasus, setDataStudiKasus] = useState([]);

  const [isDataProfileLoaded, setIsDataProfileLoaded] = useState(false);
  const [isDataLatihanLoaded, setIsDataLatihanLoaded] = useState(false);
  const [isDataStudiKasusLoaded, setIsDataStudiKasusLoaded] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [modalRole, setModalRole] = useState("");
  const [modalText, setModalText] = useState("");

  const handleToggleModal = () => setIsModalVisible(true);

  const previewStudiKasus = studObj => {
    setModalRole("preview");
    handleToggleModal();
    setModalText(`Ini  ${studObj.nama}`);
  };

  // ? status : "done" || "available"
  const switchTabPractice = key => {
    let status = key;
    console.log(status);
    // TODO : Kalau sudah bikin di mockapi ini diuncomment
    //  setDataLatihan(prev=> prev.filter(item => item.status === status))
  };

  useEffect(() => {
    // TODO : Consume Data Profil (State Loading dan Data)
    // TODO : Consume Data Latihan (State Loading dan Data)
    // TODO : Consume Data Studi Kasus (State Loading dan Data)
  });

  return (
    <>
      <Head>
        <title>SQLearn | Mahasiswa - Beranda </title>
      </Head>
      <PageLayout role="mahasiswa">
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

        <Row gutter={[10, 10]}>
          <Col sm={24} md={10} lg={10}>
            <ProfilMahasiswa />
          </Col>
          <Col sm={24} md={14} lg={14}>
            <Card style={{ minHeight: "60vh" }}>
              <Typography.Title level={2}> Latihan </Typography.Title>
              <Tabs defaultActiveKey="1" onChange={switchTabPractice}>
                <TabPane tab="Tersedia" key="available">
                  {dataLatihan.length === 0 && (
                    <EmptyData
                      description="Tidak ada latihan tersedia"
                      withAction={false}
                    />
                  )}
                </TabPane>
                <TabPane tab="Selesai" key="done">
                  {dataLatihan.length === 0 && (
                    <EmptyData
                      description="Tidak ada Latihan yang telah dikerjakan"
                      withAction={true}
                      textAction="Lihat Nilai"
                      toURL="/mahasiswa/lihat-nilai"
                    />
                  )}
                </TabPane>
              </Tabs>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: "1em" }}>
          <Col span={24}>
            <Card style={{ minHeight: "50vh" }}>
              <Typography.Title level={3}>
                Studi Kasus Tersedia
              </Typography.Title>
              <StudiKasusBeranda previewStudiKasus={previewStudiKasus} />
              <Divider />
            </Card>
          </Col>
        </Row>
      </PageLayout>
    </>
  );
}

export default Beranda;
