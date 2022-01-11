import { Button, Col, Divider, Form, Input, Row, Select } from "antd";
import { LaptopOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

function FormTambahKelas({
  setFormObj,
  setVisible,
  handleSubmit,
  currentKelas,
  ...props
}) {
  const [form] = Form.useForm();
  const { Option } = Select;

  const onFinish = (values) => {
    setFormObj(values);
    handleSubmit(values);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  const [semester, setSemester] = useState("");

  const onChangeSemester = (val) => setSemester(val);

  useEffect(() => {
    form.setFieldsValue({
      kelas_nama: currentKelas?.name,
    });
  }, [currentKelas]);

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
      initialValues={{
        kelas_nama: currentKelas?.name,
        semester: 1,
      }}
    >
      <Row gutter={10}>
        <Col span={13}>
          <Form.Item
            name="kelas_nama"
            label="Nama Kelas"
            rules={[
              {
                required: true,
                message: "Masukkan nama kelas!",
              },
            ]}
          >
            <Input prefix={<LaptopOutlined />} placeholder={` Kelas . . .`} />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item
            name="semester"
            label="Semester"
            rules={[
              {
                required: true,
                message: "Mohon masukkan data semester!",
              },
            ]}
          >
            <Select
              placeholder="Pilih semester . . ."
              onChange={onChangeSemester}
              style={{ width: "200px" }}
            >
              <Option key={1}> 1 </Option>
              <Option key={2}> 2 </Option>
            </Select>
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

export default FormTambahKelas;
