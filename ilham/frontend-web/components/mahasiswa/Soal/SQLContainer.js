import { Row } from "antd";
import { React, useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import SQLQueryParts from "../Soal/SQLQueryParts";
import SQLAnswerBox from "./SQLAnswerBox";

const SQLContainer = ({ onDragEnd, boxes, setBoxes, jawaban }) => {
  // TODO :
  /*
    1. UI untuk clues
    2. Di relate kan dengan key jawaban_benar dari fetch remote data
  */

  return (
    <div>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, boxes, setBoxes)}
      >
        <SQLQueryParts sqlParts={boxes?.sql_parts?.items} />
        {/* ========================================== */}
        <SQLAnswerBox boxes={boxes} jawaban={jawaban} />
      </DragDropContext>
    </div>
  );
};

export default SQLContainer;
