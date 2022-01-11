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
import { mockGetPaketSoal } from "../../../utils/remote-data/dosen/PaketSoalCRUD";

function FormEditJadwal({
  currentJadwal,
  setFormObj,
  setVisible,
  handleSubmit,
  ...props
}) {
  const { Option } = Select;

  const [dataKelas, setDataKelas] = useState([]);
  const [dataPaket, setDataPaket] = useState([]);

  const [selectedKelas, setSelectedKelas] = useState({});
  const [selectedPaket, setSelectedPaket] = useState({});

  const onChangeKelas = (kelas) => setSelectedKelas(kelas);
  const onChangePaket = (paket) => setSelectedPaket(paket);

  useEffect(() => {
    getKelas(1).then((data) => setDataKelas(data));
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
    <Form
      initialValues={{
        jadwal_nama: "Mock Jadwal 1",
        tanggal_mulai: moment("2022-01-11 03:04"),
        tanggal_akhir: moment("2022-01-11 23:59"),
        kelas_nama: "TI-1C",
        paket_soal: "Paket Soal A",
      }}
      onFinish={onFinish}
      layout="vertical"
    >
      <Form.Item
        name="jadwal_nama"
        label="Nama Jadwal"
        rules={[
          {
            required: true,
            message: "Masukkan nama jadwal!",
          },
        ]}
      >
        <Input prefix={<ScheduleOutlined />} placeholder={` Jadwal . . .`} />
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
              title: `Jadwal ini akan terlihat oleh kelas ${
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
            name="paket_soal"
            label="Paket Soal"
            tooltip={{
              title: `Jadwal ini menggunakan paket soal ${
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
              placeholder="Pilih kelas . . ."
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

export default FormEditJadwal;
