import React, { ChangeEvent, useState } from "react";

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("Today");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInputCardTitle(e.target.value);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsClick(false);
  };

  const HandleClick = () => {
    setIsClick(true);
  };

  const handleBlur = () => {
    setIsClick(false);
  };
  return (
    <div className="taskCardTitleInputArea" onClick={HandleClick}>
      {isClick ? (
        <form onSubmit={handleSubmit} onBlur={handleBlur}>
          <input
            className="taskCardTitleInput"
            type="text"
            value={inputCardTitle}
            onChange={handleChange}
            maxLength={10}
            autoFocus
          />
        </form>
      ) : (
        <h3>{inputCardTitle}</h3>
      )}
    </div>
  );
};
