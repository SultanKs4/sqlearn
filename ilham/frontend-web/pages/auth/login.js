import React, { useState } from "react";
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
import { useRouter } from "next/router";

const { Option } = Select;

const mockValidate = (valueInput) => {
  if (valueInput.loginTypeValue === "mahasiswa")
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

const Login = () => {
  const router = useRouter();

  const [form] = Form.useForm();

  const [loginType, setLoginType] = useState("mahasiswa");

  const onRequiredTypeChange = (activeRole) => setLoginType(activeRole);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    if (mockValidate(values)) {
      if (values.loginTypeValue === "mahasiswa")
        router.push("/mahasiswa/beranda");
      else router.push("/dosen/jadwal");
    }
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
            width: "400px",
          }}
        >
          <Form
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
              tooltip={{
                title: `Bisa menggunakan ${
                  loginType === "mahasiswa" ? "NIM" : "NIDN"
                }`,
              }}
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
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
                <Col>
                  <a
                    className="login-form-forgot"
                    onClick={() => {
                      router.push("/auth/forgot_password");
                    }}
                  >
                    Forgot password
                  </a>
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
                <Col>
                  Or{" "}
                  <a
                    onClick={() => {
                      router.push("/auth/register");
                    }}
                  >
                    Register now!
                  </a>
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
