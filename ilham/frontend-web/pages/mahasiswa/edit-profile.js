import Head from "next/head";
import {
  Typography,
  Row,
  Col,
  Divider,
  Card,
  Avatar,
  Button,
  Input,
  Form,
} from "antd";

import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styles from "../../styles/mahasiswa/beranda.module.css";
import PageLayout from "../../components/PageLayout";

function EditProfile() {
  const onFinish = (values) => {
    console.log(values);
    // setFormObj(values);
    // handleSubmit(values);
  };

  // TODO : Sync backend
  // Field Yang bisa diubah cuma username dan password
  return (
    <>
      <Head>
        <title>SQLearn | Mahasiswa - Ubah Profile </title>
      </Head>
      <PageLayout role="mahasiswa">
        <Card>
          <Typography.Title level={3} style={{ marginBottom: "1em" }}>
            Profile Mahasiswa
          </Typography.Title>
          <Row justify="center">
            <Avatar size={64} icon={<UserOutlined />} />
          </Row>
          <Row className={styles.row_profile}>
            <Col span={12}>NIM</Col>
            <Col span={12} className={styles.text_right}>
              1841720076
            </Col>
          </Row>
          <Row className={styles.row_profile}>
            <Col span={12}>Username</Col>
            <Col span={12} className={styles.text_right}>
              1841720076
            </Col>
          </Row>
          <Row className={styles.row_profile}>
            <Col span={12}>Nama</Col>
            <Col span={12} className={styles.text_right}>
              Muhammad Ilham Adhim
            </Col>
          </Row>
          <Row className={styles.row_profile}>
            <Col span={12}>Kelas</Col>
            <Col span={12} className={styles.text_right}>
              TI-4I
            </Col>
          </Row>
          <Row className={styles.row_profile}>
            <Col span={12}>Dosen Pengampu Basis Data</Col>
            <Col span={12} className={styles.text_right}>
              Mr. Ilham Adhim
            </Col>
          </Row>
        </Card>
        <Divider />
        <Card style={{ marginTop: "1em" }}>
          <Typography.Title level={3} style={{ marginBottom: "1em" }}>
            Ubah Profile
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
