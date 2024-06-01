import { gql, useQuery } from "@apollo/client";

const getTodosQuery = gql`
  query GetTodos {
    getTodos {
      todos {
        id
        title
        isCompleted
        createdAt
        updatedAt
      }
    }
  }
`;

export default function App() {
  const { data, loading, error } = useQuery(getTodosQuery);

  return (
    <div className="App">
      <div>
        {data?.getTodos?.todos.map((item: any) => (
          <p key={item.id}>{item.title}</p>
        ))}
      </div>
    </div>
  );
}
