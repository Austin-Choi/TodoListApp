import React, { useState } from "react";
import TodoList from "./TodoList";
import "./TodoInput.css";
import "./index.css";

const TodoInput = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    if (text.trim() !== "") {
      const newTodo = { text: text, completed: false };
      setTodos([...todos, newTodo]);
      setText("");
    } else {
      alert("다시 입력해주세요");
    }
  };

  const handleDelete = (deletedTodo) => {
    const filteredTodos = todos.filter((todo) => todo !== deletedTodo);
    setTodos(filteredTodos);
  };

  const handleToggleComplete = (toggledTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo === toggledTodo ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // 완료된 항목을 상단에 정렬
  const sortedTodos = todos.sort((a, b) => b.completed - a.completed);

  return (
    <div className="container">
      <h1 className="todo-text">오늘 할일을 체크해요!</h1>
      <br />
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
