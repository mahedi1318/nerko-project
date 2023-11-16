import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbars from '../../components/navbarpart/Navbar'

const Root = () => {
  return (
    <div>
        <Navbars/>
        <Outlet/>
    </div>
  )
}

export default Root