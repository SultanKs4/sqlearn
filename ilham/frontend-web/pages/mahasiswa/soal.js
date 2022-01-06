import { React, useState, useEffect } from "react";

import Head from "next/head";
import PageLayout from "../../components/PageLayout";
import { mockGetSoalByID } from "../../utils/remote-data/mahasiswa/Soal";

function SoalMahasiswa() {
  const [dataLatihan, setDataLatihan] = useState([]);

  const [isDataLatihanLoaded, setIsDataLatihanLoaded] = useState(false);

  useEffect(() => {
    // TODO : Consume API GET dataLatihan yang tersedia
    mockGetSoalByID().then(responseData => {
      setDataLatihan(responseData);
      setIsDataLatihanLoaded(true);
    });
  }, []);

  return (
    <>
      <Head>
        <title>SQLearn | Mahasiswa - Soal </title>
      </Head>
      <PageLayout role="mahasiswa">
        {isDataLatihanLoaded && <> {dataLatihan.correct_answer} </>}
      </PageLayout>
    </>
  );
}

export default SoalMahasiswa;
