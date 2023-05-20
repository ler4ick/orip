import { useEffect, type ReactElement, useState } from 'react'
import type React from 'react'
import styles from './UsersList.module.scss'
import classNames from 'classnames/bind'
import { Typography } from '@mui/material'
import { useAppSelector } from '../../redux/hooks'
import { selectCompanyUsers } from '../../redux/features/authSlice'
import { type ICompanyUser } from '../../redux/appConfig'
import DataGridDemo from '../../components/DataTable'

const cx = classNames.bind(styles)

function UsersListPage(): ReactElement<React.FC> {
  const users = useAppSelector(selectCompanyUsers)
  const [rows, setRows] = useState<ICompanyUser[] | null>([])

  useEffect(() => {
    const newRows = users.map((user) => {
      return {
        ...user,
        task: user.tasks.length
      }
    })
    setRows(newRows)
  }, [users])

  return (
    <div className={cx('userslist__container')}>
      <div className={cx('userslist__title')}>
        <Typography variant="h2">Сотрудники</Typography>
      </div>
      <div className={cx('userslist__table')}>
        <DataGridDemo rows={rows} />
      </div>
    </div>
  )
}

export default UsersListPage
