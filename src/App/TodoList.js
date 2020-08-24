import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, VisibilityFilters } from "./data/actions";

const getVisibleTodos = (todos, filter) => {
  if (filter === VisibilityFilters.SHOW_ALL) return todos;
  else if (filter === VisibilityFilters.SHOW_ACTIVE)
    return todos.filter((t) => !t.completed);
  else if (filter === VisibilityFilters.SHOW_COMPLETED)
    return todos.filter((t) => t.completed);
};

const TodoList = () => {
  const todos = useSelector((state) =>
    getVisibleTodos(state.todos, state.visibilityFilter)
  );
  const dispatch = useDispatch();
  return (
    <div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          onClick={() => {
            dispatch(toggleTodo(todo.id));
          }}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
