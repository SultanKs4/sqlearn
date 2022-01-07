import { React, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { Card, Row, Col, Button, Typography } from "antd";

import PageLayout from "../../../../components/PageLayout";
import { mockGetSoalByID } from "../../../../utils/remote-data/mahasiswa/Soal";

function Practice() {
  const router = useRouter();

  const [dataPractice, setDataPractice] = useState([]);
  const [isDataPracticeLoaded, setIsDataPracticeLoaded] = useState(false);

  useEffect(() => {
    mockGetSoalByID().then(responseData => {
      setDataPractice(responseData);
      setIsDataPracticeLoaded(true);
      console.log(responseData);
    });
  }, []);

  return (
    <>
      <Head>
        <title>SQLearn | Mahasiswa - Soal </title>
      </Head>
      <PageLayout role="mahasiswa">
        <Card>
          {/* ! Mock */}
          <Typography.Title level={3}>Latihan 1</Typography.Title>
          <Row>
            Lorem ipsumm ini deskripsi tentang latihan yang akan dikerjakan....
          </Row>

          <Row style={{ marginTop: "2em" }}>
            <Button
              ghost
              type="primary"
              onClick={() => router.push(`/mahasiswa/soal/1/pertanyaan/1`)}
            >
              {" "}
              Mulai Latihan{" "}
            </Button>
          </Row>
        </Card>
      </PageLayout>
    </>
  );
}

export default Practice;
