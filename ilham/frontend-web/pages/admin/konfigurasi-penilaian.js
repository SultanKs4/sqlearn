import { React, useState, useEffect } from "react";

import Head from "next/head";
import { Button, Card, Col, Form, Input, Row, Typography } from "antd";
import PageLayout from "../../components/PageLayout";
import { ConsoleSqlOutlined } from "@ant-design/icons";

function KonfigurasiPenilaian() {
  const [formObj, setFormObj] = useState();

  const onFinish = (values) => {
    setFormObj(values);
    console.log(values);
    // handleSubmit(values);
  };

  return (
    <>
      <Head>
        <title>SQLearn | Admin - Konfigurasi </title>
      </Head>
      <PageLayout role="admin">
        <Card>
          <Typography.Title level={3} style={{ marginBottom: "1em" }}>
            Konfigurasi Penilaian
          </Typography.Title>
          <Form onFinish={onFinish} layout="vertical">
            <Row gutter={20}>
              <Col span={12}>
                <Form.Item
                  name="aturan_penilaian"
                  label="Pengaturan Penilaian"
                  rules={[
                    {
                      required: true,
                      message: "Mohon masukkan pengaturan penilaian!",
                    },
                  ]}
                >
                  <Input
                    prefix={<ConsoleSqlOutlined />}
                    placeholder={` Pengaturan Penilaian . . .`}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="threshold"
                  label="Nilai Threshold"
                  rules={[
                    {
                      required: true,
                      message: "Mohon masukkan Threshold untuk Penilaian !",
                    },
                  ]}
                >
                  <Input
                    prefix={<ConsoleSqlOutlined />}
                    placeholder={` Nilai Threshold . . .`}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row justify="end">
              <Button key="submit" type="primary" htmlType="submit">
                Submit
              </Button>
            </Row>
          </Form>
        </Card>
      </PageLayout>
    </>
  );
}

export default KonfigurasiPenilaian;
