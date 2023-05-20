import { type ReactElement } from 'react'
import type React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { routes } from './Routing'
import Header from './Header/Header'

function ProtectedRoutes(): ReactElement<React.FC> {
  const login = localStorage.getItem('user')

  return login != null ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate to={routes.login} />
  )
}

export default ProtectedRoutes
