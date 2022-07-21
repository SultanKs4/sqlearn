import { React, useState } from "react";
import Head from "next/head";
import { Skeleton, Typography, Row, Col, Card, message, Empty } from "antd";

import PageLayout from "../../../components/PageLayout";
import { useSession } from "next-auth/react";
import ListComponent from "../../../components/List";
import SearchNilai from "../../../components/dosen/NilaiMhs/SearchNilai";
import { filterNilaiMhsByKelasAndJadwal } from "../../../utils/remote-data/dosen/NilaiMahasiswaCRUD";

function HalamanNilai() {
  const { data: session } = useSession();

  const [dataMahasiswa, setDataMahasiswa] = useState();

  const [isFetchingData, setIsFetchingData] = useState(true);

  const [isSearching, setIsSearching] = useState(false);

  const [selectedKelas, setSelectedKelas] = useState("Test Kelas");

  const onFinish = ({ jadwal, kelas }) => {
    setIsSearching(true);
    filterNilaiMhsByKelasAndJadwal(
      session?.user?.tokenJWT,
      jadwal.value,
      kelas.value
    )
      .then((res) => {
        message.success("Nilai Mahasiswa berhasil diambil");
        setDataMahasiswa(res.data);
        setIsFetchingData(false);
      })
      .catch((err) => {
        console.log(err);
        message.error("Terjadi kesalahan saat mengambil data");
      });
  };

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

        <Card>
          <SearchNilai
            onFinish={onFinish}
            selectedKelas={selectedKelas}
            setSelectedKelas={setSelectedKelas}
          />
        </Card>

        {isSearching ? (
          <>
            {!isFetchingData ? (
              <div style={{ marginTop: "1em" }}>
                <Row>
                  <Typography.Title level={4}>
                    Nilai untuk kelas {selectedKelas?.label}
                  </Typography.Title>
                </Row>

                <ListComponent
                  role={"lihat-nilai"}
                  isLoading={isFetchingData}
                  dataSource={dataMahasiswa}
                />
              </div>
            ) : (
              <Card style={{ marginTop: "1em" }}>
                <Skeleton
                  style={{ marginTop: "2em" }}
                  active
                  paragraph="4"
                  avatar
                />
              </Card>
            )}
          </>
        ) : (
          <Card style={{ marginTop: "1em" }}>
            <Empty description={"Harap pilih nama kelas dan jadwal"} />
          </Card>
        )}
      </PageLayout>
    </>
  );
}

export default HalamanNilai;
