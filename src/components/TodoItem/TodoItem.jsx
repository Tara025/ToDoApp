import React, {useContext} from "react";
import styles from "./TodoItem.module.scss";
import { ThemeContext} from "../ThemeContext";

function TodoItem({ itemProp, setTodos, deleteTodo }) {

  const {theme} = useContext(ThemeContext);

const handleChange = (id) => {
  //vergleichen von id mit todo
  //ändern der todo mit !
  
  setTodos((prevState) => 
  prevState.map((todo) => {
    if (todo.id === id){
      return {
      ...todo,
      completed: !todo.completed
    }
    }
    return todo
  })
  )
  
}

  return <li className={styles.item}>
    <div className={styles.content} >
    <input type="checkbox" 
    checked={itemProp.completed}
    onChange={()=>handleChange(itemProp.id)}
    />
    <span>{itemProp.text}</span>
    <button onClick={()=>deleteTodo(itemProp.id)}>{theme === 'standard'? 'delete' : 'destroy'}</button>
    </div>
    
    </li>;
}
export default TodoItem;
