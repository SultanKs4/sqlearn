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
import { useCallback, useEffect, useState } from "react";
import { getKelas } from "../../../utils/remote-data/dosen/KelasCRUD";
import { getPaketSoal } from "../../../utils/remote-data/dosen/PaketSoalCRUD";
import { useSession } from "next-auth/react";

function FormEditJadwal({ currentJadwal, setVisible, handleSubmit, ...props }) {
  const { Option } = Select;

  const { data: session } = useSession();
  const [form] = Form.useForm();

  const [dataKelas, setDataKelas] = useState([]);
  const [isDataKelasLoaded, setIsDataKelasLoaded] = useState(false);

  const [dataPaketSoal, setDataPaketSoal] = useState([]);
  const [isDataPaketLoaded, setIsDataPaketLoaded] = useState(false);

  const [startTime, setStartTime] = useState("");
  const [finishTime, setFinishTime] = useState("");

  const onChangeStartDateTime = (_, value) => {
    setStartTime(new Date(value).toISOString());
  };

  const onChangeFinishDateTime = (_, value) => {
    setFinishTime(new Date(value).toISOString());
  };

  useEffect(() => {
    fetchDataKelas();
  }, [session]);

  const fetchDataKelas = useCallback(() => {
    if (session !== undefined) {
      getKelas(session?.user?.tokenJWT)
        .then((response) => {
          setDataKelas(response.data);
          setIsDataKelasLoaded(true);
        })
        .catch(() => console.log("Fetch Data Kelas gagal"));

      getPaketSoal(session?.user?.tokenJWT)
        .then((response) => {
          setDataPaketSoal(response.data);
          setIsDataPaketLoaded(true);
        })
        .catch(() => console.log("Fetch Data Paket gagal"));
    }
  }, [session, dataKelas]);

  useEffect(() => {
    form.setFieldsValue({
      description: currentJadwal?.description,
      start: moment(currentJadwal?.start),
      finish: moment(currentJadwal?.finish),
      classes: [currentJadwal?.class[0]?.id ?? ""],
      container_id: currentJadwal?.container?.id,
      type: currentJadwal?.type,
    });
  }, [currentJadwal]);

  const onFinish = ({ classes, container_id, start, finish, ...values }) => {
    let classList = [];

    classes.map((itemClass) =>
      classList.push(parseInt(itemClass.value || itemClass))
    );

    handleSubmit({
      classes: classList,
      start: startTime || moment(currentJadwal?.start)?._i,
      finish: finishTime || moment(currentJadwal?.finish)?._i,
      container_id: parseInt(container_id?.key) || currentJadwal?.container?.id,
      ...values,
    });
  };

  const handleCancel = () => setVisible(false);

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
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
            <Select placeholder="Pilih Tipe . . ." style={{ width: "200px" }}>
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
              onChange={onChangeStartDateTime}
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
              onChange={onChangeFinishDateTime}
              placeholder="Pilih waktu . . ."
              style={{ width: "200px" }}
              format="YYYY-MM-DD HH:mm"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col>
          {isDataKelasLoaded && (
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
                labelInValue
                mode="multiple"
                placeholder="Pilih kelas . . ."
                style={{ width: "200px" }}
              >
                {dataKelas?.map((item) => (
                  <Option key={item.id} value={item?.id} label={item?.name}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          )}
        </Col>
        <Col>
          {isDataPaketLoaded && (
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
                labelInValue
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
          )}
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
