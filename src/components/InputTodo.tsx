import { SetStateAction } from "react";

type Props = {
  changeTodoText: (e: {
    target: {
      value: SetStateAction<string>;
    };
  }) => void;
  onClickAdd: () => void;
  todoText: string;
};

export const InputTodo = ({ changeTodoText, onClickAdd, todoText }: Props) => {
  return (
    <div className="mt-6 flex">
      <input
        type="text"
        className="mr-2 w-full"
        value={todoText}
        onChange={changeTodoText}
      />
      <button
        type="button"
        className="shrink-0 bg-blue py-1 px-4 text-white"
        onClick={onClickAdd}
      >
        登録
      </button>
    </div>
  );
};
