import React from "react";
import { useSelector } from "react-redux";
import TodoList from "./TodoList";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div className="bg-slate-200 m-2 h-400 rounded-q1 overflow-y-auto">
      {todos.length === 0 ? (
        <p className="text-center text-s1">No Todos!</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoList
              key={todo.id}
              id={todo.id}
              item={todo.item}
              todoStatus={todo.todoStatus}
              todo={todo}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todos;
