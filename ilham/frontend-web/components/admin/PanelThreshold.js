import { React } from "react";

import {
  Alert,
  Button,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Typography,
} from "antd";
import { ConsoleSqlOutlined } from "@ant-design/icons";

function PanelThreshold({
  onFinish,
  dataThreshold,
  isDataThresholdLoaded,
  ...props
}) {
  const [form] = Form.useForm();

  const onSubmit = (values) => {
    onFinish(values);
    form.resetFields();
  };

  return (
    <>
      <Alert
        showIcon
        type="info"
        description="Threshold merupakan ... , diharapkan untuk memasukkan value berupa float"
      />

      <Typography.Title level={4} style={{ marginTop: "1em" }}>
        Threshold saat ini : {dataThreshold?.value}
      </Typography.Title>
      <Divider />

      <Form form={form} onFinish={onSubmit} layout="vertical">
        <Row gutter={20} style={{ marginTop: "1em" }} align="middle">
          <Col>
            <Form.Item
              name="threshold"
              label="Nilai Threshold"
              rules={[
                {
                  required: true,
                  message: "Mohon masukkan Threshold untuk Penilaian !",
                },
                {
                  pattern: /^[0-9]*\.?[0-9]*$/,
                  message: "Harap memasukkan value threshold berupa float",
                },
              ]}
            >
              <Input
                autoComplete="off"
                prefix={<ConsoleSqlOutlined />}
                placeholder={` Nilai Threshold . . .`}
              />
            </Form.Item>
          </Col>
          <Col>
            <Button key="submit" type="primary" htmlType="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default PanelThreshold;
