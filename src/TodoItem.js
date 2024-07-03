import React from "react";

const TodoItem = ({ todo, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete(todo);
  };
  return (
    <div>
      {todo.completed ? (
        <img src="assets/done.png" alt="done" />
      ) : (
        <img src="assets/undone.png" alt="not done" />
      )}{" "}
      <label
        style={{ textDecoration: todo.completed ? "Line-through" : "none" }}
      >
        할 일 : {todo.text}
      </label>
      <button onClick={handleDeleteClick}>삭제</button>
    </div>
  );
};

export default TodoItem;
