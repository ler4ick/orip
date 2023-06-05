import { type ReactElement } from 'react'
import type React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './ProtectedRoutes'
import NewsPage from '../pages/NewsPage/NewsPage'
import { TasksPage } from '../pages/TasksPage/TasksPage'
import { TaskPage } from '../pages/TaskPage/TaskPage'

export const routes = {
  base: '/',
  news: '/news',
  tasks: '/tasks',
  task: '/tasks/:id',
  users: '/users',
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
        <Route path={routes.any} element={<></>} />
      </Route>
    </Routes>
  )
}

export default Routing
