import { SetStateAction, useState } from "react";

import { CompleteTodos } from "@/components/CompleteTodos";
import { IncompleteTodos } from "@/components/IncompleteTodos";
import { InputTodo } from "@/components/InputTodo";
import { Container } from "@/components/Layout/Container";

const Home = () => {
  const [todoText, setTodoText] = useState("");

  const [incompleteTodos, setIncompleteTodos] = useState<string[]>([]);
  const [completeTodos, setCompleteTodos] = useState<string[]>([]);

  const changeTodoText = (e: { target: { value: SetStateAction<string> } }) => {
    setTodoText(e.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") {
      return alert("テキストを入力してください。");
    }
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index: number) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index: number) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index: number) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <Container>
      <h1 className="text-2xl font-bold lg:text-3xl">タスク管理</h1>
      <InputTodo
        todoText={todoText}
        changeTodoText={changeTodoText}
        onClickAdd={onClickAdd}
      />
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos completeTodos={completeTodos} onClickBack={onClickBack} />
    </Container>
  );
};

export default Home;
