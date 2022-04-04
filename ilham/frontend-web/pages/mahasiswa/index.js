//  ? Ini beranda mahasiswa
import { React, useState, useEffect, useCallback } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import PageLayout from "../../components/PageLayout";
import EmptyData from "../../components/EmptyData";

import { Typography, Card, Tabs, message } from "antd";

import {} from "@ant-design/icons";

import ListComponent from "../../components/List";
import { useSession } from "next-auth/react";
import { getJadwal } from "../../utils/remote-data/dosen/JadwalCRUD";
import { getScoreByClassID } from "../../utils/remote-data/dosen/ScoreCRUD";
import { getDetailMahasiswa } from "../../utils/remote-data/mahasiswa/DetailMahasiswa";

const { TabPane } = Tabs;

function Beranda() {
  const router = useRouter();

  const { data: session } = useSession();

  const [dataJadwal, setDataJadwal] = useState([]);
  const [isDataJadwalLoaded, setIsDataJadwalLoaded] = useState(false);

  const [dataLatihanSelesai, setDataLatihanSelesai] = useState([]);
  const [isDataSelesaiLoaded, setIsDataSelesaiLoaded] = useState(false);

  const handleKerjakanLatihan = (id) => {
    router.push(`/mahasiswa/soal/${id}`);
  };

  // ? key = status : "tersedia" || "selesai"
  const switchTabPractice = (key) => {
    console.log("key", key);
    if (key === "tersedia") fetchDataLatihan();
    else if (key === "selesai") fetchDataLatihanSelesai();
  };

  const fetchDataLatihan = useCallback(() => {
    if (session !== undefined)
      getJadwal(session?.user?.tokenJWT)
        .then((res) => {
          setIsDataJadwalLoaded(true);
          setDataJadwal(res.data);
          console.log("data jadwal", res.data);
        })
        .catch(() => message.error("Terjadi kesalahan"));
  }, [session]);

  const fetchDataLatihanSelesai = useCallback(async () => {
    if (session !== undefined) {
      let classID;

      let dataMhs = await getDetailMahasiswa(
        session?.user?.tokenJWT,
        session?.user?.id
      );

      try {
        classID = await dataMhs?.data?.classes[0]?.id;
      } catch (error) {
        console.log(error);
      }

      getScoreByClassID(session?.user?.tokenJWT, classID)
        .then((res) => {
          setIsDataSelesaiLoaded(true);
          setDataLatihanSelesai(res.data);
          console.log(res.data, "ini data latihan selesai");
        })

        .catch((err) =>
          /* Hanya untuk fase development */
          message.error(` Data Latihan selesai : ${err.message}`)
        );
    }
  }, [session]);

  useEffect(() => {
    fetchDataLatihan();
    fetchDataLatihanSelesai();
  }, [fetchDataLatihan, fetchDataLatihanSelesai]);

  return (
    <>
      <Head>
        <title>SQLearn | Mahasiswa - Beranda </title>
      </Head>
      <PageLayout role="mahasiswa">
        <Card style={{ height: "100%" }}>
          <Typography.Title level={2}> Latihan </Typography.Title>
          <Tabs defaultActiveKey="tersedia" onChange={switchTabPractice}>
            <TabPane tab="Tersedia" key="tersedia">
              {dataJadwal?.length > 0 ? (
                <ListComponent
                  dataSource={dataJadwal}
                  isLoading={!isDataJadwalLoaded}
                  role="sesi-latihan-mahasiswa"
                  kerjakanLatihan={handleKerjakanLatihan}
                />
              ) : (
                <EmptyData
                  withAction={false}
                  description="Tidak ada latihan tersedia"
                />
              )}
            </TabPane>
            <TabPane tab="Selesai" key="selesai">
              {dataLatihanSelesai.length > 0 ? (
                <ListComponent
                  dataSource={dataLatihanSelesai}
                  isLoading={!isDataSelesaiLoaded}
                  role="sesi-latihan-mahasiswa"
                  kerjakanLatihan={handleKerjakanLatihan}
                />
              ) : (
                <EmptyData
                  withAction={false}
                  description="Tidak ada Latihan yang telah dikerjakan"
                />
              )}
            </TabPane>
          </Tabs>
        </Card>
      </PageLayout>
    </>
  );
}

export default Beranda;
