import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <div>
      {todo.completed ? (
        <img src="https://www.flaticon.com/free-icons/yes" alt="done" />
      ) : (
        <img src="https://www.flaticon.com/free-icons/cancel" alt="not done" />
      )}{" "}
      할 일 : {todo.text}
    </div>
  );
};

export default TodoItem;
