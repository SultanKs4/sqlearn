import { Col, Row } from "antd";
import { React, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import SQLQueryParts from "../Soal/SQLQueryParts";
import SQLAnswerBox from "./SQLAnswerBox";

const SQLContainer = ({ boxes, setBoxes, setCurrentPart }) => {
  const [isDragging, setIsDragging] = useState(false);

  const onDragEnd = (result, boxes, setBoxes) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      // ? Ini kalau drag dari komponen SQL dan drop ke Jawaban SQL
      let destinationParts = destination.droppableId.split("_");
      let destinationKey = `${destinationParts[0]}_${destinationParts[1]}`;
      let idDest = destinationParts[2]; // ? Output : id

      let destColumn = boxes[destinationKey].items;

      let sourceItems = [...boxes[source.droppableId].items];

      let destItems = destColumn;

      const [removed] = sourceItems.splice(source.index, 1);
      destItems[idDest] = removed;

      setBoxes({
        ...boxes,
        sql_parts: {
          items: sourceItems,
        },
        sql_constructed: {
          items: destItems,
        },
      });
    }
    // ? Set Log per Drag & Drop
    setCurrentPart(result);
  };
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
          <Col>Constructed SQL : </Col>
          <Col span={24} style={{ textAlign: "justify" }}>
            {boxes?.sql_constructed?.items?.map((item, id) => (
              <span key={id} style={{ overflowWrap: "break-word" }}>
                {`${item} `}
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
