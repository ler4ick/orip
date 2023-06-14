import { type ReactElement } from 'react'
import type React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import { Footer } from './Footer/Footer'

function ProtectedRoutes(): ReactElement<React.FC> {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default ProtectedRoutes
