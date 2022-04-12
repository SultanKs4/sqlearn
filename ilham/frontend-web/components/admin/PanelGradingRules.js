import { React } from "react";

import {
  Alert,
  Button,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Typography,
} from "antd";
import ListComponent from "../../components/List";

function PanelGradingRules({
  onFinish,
  dataGradingRules,
  isGradingRulesLoaded,
  ...props
}) {
  // TODO : Handle open modal update & delete before update
  return (
    <>
      <Alert
        showIcon
        type="info"
        description="Additional description and information about copywriting."
        style={{ marginBottom: "1em" }}
      />
      <Form onFinish={onFinish} layout="vertical">
        <Row gutter={20} align="middle">
          <Col>
            <Form.Item
              name="type"
              label="Pilih Tipe"
              rules={[
                {
                  required: true,
                  message: "Mohon pilih tipe",
                },
              ]}
            >
              <Select
                style={{ width: "200px" }}
                placeholder={`Ujian / Latihan . . .`}
              >
                <Select.Option key="ujian"> Ujian </Select.Option>
                <Select.Option key="latihan"> Latihan </Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              name="value"
              label="Score maksimal"
              rules={[
                {
                  required: true,
                  message: "Mohon masukkan maksimal nilai score yang didapat",
                },
              ]}
            >
              <Input type={"number"} placeholder={` Score maksimal . . .`} />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              name="attemps"
              label="Jumlah percobaan"
              rules={[
                {
                  required: true,
                  message: "Mohon masukkan jumlah percobaan",
                },
              ]}
            >
              <Input type={"number"} placeholder={` Jumlah percobaan . . .`} />
            </Form.Item>
          </Col>
          <Col>
            <Button key="submit" type="primary" htmlType="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>

      <Divider />
      <Typography.Title level={4} style={{ marginBottom: "1em" }}>
        Daftar Grading Rules
      </Typography.Title>
      <ListComponent
        role={"grading-rules"}
        dataSource={dataGradingRules}
        isLoading={!isGradingRulesLoaded}
      />
    </>
  );
}

export default PanelGradingRules;
