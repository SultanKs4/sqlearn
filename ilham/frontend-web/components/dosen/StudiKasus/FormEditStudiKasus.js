import { Button, Col, Divider, Form, Input, Row, Select } from "antd";
import { DatabaseOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { isObjectEmpty } from "../../../utils/common";
import { mockGetPaketSoal } from "../../../utils/remote-data/dosen/PaketSoalCRUD";

function FormEditStudiKasus({
  currentStudiKasus,
  setFormObj,
  setVisible,
  handleSubmit,
  ...props
}) {
  const [form] = Form.useForm();

  const { Option } = Select;

  const [dataPaket, setDataPaket] = useState([]);

  const [selectedPaket, setSelectedPaket] = useState({});

  const onChangePaket = (paket) => setSelectedPaket(paket);

  useEffect(() => {
    form.setFieldsValue({
      studi_kasus_nama: currentStudiKasus?.nama,
      paket_soal: currentStudiKasus?.paketSoal,
    });
  }, [currentStudiKasus]);

  useEffect(() => {
    mockGetPaketSoal().then((response) => setDataPaket(response.data));
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
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Row gutter={20}>
        <Col>
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
        <Col>
          <Form.Item
            name="paket_soal"
            label="Paket Soal"
            tooltip={{
              title: `StudiKasus ini menggunakan paket soal ${
                isObjectEmpty(selectedPaket) ? " yang dipilih " : selectedPaket
              }`,
            }}
            rules={[
              {
                required: true,
                message: "Mohon pilih paket soal!",
              },
            ]}
          >
            <Select
              placeholder="Pilih paket soal . . ."
              onChange={onChangePaket}
              style={{ width: "200px" }}
            >
              {dataPaket?.map((item) => (
                <Option key={item.nama}>{item.nama}</Option>
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

export default FormEditStudiKasus;
