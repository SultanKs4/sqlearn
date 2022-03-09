import { React, useEffect, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

const SQLAnswerBox = ({ boxes, jawaban }) => {
  const [sqlConstructed, setSqlConstructed] = useState([]);
  const [sqlUncomplete, setSqlUncomplete] = useState([]);
  const [fetchClue, setFetchClue] = useState([]);

  useEffect(() => {
    setFetchClue(
      boxes?.sql_constructed?.items?.map((item) => item.content.toLowerCase())
    );
  }, [boxes]);

  useEffect(() => {
    setSqlUncomplete(
      jawaban?.split(" ").map((partJawaban) => {
        if (fetchClue.includes(partJawaban.toLowerCase())) return partJawaban;
        else return "___";
      })
    );
  }, [fetchClue]);

  useEffect(() => {
    console.log(sqlUncomplete);
  }, [sqlUncomplete]);

  return (
    <>
      <h3>Jawaban SQL</h3>
      <Droppable
        droppableId={"sql_constructed"}
        key={"sql_constructed"}
        direction="horizontal"
      >
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{
              background: snapshot.isDraggingOver ? "lightblue" : "lightgrey",
              padding: 4,
              width: "45vw",
              minHeight: 80,
              overflow: "auto",
              display: "flex",
            }}
          >
            {boxes?.sql_constructed?.items?.map((item, index) => {
              return (
                <Draggable
                  key={item.id.toString()}
                  draggableId={item.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => {
                    return (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          userSelect: "none",
                          padding: 16,
                          width: 200,
                          textAlign: "center",
                          marginLeft: 10,
                          backgroundColor: snapshot.isDragging
                            ? "#263B4A"
                            : "#456C86",
                          color: "white",
                          ...provided.draggableProps.style,
                        }}
                      >
                        {item.content}
                      </div>
                    );
                  }}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </>
  );
};

export default SQLAnswerBox;
