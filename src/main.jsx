import React from "react";
import ReactDOM from "react-dom/client";
import TodoApp from "./components/TodoApp.jsx";
import "./styles/app.scss";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider} from './components/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <TodoApp />
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
