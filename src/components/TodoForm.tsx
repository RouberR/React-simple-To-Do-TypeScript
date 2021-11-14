import React, { FC, useState } from "react";

type TodoFormType = {
  addHandler(title: string): void;
};

export const TodoForm: FC<TodoFormType> = ({ addHandler }) => {
  const [title, setTitle] = useState<string>("");

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const keyPressHander = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addHandler(title);
      setTitle("");
    }
  };

  return (
    <div className="input-field  mt2">
      <input
        onChange={onChangeTitle}
        value={title}
        type="text"
        id="title"
        placeholder="Введите название дела"
        onKeyPress={keyPressHander}
      />
      <label htmlFor="title" className="active">
        Введите название дела
      </label>
    </div>
  );
};
