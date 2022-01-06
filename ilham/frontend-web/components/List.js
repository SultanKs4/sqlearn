import { Skeleton, List, Row, Col, Button, Avatar } from "antd";
import { getHours, ucfirst } from "../utils/common";

import {
  PlusCircleOutlined,
  ConsoleSqlOutlined,
  SearchOutlined,
  EditOutlined,
  FieldTimeOutlined,
  DeleteOutlined,
  CheckOutlined,
  FormOutlined
} from "@ant-design/icons";

function ListComponent({ isLoading, dataSource, role, ...props }) {
  if (isLoading) {
    let skeleton = ["", "", "", ""];
    return (
      <List
        itemLayout="horizontal"
        dataSource={skeleton}
        renderItem={item => <Skeleton loading={true} active avatar />}
      />
    );
  }

  switch (role) {
    case "studi-kasus":
      return (
        <List
          itemLayout="horizontal"
          dataSource={dataSource}
          renderItem={item => (
            <List.Item>
              <Row justify="space-around" style={{ width: "100vw" }}>
                <Col span={18}>
                  <Row gutter={[50]}>
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
                  </Row>
                </Col>

                <Col span={6}>
                  <Row gutter={20} justify="end">
                    <Col>
                      <Button
                        type="primary"
                        icon={<SearchOutlined />}
                        size={"medium"}
                        onClick={() => props.previewStudiKasus(item)}
                      ></Button>
                    </Col>
                    <Col>
                      <Button
                        type="primary"
                        icon={<EditOutlined />}
                        size={"medium"}
                        onClick={() => props.editStudiKasus(item)}
                      ></Button>
                    </Col>
                    <Col>
                      <Button
                        type="danger"
                        icon={<DeleteOutlined />}
                        size={"medium"}
                        onClick={() => props.deleteStudiKasus(item)}
                      ></Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </List.Item>
          )}
        />
      );
    case "lihat-nilai":
      return (
        <List
          itemLayout="horizontal"
          dataSource={dataSource}
          renderItem={item => (
            <List.Item>
              <Row justify="space-around" style={{ width: "100vw" }}>
                <Col span={18}>
                  <Row gutter={[50]}>
                    <Col span={6}>{item.nama}</Col>
                    <Col span={6}>
                      {" "}
                      <ConsoleSqlOutlined style={{ fontSize: "1.5em" }} />{" "}
                      {item.jumlahLatihanDikerjakan} Pertanyaan{" "}
                      <CheckOutlined />
                    </Col>
                    <Col span={6}>
                      <FieldTimeOutlined style={{ fontSize: "1.5em" }} />{" "}
                      {item.avgDurasi} menit
                    </Col>
                    <Col span={6}>
                      <FormOutlined style={{ fontSize: "1.5em" }} /> Nilai :{" "}
                      {item.avgNilai}
                    </Col>
                  </Row>
                </Col>

                <Col span={6}>
                  <Row gutter={20} justify="end">
                    <Col>
                      <Button
                        type="primary"
                        icon={<SearchOutlined />}
                        size={"medium"}
                        onClick={() => props.previewDetailNilai(item)}
                      ></Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </List.Item>
          )}
        />
      );
    case "sesi-latihan-mahasiswa":
      return (
        <List
          itemLayout="horizontal"
          dataSource={dataSource}
          renderItem={item => (
            <List.Item key={item.id}>
              <Row justify="space-around" style={{ width: "100vw" }}>
                <Col span={18}>
                  <Row gutter={[50]}>
                    <Col span={8}>
                      {" "}
                      <ConsoleSqlOutlined style={{ fontSize: "1.5em" }} />{" "}
                      {item.jumlahSoal} Pertanyaan{" "}
                    </Col>
                    <Col span={8}>
                      <FieldTimeOutlined style={{ fontSize: "1.5em" }} />{" "}
                      {item.hasOwnProperty("nilai")
                        ? item.durasi
                        : item.deadline}
                    </Col>
                    {!item.hasOwnProperty("nilai") && (
                      <Col span={6}>{ucfirst(item.status)}</Col>
                    )}
                  </Row>
                </Col>

                <Col span={6}>
                  <Row gutter={20} justify="end">
                    <Col>
                      {item.hasOwnProperty("nilai") ? (
                        <>{ucfirst(item.status)}</>
                      ) : (
                        <Button
                          ghost
                          type="primary"
                          icon={<EditOutlined />}
                          size={"medium"}
                          onClick={() => props.previewDetailNilai(item)}
                        >
                          Kerjakan
                        </Button>
                      )}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </List.Item>
          )}
        />
      );
  }
}

export default ListComponent;
