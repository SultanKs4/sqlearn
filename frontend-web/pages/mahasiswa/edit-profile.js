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
  message,
} from "antd";

import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styles from "../../styles/mahasiswa/beranda.module.css";
import PageLayout from "../../components/PageLayout";
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";
import { getDetailMahasiswa } from "../../utils/remote-data/mahasiswa/DetailMahasiswa";
import { editPasswordMahasiswa } from "../../utils/remote-data/dosen/MahasiswaCRUD";

function EditProfile() {
  const { data: session } = useSession();

  const [dataMhs, setDataMhs] = useState([]);
  const [isDataMhsLoaded, setIsDataMhsLoaded] = useState(false);

  const fetchDataMhs = useCallback(() => {
    if (session !== undefined)
      getDetailMahasiswa(session?.user?.tokenJWT, session?.user?.id)
        .then((res) => {
          setDataMhs(res.data);
          setIsDataMhsLoaded(true);
        })
        .catch((e) => message.error("Gagal mengambil data mahasiswa"));
  }, [session]);

  useEffect(() => {
    fetchDataMhs();
  }, [fetchDataMhs]);

  const onFinish = (values) => {
    editPasswordMahasiswa(session?.user?.tokenJWT, values, session?.user?.id)
      .then(() => message.success("Password berhasil diubah"))
      .catch(() => message.error("Password gagal diubah"));
  };

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

          {isDataMhsLoaded && (
            <>
              <Row className={styles.row_profile}>
                <Col span={12}>NIM</Col>
                <Col span={12} className={styles.text_right}>
                  {dataMhs.nim}
                </Col>
              </Row>
              <Row className={styles.row_profile}>
                <Col span={12}>Username</Col>
                <Col span={12} className={styles.text_right}>
                  {dataMhs.username}
                </Col>
              </Row>
              <Row className={styles.row_profile}>
                <Col span={12}>Kelas</Col>
                <Col span={12} className={styles.text_right}>
                  {dataMhs?.classes[0]?.name}
                </Col>
              </Row>
              <Row className={styles.row_profile}>
                <Col span={12}>Nama</Col>
                <Col span={12} className={styles.text_right}>
                  {dataMhs.name}
                </Col>
              </Row>
            </>
          )}
        </Card>
        <Divider />
        <Card>
          <Typography.Title level={3} style={{ marginBottom: "1em" }}>
            Ubah Password
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
