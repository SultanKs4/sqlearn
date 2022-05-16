import { React } from "react";

import Head from "next/head";
import { Button, Card, Form, Input, Typography, Row, Col, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import PageLayout from "../../components/PageLayout";
import { signOut, useSession } from "next-auth/react";
import { editPassword } from "../../utils/remote-data/admin/DataUser";

function EditProfile() {
  const { data: session } = useSession();

  const onFinish = (values) => {
    editPassword(session?.user?.tokenJWT, session?.user?.id, values)
      .then((res) => {
        message.success(
          `Password berhasil diubah. Mohon login kembali dalam 3 detik`
        );
        setTimeout(() => {
          signOut();
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        message.error("Password gagal diubah");
      });
  };

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
                  name="password_old"
                  label="Password"
                  rules={[
                    {
                      required: true,
                      message: "Mohon masukkan password !",
                    },
                  ]}
                >
                  <Input.Password
                    type="password"
                    prefix={<LockOutlined />}
                    placeholder={` Password . . .`}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col>
                <Form.Item
                  name="password_new"
                  label="Password baru"
                  rules={[
                    {
                      required: true,
                      message: "Mohon masukkan Password baru !",
                    },
                  ]}
                >
                  <Input.Password
                    prefix={<UserOutlined />}
                    placeholder={` Password baru . . .`}
                  />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item
                  name="password_confirmation"
                  label="Konfirmasi Password"
                  rules={[
                    {
                      required: true,
                      message: "Mohon konfirmasi password !",
                    },
                  ]}
                >
                  <Input.Password
                    type="password"
                    prefix={<LockOutlined />}
                    placeholder={` Konfirmasi Password . . .`}
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
              Submit{" "}
            </Button>
          </Form>
        </Card>
      </PageLayout>
    </>
  );
}

export default EditProfile;
