import { Row } from "antd";
import { React, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const SQLContainer = ({ onDragEnd, boxes, setBoxes }) => {
  return (
    <div>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, boxes, setBoxes)}
      >
        {Object.entries(boxes).map(([columnId, column], index) => {
          return (
            <div key={columnId}>
              {columnId}
              <Droppable
                droppableId={columnId}
                key={columnId}
                direction="horizontal"
              >
                {(provided, snapshot) => {
                  return (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{
                        background: snapshot.isDraggingOver
                          ? "lightblue"
                          : "lightgrey",
                        padding: 4,
                        width: "45vw",
                        minHeight: 100,
                        overflow: "auto",
                        display: "flex",
                      }}
                    >
                      {column?.items?.map((item, index) => {
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
                                    minHeight: "50px",
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
                  );
                }}
              </Droppable>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
};

export default SQLContainer;
