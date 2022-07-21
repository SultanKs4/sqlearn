import { Button, Col, Form, message, Row } from "antd";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { resetOpenEndedDatabase } from "../../../utils/remote-data/mahasiswa/Soal";

const FormResetDatabase = ({ setVisible, ...props }) => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSubmit = () => {
    resetOpenEndedDatabase(session?.user?.tokenJWT, router.query?.session_id)
      .then((res) => {
        message.success("Database berhasil di reset");
        setVisible(false);
      })
      .catch((err) => message.error("Database gagal di reset"));
  };

  return (
    <>
      <Row justify="center">Apakah Anda yakin ingin reset database ini ?</Row>
      <Row justify="center" style={{ marginTop: "1em" }} gutter={10}>
        <Col>
          <Button ghost type="primary" onClick={() => setVisible(false)}>
            Tidak
          </Button>
        </Col>
        <Col>
          <Button type="danger" ghost onClick={() => handleSubmit()}>
            Ya, Hapus
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default FormResetDatabase;
