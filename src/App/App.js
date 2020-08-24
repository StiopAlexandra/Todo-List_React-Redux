import React from "react";
import { createStore } from "redux";
import todoApp from "./data/reducers";
import { Provider } from "react-redux";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import Footer from "./Footer";

const store = createStore(todoApp);

const App = () => {
  return (
    <Provider store={store}>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <Footer />
    </Provider>
  );
};

export default App;
