import { Button, Col, Row } from "antd";

function FormHapusDosen({
  form,
  currentDosen,
  setVisible,
  handleSubmit,
  ...props
}) {
  return (
    <>
      <Row justify="center">Apakah Anda yakin ingin menghapus Dosen ini ?</Row>
      <Row justify="center" style={{ marginTop: "1em" }} gutter={10}>
        <Col>
          <Button ghost type="primary" onClick={() => setVisible(false)}>
            Tidak
          </Button>
        </Col>
        <Col>
          <Button
            type="danger"
            ghost
            onClick={() => handleSubmit(currentDosen)}
          >
            Ya, Hapus
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default FormHapusDosen;
