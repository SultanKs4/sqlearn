import { Button, Col, Form, message, Row } from "antd";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { finishSession } from "../../../utils/remote-data/mahasiswa/Session";

const ModalFinishSession = ({ setVisible, ...props }) => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSubmit = () => {
    finishSession(session?.user?.tokenJWT, router.query?.session_id)
      .then((res) => {
        message.success("Anda telah menyelesaikan ujian ! ");
        setTimeout(() => {
          router.push(
            `/mahasiswa/soal/${parseInt(router.query.idJadwal)}/ujian-selesai`
          );
        }, [3000]);
      })
      .catch((err) => message.error("Mohon coba beberapa saat lagi"));
  };

  return (
    <>
      <Row justify="center">Apakah Anda ingin mengakhiri ujian ini ?</Row>
      <Row justify="center" style={{ marginTop: "1em" }} gutter={10}>
        <Col>
          <Button type="danger" ghost onClick={() => setVisible(false)}>
            Batal
          </Button>
        </Col>
        <Col>
          <Button ghost type="primary" onClick={() => handleSubmit()}>
            Submit
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default ModalFinishSession;
