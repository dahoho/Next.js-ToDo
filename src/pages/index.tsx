import { CompleteTodos } from "@/components/CompleteTodos";
import { IncompleteTodos } from "@/components/IncompleteTodos";
import { InputTodo } from "@/components/InputTodo";
import { Container } from "@/components/Layout/Container";
import { useTodo } from "@/hooks/useTodo";

const Home = () => {
  const {
    changeTodoText,
    completeTodos,
    incompleteTodos,
    onClickAdd,
    onClickBack,
    onClickComplete,
    onClickDelete,
    todoText,
  } = useTodo();

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
