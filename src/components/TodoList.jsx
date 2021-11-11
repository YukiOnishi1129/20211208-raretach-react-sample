import React from "react";
/* styles */
import "../App.css";

/**
 * TodoList
 * @param {*} props
 * @returns
 */
export const TodoList = (props) => {
  /* props */
  const { todoList } = props;

  return (
    <section className="common-area">
      <ul className="todolist">
        {todoList.map((todo) => (
          <li key={todo.id} className="todo">
            <span className="todo-task">{todo.title}</span>
            <i className="far fa-trash-alt delete fa-lg"></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
