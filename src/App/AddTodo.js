import React from "react";
import { useRef } from "react";
import { addTodo } from "./data/actions";
import { useDispatch } from "react-redux";
const AddTodo = () => {
  const input = useRef(null);
  const dispatch = useDispatch();
  return (
    <div>
      <input ref={input} />
      <button
        onClick={() => {
          dispatch(addTodo(input.current.value));
          input.current.value = "";
        }}
      >
        Add
      </button>
    </div>
  );
};
export default AddTodo;
