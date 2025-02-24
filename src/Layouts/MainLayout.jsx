import React from 'react'
import Nav from '../Sections/NavBar/Nav'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
  <div className='font-Quick min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-black transition-colors duration-300'>
    <Nav/>
    <Outlet/>
  </div>
  )
}

export default MainLayout
