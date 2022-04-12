import moment from "moment";

import {
  Skeleton,
  List,
  Row,
  Col,
  Button,
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
  removeHTML,
  ucfirst,
} from "../utils/common";

import {
  ConsoleSqlOutlined,
  IssuesCloseOutlined,
  SearchOutlined,
  EditOutlined,
  FieldTimeOutlined,
  DeleteOutlined,
  UserOutlined,
  RightOutlined,
  CalendarOutlined,
  LaptopOutlined,
  DatabaseOutlined,
  FileTextOutlined,
  CodeSandboxOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";

function ListComponent({
  isLoading,
  dataSource,
  dataSourceDemo,
  role,
  showDetail,
  ...props
}) {
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
    case "lihat-nilai":
      icon = null;
      emptyDescription = "Nilai dalam kelas ini";
      break;
    default:
      break;
  }

  if (dataSource?.length === 0)
    return (
      <Card>
        <Empty
          image={icon || Empty.PRESENTED_IMAGE_DEFAULT}
          description={
            <Typography.Text style={{ color: "gray" }}>
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
      return (
        <>
          <List
            itemLayout="horizontal"
            dataSource={dataSource}
            renderItem={(item) => (
              <Card>
                <List.Item style={{ padding: 0, marginBottom: ".5em" }}>
                  <Row justify="space-around" style={{ width: "100vw" }}>
                    <Col span={18}>
                      <Row gutter={[50]}>
                        <Col span={8} style={{ fontWeight: "bold" }}>
                          {item?.Student?.name}
                        </Col>
                        <Col span={6}>NIM {item?.Student?.nim}</Col>
                        <Col span={6}>Score : {item?.score}</Col>
                      </Row>
                    </Col>

                    <Col span={4}>
                      <Row gutter={20} justify="end">
                        <Col>
                          <Tooltip
                            title={`Preview Nilai ${item?.Student?.name}`}
                          >
                            <Button
                              type="primary"
                              icon={<RightOutlined />}
                              onClick={() =>
                                router.push({
                                  pathname: `/dosen/nilai-mahasiswa/mhs/${item?.Student?.id}`,
                                  query: {
                                    jadwalID: item?.schedule_id,
                                  },
                                })
                              }
                            >
                              Lihat Detail
                            </Button>{" "}
                          </Tooltip>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </List.Item>
              </Card>
            )}
          />
        </>
      );
    case "sesi-latihan-mahasiswa":
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
              style={{
                marginLeft: ".5em",
                display: "label" in item ? "block" : "none",
              }}
            >
              <List.Item style={{ padding: 0 }}>
                <Card style={{ width: "100vw", marginBottom: ".4em" }}>
                  <Row justify="space-around" style={{ marginTop: "1em" }}>
                    <Col span={18}>
                      <Row gutter={[50]}>
                        <Col span={showDetail ? 4 : 6}>
                          <Typography.Text
                            style={{ fontWeight: "bold" }}
                            children={
                              item?.hasOwnProperty("score")
                                ? item?.schedule?.description
                                : item?.description
                            }
                          />
                        </Col>
                        <Col span={showDetail ? 6 : 9}>
                          <ConsoleSqlOutlined
                            style={{ fontSize: "1.2em", marginRight: ".5em" }}
                          />
                          {item?.total_questions} Pertanyaan
                        </Col>

                        {item?.hasOwnProperty("score") && showDetail && (
                          <Col span={showDetail ? 6 : 9}>
                            <FormOutlined
                              style={{ fontSize: "1.2em", marginRight: ".5em" }}
                            />
                            Skor : {item?.score}
                          </Col>
                        )}

                        <Col span={showDetail ? 6 : 9}>
                          {item?.hasOwnProperty("score") ? (
                            <>
                              <IssuesCloseOutlined
                                style={{
                                  fontSize: "1.2em",
                                  marginRight: ".5em",
                                }}
                              />
                              Score : {item?.score}
                            </>
                          ) : (
                            <div
                              style={{
                                color:
                                  countTimeDifference(
                                    moment(),
                                    moment(item?.finish)
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
                                moment(item?.finish)
                              )}
                            </div>
                          )}
                        </Col>
                      </Row>
                    </Col>

                    <Col span={6}>
                      <Row gutter={20} justify="end">
                        <Col>
                          {item?.hasOwnProperty("score") ? (
                            <div style={{ color: "#52c41a" }}>Selesai</div>
                          ) : (
                            <Button
                              ghost
                              type="primary"
                              icon={<EditOutlined />}
                              size={"medium"}
                              onClick={() => props.kerjakanLatihan(item?.id)}
                            >
                              Kerjakan
                            </Button>
                          )}
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
                                countTimeDifference(
                                  moment(),
                                  moment(item?.finish)
                                )
                                  .toLowerCase()
                                  .includes("terlewat") && "red",
                            }}
                          >
                            {countTimeDifference(
                              moment(),
                              moment(item?.finish)
                            )}
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
                          dataSource={formatToArray(item?.answer)}
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
                            children={item?.CaseStudy?.name}
                          />
                        </Col>
                      </Row>
                      <Row justify="space-between" style={{ margin: "1em 0" }}>
                        <Col> {removeHTML(item?.text) || item?.text} </Col>
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
