import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">Todo List</h1>
      {/* Todo追加エリア */}
      <section className="common-area">
        <h2 className="add-title">ADD TODO</h2>
        <input type="text" placeholder="New Todo" />
      </section>
      {/* Todoリスト一覧表示 */}
      <section className="common-area">
        <ul className="todolist">
          <li className="todo">
            <span className="todo-task">Todo1</span>
            <i className="far fa-trash-alt delete fa-lg"></i>
          </li>
          <li className="todo">
            <span className="todo-task">Todo2</span>
            <i className="far fa-trash-alt delete fa-lg"></i>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
