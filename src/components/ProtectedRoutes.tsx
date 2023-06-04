import { type ReactElement } from 'react'
import type React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'

function ProtectedRoutes(): ReactElement<React.FC> {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default ProtectedRoutes
