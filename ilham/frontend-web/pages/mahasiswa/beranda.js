import React from "react";

import Head from "next/head";
import PageLayout from "../../components/PageLayout";

function Beranda() {
  return (
    <>
      <Head>
        <title>SQLearn | Mahasiswa - Beranda </title>
      </Head>
      <PageLayout role="mahasiswa">Ini beranda siswa</PageLayout>
    </>
  );
}

export default Beranda;
