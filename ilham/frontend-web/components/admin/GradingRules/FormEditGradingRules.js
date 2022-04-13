import { React, useEffect } from "react";

import { Button, Col, Form, Input, Row, Select } from "antd";

function EditGradingRules({
  setVisible,
  handleSubmit,
  currentRules,
  ...props
}) {
  const [form] = Form.useForm();
  console.log(currentRules);

  useEffect(() => {
    if (currentRules !== undefined) {
      form.setFieldsValue({
        type: currentRules?.type,
        value: currentRules?.value,
        attemps: currentRules?.attemps,
      });
    }
  }, [currentRules]);

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Row gutter={20} align="middle">
        <Col span={8}>
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
            <Select placeholder={`Ujian / Latihan . . .`}>
              <Select.Option key="ujian"> Ujian </Select.Option>
              <Select.Option key="latihan"> Latihan </Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
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
        <Col span={8}>
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
      </Row>
      <Row justify="end" gutter={10}>
        <Col>
          <Button onClick={() => setVisible(false)}>Cancel</Button>
        </Col>
        <Col>
          <Button key="submit" type="primary" htmlType="submit">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default EditGradingRules;
