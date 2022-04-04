import { React, useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import {
  Card,
  Row,
  Col,
  Skeleton,
  Button,
  Typography,
  Badge,
  message,
} from "antd";

import PageLayout from "../../../../components/PageLayout";
import { mockGetSoalByCategory } from "../../../../utils/remote-data/mahasiswa/Soal";
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
      console.log(router.query.idPaket);
      setDataPractice(
        // ! ini datanya masih demo,
        response.data.find((item) => parseInt(item.id) === parseInt(1))
      );
      setIsDataPracticeLoaded(true);
    });
  }, [router.query.idPaket]);

  useEffect(() => {
    // ? Ini aslinya fetch data getQuestionByJadwal
    mockGetSoalByCategory(dataPractice?.kategori).then((response) => {
      console.log(response.data[0]);
      setDataListPertanyaan(response.data);
      setIsDataListPertanyaanLoaded(true);
    });
  }, [dataPractice, router.query.idPaket]);

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

  useEffect(() => {
    console.clear();
    message.info("Halaman ini masih dalam tahap pengembangan");
  }, []);

  return (
    <>
      <Head>
        <title>SQLearn | Mahasiswa - Soal </title>
      </Head>
      <PageLayout role="mahasiswa">
        <Card>
          {/* ! Mock */}
          {isDataPracticeLoaded ? (
            <Row justify="space-between">
              <Col>
                <Typography.Title level={3}>
                  {dataPractice?.nama}
                </Typography.Title>
              </Col>
              <Col>
                <Badge.Ribbon
                  color={
                    dataPractice?.kategori === "Close-Ended"
                      ? "geekblue"
                      : "purple"
                  }
                  text={dataPractice?.kategori}
                  placement="end"
                ></Badge.Ribbon>
              </Col>
            </Row>
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

          {isDataListPertanyaanLoaded && (
            <ListComponent
              dataSource={dataListPertanyaan}
              role="data-soal-mahasiswa"
              isLoading={!isDataListPertanyaanLoaded}
              //  ? route : /mahasiswa/soal/:paketID/pertanyaan/:soalID
              kerjakanLatihan={(id) =>
                router.push(
                  `/mahasiswa/soal/${parseInt(
                    router.query.idPaket
                  )}/pertanyaan/${dataListPertanyaan[0].id}`
                )
              }
            />
          )}
        </Card>
      </PageLayout>
    </>
  );
}

export default Practice;
