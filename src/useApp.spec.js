import { renderHook, act } from "@testing-library/react-hooks";
/* hooks */
import { useApp } from "./useApp";
/* data */
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "./data/initTodo";

describe("【Hooksテスト】useApp test", () => {
  describe("【関数テスト】onChangeTodo", () => {
    test("【正常系】addInputValueを更新できること", () => {
      const expectValue = "テスト";
      // 引数
      const eventObject = {
        target: {
          value: expectValue,
        },
      };
      // hooks呼び出し
      const { result } = renderHook(() => useApp());
      expect(result.current[0].addInputValue).toBe("");
      // hooks関数の実行
      act(() => result.current[1].onChangeTodo(eventObject));
      expect(result.current[0].addInputValue).toBe(expectValue);
    });
  });

  describe("【関数テスト】handleAddTodo", () => {
    let expectTodoList = [];
    let eventObject = {
      target: {
        value: "テスト",
      },
      keyCode: 13,
    };
    beforeEach(() => {
      // 引数の初期化
      eventObject = {
        target: {
          value: "テスト",
        },
        keyCode: 13,
      };
    });
    test("【正常系】todoList, uniqueIdが更新されること、addInputValueがリセットされること", () => {
      // 予測値
      const expectTodoTitle = "Todo3";
      expectTodoList = INIT_TODO_LIST.concat({
        id: 3,
        title: expectTodoTitle,
      });
      // 引数
      eventObject.target.value = expectTodoTitle;

      // hooks呼び出し
      const { result } = renderHook(() => useApp());
      expect(result.current[0].addInputValue).toBe("");
      // hooks関数の実行(addInputValueを更新)
      act(() => result.current[1].onChangeTodo(eventObject));
      expect(result.current[0].addInputValue).toBe(expectTodoTitle);

      // hooks関数の実行: handleAddTodoの実行
      act(() => result.current[1].handleAddTodo(eventObject));
      // TodoListが予測値どおり更新されたこと
      expect(result.current[0].todoList).toEqual(expectTodoList);
      // 入力値(addInputValue)がリセットされたこと
      expect(result.current[0].addInputValue).toBe("");
    });
    test("【正常系】エンターキーを押していない場合、処理が発生しないこと", () => {
      // 予測値
      const expectTodoTitle = "Todo4";
      expectTodoList = INIT_TODO_LIST.concat({
        id: 3,
        title: expectTodoTitle,
      });
      // 引数
      eventObject.target.value = expectTodoTitle;
      eventObject.keyCode = 1;
      // hooks呼び出し
      const { result } = renderHook(() => useApp());
      expect(result.current[0].addInputValue).toBe("");
      // hooks関数の実行(addInputValueを更新)
      act(() => result.current[1].onChangeTodo(eventObject));
      expect(result.current[0].addInputValue).toBe(expectTodoTitle);
      // hooks関数の実行: handleAddTodoの実行
      act(() => result.current[1].handleAddTodo(eventObject));
      // TodoListが予測値どおり更新されない
      expect(result.current[0].todoList).not.toEqual(expectTodoList);
      // 入力値(addInputValue)がリセットされない
      expect(result.current[0].addInputValue).not.toBe("");
    });
    test("【正常系】入力値がない場合、処理が発生しないこと", () => {
      // 予測値
      const expectTodoTitle = "Todo5";
      expectTodoList = INIT_TODO_LIST.concat({
        id: 3,
        title: expectTodoTitle,
      });
      // 引数
      eventObject.target.value = "";
      eventObject.keyCode = 1;
      // hooks呼び出し
      const { result } = renderHook(() => useApp());
      expect(result.current[0].addInputValue).toBe("");
      // hooks関数の実行(addInputValueを更新)
      act(() => result.current[1].onChangeTodo(eventObject));
      expect(result.current[0].addInputValue).toBe("");
      // hooks関数の実行: handleAddTodoの実行
      act(() => result.current[1].handleAddTodo(eventObject));
      // TodoListが予測値どおり更新されない
      expect(result.current[0].todoList).not.toEqual(expectTodoList);
    });
  });
  describe("【関数テスト】handleDeleteTodo", () => {
    test("【正常系】todoが削除されること", () => {});
    test("【異常系】元のtodoListが空の場合、処理が発生しないこと", () => {});
  });
});