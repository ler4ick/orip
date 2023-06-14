import type React from 'react'
import styles from './UsersList.module.scss'
import classNames from 'classnames/bind'
import { TextField } from '@mui/material'

import SVG_ADD from '../../../public/images/add.svg'

import { Link } from 'react-router-dom'
import UserCard from '../../components/UserCard/UserCard'
import { useAppSelector } from '../../redux/hooks'
import { selectCompanyUsers } from '../../redux/features/authSlice'
import { type ChangeEventHandler, useState } from 'react'
import { Button, Card, Form, InputGroup } from 'react-bootstrap'
import SearchIcon from '@mui/icons-material/Search'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import Example from '../TaskPage/Modal'

const cx = classNames.bind(styles)

interface IUsersListPage {
  className?: string
}

export const UsersListPage: React.FC<IUsersListPage> = ({ className = '' }) => {
  const users = useAppSelector(selectCompanyUsers)

  const [filteredUsers, setFilteredUsers] = useState(users)

  const handleUsersFilter: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newUsers = users.filter((user) =>
      user.fio.toLowerCase().includes(e.target.value.toLowerCase())
    )
    setFilteredUsers(newUsers)
  }

  return (
    <>
      {/* <Link to={'create'}>
        <div className={cx('add-button', className)}>
          <img src={SVG_ADD} width="100%" height="100%" />
        </div>
      </Link> */}
      <div className={cx('news-page')}>
        <InputGroup className={cx('news-page__input')}>
          <InputGroup.Text id="basic-addon1">
            <SearchIcon />
          </InputGroup.Text>
          <Form.Control
            placeholder="Вводите текст"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <Button
          variant="secondary"
          size="lg"
          className={cx('news-page__button')}
        >
          Создать
        </Button>
        <div className={cx('news-page__title')}>
          <h4>Список сотрудников</h4> <NewspaperIcon />
        </div>
        <div className={cx('news-page__cards')}>
          {filteredUsers.map((item) => (
            <Link key={item.id} to={`/users/${item.id}`}>
              <UserCard item={item} />
            </Link>
          ))}
        </div>
        {/* <div className={cx('userslist')}>
        <TextField
          label="Введите текст для поиска"
          onChange={handleUsersFilter}
        />
        {filteredUsers.map((item) => (
          <Link key={item.id} to={`/users/${item.id}`}>
            <UserCard item={item} />
          </Link>
        ))}
      </div> */}
      </div>
      <Example show={true} />
    </>
  )
}
