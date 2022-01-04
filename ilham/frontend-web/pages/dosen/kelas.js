import React from "react";

import Head from "next/head";
import PageLayout from "../../components/PageLayout";

function DaftarKelas() {
  return (
    <>
      <Head>
        <title>SQLearn | Dosen - Daftar Kelas </title>
      </Head>
      <PageLayout role="dosen">Ini Daftar Kelas dosen</PageLayout>
    </>
  );
}

export default DaftarKelas;
