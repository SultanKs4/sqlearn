import { React, useState, useEffect } from "react";

import Head from "next/head";
import PageLayout from "../../components/PageLayout";

import { Row, Col, Card, Skeleton, Typography, Divider } from "antd";
import EmptyData from "../../components/EmptyData";
import { mockGetAllDaftarNilai } from "../../utils/remote-data/mahasiswa/Nilai";
import ListComponent from "../../components/List";

function LihatNilai() {
  const [dataLatihan, setDataLatihan] = useState([]);
  const [isDataLatihanLoaded, setIsDataLatihanLoaded] = useState(false);

  useEffect(() => {
    // TODO : Consume API GET dataLatihan yang sudah diselesaikan & hasil nilainya
    mockGetAllDaftarNilai().then((responseData) => {
      console.log(responseData);
      setDataLatihan(responseData.data);
      setIsDataLatihanLoaded(true);
    });
  }, []);

  const handleKerjakanLatihan = (id) => {
    router.push(`/mahasiswa/soal/${id}`);
  };

  return (
    <>
      <Head>
        <title>SQLearn | Mahasiswa - Nilai </title>
      </Head>
      <PageLayout role="mahasiswa">
        <Row>
          <Col span={24}>
            <Card style={{ minHeight: "75vh" }}>
              <Typography.Title level={2}> Nilai Latihan </Typography.Title>
              <Divider />
              {dataLatihan.length > 0 ? (
                <ListComponent
                  dataSource={dataLatihan}
                  isLoading={!isDataLatihanLoaded}
                  role="sesi-latihan-mahasiswa"
                  showDetail={true}
                  kerjakanLatihan={handleKerjakanLatihan}
                />
              ) : (
                <EmptyData
                  description="Tidak ada Latihan yang telah dikerjakan"
                  withAction={false}
                />
              )}
            </Card>
          </Col>
        </Row>
      </PageLayout>
    </>
  );
}

export default LihatNilai;
