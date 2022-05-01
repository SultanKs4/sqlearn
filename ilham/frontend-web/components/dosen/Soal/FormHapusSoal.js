import { Button, Col, Row } from "antd";
import { removeHTML } from "../../../utils/common";

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
        <Col>
          <span style={{ fontStyle: "italic" }}>
            {removeHTML(currentSoal?.text)}
          </span>
          <br />
          <span style={{ fontWeight: "bold" }}>
            {" "}
            Apakah Anda yakin ingin menghapus soal ini ?
          </span>
        </Col>
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
