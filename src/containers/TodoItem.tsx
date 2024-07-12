import "../styles/TodoItem.css";

const TodoItem = ({ todo, onDelete, onToggleComplete }) => {
  const handleDeleteClick = ():void => {
    onDelete(todo);
  };

  const handleToggleCompleteClick = ():void => {
    onToggleComplete(todo);
  };


  //최적화 방안
  //인라인 스타일은 매 렌더링 마다 불필요한 스타일 객체를 생성함
  //css 파일에 미리 정의해두고
  //조건부로 불러오도록 변경하기
  return (
    <div className="todo-item-container">
      {/* {todo.completed ? (
        <input type="checkbox" checked disabled />
      ) : (
        <input type="checkbox" disabled />
      )} */}
      <input type="checkbox" checked={todo.completed} disabled/>
      <label
        className={`todo-item-text ${todo.completed ? "completed":""}`}
      >
        할 일 : {todo.text}
      </label>
      <div className="todo-item-buttons">
        <button
          className={`todo-item-button ${todo.completed ? "completed-button":""}`}
          onClick={handleToggleCompleteClick}
          disabled={todo.completed}
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
