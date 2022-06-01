import React, { createContext, useReducer } from 'react'
import TodoList from './TodoList';

const initState=
{
  query:"",
  todos:[],
  
}
export const todoContext =createContext();
function reducer(state,action)
{
  let newTodo,filteredTodo,newTo;
  switch(action.type)
  
  {
    case 'getQuery':
      // console.log(state,action)
      return {query:action.payload,todos:state.todos};
    case 'addTodo':
      newTodo=[...state.todos,{id: Date.now(), list: action.payload,status: false}];
      // console.log(action)
      return {todos:newTodo};
    case 'delTodo':
      filteredTodo=state.todos.filter(to=> to.id != action.payload)
      return {todos:filteredTodo}
    case 'toggleTodo':
      console.log(action,state)
      newTo= state.todos.map(t=> {
        if(t.id==action.payload)
        {
            return {...t, status: !t.status}   
        }
        else
        {
          return {...t}
        }
      })
        // console.log("newTo",newTo)
        console.log(state)
      return {todos:newTo}
      
    default:
      return state;
  }

}

export const TodoContextProvider = ({children}) => {
  const inputRef = React.useRef()
    const [state, dispatch]=useReducer(reducer,initState)
    const {query,todos}=state;
  return (
    <div>
        <h1>Todo</h1>
        <input ref={inputRef}  type="text" placeholder='Enter here...' value={state.query} onChange={e=> dispatch({type: 'getQuery',payload: e.target.value})}  />
        <button onClick={()=> {
          
          // let x=[];

          dispatch({type:"addTodo", payload:state.query})
          dispatch({type:"getQuery",payload:""})
          // console.log(state,state.query,state.todos)
          inputRef.current.focus()
        }}>Add</button>

        {/* {
          todos.map(todo=> (
            
            <div key={todo.id}><input checked={todo.status}  onChange={(e)=> {
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
        } */}



        <todoContext.Provider value={{todos,dispatch,state}} >
        <TodoList/>
        </todoContext.Provider>


    </div>
  )
}

