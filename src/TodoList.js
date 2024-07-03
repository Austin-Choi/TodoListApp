import React from "react";
import TodoItem from "./TodoItem";
import "./TodoInput.css";

const TodoList = ({ todos, onDelete, onToggleComplete }) => {
  return (
    <div>
      <h2 className="todo-text">할일 목록</h2>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
};

export default TodoList;
