import express from "express";

export type MyContext = {
  req: express.Request;
  res: express.Response;
};

const resolvers = {
  Query: {
    greet: async (_: any, args: any, context: MyContext, info: any) => {
      return 'hello';
    },
  },
};

export default resolvers;
