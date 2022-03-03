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
import { mockGetPaketSoal } from "../../../utils/remote-data/dosen/PaketSoalCRUD";

function FormEditJadwal({
  currentJadwal,
  setFormObj,
  setVisible,
  handleSubmit,
  ...props
}) {
  const [form] = Form.useForm();

  const { Option } = Select;

  const [dataKelas, setDataKelas] = useState([]);
  const [dataPaketSoal, setDataPaketSoal] = useState([]);

  const [selectedKelas, setSelectedKelas] = useState({});
  const [selectedKategori, setSelectedKategori] = useState({});

  const onChangeKelas = (kelas) => setSelectedKelas(kelas);
  const onChangeKategori = (kategori) => {
    setSelectedKategori(kategori);
  };

  useEffect(() => {
    getKelas(1).then((data) => setDataKelas(data));
    mockGetPaketSoal().then((response) => setDataPaketSoal(response.data));
  }, []);

  useEffect(() => {
    form.setFieldsValue({
      jadwal_nama: currentJadwal?.jadwal_nama,
      tanggal_mulai: currentJadwal?.tanggal_mulai,
      tanggal_akhir: currentJadwal?.tanggal_akhir,
      kelas_nama: currentJadwal?.kelas_nama,
      paket_soal: currentJadwal?.paket_soal,
      kategori: currentJadwal?.kategori,
      // ? Kategori 1 = Close-ended, 2 = Open-Ended
    });
  }, [currentJadwal]);

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
            name="jadwal_nama"
            label="Nama Jadwal"
            rules={[
              {
                required: true,
                message: "Masukkan nama jadwal!",
              },
            ]}
          >
            <Input
              prefix={<ScheduleOutlined />}
              placeholder={` Jadwal . . .`}
            />
          </Form.Item>
        </Col>

        <Col>
          <Form.Item
            name="kategori"
            label="Kategori"
            tooltip={{
              title: `Jadwal ini menggunakan kategori ${
                isObjectEmpty(selectedKategori)
                  ? " yang dipilih "
                  : selectedKategori
              }`,
            }}
            rules={[
              {
                required: true,
                message: "Mohon pilih Kategori!",
              },
            ]}
          >
            <Select
              placeholder="Pilih Kategori . . ."
              onChange={onChangeKategori}
              style={{ width: "200px" }}
            >
              <Option key="1">Close-Ended</Option>
              <Option key="2">Open-Ended</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

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
              mode="multiple"
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
            rules={[
              {
                required: true,
                message: "Pilih paket soal!",
              },
            ]}
          >
            <Select
              placeholder="Pilih paket soal . . ."
              style={{ width: "200px" }}
            >
              {dataPaketSoal.map((item) => (
                <Option key={item?.id_paket}> {item?.nama} </Option>
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
