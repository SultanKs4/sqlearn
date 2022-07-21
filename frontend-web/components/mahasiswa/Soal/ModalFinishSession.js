import { Button, Col, Row } from "antd";

const ModalFinishSession = ({
  setVisible,
  handleSubmit,
  isButtonLoading,
  ...props
}) => {
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
          <Button
            ghost
            type="primary"
            loading={isButtonLoading}
            onClick={() => handleSubmit()}
          >
            {isButtonLoading ? "Menghitung Skor Anda..." : "Ya, Akhiri"}
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default ModalFinishSession;
