import { Resolvers } from "../../../__generated__/graphql.js";
import { MyContext } from "../../../types/graphql.js";

export const resolvers: Resolvers<MyContext> = {
  Mutation: {
    makeTodo: async (_, { makeTodoInput }, { prismaClient }, info) => {
      // console.log(makeTodoInput.testDateTime);
      const newTodo = await prismaClient.todo.create({
        data: {
          title: makeTodoInput.title,
        },
      });

      return {
        todo: {
          ...newTodo,
          updatedAt: newTodo.updatedAt.toISOString(),
          createdAt: newTodo.createdAt.toISOString(),
        },
      };
    },
  },
};
