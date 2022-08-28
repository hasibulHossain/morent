import React from 'react'
import Navbar from '../../components/navbar/navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/footer';


const Layout:React.FC = () => {
  return (
    <>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default Layout