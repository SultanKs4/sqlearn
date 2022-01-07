import { React, useState, useEffect } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import PageLayout from "../../components/PageLayout";
import EmptyData from "../../components/EmptyData";
import ModalCustom from "../../components/Modal";

import { Typography, Row, Col, Divider, Card, Tabs } from "antd";

import {} from "@ant-design/icons";

import ProfilMahasiswa from "../../components/mahasiswa/ProfilMahasiswa";
import StudiKasusBeranda from "../../components/mahasiswa/StudiKasusBeranda";
import { mockGetAllPractices } from "../../utils/remote-data/mahasiswa/Beranda";
import ListComponent from "../../components/List";

const { TabPane } = Tabs;

function Beranda() {
  const router = useRouter();

  const [dataProfile, setDataProfile] = useState([]);
  const [dataLatihan, setDataLatihan] = useState([]);
  const [dataFilteredLatihan, setDataFilteredLatihan] = useState([]);
  const [dataStudiKasus, setDataStudiKasus] = useState([]);

  const [activeFilterLatihan, setActiveFilterLatihan] = useState("tersedia");

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

  const handleKerjakanLatihan = id => {
    router.push(`/mahasiswa/soal/${id}`);
  };

  // ? key = status : "tersedia" || "selesai"
  const switchTabPractice = key => {
    let status = key;
    // TODO : Kalau sudah bikin di mockapi ini diuncomment
    setActiveFilterLatihan(status);
    setDataFilteredLatihan(dataLatihan.filter(item => item.status === status));
  };

  useEffect(() => {
    // TODO : Consume Data Profil (State Loading dan Data)

    // TODO : Consume Data Latihan (State Loading dan Data)
    mockGetAllPractices().then(responseData => {
      setDataLatihan(responseData.data);
      setIsDataLatihanLoaded(true);
      setDataFilteredLatihan(
        responseData.data.filter(item => item.status === activeFilterLatihan)
      );
    });

    // TODO : Consume Data Studi Kasus (State Loading dan Data)
  }, []);

  useEffect(() => {
    console.log(dataFilteredLatihan);
  }, [dataFilteredLatihan, dataLatihan]);

  return (
    <>
      <Head>
        <title>SQLearn | Mahasiswa - Beranda </title>
      </Head>
      <PageLayout role="mahasiswa">
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

        <Row gutter={[10, 10]}>
          <Col sm={24} md={10} lg={10}>
            <ProfilMahasiswa />
          </Col>
          <Col sm={24} md={14} lg={14}>
            <Card style={{ height: "60vh" }}>
              <Typography.Title level={2}> Latihan </Typography.Title>
              <Tabs defaultActiveKey="tersedia" onChange={switchTabPractice}>
                <TabPane tab="Tersedia" key="tersedia">
                  {dataFilteredLatihan.length > 0 ? (
                    <ListComponent
                      dataSource={dataFilteredLatihan}
                      isLoading={!isDataLatihanLoaded}
                      role="sesi-latihan-mahasiswa"
                      kerjakanLatihan={handleKerjakanLatihan}
                    />
                  ) : (
                    <EmptyData
                      description="Tidak ada latihan tersedia"
                      withAction={false}
                    />
                  )}
                </TabPane>
                <TabPane tab="Selesai" key="selesai">
                  {dataFilteredLatihan.length > 0 ? (
                    <ListComponent
                      dataSource={dataFilteredLatihan}
                      isLoading={!isDataLatihanLoaded}
                      role="sesi-latihan-mahasiswa"
                      kerjakanLatihan={handleKerjakanLatihan}
                    />
                  ) : (
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
