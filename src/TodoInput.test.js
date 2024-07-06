import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoInput from "./TodoInput";

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => (store[key] = value.toString()),
    clear: () => (store = {}),
    removeItem: (key) => delete store[key],
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("TodoInput Component", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("localstorage에 입력된 todo가 저장", () => {
    render(<TodoInput />);

    const textarea = screen.getByPlaceholderText("오늘 할일을 입력하세요");
    const button = screen.getByText("입력");

    // Simulate user input
    fireEvent.change(textarea, { target: { value: "새로운 할일" } });
    fireEvent.click(button);

    // Check if the new todo is stored in localStorage
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    expect(storedTodos).toHaveLength(1);
    expect(storedTodos[0].text).toBe("새로운 할일");
    expect(storedTodos[0].completed).toBe(false);
  });

  test("localstorage에서 todo 삭제", () => {
    // 초기 할일 추가
    localStorage.setItem(
      "todos",
      JSON.stringify([{ text: "할일 1", completed: false, id: "1" }])
    );

    render(<TodoInput />);

    // 삭제 버튼 클릭
    const deleteButton = screen.getByText("삭제");
    fireEvent.click(deleteButton);

    // 삭제된 할일이 localStorage에 남아있지 않는지 확인
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    expect(storedTodos).toHaveLength(0);
  });

  test("localstorage에 완료됨 항목이 잘 토글되는지", () => {
    // 초기 할일 추가
    localStorage.setItem(
      "todos",
      JSON.stringify([{ text: "할일 1", completed: false, id: "1" }])
    );

    render(<TodoInput />);

    // 완료 토글 버튼 클릭
    const toggleButton = screen.getByText("완료하기");
    fireEvent.click(toggleButton);

    // 완료 상태가 localStorage에 올바르게 업데이트되었는지 확인
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    expect(storedTodos[0].completed).toBe(true);
  });
});
