import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  message,
  Row,
  Select,
  Upload,
} from "antd";
import { ConsoleSqlOutlined, DatabaseOutlined } from "@ant-design/icons";

function FormTambahSoal({
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
        name="nama_soal"
        label="Nama Soal"
        rules={[
          {
            required: true,
            message: "Mohon masukkan nama Soal!",
          },
        ]}
      >
        <Input prefix={<ConsoleSqlOutlined />} placeholder={` Soal . . .`} />
      </Form.Item>
      <Form.Item
        name="soal"
        label="Soal"
        rules={[
          {
            required: true,
            message: "Mohon masukkan nama Soal!",
          },
        ]}
      >
        <Input prefix={<ConsoleSqlOutlined />} placeholder={` Soal . . .`} />
      </Form.Item>
      <Form.Item
        name="jawaban"
        label="Jawaban"
        rules={[
          {
            required: true,
            message: "Mohon masukkan nama Soal!",
          },
        ]}
      >
        <Input prefix={<ConsoleSqlOutlined />} placeholder={` Soal . . .`} />
      </Form.Item>
      <Form.Item
        name="studi_kasus"
        label="Studi Kasus"
        rules={[
          {
            required: true,
            message: "Mohon masukkan nama Soal!",
          },
        ]}
      >
        <Input prefix={<ConsoleSqlOutlined />} placeholder={` Soal . . .`} />
      </Form.Item>
      <Form.Item
        name="dosen_pembuat"
        label="Dibuat oleh"
        rules={[
          {
            required: true,
            message: "Mohon masukkan nama Soal!",
          },
        ]}
      >
        <Input prefix={<ConsoleSqlOutlined />} placeholder={` Soal . . .`} />
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

export default FormTambahSoal;
