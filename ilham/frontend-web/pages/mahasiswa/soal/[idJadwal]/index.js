import { React, useState, useEffect, useContext, useCallback } from "react";
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
import { useSession } from "next-auth/react";
import { getJadwalByID } from "../../../../utils/remote-data/dosen/JadwalCRUD";

function Practice() {
  const router = useRouter();
  const { data: session } = useSession();

  const { addTimer } = useContext(JadwalContext);

  const [dataJadwal, setDataJadwal] = useState([]);

  const [isDataJadwalLoaded, setIsDataJadwalLoaded] = useState(false);

  const [isTimerReady, setIsTimerReady] = useState(false);
  const [timerFromServer, setTimerFromServer] = useState("");

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

  const fetchDataLatihan = useCallback(() => {
    if (session !== undefined)
      getJadwalByID(session?.user?.tokenJWT, router.query.idJadwal).then(
        (res) => {
          setDataJadwal(res.data);
          setIsDataJadwalLoaded(true);
          setTimerFromServer(res.data?.timer);
          setIsTimerReady(true);
        }
      );
  }, [session]);

  useEffect(() => {
    fetchDataLatihan();
  }, [fetchDataLatihan]);

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
          {/* SYNC */}
          {isDataJadwalLoaded ? (
            <Row justify="space-between">
              <Col>
                <Typography.Title level={3}>
                  {dataJadwal?.description}
                </Typography.Title>
              </Col>
              <Col>
                <Badge.Ribbon
                  color={
                    dataJadwal?.Container?.QuestionLabel?.name === "Close-Ended"
                      ? "geekblue"
                      : "purple"
                  }
                  text={dataJadwal?.Container?.QuestionLabel?.name}
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
            {/* Lorem ipsumm ini deskripsi tentang latihan yang akan dikerjakan.... */}
          </Row>
          <Row style={{ marginTop: "2em" }} justify="space-between">
            <Col>
              {" "}
              <Typography.Title level={4}>List Pertanyaan</Typography.Title>
            </Col>
            <Col>{isTimerReady ? timerFromServer : "Loading . . ."}</Col>
          </Row>

          {isDataJadwalLoaded && (
            <ListComponent
              dataSource={dataJadwal?.Container?.questions}
              role="data-soal-mahasiswa"
              isLoading={!isDataJadwalLoaded}
              //  ? route : /mahasiswa/soal/:paketID/pertanyaan/:soalID
              kerjakanLatihan={(id) =>
                router.push(
                  `/mahasiswa/soal/${parseInt(
                    router.query.idJadwal
                  )}/pertanyaan/${dataJadwal?.Container?.questions[0].id}`
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
