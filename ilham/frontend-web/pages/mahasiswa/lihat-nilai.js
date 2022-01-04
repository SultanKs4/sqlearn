import React from "react";

import Head from "next/head";
import PageLayout from "../../components/PageLayout";

function LihatNilai() {
  return (
    <>
      <Head>
        <title>SQLearn | Mahasiswa - Nilai </title>
      </Head>
      <PageLayout role="mahasiswa">Ini Nilai siswa</PageLayout>
    </>
  );
}

export default LihatNilai;
