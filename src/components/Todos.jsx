import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/TodoSlice";

export default function Todos() {
  const todos = useSelector((state) => state.todoApp.todos);
  const dispatch = useDispatch();
  const [isEditId, setIsEditId] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const clickEditBtn = (todo) => {
    setIsEditId(todo.id);
    setInputValue(todo.text);
  };
  const clickSaveBtn = (id) => {
    if (!inputValue.trim()) return;
    dispatch(
      updateTodo({
        id: id,
        text: inputValue,
      }),
    );
    setIsEditId(null);
    setInputValue("");
  };
  return (
    <>
      <div className="bg-gray-800">
        <div>Todos</div>
        <ul className="list-none">
          {todos.map((todo) => (
            <li
              className="mt-4 flex justify-between items-center bg-pink-950 px-4 py-2 rounded"
              key={todo.id}
            >
              {" "}
              {isEditId === todo.id ? (
                <input
                  type="text"
                  className="bg-gray-500 rounded border border-gray-900 focus:border-indigo-300 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && clickSaveBtn(todo.id)}
                  autoFocus
                />
              ) : (
                <div className="text-white">{todo.text}</div>
              )}
              {isEditId === todo.id ? (
                <button
                  onClick={() => {
                    clickSaveBtn(todo.id);
                  }}
                  className="text-white bg-green-300 border-0 py-1 px-4 focus:outline-none hover:bg-green-700 rounded text-md mr-2"
                >
                  <svg
                    xmlns="https://cdn-icons-png.flaticon.com/128/3984/3984400.png"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={() => {
                    clickEditBtn(todo);
                  }}
                  className="text-white bg-indigo-600 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-300 rounded text-md mr-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </button>
              )}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-600 border-0 py-1 px-4 focus:outline-none hover:bg-red-300 rounded text-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
