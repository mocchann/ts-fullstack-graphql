import crypto from "crypto";
import { Resolvers } from "../../../__generated__/graphql.js";
import { MyContext } from "../../root/greet.resolvers.js";

const resolvers: Resolvers<MyContext> = {
  Mutation: {
    makeTodo: async (_, { makeTodoInput }, context, info) => {
      const todoItem = {
        id: crypto.randomUUID(),
        title: makeTodoInput.title,
        updatedAt: new Date().toString(),
        createdAt: new Date().toString(),
      };

      return {
        todo: todoItem,
      };
    },
  },
};

export default resolvers;
