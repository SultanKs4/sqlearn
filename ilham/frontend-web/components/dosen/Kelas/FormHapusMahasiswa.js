import { Button, Col, Form, Row } from "antd";

function FormHapusMahasiswa({
  form,
  currentMhs,
  setVisible,
  handleSubmit,
  ...props
}) {
  return (
    <>
      <Row justify="center">
        Apakah Anda yakin ingin menghapus Mahasiswa ini ?
      </Row>
      <Row justify="center" style={{ marginTop: "1em" }} gutter={10}>
        <Col>
          <Button ghost type="primary" onClick={() => setVisible(false)}>
            Tidak
          </Button>
        </Col>
        <Col>
          <Button type="danger" ghost onClick={() => handleSubmit(currentMhs)}>
            Ya, Hapus
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default FormHapusMahasiswa;
