import React, { Dispatch, FC, SetStateAction } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Task } from "./Task";

type Obj = {
  id: string;
  text: string;
  draggableId: string;
};

type Props = {
  taskList: Array<Obj>;
  settaskList: Dispatch<SetStateAction<Obj[]>>;
};

export const Tasks: FC<Props> = (props) => {
  const { taskList, settaskList } = props;
  const reorder = (taskList: any, startIndex: number, endIndex: number) => {
    const remove = taskList.splice(startIndex, 1);
    taskList.splice(endIndex, 0, remove[0]);
    settaskList(taskList);
  };
  const handleDragEng = (res: any) => {
    reorder(taskList, res.source.index, res.destination.index);
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEng}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task
                    index={index}
                    task={task}
                    taskList={taskList}
                    settaskList={settaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
