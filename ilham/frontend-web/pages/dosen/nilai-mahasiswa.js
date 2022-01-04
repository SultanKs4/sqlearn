import { React, useState } from "react";

import Head from "next/head";
import PageLayout from "../../components/PageLayout";

import {
  Skeleton,
  Typography,
  Row,
  Col,
  Button,
  List,
  Card,
  Alert
} from "antd";

function HalamanNilai() {
  return (
    <>
      <Head>
        <title>SQLearn | Dosen - Rekap Nilai </title>
      </Head>
      <PageLayout role="dosen">
        <Row justify="space-between">
          <Col>
            <Typography.Title level={2}>Rekap Nilai </Typography.Title>
          </Col>
        </Row>

        {/* Content asli... */}
      </PageLayout>
    </>
  );
}

export default HalamanNilai;
