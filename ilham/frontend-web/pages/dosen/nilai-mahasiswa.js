import React from "react";

import Head from "next/head";
import PageLayout from "../../components/PageLayout";

function HalamanNilai() {
  return (
    <>
      <Head>
        <title>SQLearn | Dosen - Rekap Nilai </title>
      </Head>
      <PageLayout role="dosen">
        Ini Halaman nilai mahasiswa oleh dosen
      </PageLayout>
    </>
  );
}

export default HalamanNilai;
