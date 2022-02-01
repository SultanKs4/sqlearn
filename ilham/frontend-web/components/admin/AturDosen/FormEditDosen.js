import { Button, Col, Divider, Form, Input, Row, Select } from "antd";
import { CodeSandboxOutlined, UserOutlined } from "@ant-design/icons";
import { useEffect } from "react";

function FormEditDosen({
  currentDosen,
  setFormObj,
  setVisible,
  handleSubmit,
  ...props
}) {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    setFormObj(values);
    handleSubmit(values);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  useEffect(() => {
    form.setFieldsValue({
      nomor_induk: currentDosen?.nomor_induk,
      nama_dosen: currentDosen?.nama_dosen,
      username: currentDosen?.username,
    });
  }, []);

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
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
            <Input prefix={<UserOutlined />} placeholder={` Username . . . `} />
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

export default FormEditDosen;
