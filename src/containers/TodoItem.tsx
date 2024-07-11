import React, { FC } from "react";
import "../styles/TodoItem.css";

const TodoItem = ({ todo, onDelete, onToggleComplete }) => {
  const handleDeleteClick = ():void => {
    onDelete(todo);
  };

  const handleToggleCompleteClick = ():void => {
    onToggleComplete(todo);
  };

  return (
    <div className="todo-item-container">
      {todo.completed ? (
        <input type="checkbox" checked disabled />
      ) : (
        <input type="checkbox" disabled />
      )}
      <label
        className="todo-item-text"
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        할 일 : {todo.text}
      </label>
      <div className="todo-item-buttons">
        <button
          className="todo-item-button"
          onClick={handleToggleCompleteClick}
          disabled={todo.completed}
          style={{
            background: todo.completed ? "darkseagreen" : "darkgoldenrod",
          }}
        >
          {todo.completed ? "완료됨" : "완료하기"}
        </button>
        <button className="todo-item-button" onClick={handleDeleteClick}>
          삭제
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
