import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const TodoDetail = () => {

const [todo, setTodo] = useState({});

    // dynmaischen Parameter, der in der URL übergeben wurde,
    // soll "ausgelesen" werden
    const { id } = useParams();
    // URL: ".../todo/5" => id = 5
    // URL: ".../todo/34234-sdfsdf-234d-dd" => id = 34234-sdfsdf-234d-dd

   const url = `https://tiny-house-helden.de/api/todo.php?id=${id}`;
   // wegen CORS brauchen wir einen proxy
   const proxyUrl = 'https://corsproxy.io/?' + url;

useEffect(()=>{
    
   const getTodo = async () => {
    try{
    const response = await fetch(proxyUrl);
    const todoObj = await response.json();
    setTodo(todoObj);
   } catch (error){
    alert ("Fehler beim Abrufen des ToDos", error)
   }

}
getTodo();
}, [proxyUrl]);


    return (
        <div>
            <h1>Mein Todo </h1>
            <p>Todo ID: {todo.id}  </p>
            <p>Todo Titel: {todo.title}  </p>
            <p>Todo Beschreibung: {todo.details} </p>
        </div>
    )
};

export default TodoDetail;