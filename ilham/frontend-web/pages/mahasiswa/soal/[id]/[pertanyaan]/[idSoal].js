import { React, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { Row, Col } from "antd";

import PageLayout from "../../../../../components/PageLayout";
import { mockGetSoalByID } from "../../../../../utils/remote-data/mahasiswa/Soal";
import SQLContainer from "../../../../../components/mahasiswa/Soal/SQLContainer";

function LatihanSoal() {
  const router = useRouter();

  const [dataPertanyaan, setDataPertanyaan] = useState([]);
  const [isDataPertanyaanLoaded, setIsDataPertanyaanLoaded] = useState(false);

  const [boxes, setBoxes] = useState([]);

  const onDragEnd = (result, boxes, setBoxes) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = boxes[source.droppableId];
      const destColumn = boxes[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setBoxes({
        ...boxes,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
      });
    } else {
      const column = boxes[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setBoxes({
        ...boxes,
        [source.droppableId]: {
          ...column,
          items: copiedItems
        }
      });
    }
  };

  useEffect(() => {
    mockGetSoalByID().then(responseData => {
      setDataPertanyaan(responseData);
      setIsDataPertanyaanLoaded(true);
      setBoxes({
        sql_parts: {
          items: responseData.sql_components
        },
        sql_constructed: {
          items: []
        }
      });
    });
  }, []);

  useEffect(() => {
    console.log(boxes.sql_constructed.items.map(item => item.content));
  }, [boxes]);

  return (
    <>
      <Head>
        <title>SQLearn | Mahasiswa - Soal </title>
      </Head>
      <PageLayout role="mahasiswa">
        <Row gutter={10} style={{ marginTop: "2em" }}>
          <Col lg={10} style={{ padding: "0 1em" }}>
            <h2> Ini tempat soal</h2>
          </Col>
          <Col lg={14}>
            <Row justify="space-between">
              <Col>
                <h2 className="title-part">SQL Query</h2>
              </Col>
              <Col style={{ textAlign: "right" }}>
                <h2 className="title-part">01:59:00</h2>
              </Col>
            </Row>
            <SQLContainer
              boxes={boxes}
              setBoxes={setBoxes}
              onDragEnd={onDragEnd}
            />
          </Col>
        </Row>
      </PageLayout>
    </>
  );
}

export default LatihanSoal;
