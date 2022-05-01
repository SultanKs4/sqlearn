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
          overflow: "auto",
          gap: 10,
        }}
      >
        {boxes?.sql_constructed?.items?.map((item, index) => (
          <>
            {item === "__" ? (
              <Droppable
                droppableId={`sql_constructed_${index}`}
                key={`sql_constructed_${index}`}
                direction="horizontal"
              >
                {(provided, snapshot) => (
                  <div
                    key={index}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      background: snapshot.isDraggingOver
                        ? "lightblue"
                        : "lightgrey",
                      padding: 4,
                      width: 200,
                    }}
                  >
                    <div style={{ visibility: "hidden" }}> Just Empty</div>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ) : (
              <div
                key={index}
                style={{
                  background: "lightgrey",
                  padding: 1,
                  height: "100%",
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
                  {item}
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </>
  );
};

export default SQLAnswerBox;
