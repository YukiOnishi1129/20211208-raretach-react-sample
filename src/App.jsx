import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">Todo List</h1>
      {/* Todo追加エリア */}
      <section>
        <h2>ADD TODO</h2>
        <input type="text" placeholder="New Todo" />
      </section>
      {/* Todoリスト一覧表示 */}
      <section>
        <ul>
          <li>
            <span>Todo1</span>
            <i className="far fa-trash-alt delete fa-lg"></i>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
