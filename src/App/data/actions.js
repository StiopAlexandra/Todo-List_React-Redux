export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const VisibilityFilters = {
  SHOW_ALL: "ALL",
  SHOW_ACTIVE: "ACTIVE",
  SHOW_COMPLETED: "COMPLETED",
};

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id,
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  };
};
