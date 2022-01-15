import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Row,
  Select,
} from "antd";
import { ScheduleOutlined, CodeSandboxOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { isObjectEmpty } from "../../../utils/common";
import { mockGetAllStudiKasus } from "../../../utils/remote-data/dosen/StudiKasus";

function FormTambahPaket({
  form,
  setFormObj,
  setVisible,
  handleSubmit,
  ...props
}) {
  const onFinish = (values) => {
    setFormObj(values);
    handleSubmit(values);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item
        name="paket_nama"
        label="Nama Paket"
        rules={[
          {
            required: true,
            message: "Masukkan nama Paket!",
          },
        ]}
      >
        <Input
          prefix={<CodeSandboxOutlined />}
          placeholder={` Contoh : Paket Soal E `}
        />
      </Form.Item>
      <Divider />
      <Row justify="end" gutter={10} style={{ padding: 0, margin: 0 }}>
        <Col>
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>
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

export default FormTambahPaket;
