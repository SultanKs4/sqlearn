import { Button, Col, Form, Row } from "antd";

function FormHapusJadwal({
  form,
  currentJadwal,
  setVisible,
  handleSubmit,
  ...props
}) {
  console.log(currentJadwal);
  return (
    <>
      <Row justify="center">
        Apakah Anda yakin ingin menghapus jadwal
        <span style={{ fontWeight: "bold", marginLeft: ".5em" }}>
          {currentJadwal?.description} ?
        </span>
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
            onClick={() => handleSubmit(currentJadwal)}
          >
            Ya, Hapus
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default FormHapusJadwal;
