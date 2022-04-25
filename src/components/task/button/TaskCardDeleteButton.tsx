import React, { FC } from "react";

type Type = {
  id: string;
  draggableId: string;
};
type Props = {
  taskCardsList: any;
  setTaskCardsList: any;
  taskCard: Type;
};

export const TaskCardDeleteButton: FC<Props> = (props) => {
  const { taskCardsList, setTaskCardsList, taskCard } = props;
  const taskCardDelete = (id: String) => {
    setTaskCardsList(taskCardsList.filter((card: Type) => card.id !== id));
  };
  return (
    <div>
      <button
        className="taskCardDeleteButton"
        onClick={() => taskCardDelete(taskCard.id)}
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};
