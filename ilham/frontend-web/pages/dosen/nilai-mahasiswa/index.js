import { React, useState, useEffect, useCallback } from "react";
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
  Spin,
  message,
} from "antd";

import { mockKelasDiajar } from "../../../utils/remote-data/dosen/NilaiMahasiswaCRUD";
import PageLayout from "../../../components/PageLayout";
import ListComponent from "../../../components/List";
import ModalCustom from "../../../components/Modal";
import SearchBar from "../../../components/SearchBar";

import { RightOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { getKelas } from "../../../utils/remote-data/dosen/KelasCRUD";

const mockNilaiMhs = [
  {
    nama: "Muhammad Ilham Adhim",
    avgNilai: 88,
    avgDurasi: 25.4,
    jumlahLatihanDikerjakan: 20,
  },
  {
    nama: "Dharma Y",
    avgNilai: 88,
    avgDurasi: 25.4,
    jumlahLatihanDikerjakan: 20,
  },
  {
    nama: "Rasyid M",
    avgNilai: 88,
    avgDurasi: 25.4,
    jumlahLatihanDikerjakan: 20,
  },
  {
    nama: "Sultan A",
    avgNilai: 88,
    avgDurasi: 25.4,
    jumlahLatihanDikerjakan: 20,
  },
  {
    nama: "Ilham Rizky",
    avgNilai: 88,
    avgDurasi: 25.4,
    jumlahLatihanDikerjakan: 20,
  },
];

function HalamanNilai() {
  const router = useRouter();
  const { data: session } = useSession();

  const [data, setData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [modalRole, setModalRole] = useState("");
  const [modalText, setModalText] = useState("");

  const handleToggleModal = () => setIsModalVisible((prev) => !prev);

  const previewNilaiMhs = (nilaiMhsObj) => {
    setModalRole("preview");
    handleToggleModal();
    setModalText(
      `Nilai Rata rata ${nilaiMhsObj.nama} adalah ${nilaiMhsObj.avgNilai}`
    );
  };

  const fetchDataKelas = useCallback(() => {
    if (session !== undefined)
      getKelas(session?.user?.tokenJWT)
        .then((res) => {
          setData(res?.data);
          setIsDataLoaded(true);
        })
        .catch(() => message.error("Terjadi kesalahan fetching data"));
  }, [session]);

  useEffect(() => {
    // mockKelasDiajar().then((response) => {
    //   setData(response.data);
    //   setIsDataLoaded(true);
    // });

    fetchDataKelas();
  }, [session]);

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
            searchKey="nama"
            role="kelas"
            isSearching={isSearching}
            setIsSearching={setIsSearching}
            setSearchResult={setSearchResult}
          />
        ) : (
          <Row justify="center">
            <Spin />
          </Row>
        )}

        {isDataLoaded ? (
          <ListComponent
            role={"lihat-nilai"}
            isLoading={!isDataLoaded}
            dataSource={data}
            previewDetailNilai={previewNilaiMhs}
          />
        ) : (
          <Skeleton active paragraph="4" avatar />
        )}
      </PageLayout>
    </>
  );
}

export default HalamanNilai;
