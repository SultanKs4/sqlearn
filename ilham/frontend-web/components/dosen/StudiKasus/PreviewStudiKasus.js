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
import { mockGetAllDataStudiKasus } from "../../../utils/remote-data/dosen/StudiKasus";

function PreviewStudiKasus({ currentStudiKasus }) {
  const { Panel } = Collapse;

  const [selectedDB, setSelectedDB] = useState({});

  const [selectedTable, setSelectedTable] = useState({});

  const [currentTables, setCurrentTables] = useState([]);
  const [currentColumns, setCurrentColumns] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    setIsDataLoaded(false);

    mockGetAllDataStudiKasus().then((response) => {
      setSelectedDB(
        response?.data?.find((item) => item.db_id === currentStudiKasus.db_id)
      );
      setIsDataLoaded(true);
    });

    setCurrentColumns([]);
    setCurrentData([]);
  }, [currentStudiKasus]);

  useEffect(() => {
    setCurrentTables(selectedDB?.content);
  }, [selectedDB]);

  function onChangeTable(keyTable) {
    setCurrentColumns(
      currentTables[keyTable]?.column?.map((item) => {
        return {
          title: item,
          dataIndex: item.toLowerCase(),
          key: item.toLowerCase(),
        };
      })
    );

    setCurrentData(currentTables[keyTable]?.data);
  }

  return (
    <>
      <Typography.Title level={3}>
        Database {currentStudiKasus?.database}{" "}
      </Typography.Title>
      <Typography.Title
        level={5}
        style={{ textAlign: "center", marginBottom: "1em" }}
      >
        Daftar Tabel
      </Typography.Title>
      {isDataLoaded ? (
        <Collapse accordion onChange={onChangeTable}>
          {currentTables?.map((item, id) => (
            <Panel header={`Tabel ${item.table}`} key={id}>
              <Table columns={currentColumns} dataSource={currentData} />
            </Panel>
          ))}
        </Collapse>
      ) : (
        <Row style={{ height: "20vh" }}>
          <Skeleton
            active
            paragraph={false}
            title={{ width: "30rem" }}
            style={{ marginBottom: "1em" }}
          />
          <Skeleton
            active
            paragraph={false}
            title={{ width: "30rem" }}
            style={{ marginBottom: "1em" }}
          />
        </Row>
      )}
    </>
  );
}

export default PreviewStudiKasus;
