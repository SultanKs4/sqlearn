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
import { ScheduleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getKelas } from "../../../utils/remote-data/dosen/KelasCRUD";
import { getPaketSoal } from "../../../utils/remote-data/dosen/PaketSoalCRUD";
import { useSession } from "next-auth/react";

function FormTambahJadwal({ setVisible, handleSubmit, ...props }) {
  const { Option } = Select;
  const { data: session } = useSession();

  const [dataKelas, setDataKelas] = useState([]);
  const [dataPaketSoal, setDataPaketSoal] = useState([]);

  const [selectedKelas, setSelectedKelas] = useState({});

  const onChangeKelas = (kelas) => setSelectedKelas(kelas);

  useEffect(() => {
    getKelas(session?.user?.tokenJWT)
      .then((response) => {
        setDataKelas(response.data);
      })
      .catch((err) => console.log(err));

    getPaketSoal(session?.user?.tokenJWT)
      .then((response) => {
        setDataPaketSoal(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onFinish = ({ classes, container_id, start, finish, ...values }) => {
    handleSubmit({
      classes: classes,
      start: start.toISOString(),
      finish: finish.toISOString(),
      container_id: parseInt(container_id),
      ...values,
    });
  };

  const handleCancel = () => setVisible(false);

  return (
    <Form onFinish={onFinish} layout="vertical">
      <Row gutter={20}>
        <Col>
          <Form.Item
            name="description"
            label="Nama Jadwal"
            rules={[
              {
                required: true,
                message: "Masukkan nama jadwal!",
              },
            ]}
          >
            <Input
              autoComplete="off"
              prefix={<ScheduleOutlined />}
              placeholder={` Jadwal . . .`}
            />
          </Form.Item>
        </Col>

        <Col>
          <Form.Item
            name="type"
            label="Tipe"
            rules={[
              {
                required: true,
                message: "Mohon pilih Tipe!",
              },
            ]}
          >
            <Select
              placeholder="Pilih Kategori . . ."
              style={{ width: "200px" }}
            >
              <Option key="latihan">latihan</Option>
              <Option key="ujian">ujian</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={20}>
        <Col>
          <Form.Item
            name="start"
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
            name="finish"
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
            name="classes"
            label="Kelas"
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
                <Option key={item.name} value={item?.id} label={item?.name}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>

        <Col>
          <Form.Item
            name="container_id"
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
                <Option
                  key={item?.id}
                  value={item?.id}
                  label={item?.description}
                >
                  {" "}
                  {item?.description}{" "}
                </Option>
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

export default FormTambahJadwal;
