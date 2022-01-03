import React, { useState } from "react";
import { Form, Input, Button, Radio, Card, Row, Col, Typography } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import Head from "next/head";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const [form] = Form.useForm();
  const [loginType, setLoginTypeType] = useState("mahasiswa");

  const onRequiredTypeChange = ({ loginTypeValue }) => {
    setLoginTypeType(loginTypeValue);
  };

  return (
    <>
      <Head>
        <title>SQLearn | Login </title>
      </Head>
      <Row align="middle" justify="center" style={{ minHeight: "100vh" }}>
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
              loginTypeValue: loginType
            }}
            onValuesChange={onRequiredTypeChange}
            loginType={loginType}
          >
            <Form.Item label="Login sebagai" name="loginTypeValue">
              <Radio.Group>
                <Radio.Button value="mahasiswa">Mahasiswa</Radio.Button>
                <Radio.Button value="dosen">Dosen</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label={`Username ${loginType}`}
              required
              tooltip="This is a required field"
            >
              <Input placeholder="Input Username..." />
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
                <Button type="primary">Submit</Button>
              </Col>
              <Col>
                <Typography.Text
                  underline
                  onClick={() => {
                    router.push("/auth/forgot_password");
                  }}
                >
                  Lupa Password
                </Typography.Text>
              </Col>
            </Row>
          </Form>
        </Card>
      </Row>
    </>
  );
};

export default Login;
