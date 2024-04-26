import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos,setMark,setGetId,setTodos,setGetId2}) => {
 
  return (
    <ul>
      {todos?.map((allValue,index)=><TodoItem 
      key={index} 
      allValue={allValue}
      setMark={setMark} 
      setGetId={setGetId}
      todos={todos}
       setTodos={setTodos}
       setGetId2={setGetId2}
        />)}
    </ul>
  )
}

export default TodoList