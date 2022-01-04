import React from "react";

import Head from "next/head";
import PageLayout from "../../components/PageLayout";

function PaketSoal() {
  return (
    <>
      <Head>
        <title>SQLearn | Dosen - Paket Soal </title>
      </Head>
      <PageLayout role="dosen">Ini Paket Soal dosen</PageLayout>
    </>
  );
}

export default PaketSoal;
