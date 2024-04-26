import React from 'react'
import MarkToDo from './MarkToDo'
import Delete from './Delete'

const TodoItem = ({allValue,setMark,setGetId,todos,setTodos,setGetId2}) => {
   
  return (
    <li><span style={allValue.isDone ? {textDecoration:"line-through"}:{textDecoration:""}}>{allValue.title}</span>
    <MarkToDo todos={todos} setGetId2={setGetId2}  id={allValue.id} setMark={setMark} setTodos={setTodos}  />   
    <Delete todos={todos} setGetId={setGetId} id={allValue.id} setTodos={setTodos} /> 
    </li>
  )
}

export default TodoItem