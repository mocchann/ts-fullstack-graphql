import { GraphQLScalarType } from "graphql";
import { Resolvers } from "../../../__generated__/graphql.js";

export const resolvers: Resolvers = {
  Datetime: new GraphQLScalarType({
    name: "Datetime",
    description: "Datetime custom scalar type",
    serialize(value) {
      console.log("serialize");
      console.log({ value });
      return value;
    },
    parseValue(value) {
      console.log("parsevalue");
      console.log({ value });

      return new Date();
    },
    parseLiteral(ast) {
      console.log("parseliteral");
      console.log({ ast });

      return new Date();
    },
  }),
};
