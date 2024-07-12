import React from "react";
import TodoItem from "./TodoItem.tsx";
import "../styles/TodoInput.css";

//index로 읽을것이 아니라 todo의 id값으로
//변화된 값을 잘 추적할 수 있게 최적화
const TodoList = ({ todos, onDelete, onToggleComplete }) => {
  return (
    <div>
      <h2 className="todo-text">할일 목록</h2>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
};

export default TodoList;
