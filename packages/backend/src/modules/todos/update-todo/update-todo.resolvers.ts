import { Resolvers } from "../../../__generated__/graphql.js";
import { MyContext } from "../../../types/graphql.js";
import { GraphQLError } from "graphql";

export const resolvers: Resolvers<MyContext> = {
  Mutation: {
    updateTodo: async (_, { updateTodoInput }, { prismaClient }, info) => {
      const existingTodo = await prismaClient.todo.findUnique({
        where: {
          id: updateTodoInput.todoId,
        },
      });

      if (!existingTodo) {
        throw new GraphQLError("Not found");
      }

      if (typeof updateTodoInput.title === "string") {
        existingTodo.title = updateTodoInput.title;
      }

      if (typeof updateTodoInput.isCompleted === "boolean") {
        existingTodo.isCompleted = updateTodoInput.isCompleted;
      }

      await prismaClient.todo.update({
        where: {
          id: existingTodo.id,
        },
        data: {
          title: existingTodo.title,
          isCompleted: existingTodo.isCompleted,
        },
      });

      return {
        todo: {
          ...existingTodo,
          updatedAt: existingTodo.updatedAt,
          createdAt: existingTodo.createdAt,
        },
      };
    },
  },
};
