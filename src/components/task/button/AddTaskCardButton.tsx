import React, { FC } from "react";
import { v4 as uuid } from "uuid";

type Props = {
  taskCardsList: any;
  setTaskCardsList: any;
};

export const AddTaskCardButton: FC<Props> = (props) => {
  const { taskCardsList, setTaskCardsList } = props;
  const addTaskCard = () => {
    const taskCardId = uuid();
    setTaskCardsList([
      ...taskCardsList,
      {
        id: taskCardId,
        draggableId: `item${taskCardId}`,
      },
    ]);
  };
  return (
    <div className="addTaskCardButtonArea">
      <button className="addTaskCardButton" onClick={addTaskCard}>
        +
      </button>
    </div>
  );
};
