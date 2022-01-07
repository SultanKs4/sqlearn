import { React, useState, useEffect } from "react";

import Head from "next/head";
import { useRouter } from "next/router";
import { Card, Typography } from "antd";

import PageLayout from "../../../components/PageLayout";
import { mockGetAllPractices } from "../../../utils/remote-data/mahasiswa/Beranda";
import ListComponent from "../../../components/List";

function SoalMahasiswa() {
  const router = useRouter();
  const [dataLatihan, setDataLatihan] = useState([]);

  const [isDataLatihanLoaded, setIsDataLatihanLoaded] = useState(false);

  useEffect(() => {
    // TODO : Consume API GET dataLatihan yang tersedia
    mockGetAllPractices().then(responseData => {
      setDataLatihan(
        responseData.data.filter(item => item.status === "tersedia")
      );
      setIsDataLatihanLoaded(true);
    });
  }, []);

  const handleKerjakanLatihan = id => {
    router.push(`/mahasiswa/soal/${id}`);
  };

  return (
    <>
      <Head>
        <title>SQLearn | Mahasiswa - Soal </title>
      </Head>
      <PageLayout role="mahasiswa">
        <Card>
          <Typography.Title level={3} style={{ marginBottom: "1em" }}>
            Daftar Latihan Tersedia{" "}
          </Typography.Title>
          <ListComponent
            dataSource={dataLatihan}
            isLoading={!isDataLatihanLoaded}
            role="sesi-latihan-mahasiswa"
            kerjakanLatihan={handleKerjakanLatihan}
          />
        </Card>
      </PageLayout>
    </>
  );
}

export default SoalMahasiswa;
