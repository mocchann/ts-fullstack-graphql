import { useTodosQuery } from "./__generated__/graphql";

export default function App() {
  const { data, loading, error } = useTodosQuery();

  return (
    <div className="App">
      <div>
        {data?.getTodos?.todos?.map((item) => (
          <p key={item?.id}>
            {item?.title} {item?.createdAt.toISOString()}
          </p>
        ))}
      </div>
    </div>
  );
}
