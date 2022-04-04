import React, { useEffect, useState } from "react";
import { Form, Input, Button, Card, Row, Col, Typography, Select } from "antd";
import {
  InfoCircleOutlined,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";
import Head from "next/head";

import { useRouter } from "next/router";
import { getProviders, signIn } from "next-auth/react";
const { Option } = Select;

const Register = ({ providers, csrfToken }) => {
  const router = useRouter();

  const [form] = Form.useForm();
  const [registerType, setRegisterType] = useState("mahasiswa");
  const [providersAuth, setProvidersAuth] = useState("");

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    console.log("redirect to : ", `http://localhost:3000/${values.level}`);

    // signIn(providersAuth?.credentials?.id, {
    //   callbackUrl: `http://localhost:3000/${values.levl}`,
    //   username: values.username,
    //   registerType: values.registerType,
    //   password: values.password,
    // });
  };

  useEffect(() => {
    getProviders().then((result) => {
      setProvidersAuth(result);
    });
  }, []);

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
                <Form.Item name="level">
                  <Select style={{ width: "150px" }} defaultValue="mahasiswa">
                    <Option value="mahasiswa">Mahasiswa</Option>
                    <Option value="dosen">Dosen</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              name="username"
              label={`Username`}
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
              tooltip="This is a required field"
            >
              <Input
                autoComplete="off"
                prefix={<UserOutlined />}
                placeholder={`Input Username`}
              />
            </Form.Item>
            <Form.Item
              name="name"
              label={`Nama`}
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
              tooltip="This is a required field"
            >
              <Input
                autoComplete="off"
                prefix={<UserOutlined />}
                placeholder={`Input Name . . .`}
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
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="input password"
              />
            </Form.Item>
            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password prefix={<LockOutlined />} />
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
                  onClick={() => router.push("/login")}
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
