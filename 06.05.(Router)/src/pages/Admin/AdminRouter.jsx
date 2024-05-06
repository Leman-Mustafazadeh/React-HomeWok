import React, { useEffect, useState } from 'react'
import AddminNavbar from '../../components/Admin/Navbar'
import {Outlet} from "react-router"
import { getAll } from '../../API'
const AdminRouter = () => {
  const [country,setCountry]=useState([])
  const [search,setSearch]= useState([])

  useEffect(()=>{
    getAll().then((res)=>{
      setCountry(res.data)
    })

    

  },[])
  return (
    <div>
        <AddminNavbar/>
        <Outlet context={[country,setCountry]}/>
    </div>
  )
}

export default AdminRouter
