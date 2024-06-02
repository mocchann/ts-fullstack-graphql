import { useTodosQuery } from "./__generated__/graphql";
import { Button } from "./components/Elements/Button";
import { InputField } from "./components/Elements/InputField";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout/Layout";
import { TodoItem } from "./components/TodoItem";

export default function App() {
  const { data, loading, error } = useTodosQuery();

  return (
    <Layout>
      <Header />
      <div className="max-w-xl mx-auto p-7 bg-red-200">
        <div className="bg-white p-6 rounded shadow">
          <form className="flex flex-col">
            <InputField
              containerClassName="flex flex-col mb-6"
              labelName="New Todo"
              placeholder="buy some food..."
            />
            <Button size="sm" variant="primary">
              Add Todo
            </Button>
          </form>
        </div>
        <div>
          {data?.getTodos?.todos?.map((item) => (
            <TodoItem key={item?.id} todoItem={item!} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
