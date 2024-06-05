import { useState } from "react";
import { SyncLoader } from "react-spinners";
import { Toaster } from "react-hot-toast";
import { Button } from "./components/Elements/Button";
import { InputField } from "./components/Elements/InputField";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout/Layout";
import { TodoItem } from "./components/TodoItem";
import { useTodos } from "./hooks/useTodos";
import { useDarkModeContext } from "./context/DarkModeContext";

export default function App() {
  const { isDarkMode } = useDarkModeContext();
  const [title, setTitle] = useState<string>("");
  const {
    todoData,
    todoDataLoding,
    makeTodo,
    makeTodoMutLoading,
    removeTodo,
    updateTodoCompleteStatus,
    updateTodoTitle,
  } = useTodos();

  const handleTitleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    await makeTodo(title);
    setTitle("");
  };

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <Toaster
        position="top-right"
        toastOptions={{
          className: "dark:bg-zinc-700 dark:text-zinc-100",
        }}
      />
      <Layout>
        <Header />
        <div className="max-w-xl mx-auto p-7">
          <div className="bg-white p-6 rounded shadow dark:bg-zinc-700">
            <form onSubmit={handleSubmit} className="flex flex-col">
              <InputField
                containerClassName="flex flex-col mb-6"
                labelName="New Todo"
                placeholder="buy some food..."
                onChange={handleTitleInputChange}
                value={title}
              />
              <Button
                size="sm"
                variant="primary"
                isLoading={makeTodoMutLoading}
              >
                Add Todo
              </Button>
            </form>
          </div>
          <div>
            {todoDataLoding ? (
              <div className="flex justify-center mt-9">
                <SyncLoader color="#2563eb" />
              </div>
            ) : (
              todoData?.getTodos?.todos?.map((item) => (
                <TodoItem
                  key={item?.id}
                  todoItem={item!}
                  removeTodo={removeTodo}
                  updateTodoCompleteStatus={updateTodoCompleteStatus}
                  updateTodoTitle={updateTodoTitle}
                />
              ))
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
}
