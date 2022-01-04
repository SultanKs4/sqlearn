import React from "react";

import Head from "next/head";
import PageLayout from "../../components/PageLayout";

function Jadwal() {
  return (
    <>
      <Head>
        <title>SQLearn | Dosen - Jadwal </title>
      </Head>
      <PageLayout role="dosen">Ini Jadwal dosen</PageLayout>
    </>
  );
}

export default Jadwal;
