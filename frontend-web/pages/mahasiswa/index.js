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
import RadioFilterCategory from "../../components/RadioFilterCategory";

const { TabPane } = Tabs;

function Beranda() {
  const router = useRouter();

  const { data: session } = useSession();

  const [dataJadwal, setDataJadwal] = useState([]);
  const [isDataJadwalLoaded, setIsDataJadwalLoaded] = useState(false);

  const [jadwalFiltered, setJadwalFiltered] = useState([]);
  const [isFilterActive, setIsFilterActive] = useState(false);

  const [dataLatihanSelesai, setDataLatihanSelesai] = useState([]);
  const [isDataSelesaiLoaded, setIsDataSelesaiLoaded] = useState(false);

  const handleKerjakanLatihan = (id) => router.push(`/mahasiswa/soal/${id}`);

  // ? key = status : "tersedia" || "selesai"
  const switchTabPractice = (key) => {
    if (key === "tersedia") fetchDataLatihan();
    else if (key === "selesai") fetchDataLatihanSelesai();
  };

  const fetchDataLatihan = useCallback(() => {
    if (session !== undefined)
      getJadwal(session?.user?.tokenJWT)
        .then((res) => {
          setIsDataJadwalLoaded(true);
          setDataJadwal(res.data);
        })
        .catch(() => console.error("Data Latihan tersedia kosong"));
  }, [session]);

  const fetchDataLatihanSelesai = useCallback(async () => {
    if (session !== undefined) {
      let classID;

      let dataMhs = await getDetailMahasiswa(
        session?.user?.tokenJWT,
        session?.user?.id
      );

      try {
        classID = await dataMhs?.data?.classes.pop().id;
      } catch (error) {
        console.log(error);
      }

      getScoreByClassID(session?.user?.tokenJWT, classID)
        .then((res) => {
          setIsDataSelesaiLoaded(true);
          setDataLatihanSelesai(res.data);
        })

        .catch((err) =>
          /* Hanya untuk fase development */
          console.error(` Data Latihan selesai kosong`)
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

          <Tabs
            defaultActiveKey={router.query?.type || "tersedia"}
            onChange={switchTabPractice}
          >
            <TabPane tab="Tersedia" key="tersedia">
              {dataJadwal?.length > 0 ? (
                <>
                  <RadioFilterCategory
                    data={dataJadwal}
                    setIsFilterActive={setIsFilterActive}
                    setEntityFiltered={setJadwalFiltered}
                  />
                  <ListComponent
                    dataSource={isFilterActive ? jadwalFiltered : dataJadwal}
                    isLoading={!isDataJadwalLoaded}
                    role="sesi-latihan-mahasiswa"
                    kerjakanLatihan={handleKerjakanLatihan}
                  />
                </>
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
