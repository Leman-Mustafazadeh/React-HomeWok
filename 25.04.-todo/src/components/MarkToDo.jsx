import React from 'react'

const MarkToDo = ({ id, setGetId2, setTodos, todos }) => {

  const setMark = () => {
    setGetId2(id)
    setTodos(todos)
  }
  return (

    <button onClick={() => setMark()} className='check'>check</button>

  )
}

export default MarkToDo
