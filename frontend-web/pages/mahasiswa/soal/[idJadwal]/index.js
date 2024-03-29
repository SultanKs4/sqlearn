import { React, useState, useEffect, useContext, useCallback } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import moment from "moment";

import { Card, Row, Col, Skeleton, Typography, Badge, message } from "antd";

import PageLayout from "../../../../components/PageLayout";
import { getUnansweredQuestion } from "../../../../utils/remote-data/mahasiswa/Soal";
import ListComponent from "../../../../components/List";
import { JadwalContext } from "../../../../utils/context/JadwalContext";
import { useSession } from "next-auth/react";
import { getJadwalByID } from "../../../../utils/remote-data/dosen/JadwalCRUD";
import { createSession } from "../../../../utils/remote-data/mahasiswa/Session";

function Practice() {
  const router = useRouter();
  const { data: session } = useSession();

  const { addTimer } = useContext(JadwalContext);

  const [dataJadwal, setDataJadwal] = useState([]);

  const [isDataJadwalLoaded, setIsDataJadwalLoaded] = useState(false);
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const [isTimerReady, setIsTimerReady] = useState(false);
  const [timerFromServer, setTimerFromServer] = useState("");

  useEffect(() => {
    if (isTimerReady) {
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
    }
  }, [isTimerReady, timerFromServer]);

  const calculateDifferenceForTimer = (startDate, endDate) => {
    let diff = moment.duration(moment(endDate).diff(moment(startDate)));
    return `${diff.hours()}:${diff.minutes()}:${diff.seconds()}`;
  };

  const fetchDataLatihan = useCallback(() => {
    if (session !== undefined && router?.query?.idJadwal !== undefined)
      getJadwalByID(session?.user?.tokenJWT, router?.query?.idJadwal).then(
        (res) => {
          setDataJadwal(res.data);
          setIsDataJadwalLoaded(true);
          setTimerFromServer(
            calculateDifferenceForTimer(moment(), res.data?.finish)
          );
          setIsTimerReady(true);
        }
      );
  }, [session, router?.query?.idJadwal]);

  useEffect(() => {
    fetchDataLatihan();
  }, [fetchDataLatihan]);

  useEffect(() => {
    console.clear();
  }, []);

  const kerjakanLatihan = async () => {
    setIsButtonLoading(true);
    createSession(session?.user?.tokenJWT, router.query.idJadwal)
      .then((sesi) => {
        localStorage.setItem("question_answered", []);
        getUnansweredQuestion(session?.user?.tokenJWT, sesi?.data?.id, [])
          .then((res) => {
            router.push({
              pathname: `/mahasiswa/soal/${parseInt(
                router.query.idJadwal
              )}/pertanyaan/${res.data?.id}`,
              query: {
                session_id: sesi?.data?.id,
              },
            });
          })
          .catch((e) => {
            console.log(e);
            message.error("Tidak dapat ambil data pertanyaan");
          });
      })
      .catch((e) => {
        message.error("Sesi ini belum dimulai");
        setIsButtonLoading(false);
        setIsButtonDisabled(true);
      });
  };

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
              role="data-soal-mahasiswa"
              dataSource={dataJadwal?.Container?.questions}
              isButtonLoading={isButtonLoading}
              isButtonDisabled={isButtonDisabled}
              isLoading={!isDataJadwalLoaded}
              //  ? route : /mahasiswa/soal/:paketID/pertanyaan/:soalID
              kerjakanLatihan={kerjakanLatihan}
            />
          )}
        </Card>
      </PageLayout>
    </>
  );
}

export default Practice;
