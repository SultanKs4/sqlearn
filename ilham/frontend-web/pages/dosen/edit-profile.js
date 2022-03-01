import { React, useEffect } from "react";

import Head from "next/head";
import { Button, Card, Form, Input, Typography, Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import PageLayout from "../../components/PageLayout";

function EditProfile() {
  const onFinish = (values) => {
    console.log(values);
  };

  // TODO Sync with backend

  useEffect(() => {
    // ? Fetch data admin
  }, []);
  return (
    <>
      <Head>
        <title>SQLearn | Dosen - Ubah Profile </title>
      </Head>
      <PageLayout role="dosen">
        <Card>
          <Typography.Title level={3} style={{ marginBottom: "1em" }}>
            Profile Dosen
          </Typography.Title>

          <Form layout="vertical" onFinish={onFinish}>
            <Row gutter={20}>
              <Col>
                <Form.Item
                  name="username"
                  label="Username"
                  rules={[
                    {
                      required: true,
                      message: "Mohon masukkan Username !",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined />}
                    placeholder={` Username . . .`}
                  />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    {
                      required: true,
                      message: "Mohon masukkan password !",
                    },
                  ]}
                >
                  <Input
                    type="password"
                    prefix={<LockOutlined />}
                    placeholder={` Password . . .`}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Button
              key="submit"
              htmlType="submit"
              type="primary"
              style={{ marginTop: "1em" }}
            >
              Submit Data
            </Button>
          </Form>
        </Card>
      </PageLayout>
    </>
  );
}

export default EditProfile;
