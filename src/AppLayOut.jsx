import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/home'



function AppLayOut() {
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default AppLayOut