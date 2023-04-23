import React from 'react'
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import UsersListPage from '../pages/UsersListPage'
import UserPage from '../pages/UserPage'
import ProtectedRoutes from './ProtectedRoutes'

export const routes = {
  base: '/',
  login: '/login/',
  register: '/register/',
  users: '/users/',
  user: '/users/:id',
  any: '*'
}

function Routing() {
  return (
    <Routes>
      <Route path={routes.base} element={<ProtectedRoutes />}>
        <Route path={routes.base} element={<Navigate to={routes.users} />} />
        <Route path={routes.users} element={<UsersListPage />} />
        <Route path={routes.user} element={<UserPage />} />
      </Route>
      <Route path={routes.login} element={<LoginPage />} />
      <Route path={routes.any} element={<Navigate to={routes.login} />} />
      <Route path={routes.register} element={<RegisterPage />} />
    </Routes>
  )
}

export default Routing
