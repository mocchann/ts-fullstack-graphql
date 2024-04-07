const typeDefs = `#graphql
  type Todo {
    id: String!
    title: String!
    updatedAt: String!
    createdAt: String!
  }

  input MakeTodoInput {
    title: String!
  }

  type MakeTodoResponse {
    todo: Todo!
  }

  type Mutation {
    makeTodo(makeTodoInput: MakeTodoInput!): MakeTodoResponse!
  }
`;

export default typeDefs;
