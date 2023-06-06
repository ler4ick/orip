import type React from 'react'
import styles from './UsersList.module.scss'
import classNames from 'classnames/bind'
import { users } from '../../redux/appConfig'
import { TextField } from '@mui/material'

import SVG_ADD from '../../../public/images/add.svg'

import { Link } from 'react-router-dom'
import UserCard from '../../components/UserCard/UserCard'

const cx = classNames.bind(styles)

interface IUsersListPage {
  className?: string
}

export const UsersListPage: React.FC<IUsersListPage> = ({ className = '' }) => {
  return (
    <>
      <Link to={'create'}>
        <div className={cx('add-button', className)}>
          <img src={SVG_ADD} width="100%" height="100%" />
        </div>
      </Link>
      <div className={cx('userslist')}>
        <TextField label="Введите текст для поиска" onChange={() => {}} />
        {users.map((item) => (
          <Link key={item.id} to={`/users/${item.id}`}>
            <UserCard item={item} />
          </Link>
        ))}
      </div>
    </>
  )
}
