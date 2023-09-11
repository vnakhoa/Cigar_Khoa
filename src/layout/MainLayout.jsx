import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../component/Footer'
import Header from '../component/Header'

function MainLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/home');
  }, [])

  return (
    <>
        <Header />

        <Outlet />

        <Footer />
    
    </>
  )
}

export default MainLayout