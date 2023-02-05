import { SetStateAction, useCallback, useState } from "react";

export const useTodo = () => {
  const [todoText, setTodoText] = useState("");

  const [incompleteTodos, setIncompleteTodos] = useState<string[]>([]);
  const [completeTodos, setCompleteTodos] = useState<string[]>([]);

  const changeTodoText = (e: { target: { value: SetStateAction<string> } }) => {
    setTodoText(e.target.value);
  };

  const onClickAdd = useCallback(() => {
    if (todoText === "") {
      return alert("テキストを入力してください。");
    }
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  }, [todoText, incompleteTodos]);

  const onClickDelete = useCallback(
    (index: number) => {
      const newTodos = [...incompleteTodos];
      newTodos.splice(index, 1);
      setIncompleteTodos(newTodos);
    },
    [incompleteTodos]
  );

  const onClickComplete = useCallback(
    (index: number) => {
      const newIncompleteTodos = [...incompleteTodos];
      newIncompleteTodos.splice(index, 1);

      const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

      setIncompleteTodos(newIncompleteTodos);
      setCompleteTodos(newCompleteTodos);
    },
    [incompleteTodos, completeTodos]
  );

  const onClickBack = useCallback(
    (index: number) => {
      const newCompleteTodos = [...completeTodos];
      newCompleteTodos.splice(index, 1);
      setCompleteTodos(newCompleteTodos);

      const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
      setCompleteTodos(newCompleteTodos);
      setIncompleteTodos(newIncompleteTodos);
    },
    [completeTodos, incompleteTodos]
  );
  return {
    changeTodoText,
    completeTodos,
    incompleteTodos,
    onClickAdd,
    onClickBack,
    onClickComplete,
    onClickDelete,
    todoText,
  };
};
