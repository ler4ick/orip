import { type ReactElement } from 'react'
import type React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './ProtectedRoutes'
import NewsPage from '../pages/NewsPage/NewsPage'
import { TasksPage } from '../pages/TasksPage/TasksPage'
import { TaskPage } from '../pages/TaskPage/TaskPage'
import { UsersListPage } from '../pages/UsersList/UsersListPage'
import { UserPage } from '../pages/UserPage/UserPage'

export const routes = {
  base: '/',
  news: '/news',
  tasks: '/tasks',
  task: '/tasks/:id',
  users: '/users',
  user: '/users/:id',
  createUser: '/users/create',
  newsItem: '/news/:id',
  any: '*'
}

function Routing(): ReactElement<React.FC> {
  return (
    <Routes>
      <Route path={routes.base} element={<ProtectedRoutes />}>
        <Route path={routes.base} element={<Navigate to={routes.news} />} />
        <Route path={routes.news} element={<NewsPage />} />
        <Route path={routes.tasks} element={<TasksPage />} />
        <Route path={routes.task} element={<TaskPage />} />
        <Route path={routes.users} element={<UsersListPage />} />
        <Route path={routes.user} element={<UserPage />} />
        <Route path={routes.createUser} element={<UserPage type="create" />} />
        <Route path={routes.any} element={<Navigate to={routes.news} />} />
      </Route>
    </Routes>
  )
}

export default Routing
