import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import TodoInput from "./components/TodoInput.tsx";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TodoInput />
  </React.StrictMode>
);

reportWebVitals();
