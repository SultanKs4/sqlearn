import { Button, Col, Divider, Form, Input, Row, Select } from "antd";
import { LaptopOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

function FormEditKelas({ setVisible, handleSubmit, currentKelas, ...props }) {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState();

  const onFinish = (values) => {
    handleSubmit(values);
  };

  const handleCancel = () => setVisible(false);

  useEffect(() => {
    form.setFieldsValue({
      id: currentKelas?.id,
      name: currentKelas?.name,
      semester: currentKelas?.semester,
    });
  }, [currentKelas]);

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Row gutter={10}>
        <Col span={13}>
          <Form.Item
            name="name"
            label="Nama Kelas"
            extra={
              <>
                Format [Prodi]-[Kelas]-[Tahun] <br /> Contoh: TI-1A-2021
              </>
            }
            rules={[
              {
                required: true,
                message: "Masukkan nama kelas!",
              },
            ]}
          >
            <Input
              autoComplete="off"
              prefix={<LaptopOutlined />}
              placeholder={`Format [Prodi]-[Kelas]-[Tahun] . . .`}
            />
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
              style={{ width: "200px" }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Select.Option key={item}>{item}</Select.Option>
              ))}
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

export default FormEditKelas;
