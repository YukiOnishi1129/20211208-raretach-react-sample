import React from "react";
/* components */
// import { TodoList } from "./components/TodoList";
/* data */
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "./data/initTodo";
/* styles */
import "./App.css";

function App() {
  /* state */
  /* todo list */
  const [todoList, setTodoList] = React.useState(INIT_TODO_LIST);
  /* add input title */
  const [addInputValue, setAddInputValue] = React.useState("");
  /* todo 採番ID */
  const [uniqueId, setUniqueId] = React.useState(INIT_UNIQUE_ID);

  /* actions */
  /**
   * addInputValueの変更処理
   * @param {*} e
   */
  const onChangeTodo = (e) => {
    setAddInputValue(e.target.value);
  };

  /**
   * Todo新規登録処理
   * @param {*} e
   */
  const handleAddTodo = (e) => {
    //  エンターキーが押された時にTodoを追加する
    if (e.keyCode === 13 && e.target.value !== "") {
      const nextUniqueId = uniqueId + 1;
      // Todo追加処理
      setTodoList(
        // TODO: concatとpushの違い
        todoList.concat({
          id: nextUniqueId,
          title: addInputValue,
        })
      );
      // 採番IDを更新
      setUniqueId(nextUniqueId);
      // todo追加後、入力値をリセット
      setAddInputValue("");
    }
  };

  /**
   * Todo削除処理
   * @param {*} targetId
   */
  const handleDeleteTodo = (targetId) => {
    // 削除するid以外のtodoリストを再編集
    const newTodoList = todoList.filter((todo) => todo.id !== targetId);
    // todoを削除したtodo listで更新
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <h1 className="title">Todo List</h1>
      {/* Todo追加エリア */}
      <section className="common-area">
        <h2 className="add-title">ADD TODO</h2>
        <input
          type="text"
          placeholder="New Todo"
          value={addInputValue}
          onChange={onChangeTodo}
          onKeyDown={handleAddTodo}
        />
      </section>
      {/* Todoリスト一覧表示 */}
      {/* <TodoList todoList={todoList} /> */}
      {todoList.length > 0 && (
        <section className="common-area">
          <ul className="todolist">
            {todoList.map((todo) => (
              <li key={todo.id} className="todo">
                <span className="todo-task">{todo.title}</span>
                <i
                  className="far fa-trash-alt delete fa-lg"
                  onClick={() => handleDeleteTodo(todo.id)}
                ></i>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

export default App;
