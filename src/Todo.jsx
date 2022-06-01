import React, { useReducer } from 'react'

const initState=
{
  query:"",
  todos:[]
}

function reducer(state,action)
{
  let newTodo,filteredTodo;
  switch(action.type)
  {
    case 'getQuery':
      // console.log(state,action)
      return {query:action.payload,todos:state.todos};
    case 'addTodo':
      newTodo=[...state.todos,{id: Date.now(), list: action.payload}];
      // console.log(action)
      return {todos:newTodo};
    case 'delTodo':
      filteredTodo=state.todos.filter(to=> to.id != action.payload)
      return {todos:filteredTodo}
    default:
      return state;
  }

}

const Todo = () => {
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

        {
          todos.map(todo=> (
            
            <div key={todo.id}><input value={true} onChange={(e)=> console.log(e.target.checked)} type="checkbox"/> {todo.list} 
            <button onClick={()=> {
              dispatch({type:'delTodo', payload: todo.id})
            }}>Del</button>
             </div>
             
             
            
          )
            
          )
        }
    </div>
  )
}

export default Todo