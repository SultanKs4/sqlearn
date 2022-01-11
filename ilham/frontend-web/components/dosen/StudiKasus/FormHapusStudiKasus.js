import { Button, Col, Form, Row } from "antd";

function FormHapusStudiKasus({
  form,
  currentStudiKasus,
  setVisible,
  handleSubmit,
  ...props
}) {
  return (
    <>
      <Row justify="center">
        {`Apakah Anda yakin ingin menghapus ${currentStudiKasus.nama} ?`}
      </Row>
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
            onClick={() => handleSubmit(currentStudiKasus)}
          >
            Ya, Hapus
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default FormHapusStudiKasus;
