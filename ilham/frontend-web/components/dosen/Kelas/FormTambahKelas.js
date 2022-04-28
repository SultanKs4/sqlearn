import { Button, Col, Divider, Form, Input, Row, Select, Upload } from "antd";
import { LaptopOutlined, InboxOutlined } from "@ant-design/icons";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { addMahasiswaByExcel } from "../../../utils/remote-data/dosen/KelasCRUD";

function FormTambahKelas({ form, setVisible, handleSubmit, ...props }) {
  const { data: session } = useSession();

  const [fileList, setFileList] = useState();

  const onFinish = (values) => handleSubmit({ ...values, excel: fileList });
  const normFile = (e) => console.log("Upload event:", e);

  const handleCancel = () => setVisible(false);

  return (
    <Form onFinish={onFinish} layout="vertical">
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
              placeholder={` Format [Prodi]-[Kelas]-[Tahun] . . .`}
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
      <Form.Item label="Upload Data Kelas">
        <Row justify="center">
          <Form.Item
            name="excel"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            noStyle
          >
            <Upload.Dragger
              {...addMahasiswaByExcel(session?.user?.tokenJWT, setFileList)}
              style={{ padding: "3em" }}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Hanya bisa upload file .xlsx atau .xls{" "}
              </p>
            </Upload.Dragger>
          </Form.Item>
        </Row>
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

export default FormTambahKelas;
