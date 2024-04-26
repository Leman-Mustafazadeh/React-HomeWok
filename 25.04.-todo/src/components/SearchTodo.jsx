import React from 'react'

const SearchTodo = ({ setSearch }) => {

  return (
    <div className='seBox'>
      Search Todo <input className='search' onChange={(e) => setSearch(e.target.value)} type="text" />
    </div>
  )
}

export default SearchTodo
