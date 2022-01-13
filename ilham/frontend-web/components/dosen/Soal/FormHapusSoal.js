import { Button, Col, Form, Row } from "antd";

function FormHapusSoal({
  form,
  currentSoal,
  setVisible,
  handleSubmit,
  ...props
}) {
  return (
    <>
      <Row justify="center">
        {`Apakah Anda yakin ingin menghapus ${currentSoal.nama} ?`}
      </Row>
      <Row justify="center" style={{ marginTop: "1em" }} gutter={10}>
        <Col>
          <Button ghost type="primary" onClick={() => setVisible(false)}>
            Tidak
          </Button>
        </Col>
        <Col>
          <Button type="danger" ghost onClick={() => handleSubmit(currentSoal)}>
            Ya, Hapus
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default FormHapusSoal;
