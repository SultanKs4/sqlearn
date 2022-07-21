import { Button, Col, Row } from "antd";

const FormDeleteGradingRules = ({
  setVisible,
  handleSubmit,
  currentRules,
  ...props
}) => {
  return (
    <>
      <Row justify="center">
        Apakah Anda ingin menghapus grading rules ini ?
      </Row>
      <Row justify="center" style={{ marginTop: "1em" }} gutter={10}>
        <Col>
          <Button type="primary" ghost onClick={() => setVisible(false)}>
            Batal
          </Button>
        </Col>
        <Col>
          <Button
            ghost
            type="danger"
            onClick={() => handleSubmit(currentRules?.id)}
          >
            Ya
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default FormDeleteGradingRules;
