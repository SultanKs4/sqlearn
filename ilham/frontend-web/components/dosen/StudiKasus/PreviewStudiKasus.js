import { Row, Typography, Table, Collapse, Skeleton } from "antd";
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";
import {
  getStudiKasusByID,
  getDataTableStudiKasus,
} from "../../../utils/remote-data/dosen/StudiKasus";

function PreviewStudiKasus({ currentStudiKasus }) {
  const { data: session } = useSession();

  const { Panel } = Collapse;
  const [currentTables, setCurrentTables] = useState([]);
  const [currentColumns, setCurrentColumns] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [isDataTableLoaded, setIsDataTableLoaded] = useState(false);

  useEffect(() => {
    setIsDataLoaded(false);
    setCurrentColumns([]);
    setCurrentData([]);
    fetchStudiKasusTables();
  }, [currentStudiKasus]);

  const fetchStudiKasusTables = useCallback(() => {
    if (currentStudiKasus !== undefined)
      getStudiKasusByID(session?.user?.tokenJWT, currentStudiKasus?.id)
        .then((res) => {
          setCurrentTables(Object.entries(res?.data?.tables));
          setIsDataLoaded(true);
        })
        .catch((err) => console.error(err));
  }, [session, currentStudiKasus]);

  const onChangeTable = (keyTable) => {
    if (currentTables !== undefined && currentTables[keyTable] !== undefined) {
      setCurrentColumns(
        currentTables[keyTable][1]?.map((item) => {
          return {
            title: item,
            dataIndex: item.toLowerCase(),
            key: item.toLowerCase(),
          };
        })
      );
      getDataTableStudiKasus(
        session?.user?.tokenJWT,
        currentStudiKasus?.id,
        currentTables[keyTable][0]
      )
        .then((res) => {
          setCurrentData(res?.data);
          setIsDataTableLoaded(true);
        })
        .catch((err) => console.error(err));
    }
  };

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
            <Panel header={`Tabel ${item[0] ?? " "}`} key={id}>
              {isDataTableLoaded ? (
                <Table
                  columns={currentColumns}
                  dataSource={currentData}
                  pagination={{
                    pageSize: 5,
                  }}
                />
              ) : (
                <Skeleton
                  active
                  paragraph={false}
                  title={{ width: "30rem" }}
                  style={{ marginBottom: "1em" }}
                />
              )}
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
