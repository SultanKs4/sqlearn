import { React, useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { Card, Row, Col, Skeleton, Button, Typography } from "antd";

import PageLayout from "../../../../components/PageLayout";
import { mockGetAllSoal } from "../../../../utils/remote-data/mahasiswa/Soal";
import { mockGetAllPractices } from "../../../../utils/remote-data/mahasiswa/Beranda";
import ListComponent from "../../../../components/List";
import moment from "moment";
import { JadwalContext } from "../../../../utils/context/JadwalContext";

function Practice() {
  const router = useRouter();

  const { addTimer } = useContext(JadwalContext);

  const [dataPractice, setDataPractice] = useState({});

  const [isTimerReady, setIsTimerReady] = useState(false);
  const [timerFromServer, setTimerFromServer] = useState("");
  const [isDataPracticeLoaded, setIsDataPracticeLoaded] = useState(false);

  //?  Ini dataListPertanyaan by jadwal
  const [dataListPertanyaan, setDataListPertanyaan] = useState([]);
  const [isDataListPertanyaanLoaded, setIsDataListPertanyaanLoaded] =
    useState(false);

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

    // ? Ini aslinya fetch data getQuestionByJadwal
    mockGetAllSoal().then((response) => {
      setDataListPertanyaan(response.data);
      setIsDataListPertanyaanLoaded(true);
    });
  }, [router.query.idPaket]);

  useEffect(() => {
    setTimerFromServer(
      moment
        .utc(
          moment(dataPractice?.tanggal_akhir, "YYYY-MM-DD HH:mm:ss").diff(
            moment(dataPractice?.tanggal_mulai, "YYYY-MM-DD HH:mm:ss")
          )
        )
        .format("HH:mm:ss")
    );
    setIsTimerReady(true);
  }, [isDataPracticeLoaded, dataPractice]);

  useEffect(() => {
    addTimer(({ text, format }) => {
      return {
        text: timerFromServer,
        format: {
          hour: parseInt(timerFromServer.split(":")[0]),
          minute: parseInt(timerFromServer.split(":")[1]),
          second: parseInt(timerFromServer.split(":")[2]),
        },
      };
    });
  }, [isTimerReady, timerFromServer]);

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
          <Row style={{ marginTop: "2em" }} justify="space-between">
            <Col>
              {" "}
              <Typography.Title level={4}>List Pertanyaan</Typography.Title>
            </Col>
            <Col>
              {isTimerReady && isDataPracticeLoaded
                ? timerFromServer
                : "Loading . . ."}
            </Col>
          </Row>

          <ListComponent
            dataSource={dataListPertanyaan}
            role="data-soal-mahasiswa"
            isLoading={!isDataListPertanyaanLoaded}
            //  ? route : /mahasiswa/soal/:paketID/pertanyaan/:soalID
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
