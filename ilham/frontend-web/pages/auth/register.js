import React, { useState } from "react";
import { Form, Input, Button, Radio, Card, Row, Col, Typography } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import Head from "next/head";

import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();

  const [form] = Form.useForm();
  const [RegisterType, setRegisterTypeType] = useState("mahasiswa");

  const onRequiredTypeChange = ({ RegisterTypeValue }) => {
    setRegisterTypeType(RegisterTypeValue);
  };

  return (
    <>
      <Head>
        <title>SQLearn | Register </title>
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
          <Form
            form={form}
            layout="vertical"
            initialValues={{
              RegisterTypeValue: RegisterType
            }}
            onValuesChange={onRequiredTypeChange}
            RegisterType={RegisterType}
          >
            <Form.Item label="Register sebagai" name="RegisterTypeValue">
              <Radio.Group>
                <Radio.Button value="mahasiswa"> Mahasiswa </Radio.Button>
                <Radio.Button value="dosen"> Dosen </Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label={`Username / ${
                RegisterType === "mahasiswa" ? "NIM" : "NIDN"
              }`}
              required
              tooltip="This is a required field"
            >
              <Input
                placeholder={`Input Username / ${
                  RegisterType === "mahasiswa" ? "NIM" : "NIDN"
                } `}
              />
            </Form.Item>
            <Form.Item
              label="Password"
              tooltip={{
                title: "Tooltip with customize icon",
                icon: <InfoCircleOutlined />
              }}
            >
              <Input type="password" required placeholder="input password" />
            </Form.Item>
            <Row justify="space-between">
              <Col>
                <Button type="primary"> Sign Up </Button>
              </Col>
              <Col>
                <Typography.Text> Punya akun ? </Typography.Text>
                <Typography.Text
                  underline
                  onClick={() => router.push("/auth/login")}
                >
                  Login
                </Typography.Text>
              </Col>
            </Row>
          </Form>
        </Card>
      </Row>
    </>
  );
};

export default Register;
