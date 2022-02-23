import {
  Row,
  Col,
  Divider,
  List,
  Typography,
  Table,
  Collapse,
  Skeleton,
} from "antd";
import { useEffect, useState } from "react";

const COLUMNS = [
  {
    title: "Banyak Percobaan",
    dataIndex: "attemptTestQuery",
    key: "attemptTestQuery",
  },
  {
    title: "Log Jawaban",
    dataIndex: "studentAnswer",
    key: "studentAnswer",
  },
  {
    title: "Tipe",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Waktu Tersisa",
    dataIndex: "timerLeft",
    key: "timerLeft",
  },
];

function PreviewLogMahasiswa({ currentNilaiMhs }) {
  const { Panel } = Collapse;

  const [isDataJadwalLoaded, setIsDataJadwalLoaded] = useState(false);

  const [currentDataLog, setCurrentDataLog] = useState([]);
  const [currentTables, setCurrentTables] = useState([]);

  console.log("preview log mahasiswa dibuka", currentNilaiMhs);

  useEffect(() => {
    setCurrentTables(currentNilaiMhs?.detail);
  }, [currentNilaiMhs]);

  function onChangeAccordion(keyTable) {
    console.log("terbuka akoridobn");

    setCurrentDataLog(currentTables[keyTable]?.logData);
  }

  return (
    <>
      <Typography.Title level={3}>{currentNilaiMhs?.nama} </Typography.Title>
      <Typography.Title
        level={5}
        style={{ textAlign: "center", marginBottom: "1em" }}
      >
        Latihan yang dikerjakan
      </Typography.Title>
      <Collapse accordion onChange={onChangeAccordion}>
        {currentNilaiMhs?.detail?.map((item, id) => (
          <Panel header={`Jadwal ${item.jadwalID}`} key={id}>
            <Table columns={COLUMNS} dataSource={currentDataLog} />
          </Panel>
        ))}
      </Collapse>
    </>
  );
}

export default PreviewLogMahasiswa;
