import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const InputTodo = ({ addTodoItem }) => {
  const { theme } = useContext(ThemeContext);
  const [todoText, setTodoText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // auf den eingegeben Text zugreifen

    if (todoText !== "") {
      addTodoItem(todoText.trim());
      // Formularfeld leeren
      setTodoText("");
      setError("");
    } else {
      setError("Bitte Text eingeben!");
    }

    // alert (todoText)
    // addTodoItem(todoText);
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          className="input-text"
          type="text"
          placeholder={theme === "standard" ? "Todo reinhauen" : "Todo hinzufügen"}
          value={todoText}
          onChange={(event) => {
            setTodoText(event.target.value);
          }}
        />

        <button
          className="input-submit"
          onClick={() => {
            addTodoItem;
          }}
          >
          Hinzufügen
        </button>
      </form>
      <p className="submit-warning">{error}</p>
    </>
  );
};

export default InputTodo;
