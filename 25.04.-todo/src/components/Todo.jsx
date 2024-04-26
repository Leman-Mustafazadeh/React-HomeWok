import React, { useState } from 'react'
import MarkToDo from './MarkToDo.jsx'
import AddTodo from './AddTodo.jsx'
import TodoList from './TodoList.jsx'
import { nanoid } from 'nanoid'
import ReactDOM from 'react-dom';
import SearchTodo from './SearchTodo.jsx'


const Todo = () => {
  let [todos, setTodos] = useState([]);
  const [inpValue, setInpValue] = useState("");
  const [mark, setMark] = useState(false);
  const [getId, setGetId] = useState(null);
  const [getId2, setGetId2] = useState(null);
  const [search, setSearch] = useState("");



  todos = todos.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))



  /*  var newDate = require('new-date'); */

  class ToDoItem {
    constructor(id, creadeAt, title, isDone) {
      this.id = id;
      this.creadeAt = creadeAt;
      this.title = title;
      this.isDone = isDone;
    }
  }

  todos = todos.filter(item => item.id != getId);

  const todoItem = new ToDoItem(nanoid(), "11-11-2024", inpValue, mark)


  let todosD = todos.map((item) => {
    if (item.id == getId2) {
      return item.isDone = !item.isDone
    }
  })


  const submit = e => {
    const messageSpan = document.querySelector(".messageInp");
    e.preventDefault()
    if (inpValue.trim() === "") {
      messageSpan.style.visibility = "visible";

    } else {
      messageSpan.style.visibility = "hidden";
      setTodos([...todos, todoItem])
      setInpValue("")
    }
  };


  return (

    <>
      <SearchTodo search={search} setSearch={setSearch} />
      <AddTodo submit={submit} inpValue={inpValue} setInpValue={setInpValue} />
      <TodoList setTodos={setTodos} setGetId={setGetId} setGetId2={setGetId2} setMark={setMark} todos={todos} />
    </>

  )
}

export default Todo
