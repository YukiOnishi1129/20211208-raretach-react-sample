import { renderHook, act } from "@testing-library/react-hooks";
/* hooks */
import { useApp } from "./useApp";

describe("【Hooksテスト】useApp test", () => {
  describe("【関数テスト】onChangeTodo", () => {
    test("【正常系】addInputValueを更新できる", () => {
      // 引数
      const eventObject = {
        target: {
          value: "テスト",
        },
      };
      // hooks呼び出し
      const { result } = renderHook(() => useApp());
      expect(result.current[0].addInputValue).toBe("");
      // hooks関数の実行
      act(() => result.current[1].onChangeTodo(eventObject));
      expect(result.current[0].addInputValue).toBe("テスト");
    });
  });

  describe("【関数テスト】handleAddTodo", () => {});
  describe("【関数テスト】handleDeleteTodo", () => {});
});
