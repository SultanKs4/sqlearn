import { Row, Typography, Table, Collapse, Skeleton } from "antd";
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";
import {
  getStudiKasusByID,
  mockGetAllDataStudiKasus,
} from "../../../utils/remote-data/dosen/StudiKasus";

// TODO 24/03/2022 : Untuk Endpoint Get One (Status Code 500) dan Get One Detail Per Table (ER_ACCESS_DENIED_ERROR)
// ? Ready

function PreviewStudiKasus({ currentStudiKasus }) {
  const { data: session } = useSession();

  const { Panel } = Collapse;
  console.log("currentStudiKasus", currentStudiKasus);

  const [selectedDB, setSelectedDB] = useState([]);
  const [currentTables, setCurrentTables] = useState([]);
  const [currentColumns, setCurrentColumns] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    setIsDataLoaded(false);

    fetchStudiKasusTables();

    setCurrentColumns([]);
    setCurrentData([]);
  }, [currentStudiKasus]);

  const fetchStudiKasusTables = useCallback(() => {
    if (currentStudiKasus !== undefined)
      getStudiKasusByID(session?.user?.tokenJWT, currentStudiKasus?.id).then(
        (res) => {
          setCurrentTables(res?.tables);
          setIsDataLoaded(true);
        }
      );
  }, [session, currentStudiKasus]);

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
