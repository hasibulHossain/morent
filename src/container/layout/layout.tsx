import React from 'react'
import Navbar from '../../components/navbar/navbar';

interface Props {
    children: React.ReactNode;
}

const Layout:React.FC<Props> = ({ children }) => {
  return (
    <>
        <Navbar />
        <main>
            {
                children
            }
        </main>
    </>
  )
}

export default Layout