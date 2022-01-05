import {
  Skeleton,
  Typography,
  Row,
  Col,
  Divider,
  Button,
  List,
  Card,
  Tabs,
  Alert,
  Avatar
} from "antd";

import {
  UserOutlined,
  ConsoleSqlOutlined,
  SearchOutlined,
  FieldTimeOutlined
} from "@ant-design/icons";

import { getHours } from "../../utils/common";

const mockStudiKasus = [
  {
    nama: "Studi Kasus A",
    jumlahSoal: 5,
    durasi: 120
  },
  {
    nama: "Studi Kasus B",
    jumlahSoal: 5,
    durasi: 120
  },
  {
    nama: "Studi Kasus C",
    jumlahSoal: 5,
    durasi: 120
  }
];

function StudiKasusBeranda({ data = mockStudiKasus, previewStudiKasus }) {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
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
              {getHours(item.durasi)} Jam
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
