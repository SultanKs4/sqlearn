import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Row,
  Select,
} from "antd";

import moment from "moment";
import { ScheduleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getKelas } from "../../../utils/remote-data/dosen/KelasCRUD";
import { isObjectEmpty } from "../../../utils/common";
import { mockGetAllStudiKasus } from "../../../utils/remote-data/dosen/StudiKasus";

function FormEditPaket({
  currentPaket,
  setFormObj,
  setVisible,
  handleSubmit,
  ...props
}) {
  const [form] = Form.useForm();

  const { Option } = Select;

  const [dataKelas, setDataKelas] = useState([]);
  const [dataStudiKasus, setDataStudiKasus] = useState([]);

  const [selectedKelas, setSelectedKelas] = useState({});
  const [selectedStudiKasus, setSelectedStudiKasus] = useState({});

  const onChangeKelas = (kelas) => setSelectedKelas(kelas);
  const onChangeStudiKasus = (studiKasus) => setSelectedStudiKasus(studiKasus);

  useEffect(() => {
    getKelas(1).then((data) => setDataKelas(data));
    mockGetAllStudiKasus().then((response) => setDataStudiKasus(response.data));
  }, []);

  useEffect(() => {
    form.setFieldsValue({
      Paket_nama: currentPaket?.Paket_nama,
      tanggal_mulai: currentPaket?.tanggal_mulai,
      tanggal_akhir: currentPaket?.tanggal_akhir,
      kelas_nama: currentPaket?.kelas_nama,
      studi_kasus_nama: currentPaket?.studi_kasus_nama,
    });
  }, [currentPaket]);

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
      <Form.Item
        name="Paket_nama"
        label="Nama Paket"
        rules={[
          {
            required: true,
            message: "Masukkan nama Paket!",
          },
        ]}
      >
        <Input
          autoComplete="off"
          prefix={<ScheduleOutlined />}
          placeholder={` Paket . . .`}
        />
      </Form.Item>
      <Row gutter={20}>
        <Col>
          <Form.Item
            name="tanggal_mulai"
            label="Waktu Mulai"
            rules={[
              {
                type: "object",
                required: true,
                message: "Mohon tentukan waktu mulai!",
              },
            ]}
          >
            <DatePicker
              showTime
              placeholder="Pilih waktu . . ."
              style={{ width: "200px" }}
              format="YYYY-MM-DD HH:mm"
            />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item
            name="tanggal_akhir"
            label="Waktu Selesai"
            rules={[
              {
                type: "object",
                required: true,
                message: "Mohon tentukan waktu selesai!",
              },
            ]}
          >
            <DatePicker
              showTime
              placeholder="Pilih waktu . . ."
              style={{ width: "200px" }}
              format="YYYY-MM-DD HH:mm"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col>
          <Form.Item
            name="kelas_nama"
            label="Kelas"
            tooltip={{
              title: `Paket ini akan terlihat oleh kelas ${
                isObjectEmpty(selectedKelas) ? " yang dipilih " : selectedKelas
              }`,
            }}
            rules={[
              {
                required: true,
                message: "Mohon pilih kelas!",
              },
            ]}
          >
            <Select
              placeholder="Pilih kelas . . ."
              onChange={onChangeKelas}
              style={{ width: "200px" }}
            >
              {dataKelas?.map((item) => (
                <Option key={item.name}>{item.name}</Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col>
          <Form.Item
            name="studi_kasus_nama"
            label="Studi Kasus"
            tooltip={{
              title: `Paket ini menggunakan Studi Kasus ${
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
              placeholder="Pilih kelas . . ."
              onChange={onChangeStudiKasus}
              style={{ width: "200px" }}
            >
              {dataStudiKasus?.map((item) => (
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

export default FormEditPaket;
