import { Typography, Row, Col, Divider, Card, Avatar } from "antd";

import { UserOutlined } from "@ant-design/icons";
import styles from "../../styles/mahasiswa/beranda.module.css";

function ProfilMahasiswa() {
  return (
    <Card style={{ minHeight: "60vh" }}>
      <Typography.Title level={2}> Profil </Typography.Title>
      <Divider />
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
  );
}

export default ProfilMahasiswa;
