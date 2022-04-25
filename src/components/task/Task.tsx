import React, { Dispatch, FC, SetStateAction } from "react";
import { Draggable } from "react-beautiful-dnd";

type Obj = {
  id: string;
  text: string;
  draggableId: string;
};
type Props = {
  index: number;
  task: Obj;
  taskList: Array<Obj>;
  settaskList: Dispatch<SetStateAction<Obj[]>>;
};

export const Task: FC<Props> = (props) => {
  const { task, taskList, settaskList, index } = props;
  const handleDelete = (id: string) => {
    settaskList(taskList.filter((task) => task.id !== id));
  };
  return (
    <Draggable draggableId={task.draggableId} index={index}>
      {(provided) => (
        <div
          className="taskBox"
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className="taskText">{task.text}</p>
          <button
            className="taskTrashButton"
            onClick={() => handleDelete(task.id)}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      )}
    </Draggable>
  );
};
