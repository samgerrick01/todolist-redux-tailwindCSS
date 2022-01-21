import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import Todos from "./Todos";
import { FaPlus } from "react-icons/fa";

const TodoForm = () => {
  //STATE
  const [input, setInput] = useState("");
  let dispatch = useDispatch();

  //EVENTS
  const handleAdd = (e) => {
    e.preventDefault();
    if (!input) {
      window.confirm("Please Input a Todo");
    } else {
      dispatch({
        type: "ADD_TODO",
        payload: {
          id: nanoid(),
          item: input,
          todoStatus: false,
        },
      });
      setInput("");
    }
  };
  return (
    <div className="h-600 bg-cyan-800 w-96 rounded-q1 p-5 flex flex-col shadow-2xl shadow-slate-500">
      <h1 className="text-white text-lg font-bold text-center">
        Todo List with Redux
      </h1>
      <h4 className="text-white text-sm font-bold text-center m-1">
        (Tailwind CSS)
      </h4>
      <div className="flex justify-center">
        <input
          className="text-center font-serif text-sm mr-5 rounded-q1 outline-0"
          autoFocus
          placeholder="Add Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="flex items-center text-center bg-slate-100 text-sm p-2 rounded-full"
          onClick={handleAdd}
        >
          <FaPlus />
        </button>
      </div>
      <Todos />
      <label className="flex justify-center text-white">
        Created By : Sam Gerrick De Silva
      </label>
    </div>
  );
};

export default TodoForm;
