import React from 'react'
import { useReducer } from 'react'


function reducer(state,action)
{
    switch(action.type)
    {
        
        case 'increment':
            console.log(action,state)
            return {count: state.count + action.payload * action.help}
        case 'decrement':
            return {count: state.count - action.payload * action.help}
        default:
            return state

    }
    
}

const Practice_counter = () => {
    const [state, dispatch] = useReducer(reducer, {count:0})


    function increment()
    {
        dispatch({type: 'increment',payload:1,help:2})
        // dispatch(action.type='increment')
        
    }
    function decrement()
    {
        dispatch({type: 'decrement',payload:1,help:2})
    }

  return (
    <div>
        <h1>Practice_counter</h1>
        <button onClick={decrement}>-</button>
        {state.count}
        <button onClick={increment}>+</button>


    </div>
  )
}

export default Practice_counter