import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbars from '../../components/navbarpart/Navbar'
import Footer from '../../components/footerPart/Footer'

const Root = () => {
  return (
    <div>
        <Navbars/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Root