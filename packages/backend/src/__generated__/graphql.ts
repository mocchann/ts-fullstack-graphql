import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type GetTodoInput = {
  todoId: Scalars['String']['input'];
};

export type GetTodoResponse = {
  __typename?: 'GetTodoResponse';
  todo: Todo;
};

export type GetTodosResponse = {
  __typename?: 'GetTodosResponse';
  todos?: Maybe<Array<Maybe<Todo>>>;
};

export type MakeTodoInput = {
  title: Scalars['String']['input'];
};

export type MakeTodoResponse = {
  __typename?: 'MakeTodoResponse';
  todo: Todo;
};

export type Mutation = {
  __typename?: 'Mutation';
  makeTodo: MakeTodoResponse;
  removeTodo: RemoveTodoResponse;
  updateTodo: UpdateTodoResponse;
};


export type MutationMakeTodoArgs = {
  makeTodoInput: MakeTodoInput;
};


export type MutationRemoveTodoArgs = {
  removeTodoInput: RemoveTodoInput;
};


export type MutationUpdateTodoArgs = {
  updateTodoInput: UpdateTodoInput;
};

export type Query = {
  __typename?: 'Query';
  getTodo: GetTodoResponse;
  getTodos?: Maybe<GetTodosResponse>;
  greet?: Maybe<Scalars['String']['output']>;
};


export type QueryGetTodoArgs = {
  getTodo: GetTodoInput;
};

export type RemoveTodoInput = {
  todoId: Scalars['String']['input'];
};

export type RemoveTodoResponse = {
  __typename?: 'RemoveTodoResponse';
  todo: Todo;
};

export type Todo = {
  __typename?: 'Todo';
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isCompleted: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type UpdateTodoInput = {
  isCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  todoId: Scalars['String']['input'];
};

export type UpdateTodoResponse = {
  __typename?: 'UpdateTodoResponse';
  todo: Todo;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  GetTodoInput: GetTodoInput;
  GetTodoResponse: ResolverTypeWrapper<GetTodoResponse>;
  GetTodosResponse: ResolverTypeWrapper<GetTodosResponse>;
  MakeTodoInput: MakeTodoInput;
  MakeTodoResponse: ResolverTypeWrapper<MakeTodoResponse>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  RemoveTodoInput: RemoveTodoInput;
  RemoveTodoResponse: ResolverTypeWrapper<RemoveTodoResponse>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Todo: ResolverTypeWrapper<Todo>;
  UpdateTodoInput: UpdateTodoInput;
  UpdateTodoResponse: ResolverTypeWrapper<UpdateTodoResponse>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  GetTodoInput: GetTodoInput;
  GetTodoResponse: GetTodoResponse;
  GetTodosResponse: GetTodosResponse;
  MakeTodoInput: MakeTodoInput;
  MakeTodoResponse: MakeTodoResponse;
  Mutation: {};
  Query: {};
  RemoveTodoInput: RemoveTodoInput;
  RemoveTodoResponse: RemoveTodoResponse;
  String: Scalars['String']['output'];
  Todo: Todo;
  UpdateTodoInput: UpdateTodoInput;
  UpdateTodoResponse: UpdateTodoResponse;
};

export type GetTodoResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetTodoResponse'] = ResolversParentTypes['GetTodoResponse']> = {
  todo?: Resolver<ResolversTypes['Todo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetTodosResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetTodosResponse'] = ResolversParentTypes['GetTodosResponse']> = {
  todos?: Resolver<Maybe<Array<Maybe<ResolversTypes['Todo']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MakeTodoResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MakeTodoResponse'] = ResolversParentTypes['MakeTodoResponse']> = {
  todo?: Resolver<ResolversTypes['Todo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  makeTodo?: Resolver<ResolversTypes['MakeTodoResponse'], ParentType, ContextType, RequireFields<MutationMakeTodoArgs, 'makeTodoInput'>>;
  removeTodo?: Resolver<ResolversTypes['RemoveTodoResponse'], ParentType, ContextType, RequireFields<MutationRemoveTodoArgs, 'removeTodoInput'>>;
  updateTodo?: Resolver<ResolversTypes['UpdateTodoResponse'], ParentType, ContextType, RequireFields<MutationUpdateTodoArgs, 'updateTodoInput'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getTodo?: Resolver<ResolversTypes['GetTodoResponse'], ParentType, ContextType, RequireFields<QueryGetTodoArgs, 'getTodo'>>;
  getTodos?: Resolver<Maybe<ResolversTypes['GetTodosResponse']>, ParentType, ContextType>;
  greet?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type RemoveTodoResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RemoveTodoResponse'] = ResolversParentTypes['RemoveTodoResponse']> = {
  todo?: Resolver<ResolversTypes['Todo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Todo'] = ResolversParentTypes['Todo']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isCompleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateTodoResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateTodoResponse'] = ResolversParentTypes['UpdateTodoResponse']> = {
  todo?: Resolver<ResolversTypes['Todo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  GetTodoResponse?: GetTodoResponseResolvers<ContextType>;
  GetTodosResponse?: GetTodosResponseResolvers<ContextType>;
  MakeTodoResponse?: MakeTodoResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RemoveTodoResponse?: RemoveTodoResponseResolvers<ContextType>;
  Todo?: TodoResolvers<ContextType>;
  UpdateTodoResponse?: UpdateTodoResponseResolvers<ContextType>;
};

