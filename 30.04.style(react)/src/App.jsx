import { useState } from 'react'
import './App.css'
import "./API/index.js"
import Section from './components/Section.jsx'
import Search from './components/Search.jsx'

function App() {
  const [items,setItems]= useState([])
  const [search,setSearch] = useState("")
  const [ filter,setFilter] = useState("")

  let deSearch = items.filter((x)=>x.title.toLowerCase().trim().includes(search.toLowerCase().trim()))
  
  return (
   <>
   <Section items={deSearch} setItems={setItems} filter={filter} setFilter={setFilter} />
   <Search setSearch={setSearch}/>
   </>
  )
}

export default App
