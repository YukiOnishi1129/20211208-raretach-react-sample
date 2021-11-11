import React from "react";
/* components */
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
/* hooks */
import { useApp } from "./useApp";
/* styles */
import "./App.css";

function App() {
  /* hooks */
  const [state, actions] = useApp();

  return (
    <div className="App">
      <h1 className="title">Todo List</h1>
      {/* Todo追加エリア */}
      <AddTodo
        addInputValue={state.addInputValue}
        onChangeTodo={actions.onChangeTodo}
        handleAddTodo={actions.handleAddTodo}
      />
      {/* Todoリスト一覧表示 */}
      {state.todoList.length > 0 && (
        <TodoList
          todoList={state.todoList}
          handleDeleteTodo={actions.handleDeleteTodo}
        />
      )}
    </div>
  );
}

export default App;
