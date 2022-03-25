import { Button, Col, Divider, Form, Input, Row, Select } from "antd";
import { CodeSandboxOutlined, UserOutlined } from "@ant-design/icons";

function FormTambahDosen({ setFormObj, setVisible, handleSubmit, ...props }) {
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
      <Row>
        <Col span={22}>
          <Form.Item
            name="nomor_induk"
            label="Nomor Induk"
            rules={[
              {
                required: true,
                message: "Masukkan nama Nomor Induk!",
              },
            ]}
          >
            <Input
              autoComplete="off"
              prefix={<CodeSandboxOutlined />}
              placeholder={` Nomor Induk Dosen . . . `}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col>
          <Form.Item
            name="nama_dosen"
            label="Nama Dosen"
            rules={[
              {
                required: true,
                message: "Masukkan nama Dosen!",
              },
            ]}
          >
            <Input
              autoComplete="off"
              prefix={<UserOutlined />}
              placeholder={` Nama Dosen . . . `}
            />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item
            name="username"
            label="Username"
            rules={[
              {
                required: true,
                message: "Mohon masukkan Username untuk dosen!",
              },
            ]}
          >
            <Input
              autoComplete="off"
              prefix={<UserOutlined />}
              placeholder={` Username . . . `}
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

export default FormTambahDosen;
