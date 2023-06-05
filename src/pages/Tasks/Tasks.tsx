import { useEffect, type ReactElement, useState } from 'react'
import type React from 'react'
import styles from '../UsersList/UsersList.module.scss'
import classNames from 'classnames/bind'
import { Typography } from '@mui/material'
import { useAppSelector } from '../../redux/hooks'
import { selectTasks } from '../../redux/features/authSlice'
import { type ITask } from '../../redux/appConfig'
import DataGridDemo from '../../components/DataTable'

const cx = classNames.bind(styles)

function Tasks(): ReactElement<React.FC> {
  const tasks = useAppSelector(selectTasks)

  useEffect(() => {
    const newRows = tasks.map((task) => {
      return {
        ...task
      }
    })
    setRows(newRows)
  }, [tasks])

  return <div className={cx('userslist__container')}></div>
}

export default Tasks
