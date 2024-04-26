import React from 'react'
import Swal from 'sweetalert2'
const Delete = ({ id, setGetId, setTodos, todos }) => {


  const setDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {

      if (result.isConfirmed) {
        setGetId(id)
        setTodos(todos)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

  return (
    <>
      <button onClick={() => setDelete()} className="del">delete</button>
    </>
  )
}

export default Delete
