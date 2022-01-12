import {
  Skeleton,
  List,
  Row,
  Col,
  Button,
  Avatar,
  Typography,
  Card,
  Tooltip,
} from "antd";
import { countTimeDifference, getHours, ucfirst } from "../utils/common";
import moment from "moment";

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
  LaptopOutlined,
  DatabaseOutlined,
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
                      <CheckOutlined style={{ marginLeft: ".8em" }} />
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
    case "jadwal-dosen":
      return (
        <List
          itemLayout="horizontal"
          dataSource={dataSource}
          renderItem={(item) => (
            <List.Item style={{ padding: 0 }}>
              <Card style={{ width: "100vw" }}>
                <Row justify="space-around">
                  <Col span={18}>
                    <Row gutter={[50]}>
                      <Col span={4}>
                        {" "}
                        <Typography.Text style={{ fontWeight: "bold" }}>
                          {" "}
                          {item.jadwal_nama}{" "}
                        </Typography.Text>
                      </Col>
                      <Col span={4}>
                        <LaptopOutlined
                          style={{ fontSize: "1.2em", marginRight: ".5em" }}
                        />
                        {item.kelas_nama}
                      </Col>
                      <Col span={6}>
                        <DatabaseOutlined
                          style={{ fontSize: "1.2em", marginRight: ".5em" }}
                        />
                        {item.studi_kasus_nama}
                      </Col>
                      <Col span={8}>
                        <FieldTimeOutlined
                          style={{ fontSize: "1.2em", marginRight: ".5em" }}
                        />
                        {/* Durasi sebelum deadline */}
                        <span
                          style={{
                            color:
                              countTimeDifference(moment(), item?.tanggal_akhir)
                                .toLowerCase()
                                .includes("terlewat") && "red",
                          }}
                        >
                          {countTimeDifference(moment(), item?.tanggal_akhir)}
                        </span>
                      </Col>
                    </Row>
                  </Col>

                  <Col span={6}>
                    <Row gutter={20} justify="end">
                      <Col>
                        <Tooltip title="Edit Jadwal">
                          <Button
                            type="primary"
                            icon={<EditOutlined />}
                            size={"medium"}
                            onClick={() => props.editJadwal(item)}
                          ></Button>
                        </Tooltip>
                      </Col>
                      <Col>
                        <Tooltip title="Hapus Jadwal">
                          <Button
                            type="danger"
                            icon={<DeleteOutlined />}
                            size={"medium"}
                            onClick={() => props.deleteJadwal(item)}
                          ></Button>
                        </Tooltip>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
            </List.Item>
          )}
        />
      );
    case "paket-soal-dosen":
      return (
        <List
          itemLayout="horizontal"
          dataSource={dataSource}
          renderItem={(item) => (
            <List.Item style={{ padding: 0 }}>
              <Card style={{ width: "100vw" }}>
                <Row justify="space-around">
                  <Col span={18}>
                    <Row gutter={[50]}>
                      <Col span={4}>
                        {" "}
                        <Typography.Text style={{ fontWeight: "bold" }}>
                          {" "}
                          {item.jadwal_nama || "Item"}{" "}
                        </Typography.Text>
                      </Col>
                      <Col span={4}>
                        <LaptopOutlined
                          style={{ fontSize: "1.2em", marginRight: ".5em" }}
                        />
                        {item.kelas_nama || "Item"}
                      </Col>
                      <Col span={6}>
                        <DatabaseOutlined
                          style={{ fontSize: "1.2em", marginRight: ".5em" }}
                        />
                        {item.studi_kasus_nama || "Item"}
                      </Col>
                      <Col span={8}>
                        <FieldTimeOutlined
                          style={{ fontSize: "1.2em", marginRight: ".5em" }}
                        />
                        {/* Durasi sebelum deadline */}
                        <span>{item?.ghaha || "Item"}</span>
                      </Col>
                    </Row>
                  </Col>

                  <Col span={6}>
                    <Row gutter={20} justify="end">
                      <Col>
                        <Tooltip title="Edit Paket Soal">
                          <Button
                            type="primary"
                            icon={<EditOutlined />}
                            size={"medium"}
                            onClick={() => props.editPaket(item)}
                          ></Button>
                        </Tooltip>
                      </Col>
                      <Col>
                        <Tooltip title="Hapus Paket Soal">
                          <Button
                            type="danger"
                            icon={<DeleteOutlined />}
                            size={"medium"}
                            onClick={() => props.deletePaket(item)}
                          ></Button>
                        </Tooltip>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
            </List.Item>
          )}
        />
      );
  }
}

export default ListComponent;
