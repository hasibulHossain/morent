import React from 'react'
import Navbar from '../../components/navbar/navbar';
import { Outlet } from 'react-router-dom';


const Layout:React.FC = () => {
  return (
    <>
        <Navbar />
        <main>
          <Outlet />
        </main>
    </>
  )
}

export default Layout