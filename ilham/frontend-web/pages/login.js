import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Button,
  Card,
  Row,
  Checkbox,
  Col,
  Select,
  Typography,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Head from "next/head";
import { getProviders, signIn } from "next-auth/react";

const { Option } = Select;

const Login = ({ providers, csrfToken }) => {
  const [form] = Form.useForm();

  const [loginType, setLoginType] = useState("mahasiswa");
  const [providersAuth, setProvidersAuth] = useState("");

  const onRequiredTypeChange = (activeRole) => setLoginType(activeRole);

  const onFinish = (values) => {
    signIn(providersAuth?.credentials?.id, {
      callbackUrl: `http://localhost:3000/${values.loginTypeValue}`,
      username: values.username,
      loginTypeValue: values.loginTypeValue,
      password: values.password,
    });
  };

  useEffect(() => {
    getProviders().then((result) => {
      setProvidersAuth(result);
    });
  }, []);

  return (
    <>
      <Head>
        <title>SQLearn | Login </title>
      </Head>
      <Row align="middle" justify="center" style={{ minHeight: "100vh" }}>
        {/* <EmptyData /> */}
        <Card
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            width: "400px",
          }}
        >
          <Form
            method="POST"
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
              loginTypeValue: loginType,
            }}
            form={form}
            onFinish={onFinish}
          >
            <Row justify="space-between">
              <Col>
                {" "}
                <Typography.Text style={{ fontWeight: "bold" }}>
                  {" "}
                  Login Sebagai{" "}
                </Typography.Text>{" "}
              </Col>
              <Col>
                <Form.Item name="loginTypeValue">
                  <Select
                    onChange={onRequiredTypeChange}
                    style={{ width: "150px" }}
                  >
                    <Option value="mahasiswa">Mahasiswa</Option>
                    <Option value="dosen">Dosen</Option>
                    <Option value="admin">Admin</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                autoComplete="off"
                prefix={<UserOutlined />}
                placeholder={`Username ${loginType} . . .`}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Row justify="space-between">
                <Col>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                </Col>
              </Row>
            </Form.Item>

            <Form.Item>
              <Row justify="space-between">
                <Col>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Log in
                  </Button>
                </Col>
              </Row>
            </Form.Item>
          </Form>
        </Card>
      </Row>
    </>
  );
};

export default Login;
