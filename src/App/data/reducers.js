import {
  VisibilityFilters,
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO,
} from "./actions";
import { combineReducers } from "redux";

let nextTodoId = 0;
const initialState = {
  todos: [
    {
      id: nextTodoId++,
      text: "Go to the gym",
      completed: false,
    },
    {
      id: nextTodoId++,
      text: "Read a book",
      completed: false,
    },
  ],
  filter: VisibilityFilters.SHOW_ALL,
};

export const todos = (state = initialState.todos, action) => {
  if (action.type === ADD_TODO) {
    return [
      ...state,
      {
        id: nextTodoId++,
        text: action.text,
        completed: false,
      },
    ];
  }
  if (action.type === TOGGLE_TODO) {
    return state.map((todo) => {
      if (todo.id === action.id)
        return {
          ...todo,
          completed: !todo.completed,
        };
      return todo;
    });
  }
  return state;
};

export const visibilityFilter = (state = initialState.filter, action) => {
  if (action.type === SET_VISIBILITY_FILTER) {
    return action.filter;
  }
  return state;
};

const todoApp = combineReducers({
  todos,
  visibilityFilter,
});

export default todoApp;
