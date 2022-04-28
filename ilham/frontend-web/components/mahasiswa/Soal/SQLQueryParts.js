import { React } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

const SQLQueryParts = ({ sqlParts }) => {
  return (
    <>
      <h3>Komponen SQL</h3>
      <Droppable
        isDropDisabled
        droppableId={"sql_parts"}
        key={"sql_parts"}
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
            {sqlParts?.map((item, index) => {
              return (
                <Draggable
                  key={index.toString()}
                  draggableId={index.toString()}
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
                        {item}
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

export default SQLQueryParts;
