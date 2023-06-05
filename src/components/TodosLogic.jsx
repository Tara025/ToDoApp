import { useState } from "react";
import { v4 as uuid } from "uuid";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";


const TodosLogic = () => {
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      text: "Ganz schön anstrengend dieses REACT",
      completed: false,
    },
    {
      id: uuid(),
      text: "Develop website and add content",
      completed: false,
    },
    {
      id: uuid(),
      text: "Deploy to live server",
      completed: false,
    },
  ]);

 
  //hier speichern wir die Daten, deshalb hier die CRUD Operationen (löschen von todos)
  const deleteTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        //alle die nicht geklickt wurden werden im Array bleiben
        return todo.id !== id;
      }),
    ]);
  };

  // hier speichern wir die Daten, deshalb hier die CRUD (Create Read Update  Delete) Operationen (löschen von todos)
  // const deleteTodo = (clickedTodoId) => {
  // Array "überschreiben"

  // durch destructering "..." wird das todo array kopiert
  // das wird hier quasi "zur Sicherheit" gemacht, da man
  // das todo array nie selbst direkt ändern darf
  // Hier ist es aber eigentlich überflüssig, das filter schon ein
  // neues Array erstellt
  // const newFilteredArray = [...todos.filter((todo) => {
  // alle die nicht geklickt wurden werden im Array bleiben
  //   return todo.id !== clickedTodoId
  // })
  // ]
  // setTodos(newFilteredArray)

  // 2. Möglichkeit zum löschen
  //    const newTodos = todos.filter((todo)=>{
  //     return todo.id !== id
  //    })
  //    setTodos(newTodos)

  // "Todo" Item hinzufügen
  const addTodoItem = (todoText) => {
    setTodos((altesArray) => 
    [...altesArray,{ id: uuid(), text: todoText, completed: false },])
       
    ;}

  // Mini-Aufgabe
  // Gebe addTodoItem Funktion weiter bis an die InputTodo Component
  // Rufe sie dort in der handleSubmit Funktion auf
  // Übergebe ihr den toDo title aus dem input Feld

  return (
    <div>
     
     
      <InputTodo
        addTodoItem={addTodoItem}
     
      />


      <TodosList
        todosProps={todos}
        setTodos={setTodos}
        deleteTodo={deleteTodo}

      />
     


      
      
    </div>
  );
};

export default TodosLogic;

// function save(todos) {
//   localStorage.setItem("todos", JSON.stringify(todos));
//   console.log("saved:", todos);
// }

// async function load() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const todos = JSON.parse(window.localStorage.getItem("todos"));
//       resolve(todos ?? []);
//     }, 500);
//   });
// }

// KEY Erklärung
/*
- "Keys" sind spezielle Attribute, die React helfen, Elemente in einer Liste zu identifizieren.
- Sie sind wichtig, wenn du mit dynamischen Listen arbeitest, 
  also wenn du mehrere Elemente auf einmal renderst.
- Ohne Keys kann React durcheinander kommen, welche Elemente hinzugefügt, geändert oder entfernt wurden. 
- Keys sollten einzigartig sein, damit React die Elemente richtig identifizieren kann.
- Man benutzt meistens die IDs von Datenobjekten als Keys.
- Keys werden direkt auf die Elemente gesetzt, 
  die in einer Liste gerendert werden, z.B. beim Mappen von Arrays.
*/
