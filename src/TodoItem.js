import React from "react";

const TodoItem = ({ todo, onDelete, onToggleComplete }) => {
  const handleDeleteClick = () => {
    onDelete(todo);
  };

  const handleToggleCompleteClick = () => {
    onToggleComplete(todo);
  };

  return (
    <div>
      {todo.completed ? (
        <input type="checkbox" checked disabled />
      ) : (
        <input type="checkbox" disabled />
      )}{" "}
      <label
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        할 일 : {todo.text}
      </label>
      <button onClick={handleToggleCompleteClick}>
        {todo.completed ? "완료됨" : "완료하기"}
      </button>
      <button onClick={handleDeleteClick}>삭제</button>
    </div>
  );
};

export default TodoItem;
