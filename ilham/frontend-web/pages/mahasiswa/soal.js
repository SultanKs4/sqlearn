import React from "react";

import Head from "next/head";
import PageLayout from "../../components/PageLayout";

function SoalMahasiswa() {
  return (
    <>
      <Head>
        <title>SQLearn | Mahasiswa - Soal </title>
      </Head>
      <PageLayout role="mahasiswa">Ini Soal siswa</PageLayout>
    </>
  );
}

export default SoalMahasiswa;
