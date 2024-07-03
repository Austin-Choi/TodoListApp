import React, { useState } from "react";
import TodoList from "./TodoList";

const TodoInput = () => {
  //여기서 define도 하는 것
  const [text, setText] = useState("");
  //const [todoItem, setTodoItem] = useState({ text: "", completed: false });
  const [todos, setTodos] = useState([]);
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    if (text.trim() !== "") {
      //setTodoItem({ text: text, completed: false });
      const newTodo = { text: text, completed: false };
      setTodos([...todos, newTodo]);
      setText("");
    } else {
      alert("다시 입력해주세요");
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="오늘 할일을 입력하세요"
        rows={1}
        cols={40}
      />
      <button onClick={handleClick}>입력</button>
      <br />
      {/* {todoItem.text && <TodoItem todo={todoItem} />} */}
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoInput;
