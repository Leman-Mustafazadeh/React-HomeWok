import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "../App.css"
const AddTodo = ({inpValue,setInpValue,submit}) => {

  return (
 <>
  <div className='form-todo'>
  <h2>Todo list</h2>
    <form onSubmit={submit}>
        <input type="text"  value={inpValue} onChange={(e)=>setInpValue(e.target.value)}/>
        <span  className="messageInp" >input is required</span>
        <button>Add Button</button>
    </form>
  </div>
 </>
  )
}

export default AddTodo
