import React, { useContext } from 'react'
import { todoContext } from './Todo';


const TodoList = () => {
    const {todos,dispatch} = useContext(todoContext);
  return (
    <div>

{
          todos.map(todo=> (
            
            <div style={ todo.status ? {color: "gray", textDecoration: "underline"} : {color: "black"} } key={todo.id}><input checked={todo.status}  onChange={(e)=> {
              dispatch({type:"toggleTodo", payload:todo.id})
              dispatch({type:"getQuery",payload:""})
              // console.log(todo.status,e.target.checked)
            }} type="checkbox"/> {todo.list} 
            <button onClick={()=> {
              dispatch({type:'delTodo', payload: todo.id})
              dispatch({type:"getQuery",payload:""})
            }}>Del</button>
             </div> 
            
          )
            
          )
        }

    </div>
  )
}

export default TodoList