import moment from "moment";

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
  Divider,
  Empty,
  Badge,
} from "antd";
import {
  countTimeDifference,
  formatToArray,
  getHours,
  removeHTML,
  ucfirst,
} from "../utils/common";

import {
  PlusCircleOutlined,
  ConsoleSqlOutlined,
  IssuesCloseOutlined,
  SearchOutlined,
  EditOutlined,
  FieldTimeOutlined,
  DeleteOutlined,
  UserOutlined,
  CheckOutlined,
  CalendarOutlined,
  LaptopOutlined,
  DatabaseOutlined,
  FileTextOutlined,
  CodeSandboxOutlined,
  TeamOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";

function ListComponent({ isLoading, dataSource, role, showDetail, ...props }) {
  const router = useRouter();

  if (isLoading) {
    let skeleton = ["", ""];
    return (
      <List
        itemLayout="horizontal"
        dataSource={skeleton}
        renderItem={(item) => (
          <Card>
            <Skeleton loading={true} active title />
          </Card>
        )}
      />
    );
  }

  let icon = <> </>;
  let emptyDescription = "";

  switch (role) {
    case "studi-kasus":
      emptyDescription = "Studi Kasus";
      icon = <DatabaseOutlined style={{ fontSize: "3em" }} />;
      break;
    case "list-kelas-dosen":
      icon = <LaptopOutlined />;
      break;
    case "jadwal-dosen":
      emptyDescription = "Jadwal";
      icon = (
        <CalendarOutlined
          style={{ fontSize: "3em", color: "gray", marginTop: "1em" }}
        />
      );
      break;
    case "paket-soal-dosen":
      emptyDescription = "Paket Soal";
      icon = (
        <CodeSandboxOutlined
          style={{ fontSize: "3em", color: "gray", marginTop: "1em" }}
        />
      );
      break;
    case "soal-tiap-paket-dosen":
      emptyDescription = "Soal";
      icon = (
        <FileTextOutlined
          style={{ fontSize: "3em", color: "gray", marginTop: "1em" }}
        />
      );
      break;
    case "data-soal-dosen":
      emptyDescription = "Soal";
      icon = (
        <FileTextOutlined
          style={{ fontSize: "3em", color: "gray", marginTop: "1em" }}
        />
      );
      break;
    case "daftar-mahasiswa-per-kelas":
      emptyDescription = "Mahasiswa";
      icon = (
        <UserOutlined
          style={{ fontSize: "3em", color: "gray", marginTop: "1em" }}
        />
      );
      break;
    default:
      break;
  }

  if (dataSource.length === 0)
    return (
      <Card>
        <Empty
          image={icon}
          description={
            <Typography.Text style={{ color: "gray", fontWeight: "bold" }}>
              Tidak ada data {emptyDescription}
            </Typography.Text>
          }
        />
      </Card>
    );

  // ? Untuk setiap role disini, mempunyai showDetail yang berbeda dan tidak mempengaruhi satu sama lain
  switch (role) {
    case "studi-kasus":
      return (
        <List
          itemLayout="horizontal"
          dataSource={dataSource}
          renderItem={(item) => (
            <List.Item style={{ padding: 0 }}>
              <Card style={{ width: "100vw", marginBottom: ".4em" }}>
                <Row justify="space-around">
                  <Col span={18}>
                    <Row gutter={50}>
                      <Col>
                        <Typography.Text style={{ fontWeight: "bold" }}>
                          {item?.name}
                        </Typography.Text>
                      </Col>
                      <Col>
                        <DatabaseOutlined
                          style={{ fontSize: "1.2em", marginRight: ".5em" }}
                        />
                        Database {item?.DbList?.db_name}
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
                          type="danger"
                          icon={<DeleteOutlined />}
                          size={"medium"}
                          onClick={() => props.deleteStudiKasus(item)}
                        ></Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
            </List.Item>
          )}
        />
      );
    case "list-kelas-dosen":
      return (
        <List
          itemLayout="horizontal"
          dataSource={dataSource}
          renderItem={(item) => (
            <List.Item style={{ padding: 0, marginBottom: ".5em" }}>
              <Card style={{ width: "100vw" }}>
                <Row justify="space-around">
                  <Col span={18}>
                    <Row gutter={50}>
                      <Col>
                        <LaptopOutlined
                          style={{ fontSize: "1.2em", marginRight: ".5em" }}
                        />
                        <Typography.Text style={{ fontWeight: "bold" }}>
                          {item.name}
                        </Typography.Text>
                      </Col>
                    </Row>
                  </Col>

                  <Col span={6}>
                    <Row gutter={20} justify="end">
                      <Col>
                        <Tooltip title="Preview Kelas">
                          <Button
                            type="primary"
                            icon={<SearchOutlined />}
                            onClick={() =>
                              router.push(`/dosen/kelas/${item.id}`)
                            }
                          />
                        </Tooltip>
                      </Col>
                      <Col>
                        <Tooltip title="Ubah Kelas">
                          <Button
                            type="primary"
                            icon={<EditOutlined />}
                            size={"medium"}
                            onClick={() => props.displayModalEditKelas(item)}
                          />
                        </Tooltip>
                      </Col>
                      <Col>
                        <Tooltip title="Hapus Kelas">
                          <Button
                            type="danger"
                            icon={<DeleteOutlined />}
                            size={"medium"}
                            onClick={() => props.displayModalDeleteKelas(item)}
                          />
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
    case "lihat-nilai":
      let topThreeStudents = dataSource.slice().splice(0, 3);

      return (
        <Card>
          <List
            itemLayout="horizontal"
            dataSource={props.displayAllData ? dataSource : topThreeStudents}
            renderItem={(item) => (
              <List.Item>
                <Row justify="space-around" style={{ width: "100vw" }}>
                  <Col span={18}>
                    <Row gutter={[50]}>
                      <Col span={8}>{item.nama}</Col>
                      <Col span={6}>
                        <ConsoleSqlOutlined
                          style={{ fontSize: "1.2em", marginRight: ".5em" }}
                        />
                        {item.jumlahLatihanDikerjakan} Pertanyaan
                      </Col>
                      <Col span={5}>
                        <FieldTimeOutlined
                          style={{ fontSize: "1.2em", marginRight: ".5em" }}
                        />
                        {item.avgDurasi} menit
                      </Col>
                      <Col span={5}>
                        <FormOutlined
                          style={{ fontSize: "1.2em", marginRight: ".5em" }}
                        />
                        Nilai :{item.avgNilai}
                      </Col>
                    </Row>
                  </Col>

                  <Col span={4}>
                    <Row gutter={20} justify="end">
                      <Col>
                        <Tooltip title="Preview Nilai Mhs">
                          <Button
                            type="primary"
                            icon={<SearchOutlined />}
                            style={{
                              color: "white",
                              backgroundColor: "purple",
                            }}
                            size={"medium"}
                            onClick={() => props.previewDetailNilai(item)}
                          ></Button>
                        </Tooltip>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </List.Item>
            )}
          />
          {!props.displayAllData && (
            <Typography.Paragraph
              underline
              style={{ color: "grey", textAlign: "center", marginTop: "1em" }}
            >
              <Tooltip
                title={`Preview Kelas untuk melihat daftar mahasiswa dalam kelas ${
                  props?.kelas?.nama || "ini"
                }`}
              >
                Terdapat total {dataSource.length} mahasiswa
              </Tooltip>
            </Typography.Paragraph>
          )}
        </Card>
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
                        <div
                          style={{
                            color:
                              countTimeDifference(
                                moment(),
                                moment(item?.tanggal_akhir)
                              )
                                .toLowerCase()
                                .includes("terlewat") && "red",
                          }}
                        >
                          <FieldTimeOutlined
                            style={{
                              fontSize: "1.2em",
                              marginRight: ".5em",
                            }}
                          />
                          {countTimeDifference(
                            moment(),
                            moment(item?.tanggal_akhir)
                          )}
                        </div>
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
            <Badge.Ribbon
              text={item?.label?.name === "-" ? "Kosong" : item?.label?.name}
              color={
                item?.label?.name === "Close-Ended" ? "geekblue" : "purple"
              }
              placement="start"
            >
              <List.Item style={{ padding: 0 }}>
                <Card style={{ width: "100vw", marginBottom: ".4em" }}>
                  <Row justify="space-around" style={{ marginTop: "1em" }}>
                    <Col span={18}>
                      <Row gutter={[50]}>
                        <Col span={4}>
                          <Typography.Text style={{ fontWeight: "bold" }}>
                            {item.description}
                          </Typography.Text>
                        </Col>
                        <Col span={4}>
                          <LaptopOutlined
                            style={{ fontSize: "1.2em", marginRight: ".5em" }}
                          />
                          {item.class[0]?.name}
                        </Col>
                        <Col span={6}>
                          <CodeSandboxOutlined
                            style={{ fontSize: "1.2em", marginRight: ".5em" }}
                          />
                          {item.container?.description}
                        </Col>
                        <Col span={8}>
                          <FieldTimeOutlined
                            style={{ fontSize: "1.2em", marginRight: ".5em" }}
                          />
                          {/* Durasi sebelum deadline */}
                          <span
                            style={{
                              color:
                                countTimeDifference(item?.start, item?.finish)
                                  .toLowerCase()
                                  .includes("terlewat") && "red",
                            }}
                          >
                            {countTimeDifference(item?.start, item?.finish)}
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
                              onClick={() => props.displayModalEditJadwal(item)}
                            ></Button>
                          </Tooltip>
                        </Col>
                        <Col>
                          <Tooltip title="Hapus Jadwal">
                            <Button
                              type="danger"
                              icon={<DeleteOutlined />}
                              size={"medium"}
                              onClick={() =>
                                props.displayModalDeleteJadwal(item)
                              }
                            ></Button>
                          </Tooltip>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card>
              </List.Item>
            </Badge.Ribbon>
          )}
        />
      );
    case "paket-soal-dosen":
      return (
        <List
          itemLayout="horizontal"
          dataSource={dataSource}
          renderItem={(item) => (
            <Badge.Ribbon
              text={
                item?.QuestionLabel?.name === "-"
                  ? "Kosong"
                  : item?.QuestionLabel?.name
              }
              color={
                item?.QuestionLabel?.name === "Close-Ended"
                  ? "geekblue"
                  : "purple"
              }
              placement="start"
            >
              <List.Item style={{ padding: 0 }}>
                <Card style={{ width: "100vw", marginBottom: ".4em" }}>
                  <Row justify="space-between" style={{ marginTop: "1em" }}>
                    <Col span={18}>
                      <Row gutter={[50]}>
                        <Col>
                          <Typography.Text style={{ fontWeight: "bold" }}>
                            {item.description}
                          </Typography.Text>
                        </Col>
                      </Row>
                    </Col>

                    <Col span={6}>
                      <Row gutter={20} justify="end">
                        <Col>
                          <Tooltip title="Lihat Paket Soal">
                            <Button
                              type="primary"
                              icon={<SearchOutlined />}
                              size={"medium"}
                              onClick={() => props.previewPaket(item?.id)}
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
            </Badge.Ribbon>
          )}
        />
      );
    case "soal-tiap-paket-dosen":
      return (
        <List
          itemLayout="horizontal"
          dataSource={dataSource}
          renderItem={(item) => (
            <List.Item style={{ padding: 0 }}>
              <Card style={{ width: "100vw", marginBottom: ".4em" }}>
                <Row justify="space-between">
                  <Col span={20}>
                    <Row>
                      <Col>
                        <DatabaseOutlined />
                        <Typography.Text
                          style={{ fontWeight: "bold", marginLeft: "1em" }}
                          children={item.CaseStudy?.name}
                        />
                      </Col>
                    </Row>
                    <Row justify="space-between" style={{ margin: "1em 0" }}>
                      <Col> {removeHTML(item.text)} </Col>
                    </Row>
                    <Row justify="space-between">
                      <Col>
                        <Typography.Text children={"Opsi Jawaban : "} />
                        <List
                          size="small"
                          dataSource={formatToArray(item.answer)}
                          locale={{ emptyText: "Opsi Jawaban belum dibuat" }}
                          renderItem={(opsi) => <List.Item>{opsi}</List.Item>}
                        />
                        {/* <Typography.Text children={item.jawaban} underline /> */}
                      </Col>
                    </Row>
                  </Col>

                  <Col>
                    <Tooltip title="Hapus Soal">
                      <Button
                        type="danger"
                        icon={<DeleteOutlined />}
                        onClick={() => props.deleteSoal(item)}
                      />
                    </Tooltip>
                  </Col>
                </Row>
              </Card>
            </List.Item>
          )}
        />
      );
    case "data-soal-mahasiswa":
      return (
        <>
          <List
            itemLayout="horizontal"
            dataSource={dataSource}
            renderItem={(item) => (
              <List.Item style={{ padding: 0 }}>
                <Card style={{ width: "100vw", marginBottom: ".4em" }}>
                  <Row justify="space-between">
                    <Col span={20}>
                      <Row>
                        <Col style={{ paddingTop: "1em" }}>
                          <DatabaseOutlined />
                          <Typography.Text
                            style={{ fontWeight: "bold", marginLeft: "1em" }}
                            children={item.studi_kasus}
                          />
                        </Col>
                      </Row>
                      <Row justify="space-between" style={{ margin: "1em 0" }}>
                        <Col> {item.teksSoal} </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card>
              </List.Item>
            )}
          />
          <Row justify="center">
            <Tooltip title="Kerjakan Soal">
              <Button
                type="primary"
                icon={<EditOutlined />}
                children="Kerjakan"
                onClick={() => props.kerjakanLatihan()}
              />
            </Tooltip>
          </Row>
        </>
      );
    case "data-soal-dosen":
      return (
        <List
          itemLayout="horizontal"
          dataSource={dataSource}
          renderItem={(item) => (
            <Badge.Ribbon
              text={
                item?.QuestionLabel?.name === "-"
                  ? "Kosong"
                  : item?.QuestionLabel?.name
              }
              color={
                item?.QuestionLabel?.name === "Close-Ended"
                  ? "geekblue"
                  : "purple"
              }
              placement="start"
            >
              <List.Item style={{ padding: 0 }}>
                <Card style={{ width: "100vw", marginBottom: ".4em" }}>
                  <Row justify="space-between">
                    <Col span={20}>
                      <Row>
                        <Col style={{ paddingTop: "1em" }}>
                          <DatabaseOutlined />
                          <Typography.Text
                            style={{ fontWeight: "bold", marginLeft: "1em" }}
                            children={item.CaseStudy?.name}
                          />
                        </Col>
                      </Row>
                      <Row justify="space-between" style={{ margin: "1em 0" }}>
                        <Col>{removeHTML(item.text)}</Col>
                      </Row>
                      {showDetail && (
                        <Row justify="space-between">
                          <Col>
                            <Typography.Text children={"Jawaban Query : "} />
                            <List
                              size="small"
                              dataSource={formatToArray(item.answer)}
                              locale={{
                                emptyText: "Opsi Jawaban belum dibuat",
                              }}
                              renderItem={(opsi) => (
                                <List.Item>{opsi}</List.Item>
                              )}
                            />
                          </Col>
                        </Row>
                      )}
                    </Col>
                    {showDetail && (
                      <Col>
                        <Row>
                          <Tooltip title="Edit Soal">
                            <Button
                              type="primary"
                              icon={<EditOutlined />}
                              size={"medium"}
                              onClick={() => props.displayModalEditSoal(item)}
                            />
                          </Tooltip>
                        </Row>
                        <Divider style={{ margin: 0, padding: 4 }} />
                        <Tooltip title="Hapus Soal">
                          <Button
                            type="danger"
                            icon={<DeleteOutlined />}
                            onClick={() => props.displayModalDeleteSoal(item)}
                          />
                        </Tooltip>
                      </Col>
                    )}
                  </Row>
                </Card>
              </List.Item>
            </Badge.Ribbon>
          )}
        />
      );
    case "daftar-mahasiswa-per-kelas":
      return (
        <List
          itemLayout="horizontal"
          dataSource={dataSource}
          renderItem={(item) => (
            <List.Item style={{ padding: 0 }}>
              <Card style={{ width: "100vw", marginBottom: ".4em" }}>
                <Row justify="space-around">
                  <Col span={18}>
                    <Row gutter={20}>
                      <Col span={8}>
                        <UserOutlined />
                        <Typography.Text
                          style={{ marginLeft: "1em" }}
                          children={item?.name}
                        />
                      </Col>
                      <Col span={6}>
                        <Typography.Text children={item?.nim} />
                      </Col>
                    </Row>
                  </Col>
                  <Col span={6}>
                    <Row gutter={20} justify="end">
                      <Col>
                        <Button
                          type="danger"
                          icon={<DeleteOutlined />}
                          size={"medium"}
                          onClick={() => props.deleteMahasiswa(item)}
                        ></Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
            </List.Item>
          )}
        />
      );
    case "admin-data-dosen":
      return (
        <List
          itemLayout="horizontal"
          dataSource={dataSource}
          renderItem={(item) => (
            <List.Item style={{ padding: 0 }}>
              <Card style={{ width: "100vw", marginBottom: ".4em" }}>
                <Row justify="space-around">
                  <Col span={18}>
                    <Row gutter={20}>
                      <Col span={8}>
                        <UserOutlined />
                        <Typography.Text
                          style={{ marginLeft: "1em" }}
                          children={item?.nama_dosen}
                        />
                      </Col>
                      <Col span={6}>
                        <Typography.Text children={item?.nomor_induk} />
                      </Col>
                    </Row>
                  </Col>
                  <Col span={6}>
                    <Row gutter={20} justify="end">
                      <Col>
                        <Button
                          type="primary"
                          icon={<EditOutlined />}
                          size={"medium"}
                          onClick={() => props.editDosen(item)}
                        ></Button>
                      </Col>
                      <Col>
                        <Button
                          type="danger"
                          icon={<DeleteOutlined />}
                          size={"medium"}
                          onClick={() => props.deleteDosen(item)}
                        ></Button>
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
