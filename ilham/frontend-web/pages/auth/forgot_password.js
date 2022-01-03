import React, { useState } from "react";
import { Form, Input, Button, Radio, Card, Row, Col, Typography } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import Head from "next/head";

import { useRouter } from "next/router";

const ForgotPassword = (props) => {
  const router = useRouter();

  const [form] = Form.useForm();

  console.log(props)
  return (
    <>
      <Head>
        <title>SQLearn | Forgot Password </title>
      </Head>
      <Row
        align="middle"
        justify="center"
        style={{
          minHeight: "100vh"
        }}
      >
        <Card
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            width: "400px"
          }}
        >
          <Form form={form} layout="vertical">
            <Form.Item
              label={`Username`}
              required
              tooltip="This is a required field"
            >
              <Input placeholder="Input Username . . ." />
            </Form.Item>
            <Form.Item
              label="Password Baru"
              tooltip={{
                title: "Tooltip with customize icon",
                icon: <InfoCircleOutlined />
              }}
            >
              <Input
                type="password"
                required
                placeholder="input password baru . . ."
              />
            </Form.Item>
            <Row justify="space-between">
              <Col>
                <Button type="primary"> Ganti Password </Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </Row>
    </>
  );
};

export default ForgotPassword;
