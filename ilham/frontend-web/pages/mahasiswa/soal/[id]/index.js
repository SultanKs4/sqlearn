import { React, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { Card, Row, Col, Skeleton, Button, Typography } from "antd";

import PageLayout from "../../../../components/PageLayout";
import { mockGetAllSoal } from "../../../../utils/remote-data/mahasiswa/Soal";
import { mockGetAllPractices } from "../../../../utils/remote-data/mahasiswa/Beranda";
import ListComponent from "../../../../components/List";

function Practice() {
  const router = useRouter();

  const [dataPractice, setDataPractice] = useState([]);
  const [isDataPracticeLoaded, setIsDataPracticeLoaded] = useState(false);

  //?  Ini dataListPertanyaan by jadwal
  const [dataListPertanyaan, setDataListPertanyaan] = useState([]);
  const [isDataListPertanyaanLoaded, setIsDataListPertanyaanLoaded] =
    useState(false);

  useEffect(() => {
    mockGetAllPractices().then((response) => {
      setDataPractice(
        response.data.find(
          (item) => parseInt(item.id) === parseInt(router.query.id)
        )
      );

      setIsDataPracticeLoaded(true);
    });
    mockGetAllSoal().then((response) => {
      setDataListPertanyaan(response.data);
      setIsDataListPertanyaanLoaded(true);
      console.log(response.data);
    });
  }, [router.query.id]);

  useEffect(() => {
    console.log(dataPractice);
  }, [dataPractice]);

  return (
    <>
      <Head>
        <title>SQLearn | Mahasiswa - Soal </title>
      </Head>
      <PageLayout role="mahasiswa">
        <Card>
          {/* ! Mock */}
          {isDataPracticeLoaded ? (
            <Typography.Title level={3}>{dataPractice?.nama}</Typography.Title>
          ) : (
            <Skeleton
              active
              paragraph={false}
              title={{ width: "20vw" }}
              style={{ marginBottom: "1em" }}
            />
          )}

          <Row>
            Lorem ipsumm ini deskripsi tentang latihan yang akan dikerjakan....
          </Row>
          <Row style={{ marginTop: "2em" }}>
            <Typography.Title level={4}>List Pertanyaan</Typography.Title>
          </Row>

          <ListComponent
            dataSource={dataListPertanyaan}
            role="data-soal-mahasiswa"
            isLoading={!isDataListPertanyaanLoaded}
            //  ? route : /mahasiswa/soal/:jadwalID/pertanyaan/:soalID
            kerjakanLatihan={(id) =>
              router.push(`/mahasiswa/soal/1/pertanyaan/${id}`)
            }
          />
        </Card>
      </PageLayout>
    </>
  );
}

export default Practice;
