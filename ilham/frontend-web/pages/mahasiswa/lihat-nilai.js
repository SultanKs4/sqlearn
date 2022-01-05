import { React, useState, useEffect } from "react";

import Head from "next/head";
import PageLayout from "../../components/PageLayout";

import { Row, Col, Card, Skeleton, Typography, Divider } from "antd";
import EmptyData from "../../components/EmptyData";

function LihatNilai() {
  const [dataLatihan, setDataLatihan] = useState([]);
  const [isDataLatihanLoaded, setIsDataLatihanLoaded] = useState(false);

  useEffect(() => {
    // TODO : Consume API GET dataLatihan yang sudah diselesaikan & hasil nilainya
  });

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
              {/* Sementara begini dulu (blm buat mockapi) */}
              {dataLatihan.length === 0 && (
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
