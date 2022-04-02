import { React, useState, useEffect, useCallback } from "react";
import { Row, Col, Button, message, Form, Select } from "antd";

import {
  CalendarOutlined,
  LaptopOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { getKelas } from "../../../utils/remote-data/dosen/KelasCRUD";
import { useForm } from "antd/lib/form/Form";
import { getJadwal } from "../../../utils/remote-data/dosen/JadwalCRUD";

const SearchNilai = ({
  setSelectedKelas,
  setSelectedJadwal,
  onFinish,
  ...props
}) => {
  const [form] = useForm();
  const { data: session } = useSession();

  const [dataKelas, setDataKelas] = useState([]);
  const [dataJadwal, setDataJadwal] = useState([]);

  const [isFetchingDataKelas, setIsFetchingDataKelas] = useState(false);
  const [isFetchingDataJadwal, setIsFetchingDataJadwal] = useState(false);

  const fetchDataKelas = useCallback(() => {
    if (session !== undefined)
      getKelas(session?.user?.tokenJWT)
        .then((res) => {
          setDataKelas(res?.data);
          setIsFetchingDataKelas(true);
        })
        .catch(() => message.error("Terjadi kesalahan fetching data kelas"));
  }, [session]);

  const fetchDataJadwal = useCallback(() => {
    if (session !== undefined)
      getJadwal(session?.user?.tokenJWT)
        .then((res) => {
          setDataJadwal(res?.data);
          setIsFetchingDataJadwal(true);
        })
        .catch(() => message.error("Terjadi kesalahan fetching data jadwal"));
  }, [session]);

  useEffect(() => {
    fetchDataKelas();
    fetchDataJadwal();
  }, [session]);

  return (
    <>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Row gutter={20} justify="space-around">
          <Col>
            <Form.Item
              name="kelas"
              rules={[
                {
                  required: true,
                  message: "Mohon masukkan nama Kelas",
                },
              ]}
              label={
                <>
                  {" "}
                  <span style={{ marginRight: "1em" }}> Pilih Kelas</span>
                  <LaptopOutlined />
                </>
              }
            >
              <Select
                labelInValue
                style={{ width: 400 }}
                showSearch
                placeholder="Masukkan Kelas. . ."
                // onSearch={onSearch}
                onChange={(val) => setSelectedKelas(val)}
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {dataKelas?.map((kelas) => (
                  <Select.Option key={kelas.id} value={kelas.id}>
                    {kelas.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              name="jadwal"
              rules={[
                {
                  required: true,
                  message: "Mohon masukkan nama Jadwal",
                },
              ]}
              label={
                <>
                  {" "}
                  <span style={{ marginRight: "1em" }}> Pilih Jadwal </span>
                  <CalendarOutlined />
                </>
              }
            >
              <Select
                labelInValue
                showSearch
                style={{ width: 400 }}
                placeholder="Masukkan Jadwal. . ."
                onChange={(val) => setSelectedJadwal(val)}
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {dataJadwal?.map((jadwal) => (
                  <Select.Option key={jadwal.id} value={jadwal.id}>
                    {jadwal.description}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col style={{ marginTop: "2em" }}>
            <Button type="primary" htmlType="submit">
              Cari <SearchOutlined />
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default SearchNilai;
