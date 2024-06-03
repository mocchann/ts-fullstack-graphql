import { toast } from "react-hot-toast";
import {
  useTodosQuery,
  useMakeTodoMutation,
  useRemoveTodoMutation,
  useUpdateTodoMutation,
  TodosDocument,
} from "../__generated__/graphql";
import { isEmptyString } from "../utils/isEmptyString";

export const useTodos = () => {
  const {
    data: todoData,
    loading: todoDataLoding,
    error: todoDataError,
  } = useTodosQuery();

  const [
    makeTodoMut,
    { loading: makeTodoMutLoading, error: makeTodoMutError },
  ] = useMakeTodoMutation();

  const [
    removeTodoMut,
    { loading: removeTodoMutLoading, error: removeTodoMutError },
  ] = useRemoveTodoMutation();

  const [
    updateTodoMut,
    { loading: updateTodoMutLoading, error: updateTodoMutError },
  ] = useUpdateTodoMutation();

  const makeTodo = async (title: string) => {
    if (isEmptyString(title)) {
      toast.error("Title is required");
      return;
    }

    await makeTodoMut({
      variables: {
        makeTodoInput: {
          title,
        },
      },
      refetchQueries: [TodosDocument],
    });

    toast.success("Todo created successfully");
  };

  const removeTodo = async (id: string) => {
    await removeTodoMut({
      variables: {
        removeTodoInput: {
          todoId: id,
        },
      },
      refetchQueries: [TodosDocument],
    });

    toast.success("Todo removed successfully");
  };

  const updateTodoCompleteStatus = async (id: string, isCompleted: boolean) => {
    await updateTodoMut({
      variables: {
        updateTodoInput: {
          todoId: id,
          isCompleted,
        },
      },
      refetchQueries: [TodosDocument],
    });
    toast.success("Todo updated successfully");
  };

  const updateTodoTitle = async (id: string, title: string) => {
    if (isEmptyString(title)) {
      toast.error("Title is required");
      return;
    }

    await updateTodoMut({
      variables: {
        updateTodoInput: {
          todoId: id,
          title,
        },
      },
      refetchQueries: [TodosDocument],
    });

    toast.success("Todo updated successfully");
  };

  return {
    todoData,
    todoDataError,
    todoDataLoding,
    makeTodo,
    makeTodoMutError,
    makeTodoMutLoading,
    removeTodo,
    removeTodoMutError,
    removeTodoMutLoading,
    updateTodoCompleteStatus,
    updateTodoTitle,
    updateTodoMutError,
    updateTodoMutLoading,
  } as const;
};
