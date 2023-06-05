/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
// import '../styles/app.scss';
import TodoItem from "./TodoItem/TodoItem";
import {v4 as uuid} from "uuid";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";


const TodosList = ({todosProps, setTodos, mainText, deleteTodo}) => { 

    const {theme, setTheme} = useContext(ThemeContext)

    const [itemProp, setItemProps] = useState("");
    //console.log(todosProps)
     // Alternative zu map
    // forEach ist ein statement, keine Expression
    // => deswegen können wir es nicht innerhalb von jsx verwenden
    // const todoOutputArray = [];
    // props.todosProps.forEach(todo => {
    //     todoOutputArray.push(<li>{todo.title}</li>)
    // })

    return (
        <div className={theme === "standard"? "": "shake"}>
             <ul style={{listStyle: "none"}}>
                {todosProps.map((todo, index) => (
                    <TodoItem 
                    key={uuid()} 
                    itemProp={todo}
                    setTodos={setTodos}
                    deleteTodo={deleteTodo}/>
                ))}
                {/* 
                const test = () =>{
                    if()
                    let abc;
                }
                <p>Alternative zu map (siehe oben "forEach") </p>
                {todoOutputArray} */}
            </ul>
            <br />
                {mainText}
        </div>


    )
}

export default TodosList