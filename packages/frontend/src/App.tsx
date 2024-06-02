import { useState } from "react";
import {
  TodosDocument,
  useMakeTodoMutation,
  useRemoveTodoMutation,
  useTodosQuery,
  useUpdateTodoMutation,
} from "./__generated__/graphql";
import { Button } from "./components/Elements/Button";
import { InputField } from "./components/Elements/InputField";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout/Layout";
import { TodoItem } from "./components/TodoItem";

export default function App() {
  const [title, setTitle] = useState<string>("");
  const { data, loading, error } = useTodosQuery();
  const [makeTodoMut, { loading: makeTodoMutLoading }] = useMakeTodoMutation();
  const [removeTodoMut, { loading: removeTodoMutLoading }] =
    useRemoveTodoMutation();
  const [updateTodoMut, { loading: updateTodoMutLoading }] =
    useUpdateTodoMutation();

  const handleTitleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    try {
      await makeTodoMut({
        variables: {
          makeTodoInput: {
            title,
          },
        },
        refetchQueries: [TodosDocument],
      });

      setTitle("");
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  const removeTodo = async (id: string) => {
    try {
      await removeTodoMut({
        variables: {
          removeTodoInput: {
            todoId: id,
          },
        },
        refetchQueries: [TodosDocument],
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  const updateTodoCompleteStatus = async (id: string, isCompleted: boolean) => {
    try {
      await updateTodoMut({
        variables: {
          updateTodoInput: {
            todoId: id,
            isCompleted,
          },
        },
        refetchQueries: [TodosDocument],
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  const updateTodoTitle = async (id: string, title: string) => {
    try {
      await updateTodoMut({
        variables: {
          updateTodoInput: {
            todoId: id,
            title,
          },
        },
        refetchQueries: [TodosDocument],
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  return (
    <Layout>
      <Header />
      <div className="max-w-xl mx-auto p-7">
        <div className="bg-white p-6 rounded shadow">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <InputField
              containerClassName="flex flex-col mb-6"
              labelName="New Todo"
              placeholder="buy some food..."
              onChange={handleTitleInputChange}
              value={title}
            />
            <Button size="sm" variant="primary">
              Add Todo
            </Button>
          </form>
        </div>
        <div>
          {data?.getTodos?.todos?.map((item) => (
            <TodoItem
              key={item?.id}
              todoItem={item!}
              removeTodo={removeTodo}
              updateTodoCompleteStatus={updateTodoCompleteStatus}
              updateTodoTitle={updateTodoTitle}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
