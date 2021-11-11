import React from "react";
/* styles */
import "../App.css";

/**
 * AddTodo
 * @param {*} props
 * @returns
 */
export const AddTodo = (props) => {
  /* props */
  const { addInputValue, onChangeTodo, handleAddTodo } = props;

  return (
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
  );
};
