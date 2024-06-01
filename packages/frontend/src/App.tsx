import { useTodosQuery } from "./__generated__/graphql";
import { Layout } from "./components/Layout/Layout";

export default function App() {
  const { data, loading, error } = useTodosQuery();

  return (
    <Layout>
      <div className="max-w-xl mx-auto p-7 bg-red-200">
        <div>
          {data?.getTodos?.todos?.map((item) => (
            <p key={item?.id}>
              {item?.title} {item?.createdAt.toISOString()}
            </p>
          ))}
        </div>
      </div>
    </Layout>
  );
}
