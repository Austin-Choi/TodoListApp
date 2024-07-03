import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete }) => {
  return (
    <div>
      <h3>할일 목록</h3>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TodoList;
