import React, { useEffect, useState } from 'react'
import {getAll} from "../../../API"
const Dashboard = () => {

  const [allcount,setallCount]= useState(0)

  useEffect(()=>{
    getAll().then((res)=>{
      setallCount(res.data.length)
    })
  },[])
  return (
    <div>
      <h1>allcount: {allcount}</h1>
    </div>
  )
}
export default Dashboard
