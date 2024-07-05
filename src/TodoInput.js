import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import "./TodoInput.css";
import "./index.css";

const TodoInput = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(() => {
    //localStorage에서 초기 todo를 불러옴
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      try {
        return JSON.parse(savedTodos);
      } catch (error) {
        console.log(
          "todos가 파싱할 수 있는 올바른 JSON 형식이 아닙니다.",
          error
        );
        return [];
      }
    } else return [];
  });

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    if (text.trim() !== "") {
      const id = Date.now().toString();
      const newTodo = { text: text, completed: false, id: id };
      setTodos([...todos, newTodo]);
      setText("");
    } else {
      alert("잘못된 입력입니다.");
    }
  };

  //지정된 의존성 배열 todos 의 값이 변경될 때마다
  //useEffect의 콜백함수 실행됨.
  //2번째 파라미터에 빈 배열 -> 컴포넌트 처음 마운트때 한번 실행
  //생략하면 -> 매 렌더링마다 실행
  useEffect(() => {
    //todos 상태가 변경될때마다 locastorage에 저장
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //
  const handleDelete = (deletedTodo) => {
    const filteredTodos = todos.filter((todo) => todo.id !== deletedTodo.id);
    setTodos(filteredTodos);
  };

  const handleToggleComplete = (toggledTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === toggledTodo.id
        ? { ...todo, completed: !todo.completed }
        : todo
    );
    setTodos(updatedTodos);
  };

  // 완료된 항목을 상단에 정렬
  let sortedTodos;
  if (todos) {
    sortedTodos = todos.sort((a, b) => b.completed - a.completed);
  } else sortedTodos = todos;

  return (
    <div className="container">
      <h1 className="todo-text">오늘 할일을 체크해요!</h1>
      <div className="todo-input-form">
        <textarea
          id="todo-input-textarea"
          value={text}
          onChange={handleChange}
          placeholder="오늘 할일을 입력하세요"
          rows={1}
          cols={40}
          spellCheck="false"
        />
        <button className="todo-button" onClick={handleClick}>
          입력
        </button>
      </div>
      <br />
      <TodoList
        todos={sortedTodos}
        onDelete={handleDelete}
        onToggleComplete={handleToggleComplete}
      />
    </div>
  );
};

export default TodoInput;
