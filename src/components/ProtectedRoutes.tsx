import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { routes } from './Routing'

function ProtectedRoutes() {
  const login = localStorage.getItem('userLogin')

  return login ? <Outlet /> : <Navigate to={routes.login} />
}

export default ProtectedRoutes