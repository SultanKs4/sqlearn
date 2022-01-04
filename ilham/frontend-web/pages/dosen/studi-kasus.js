import React from "react";

import Head from "next/head";
import PageLayout from "../../components/PageLayout";

function StudiKasus() {
  return (
    <>
      <Head>
        <title>SQLearn | Dosen - Studi Kasus </title>
      </Head>
      <PageLayout role="dosen">Ini Studi Kasus</PageLayout>
    </>
  );
}

export default StudiKasus;
