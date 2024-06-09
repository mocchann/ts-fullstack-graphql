import { MyContext } from "../../../types/graphql.js";

export const resolvers = {
  Query: {
    greet: async (_: any, args: any, context: MyContext, info: any) => {
      return "hello";
    },
  },
};

export { MyContext };
