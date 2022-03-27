import { React } from "react";
import { Droppable } from "react-beautiful-dnd";

const SQLAnswerBox = ({ boxes }) => {
  return (
    <>
      {/* Ini percobaan untuk revisi */}
      <h3 style={{ marginTop: "1em" }}>Jawaban SQL</h3>
      <div
        className="wrapper"
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        {boxes?.sql_constructed?.items?.map((item, index) => (
          <>
            {item.content === "___" ? (
              <Droppable
                droppableId={`sql_constructed_${index}`}
                key={`sql_constructed_${index}`}
                direction="horizontal"
              >
                {(provided, snapshot) => (
                  <div
                    key={item.id}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      background: snapshot.isDraggingOver
                        ? "lightblue"
                        : "lightgrey",
                      padding: 1,
                      minHeight: 60,
                      width: "100%",
                      overflow: "auto",
                    }}
                  >
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ) : (
              <div
                key={item.id}
                style={{
                  background: "lightgrey",
                  padding: 1,
                  height: "100%",
                  width: "100%",
                  overflow: "auto",
                }}
              >
                <div
                  style={{
                    userSelect: "none",
                    padding: 16,
                    textAlign: "center",
                    backgroundColor: "#263B4A",
                    color: "white",
                  }}
                >
                  {item.content}
                </div>
              </div>
            )}
          </>
        ))}
      </div>

      {/* <h3>Jawaban SQL</h3> */}
      {/* <Droppable
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
                  isDragDisabled={
                    item.content === "___" || item.role === "clue"
                      ? true
                      : false
                  }
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
      </Droppable> */}
    </>
  );
};

export default SQLAnswerBox;
