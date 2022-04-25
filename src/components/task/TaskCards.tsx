import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { AddTaskCardButton } from "./button/AddTaskCardButton";
import { TaskCard } from "./TaskCard";

type Type = {
  id: string;
  draggableId: string;
};

export const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState<Array<Type>>([
    {
      id: "0",
      draggableId: "item0",
    },
  ]);

  const reorder = (
    taskCardsList: any,
    startIndex: number,
    endIndex: number
  ) => {
    const remove = taskCardsList.splice(startIndex, 1);
    taskCardsList.splice(endIndex, 0, remove[0]);
    setTaskCardsList(taskCardsList);
  };
  const handleDragEng = (res: any) => {
    reorder(taskCardsList, res.source.index, res.destination.index);
  };
  return (
    <DragDropContext onDragEnd={handleDragEng}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div
            className="taskCardsArea"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {taskCardsList.map((card, index) => (
              <TaskCard
                index={index}
                key={card.id}
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
                taskCard={card}
              />
            ))}

            <AddTaskCardButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
            />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
