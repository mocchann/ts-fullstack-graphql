import { Todo } from "../../__generated__/graphql";

type Props = {
  todoItem: Todo;
};

export const TodoItem = ({ todoItem }: Props): JSX.Element => {
  return (
    <article
      className={`flex justify-between items-center shadow-sm bg-white rounded border-l-8 border-blue-600 my-4 px-4 h-20 ${
        todoItem?.isCompleted ? "border-emerald-500" : "border-blue-500"
      }`}
      key={todoItem?.id}
    >
      <div className="flex items-center">
        <input
          checked={todoItem?.isCompleted}
          type={"checkbox"}
          className="w-4 h-4"
        />
        <div className="flex flex-col ml-4">
          <p
            className={`${
              todoItem?.isCompleted
                ? "text-emerald-500 line-through"
                : "text-slate-600"
            }`}
          >
            {todoItem?.title}
          </p>

          <small className="text-gray-400">
            {todoItem?.createdAt.toISOString().split("T")[0]}
          </small>
        </div>
      </div>

      <small className="text-gray-500 hover:bg-gray-100 rounded-full p-1 cursor-pointer">
        ***
      </small>
    </article>
  );
};
