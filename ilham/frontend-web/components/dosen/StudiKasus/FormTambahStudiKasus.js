import { Button, Col, Divider, Form, Input, message, Row, Upload } from "antd";
import { InboxOutlined, DatabaseOutlined } from "@ant-design/icons";
import { propsSQLUpload } from "../../../utils/remote-data/dosen/StudiKasus";
import { useSession } from "next-auth/react";
import { useState } from "react";

function FormTambahStudiKasus({ form, setVisible, handleSubmit, ...props }) {
  const { data: session } = useSession();
  const [fileList, setFileList] = useState();

  const normFile = (e) => {
    if (!e.file.name.includes(".sql")) {
      console.log("bukan sql");
      message.error(`${e.file.name} is not a .sql file`);
    }
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", { ...values, sql: fileList });
    handleSubmit({ ...values, sql: fileList });
  };

  const handleCancel = () => setVisible(false);

  return (
    <Form onFinish={onFinish} layout="vertical">
      <Row gutter={20}>
        <Col span={12}>
          <Form.Item
            name="name"
            label="Nama Studi Kasus"
            rules={[
              {
                required: true,
                message: "Mohon masukkan nama Studi Kasus!",
              },
            ]}
          >
            <Input
              autoComplete="off"
              prefix={<DatabaseOutlined />}
              placeholder={` Studi Kasus . . .`}
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="Database">
        <Form.Item
          name="sql"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          noStyle
        >
          <Upload.Dragger
            {...propsSQLUpload(session?.user?.tokenJWT, setFileList)}
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
