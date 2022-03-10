import { Col, Divider, Row } from "antd";
import { React, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import SQLQueryParts from "../Soal/SQLQueryParts";
import SQLAnswerBox from "./SQLAnswerBox";

const SQLContainer = ({
  boxes,
  setBoxes,
  jawaban,
  sqlUncomplete,
  setSqlUncomplete,
  onDragEnd,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [fetchClue, setFetchClue] = useState([]);

  useEffect(() => {
    if (boxes.length !== 0)
      setFetchClue(
        boxes?.sql_constructed?.items?.map((item) => item.content.toLowerCase())
      );
  }, [boxes]);

  // ? Ini kalau mau hintnya statis (hint berubah ketika ganti soal)
  useEffect(() => {
    if (sqlUncomplete === undefined || sqlUncomplete?.length === 0)
      setSqlUncomplete(
        jawaban?.split(" ").map((partJawaban, idx) => {
          if (fetchClue?.includes(partJawaban.toLowerCase()))
            return partJawaban;
          else return "___";
        })
      );
  }, [fetchClue]);

  // // ? Ini kalau mau hintnya dinamis (menyesuaikan input drag and drop mahasiswa).
  // useEffect(() => {
  //   // ? Ini kalau mau hintnya dinamis (menyesuaikan input drag and drop mahasiswa).
  //   setSqlUncomplete(
  //     jawaban?.split(" ").map((partJawaban, idx) => {
  //       if (fetchClue.includes(partJawaban.toLowerCase())) return partJawaban;
  //       else return "___";
  //     })
  //   );
  // }, [fetchClue]);

  return (
    <div>
      <DragDropContext
        onDragStart={() => setIsDragging(true)}
        onDragEnd={(result) => {
          onDragEnd(result, boxes, setBoxes);
          setIsDragging(false);
        }}
      >
        <Row justify="space-between" style={{ marginBottom: "1em" }}>
          <Col>SQL Hints : </Col>
          <Col>
            {sqlUncomplete?.map((item, id) => (
              <span key={id} style={{ paddingLeft: ".5em" }}>
                {item}
              </span>
            ))}
          </Col>
        </Row>

        <SQLQueryParts sqlParts={boxes?.sql_parts?.items} />
        {/* ========================================== */}
        <SQLAnswerBox boxes={boxes} jawaban={jawaban} isDragging={isDragging} />
      </DragDropContext>
    </div>
  );
};

export default SQLContainer;
