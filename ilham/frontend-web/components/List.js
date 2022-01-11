import { Skeleton, List, Row, Col, Button, Avatar, Typography } from "antd";
import { getHours, ucfirst } from "../utils/common";

import {
  PlusCircleOutlined,
  ConsoleSqlOutlined,
  IssuesCloseOutlined,
  SearchOutlined,
  EditOutlined,
  FieldTimeOutlined,
  DeleteOutlined,
  CheckOutlined,
  FormOutlined,
} from "@ant-design/icons";

function ListComponent({ isLoading, dataSource, role, showDetail, ...props }) {
  if (isLoading) {
    let skeleton = ["", "", "", ""];
    return (
      <List
        itemLayout="horizontal"
        dataSource={skeleton}
        renderItem={(item) => <Skeleton loading={true} active avatar />}
      />
    );
  }

  // ? Untuk setiap role disini, mempunyai showDetail yang berbeda dan tidak mempengaruhi satu sama lain
  // TODO : Perlu nambahi untuk showDetail di case "sesi-latihan-mahasiswa"

  switch (role) {
    case "studi-kasus":
      return (
        <List
          itemLayout="horizontal"
          dataSource={dataSource}
          renderItem={(item) => (
            <List.Item>
              <Row justify="space-around" style={{ width: "100vw" }}>
                <Col span={18}>
                  <Row gutter={[50]}>
                    <Col>{item.nama}</Col>
                    <Col>
                      <ConsoleSqlOutlined
                        style={{ fontSize: "1.2em", marginRight: ".5em" }}
                      />
                      {item.jumlahSoal} Pertanyaan
                    </Col>
                    <Col>
                      <FieldTimeOutlined
                        style={{ fontSize: "1.2em", marginRight: ".5em" }}
                      />
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
          renderItem={(item) => (
            <List.Item>
              <Row justify="space-around" style={{ width: "100vw" }}>
                <Col span={18}>
                  <Row gutter={[50]}>
                    <Col span={6}>{item.nama}</Col>
                    <Col span={6}>
                      <ConsoleSqlOutlined
                        style={{ fontSize: "1.2em", marginRight: ".5em" }}
                      />
                      {item.jumlahLatihanDikerjakan} Pertanyaan
                      <CheckOutlined />
                    </Col>
                    <Col span={6}>
                      <FieldTimeOutlined
                        style={{ fontSize: "1.2em", marginRight: ".5em" }}
                      />
                      {item.avgDurasi} menit
                    </Col>
                    <Col span={6}>
                      <FormOutlined
                        style={{ fontSize: "1.2em", marginRight: ".5em" }}
                      />{" "}
                      Nilai :{item.avgNilai}
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
          renderItem={(item) => (
            <List.Item key={item.id}>
              <Row justify="space-around" style={{ width: "100vw" }}>
                <Col span={18}>
                  <Row gutter={[10]}>
                    <Col span={showDetail ? 4 : 6}>
                      <Typography.Text
                        style={{ fontWeight: "bold" }}
                        children={item.nama}
                      />
                    </Col>
                    <Col span={showDetail ? 6 : 9}>
                      <ConsoleSqlOutlined
                        style={{ fontSize: "1.2em", marginRight: ".5em" }}
                      />
                      {item.jumlahSoal} Pertanyaan
                    </Col>

                    {item.hasOwnProperty("nilai") && showDetail && (
                      <Col span={showDetail ? 6 : 9}>
                        <FormOutlined
                          style={{ fontSize: "1.2em", marginRight: ".5em" }}
                        />
                        Skor : {item.nilai}
                      </Col>
                    )}

                    <Col span={showDetail ? 6 : 9}>
                      {item.hasOwnProperty("nilai") ? (
                        <>
                          <IssuesCloseOutlined
                            style={{
                              fontSize: "1.2em",
                              marginRight: ".5em",
                            }}
                          />
                          {`${item.totalPercobaan}x percobaan`}
                        </>
                      ) : (
                        <>
                          <FieldTimeOutlined
                            style={{
                              fontSize: "1.2em",
                              marginRight: ".5em",
                            }}
                          />
                          {item.deadline}
                        </>
                      )}
                    </Col>
                  </Row>
                </Col>

                <Col span={6}>
                  <Row gutter={20} justify="end">
                    <Col>
                      {item.hasOwnProperty("nilai") ? (
                        <div style={{ color: "#52c41a" }}>
                          {ucfirst(item.status)}
                        </div>
                      ) : (
                        <Button
                          ghost
                          type="primary"
                          icon={<EditOutlined />}
                          size={"medium"}
                          onClick={() => props.kerjakanLatihan(item.id)}
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
