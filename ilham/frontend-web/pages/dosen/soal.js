import React from "react";

import Head from "next/head";
import PageLayout from "../../components/PageLayout";

function HalamanSoal() {
  return (
    <>
      <Head>
        <title>SQLearn | Dosen - Soal </title>
      </Head>
      <PageLayout role="dosen">Ini Halaman Soal dosen</PageLayout>
    </>
  );
}

export default HalamanSoal;
