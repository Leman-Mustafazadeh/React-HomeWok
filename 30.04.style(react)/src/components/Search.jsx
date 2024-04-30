import 'bootstrap/dist/css/bootstrap.min.css';
const Search = ({setSearch,items}) => {
  return (
    <>
<div className="container">
<input type="text" placeholder='search...' className='my-3' onChange={(e)=>setSearch(e.target.value)}/>
    </div>    
    </>
  )
}

export default Search
