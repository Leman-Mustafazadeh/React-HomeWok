import { useState } from 'react'
import './App.css'
import "./API/index.js"
import Section from './components/Section.jsx'
import Search from './components/Search.jsx'
import Navbar from './components/Navbar.jsx'
import NavLinks from './components/Navlink.jsx/index.jsx'
import Slider from './components/Slider.jsx/index.jsx'
import Join from './components/Join.jsx/index.jsx'
import Footer from './components/Footer.jsx/index.jsx'

function App() {
  const [items,setItems]= useState([])
  const [search,setSearch] = useState("")
  const [ filter,setFilter] = useState("")
  const [filteredMovies, setFilteredMovies] = useState([]);
  let deSearch = items.filter((x)=>x.title.toLowerCase().trim().includes(search.toLowerCase().trim()))
  
  return (
   <>
     <Navbar filteredMovies={filteredMovies} setFilteredMovies={setFilteredMovies}/>
    <NavLinks/>
    <Slider/>
   <Section items={deSearch} setItems={setItems} filter={filter} setFilter={setFilter} />
   <Search setSearch={setSearch}/>
   <Join/>
   <Footer/>
   </>
  )
}

export default App
