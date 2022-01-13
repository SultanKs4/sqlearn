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
import { useEffect, useState } from "react";
import { getKelas } from "../../../utils/remote-data/dosen/KelasCRUD";
import { mockGetAllStudiKasus } from "../../../utils/remote-data/dosen/StudiKasus";
import { isObjectEmpty } from "../../../utils/common";

function FormPilihSoal({
  form,
  setFormObj,
  setVisible,
  handleSubmit,
  ...props
}) {
  // TODO : Mengerjakan list pertanyaan yang ada untuk setiap studi kasus yang dipilih
  const { Option } = Select;

  const [dataStudiKasus, setDataStudiKasus] = useState([]);
  const [selectedStudiKasus, setSelectedStudiKasus] = useState("");

  const onChangeStudiKasus = (kelas) => {
    console.log(kelas);
    setSelectedStudiKasus(kelas);
  };

  useEffect(() => {
    mockGetAllStudiKasus().then((response) => setDataStudiKasus(response.data));
  }, []);

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
        name="studi_kasus_nama"
        label="Studi Kasus"
        tooltip={{
          title: `Soal ini menggunakan  ${
            isObjectEmpty(selectedStudiKasus)
              ? " yang dipilih "
              : selectedStudiKasus
          }`,
        }}
        rules={[
          {
            required: true,
            message: "Mohon pilih Studi Kasus!",
          },
        ]}
      >
        <Select
          placeholder="Pilih Studi Kasus . . ."
          onChange={onChangeStudiKasus}
          style={{ width: "200px" }}
        >
          {dataStudiKasus?.map((item) => (
            <Option key={item.nama}>{item.nama}</Option>
          ))}
        </Select>
      </Form.Item>
      {selectedStudiKasus.length > 0 ? (
        <> {`Ini list pertanyaan yang ada untuk ${selectedStudiKasus}`} </>
      ) : (
        <>Harap pilih studi kasus</>
      )}
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

export default FormPilihSoal;
