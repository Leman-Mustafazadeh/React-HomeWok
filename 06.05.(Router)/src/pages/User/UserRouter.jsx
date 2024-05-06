import React from 'react'
import Home from './Home'
import { Outlet } from 'react-router'
import UserNavbar from '../../components/User/Navbar'

const UserRouter = () => {
  return (
    <>
      <UserNavbar/>
      <Outlet/>
      
    </>
  )
}

export default UserRouter
