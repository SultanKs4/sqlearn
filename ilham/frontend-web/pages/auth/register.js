import React, { useState } from "react";
import { Form, Input, Button, Card, Row, Col, Typography, Select } from "antd";
import {
  InfoCircleOutlined,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";
import Head from "next/head";

import { useRouter } from "next/router";
const { Option } = Select;

const Register = () => {
  const router = useRouter();

  const [form] = Form.useForm();
  const [registerType, setRegisterType] = useState("mahasiswa");

  const onRequiredTypeChange = (activeRole) => setRegisterType(activeRole);

  const mockRegister = (valueInput) => {
    if (valueInput.registerTypeValue === "mahasiswa")
      return valueInput.username === "1841720076" &&
        valueInput.password === "1841720076"
        ? true
        : false;
    else {
      return valueInput.username === "dosencoba" &&
        valueInput.password === "dosencoba"
        ? true
        : false;
    }
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    console.log(mockRegister(values));
    if (mockRegister(values)) {
      if (values.registerTypeValue === "mahasiswa")
        router.push("/mahasiswa/beranda");
      else router.push("/dosen/jadwal");
    }
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
          minHeight: "100vh",
        }}
      >
        <Card
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            width: "400px",
          }}
        >
          <Form
            form={form}
            layout="vertical"
            initialValues={{
              registerTypeValue: registerType,
            }}
            onFinish={onFinish}
          >
            <Row justify="space-between">
              <Col>
                {" "}
                <Typography.Text style={{ fontWeight: "bold" }}>
                  {" "}
                  Daftar Sebagai{" "}
                </Typography.Text>{" "}
              </Col>
              <Col>
                <Form.Item name="registerTypeValue">
                  <Select
                    defaultValue="mahasiswa"
                    onChange={onRequiredTypeChange}
                    style={{ width: "150px" }}
                  >
                    <Option value="mahasiswa">Mahasiswa</Option>
                    <Option value="dosen">Dosen</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              name="username"
              label={`Username / ${
                registerType === "mahasiswa" ? "NIM" : "NIDN"
              }`}
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
              tooltip="This is a required field"
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder={`Input Username / ${
                  registerType === "mahasiswa" ? "NIM" : "NIDN"
                } `}
              />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
              tooltip={{
                title: "Tooltip with customize icon",
                icon: <InfoCircleOutlined />,
              }}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="input password"
              />
            </Form.Item>
            <Row justify="space-between">
              <Col>
                <Button type="primary" htmlType="submit">
                  {" "}
                  Sign Up{" "}
                </Button>
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
