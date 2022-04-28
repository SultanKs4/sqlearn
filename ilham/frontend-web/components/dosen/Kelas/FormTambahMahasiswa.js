import { Button, Col, Divider, Form, Input, Row, Select } from "antd";
import { UserOutlined } from "@ant-design/icons";

function FormTambahMahasiswa({ setVisible, handleSubmit }) {
  const onFinish = (values) => {
    handleSubmit(values);
  };

  const handleCancel = () => setVisible(false);

  return (
    <Form onFinish={onFinish} layout="vertical">
      <Row gutter={10}>
        <Col span={12}>
          <Form.Item
            name="name"
            label="Nama Mahasiswa"
            rules={[
              {
                required: true,
                message: "Masukkan nama Mahasiswa!",
              },
            ]}
          >
            <Input
              autoComplete="off"
              prefix={<UserOutlined />}
              placeholder={` Contoh : Muhammad Ilham . . .`}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="nim"
            label="NIM Mahasiswa"
            rules={[
              {
                required: true,
                message: "Masukkan NIM Mahasiswa!",
              },
            ]}
          >
            <Input
              autoComplete="off"
              prefix={<UserOutlined />}
              placeholder={` Contoh : 18417200xx   . . .`}
            />
          </Form.Item>
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

export default FormTambahMahasiswa;
