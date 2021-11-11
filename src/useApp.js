import React from "react";
/* data */
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "./data/initTodo";

/**
 * useApp
 * @returns
 */
export const useApp = () => {
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
    if (e.keyCode === 13 && addInputValue !== "") {
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

  return [
    {
      todoList,
      addInputValue,
    },
    {
      onChangeTodo,
      handleAddTodo,
      handleDeleteTodo,
    },
  ];
};
