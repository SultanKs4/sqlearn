import { React, useState, useEffect } from "react";
import Head from "next/head";
import {
  Skeleton,
  Typography,
  Row,
  Col,
  Button,
  Card,
  Alert,
  Avatar,
  List,
  Spin
} from "antd";

import { mockKelasDiajar } from "../../utils/remote-data/dosen/NilaiMahasiswaCRUD";
import PageLayout from "../../components/PageLayout";
import ListComponent from "../../components/List";
import ModalCustom from "../../components/Modal";
import SearchBar from "../../components/SearchBar";

const mockNilaiMhs = [
  {
    nama: "Muhammad Ilham Adhim",
    avgNilai: 88,
    avgDurasi: 25.4,
    jumlahLatihanDikerjakan: 20
  },
  {
    nama: "Sultan A",
    avgNilai: 88,
    avgDurasi: 25.4,
    jumlahLatihanDikerjakan: 20
  },
  {
    nama: "Ilham Rizky",
    avgNilai: 88,
    avgDurasi: 25.4,
    jumlahLatihanDikerjakan: 20
  }
];

function HalamanNilai() {
  const [data, setData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [modalRole, setModalRole] = useState("");
  const [modalText, setModalText] = useState("");

  const handleToggleModal = () => setIsModalVisible(true);

  const previewNilaiMhs = nilaiMhsObj => {
    setModalRole("preview");
    handleToggleModal();
    setModalText(
      `Nilai Rata rata ${nilaiMhsObj.nama} adalah ${nilaiMhsObj.avgNilai}`
    );
  };

  useEffect(() => {
    mockKelasDiajar(1).then(item => {
      setData(item);
      setIsDataLoaded(true);
    });
  }, []);

  return (
    <>
      <Head>
        <title>SQLearn | Dosen - Rekap Nilai </title>
      </Head>
      <PageLayout role="dosen">
        <Row justify="space-between">
          <Col>
            <Typography.Title level={2}>Rekap Nilai </Typography.Title>
          </Col>
        </Row>

        {/* Content asli... */}

        <ModalCustom
          role={modalRole}
          entity="Nilai Mahasiswa"
          visible={isModalVisible}
          setVisible={setIsModalVisible}
          confirmLoading={isModalLoading}
          setConfirmLoading={setIsModalLoading}
          modalText={modalText}
          setModalText={setModalText}
        />

        {isDataLoaded ? (
          <SearchBar
            dataSource={data}
            searchKey="name"
            role="kelas"
            isSearching={isSearching}
            setIsSearching={setIsSearching}
            setSearchResult={setSearchResult}
          />
        ) : (
          <Spin active />
        )}

        {isDataLoaded ? (
          <List
            itemLayout="horizontal"
            dataSource={isSearching ? searchResult : data}
            renderItem={item => (
              <Card style={{ marginBottom: "1em" }}>
                <Typography.Title level={3}> {item.name} </Typography.Title>
                <ListComponent
                  isLoading={!isDataLoaded}
                  dataSource={mockNilaiMhs}
                  role={"lihat-nilai"}
                  previewDetailNilai={previewNilaiMhs}
                />
              </Card>
            )}
          />
        ) : (
          <Skeleton active paragraph="4" avatar />
        )}
      </PageLayout>
    </>
  );
}

export default HalamanNilai;
