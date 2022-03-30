import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { Button, Card, Col, Row, Skeleton, Typography } from "antd";
import Head from "next/head";
import PageLayout from "../../../../components/PageLayout";
import { mockGetAllPractices } from "../../../../utils/remote-data/mahasiswa/Beranda";

function UjianSelesai() {
  const router = useRouter();
  const [dataPractice, setDataPractice] = useState([]);
  const [isDataPracticeLoaded, setIsDataPracticeLoaded] = useState(false);

  useEffect(() => {
    // ? Ini aslinya fetch data getJadwalByID, ambil dari router.query.idPaket
    mockGetAllPractices().then((response) => {
      // console.log(response.data, "dan", router.query.idPaket);
      setDataPractice(
        response.data.find(
          (item) => parseInt(item.id) === parseInt(router.query.idPaket)
        )
      );

      setIsDataPracticeLoaded(true);
    });
  }, []);

  useEffect(() => {
    console.log(dataPractice);
  }, [dataPractice]);

  useEffect(() => {}, []);
  return (
    <>
      <Head>
        <title>SQLearn | Mahasiswa - Soal </title>
      </Head>
      <PageLayout role="mahasiswa">
        <Card>
          <Row justify="center" align="middle" style={{ height: "65vh" }}>
            {isDataPracticeLoaded ? (
              <Col>
                <Row justify="center" style={{ margin: "1em 0" }}>
                  <Typography.Title level={4}>
                    Anda baru saja menyelesaikan{" "}
                  </Typography.Title>
                </Row>
                <Row justify="center" style={{ margin: "1em 0" }}>
                  <Typography.Title level={4}>
                    {dataPractice?.nama}
                  </Typography.Title>
                </Row>
                <Row justify="center" style={{ margin: "1em 0" }}>
                  <Button
                    type="primary"
                    onClick={() => router.push("/mahasiswa/lihat-nilai")}
                  >
                    Lihat Nilai Saya
                  </Button>
                </Row>
              </Col>
            ) : (
              <Skeleton active />
            )}
          </Row>
        </Card>
      </PageLayout>
    </>
  );
}

export default UjianSelesai;
