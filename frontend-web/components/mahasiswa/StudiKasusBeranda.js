import { Row, Col, Button, List } from "antd";

import {
  ConsoleSqlOutlined,
  SearchOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";

const mockPaketSoal = [
  {
    nama: "Paket Soal A",
    jumlahSoal: 5,
    durasi: 120,
  },
  {
    nama: "Paket Soal B",
    jumlahSoal: 5,
    durasi: 120,
  },
  {
    nama: "Paket Soal C",
    jumlahSoal: 5,
    durasi: 120,
  },
];

function StudiKasusBeranda({ data = mockPaketSoal, previewStudiKasus }) {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Row justify="space-between" style={{ width: "100vw" }}>
            <Col>{item.nama}</Col>
            <Col>
              {" "}
              <ConsoleSqlOutlined style={{ fontSize: "1.5em" }} />{" "}
              {item.jumlahSoal} Pertanyaan{" "}
            </Col>
            <Col>
              <FieldTimeOutlined style={{ fontSize: "1.5em" }} />{" "}
              {/* {getHours(item.durasi)} Jam */}
            </Col>
            <Col>
              <Button
                type="primary"
                shape="round"
                icon={<SearchOutlined />}
                size={"medium"}
                onClick={() => previewStudiKasus(item)}
              >
                Preview
              </Button>
            </Col>
          </Row>
        </List.Item>
      )}
    />
  );
}

export default StudiKasusBeranda;
