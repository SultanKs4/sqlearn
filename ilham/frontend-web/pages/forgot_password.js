import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Card,
  Row,
  Col,
  Typography,
} from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import Head from "next/head";

import { useRouter } from "next/router";

const ForgotPassword = (props) => {
  const [role, setRole] = useState("mahasiswa");
  const onRequiredTypeChange = (activeRole) => setRole(activeRole);

  const [form] = Form.useForm();

  return (
    <>
      <Head>
        <title>SQLearn | Forgot Password </title>
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
            width: "500px",
          }}
        >
          <Form
            form={form}
            layout="vertical"
            initialValues={{
              remember: true,
              loginTypeValue: role,
            }}
          >
            <Row justify="space-between">
              <Col>
                <Typography.Title level={2}>Lupa Password</Typography.Title>
              </Col>
              <Col>
                <Form.Item name="loginTypeValue">
                  <Select
                    defaultValue={"mahasiswa"}
                    onChange={onRequiredTypeChange}
                    style={{ width: "150px" }}
                  >
                    <Select.Option value="mahasiswa">Mahasiswa</Select.Option>
                    <Select.Option value="dosen">Dosen</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              label={`Username / ${role}`}
              required
              tooltip="This is a required field"
            >
              <Input placeholder={`Input Username / ${role} . . .`} />
            </Form.Item>
            <Form.Item
              label="Password Baru"
              tooltip={{
                title: "Tooltip with customize icon",
                icon: <InfoCircleOutlined />,
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
