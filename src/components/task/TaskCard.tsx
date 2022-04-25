import React, { FC, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton";
import { TaskAddInput } from "./input/TaskAddInput";
import { TaskCardTitle } from "./TaskCardTitle";
import { Tasks } from "./Tasks";

type Obj = {
  id: string;
  text: string;
  draggableId: string;
};
type Type = {
  id: string;
  draggableId: string;
};
type Props = {
  taskCardsList: any;
  setTaskCardsList: any;
  taskCard: Type;
  index: number;
};

export const TaskCard: FC<Props> = (props) => {
  const { taskCardsList, setTaskCardsList, taskCard, index } = props;
  const [inputText, setinputText] = useState<string>("");
  const [taskList, settaskList] = useState<Array<Obj>>([]);
  return (
    <Draggable draggableId={taskCard.draggableId} index={index}>
      {(provided) => (
        <div
          className="taskCard"
          key={taskCard.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div className="titleAndDeleteButton" {...provided.dragHandleProps}>
            <TaskCardTitle />
            <TaskCardDeleteButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
              taskCard={taskCard}
            />
          </div>
          <TaskAddInput
            inputText={inputText}
            setinputText={setinputText}
            taskList={taskList}
            settaskList={settaskList}
          />
          <Tasks taskList={taskList} settaskList={settaskList} />
        </div>
      )}
    </Draggable>
  );
};
