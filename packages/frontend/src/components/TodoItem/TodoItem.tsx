import { useState } from "react";
import { Todo } from "../../__generated__/graphql";
import { DropDownMenu } from "../Elements/DropDownMenu";
import { AiOutlineEdit } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";

type Props = {
  todoItem: Todo;
  removeTodo: (id: string) => Promise<void> | void;
  updateTodoCompleteStatus: (
    id: string,
    isCompleted: boolean
  ) => Promise<void> | void;
  updateTodoTitle: (id: string, title: string) => Promise<void> | void;
};

export const TodoItem = ({
  todoItem,
  removeTodo,
  updateTodoCompleteStatus,
  updateTodoTitle,
}: Props): JSX.Element => {
  const [isTitleEditing, setIsTitleEditing] = useState<boolean>(false);
  const [todoTitleInput, setTodoTitleInput] = useState<string>(todoItem.title);

  const hadleRemoveBtnClick: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    removeTodo(todoItem?.id);
  };

  const handleCompleteTodoCheckBoxChange: React.ChangeEventHandler<
    HTMLInputElement
  > = (event) => {
    updateTodoCompleteStatus(todoItem.id, event.target.checked);
  };

  const handleTodoTitleInput: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => setTodoTitleInput(event.target.value);

  const handleEditTitleBtnClick: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    setIsTitleEditing(true);
  };

  const handleTodoTitleInputBlur: React.FocusEventHandler<
    HTMLInputElement
  > = async (event) => {
    try {
      await updateTodoTitle(todoItem.id, todoTitleInput);
      setIsTitleEditing(false);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

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
          onChange={handleCompleteTodoCheckBoxChange}
        />
        <div className="flex flex-col ml-4">
          {isTitleEditing ? (
            <input
              className="focus:outline-none text-slate-600"
              type={"text"}
              value={todoTitleInput}
              onChange={handleTodoTitleInput}
              autoFocus
              onBlur={handleTodoTitleInputBlur}
            />
          ) : (
            <p
              className={`${
                todoItem?.isCompleted
                  ? "text-emerald-500 line-through"
                  : "text-slate-600"
              }`}
            >
              {todoItem?.title}
            </p>
          )}

          <small className="text-gray-400">
            {todoItem?.createdAt.toISOString().split("T")[0]}
          </small>
        </div>
      </div>
      <DropDownMenu
        clickTarget={
          <small className="text-gray-500 hover:bg-gray-100 rounded-full p-1">
            ***
          </small>
        }
        menuItems={[
          <button
            key={1}
            className="flex justify-between w-full items-center text-gray-800"
            onClick={handleEditTitleBtnClick}
          >
            <span>Edit</span>
            <AiOutlineEdit />
          </button>,
          <button
            key={2}
            className="flex justify-between w-full items-center text-red-400"
            onClick={hadleRemoveBtnClick}
          >
            <span>Remove</span>
            <BiTrash />
          </button>,
        ]}
      />
    </article>
  );
};
