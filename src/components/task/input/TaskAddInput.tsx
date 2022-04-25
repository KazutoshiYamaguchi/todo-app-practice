import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { v4 as uuid } from "uuid";

type Obj = {
  id: string;
  text: string;
  draggableId: string;
};

type Props = {
  inputText: string;
  setinputText: Dispatch<SetStateAction<string>>;
  taskList: Array<Obj>;
  settaskList: Dispatch<SetStateAction<Obj[]>>;
};

export const TaskAddInput: FC<Props> = (props) => {
  const { inputText, setinputText, taskList, settaskList } = props;
  const handleSubmit = (e: any) => {
    const taskId = uuid();
    e.preventDefault();
    if (inputText === "") {
      return;
    }
    settaskList([
      ...taskList,
      {
        id: taskId,
        text: inputText,
        draggableId: `task-${taskId}`,
      },
    ]);
    console.log(taskList);
    setinputText("");
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setinputText(e.target.value);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="taskAddInput"
          type="text"
          placeholder="add a task"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};
