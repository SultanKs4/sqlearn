import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Typography,
  Upload,
} from "antd";
import { LaptopOutlined, InboxOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { addMahasiswaByExcel } from "../../../utils/remote-data/dosen/KelasCRUD";
import { useSession } from "next-auth/react";

function FormTambahKelas({ setVisible, handleSubmit, currentKelas, ...props }) {
  const { data: session } = useSession();
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState();
  const [isUploading, setIsUploading] = useState(false);

  const onFinish = (values) => {
    handleSubmit(values);
    // handleUploadExcel();
  };

  const handleCancel = () => setVisible(false);

  const normFile = (e) => console.log("Upload event:", e);

  // TODO : Handler untuk edit kelas dan nembak API ke upload excel
  // ! (Error 404), untuk endpoint upload excel dan perlu update code di FE juga
  // const handleUploadExcel = () => {
  //   const formData = new FormData();
  //   fileList?.forEach((file) => 1);
  // };

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
            name="excelFile"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            noStyle
          >
            <Upload.Dragger
              {...addMahasiswaByExcel(
                session?.user?.tokenJWT,
                currentKelas?.id
              )}
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
