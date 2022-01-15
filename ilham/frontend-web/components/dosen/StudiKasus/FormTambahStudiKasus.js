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
import { InboxOutlined, DatabaseOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getKelas } from "../../../utils/remote-data/dosen/KelasCRUD";
import { isObjectEmpty } from "../../../utils/common";
import { mockGetPaketSoal } from "../../../utils/remote-data/dosen/PaketSoalCRUD";

function FormTambahStudiKasus({
  form,
  setFormObj,
  setVisible,
  handleSubmit,
  ...props
}) {
  const normFile = (e) => console.log("Upload event:", e);

  const onFinish = (values) => {
    setFormObj(values);
    handleSubmit(values);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  const validationSQLFile = (file) => {
    if (!file.name.includes(".sql")) {
      console.log("bukan sql");
      message.error(`${file.name} is not a .sql file`);
    }
    return file.name.includes(".sql") ? true : Upload.LIST_IGNORE;
  };

  return (
    <Form onFinish={onFinish} layout="vertical">
      <Row gutter={20}>
        <Col span={12}>
          <Form.Item
            name="studi_kasus_nama"
            label="Nama Studi Kasus"
            rules={[
              {
                required: true,
                message: "Mohon masukkan nama Studi Kasus!",
              },
            ]}
          >
            <Input
              prefix={<DatabaseOutlined />}
              placeholder={` Studi Kasus . . .`}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="nama_database"
            label="Nama Database"
            rules={[
              {
                required: true,
                message: "Mohon masukkan nama Database!",
              },
            ]}
          >
            <Input
              prefix={<DatabaseOutlined />}
              placeholder={` Database . . .`}
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="Database">
        <Form.Item
          name="database"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          noStyle
        >
          <Upload.Dragger
            multiple={false}
            beforeUpload={(file) => validationSQLFile(file)}
            name="files"
            action="/upload.do"
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">Hanya bisa upload file .sql </p>
          </Upload.Dragger>
        </Form.Item>
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

export default FormTambahStudiKasus;
