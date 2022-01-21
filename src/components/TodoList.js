import React, { useState } from "react";
import { useDispatch } from "react-redux";

const TodoList = (props) => {
  //STATE
  const [isEdit, setIsEdit] = useState(false);
  const [editVal, setEditVal] = useState(props.item);
  const [complete, setComplete] = useState(false);
  let dispatch = useDispatch();
  //EVENTS
  const handleEdit = () => {
    if (!isEdit) {
      setIsEdit(!isEdit);
    } else {
      dispatch({
        type: "EDIT_TODO",
        id: props.id,
        item: editVal,
      });
      setIsEdit(false);
    }
  };
  const handleDel = () => {
    if (window.confirm("Are you sure you wanted to delete this Todo?")) {
      dispatch({
        type: "DELETE_TODO",
        payload: props.id,
      });
    }
  };

  const completeTodo = () => {
    if (complete === false) {
      dispatch({
        type: "COMPLETE_TODO",
        id: props.id,
        todoStatus: true,
      });
      setComplete(true);
    } else {
      dispatch({
        type: "COMPLETE_TODO",
        id: props.id,
        todoStatus: false,
      });
      setComplete(false);
    }
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        completeTodo();
      }}
      className={`${
        complete
          ? "text-sm h-50 bg-green-300 rounded-q1 m-1 flex justify-between cursor-pointer"
          : "text-sm h-50 bg-red-300 rounded-q1 m-1 flex justify-between cursor-pointer"
      }`}
    >
      <span
        className={`${
          complete
            ? "overflow-x-auto flex items-center m-1 line-through"
            : "overflow-x-auto flex items-center m-1"
        }`}
      >
        {isEdit ? (
          <input
            className="w-200 rounded-q1 outline-0"
            autoFocus
            onChange={(e) => setEditVal(e.target.value)}
            value={editVal}
          />
        ) : (
          props.item
        )}
      </span>
      <div className="flex flex-col h-fit">
        <button
          className="text-sm bg-green-400 h-25 rounded-sam1 w-100"
          onClick={(e) => {
            e.stopPropagation();
            handleEdit();
          }}
        >
          {isEdit ? "Save" : "Edit"}
        </button>
        <button
          className="text-sm bg-red-400 h-25 rounded-sam w-100"
          onClick={(e) => {
            e.stopPropagation();
            handleDel();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoList;
