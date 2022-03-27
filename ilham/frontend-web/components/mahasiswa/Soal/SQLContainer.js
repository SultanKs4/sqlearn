import { Col, Row } from "antd";
import { React, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import SQLQueryParts from "../Soal/SQLQueryParts";
import SQLAnswerBox from "./SQLAnswerBox";

const SQLContainer = ({ boxes, setBoxes, onDragEnd }) => {
  const [isDragging, setIsDragging] = useState(false);

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
            {boxes?.sql_constructed?.items?.map((item, id) => (
              <span key={id} style={{ paddingLeft: ".5em" }}>
                {item?.content}
              </span>
            ))}
          </Col>
        </Row>

        <SQLQueryParts sqlParts={boxes?.sql_parts?.items} />

        {/* ========================================== */}
        <SQLAnswerBox boxes={boxes} isDragging={isDragging} />
      </DragDropContext>
    </div>
  );
};

export default SQLContainer;
