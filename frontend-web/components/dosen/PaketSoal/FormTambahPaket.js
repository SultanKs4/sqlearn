import { Button, Col, Divider, Form, Input, Row, Select } from "antd";
import { CodeSandboxOutlined } from "@ant-design/icons";
import { useState } from "react";

function FormTambahPaket({ form, setVisible, handleSubmit, ...props }) {
  const [selectedKategori, setSelectedKategori] = useState("");

  const onFinish = ({ label_id, ...values }) => {
    handleSubmit({
      label_id: selectedKategori === "Close-Ended" ? 2 : 1,
      ...values,
    });
  };

  const handleCancel = () => setVisible(false);

  const onChangeKategori = (kategori) => setSelectedKategori(kategori);

  return (
    <Form onFinish={onFinish} layout="vertical">
      <Row gutter={20}>
        <Col>
          <Form.Item
            name="description"
            label="Nama Paket"
            rules={[
              {
                required: true,
                message: "Masukkan nama Paket!",
              },
            ]}
          >
            <Input
              autoComplete="off"
              prefix={<CodeSandboxOutlined />}
              placeholder={` Contoh : Paket Soal E `}
            />
          </Form.Item>
        </Col>
        <Col>
          <Col span={12}>
            <Form.Item
              name="label_id"
              label="Kategori"
              rules={[
                {
                  required: true,
                  message: "Mohon masukkan nama Kategori!",
                },
              ]}
            >
              <Select
                placeholder="Pilih Kategori . . ."
                style={{ width: "200px" }}
                onChange={onChangeKategori}
              >
                <Option key="Open-Ended">Open-Ended</Option>
                <Option key="Close-Ended">Close-Ended</Option>
              </Select>
            </Form.Item>
          </Col>
        </Col>
      </Row>

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
