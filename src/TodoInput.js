import React, { useState } from "react";
//rsc
const TodoInput = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    alert(text);
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
    </div>
  );
};

export default TodoInput;
