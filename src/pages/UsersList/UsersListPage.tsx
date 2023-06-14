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
import { Button, Card, Form, InputGroup, Modal } from 'react-bootstrap'
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
  const [show, setShow] = useState(false)

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
          onClick={() => {
            setShow(true)
          }}
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
      <Modal
        show={show}
        onHide={() => {
          setShow(false)
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Регистрация сотрудника</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ФИО</Form.Label>
              <Form.Control type="text" placeholder="Введите фио" autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Должность</Form.Label>
              <Form.Control placeholder="Введите должность" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Дата рождения</Form.Label>
              <Form.Control placeholder="Введите дату" />
            </Form.Group>

            <Form.Select aria-label="Default select example">
              <option>Укажите пол</option>
              <option value="1">Мужской</option>
              <option value="2">Женский</option>
            </Form.Select>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Номер телефона</Form.Label>
              <Form.Control placeholder="Введите номер" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setShow(false)
            }}
          >
            Отмена
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setShow(false)
            }}
          >
            Сохранить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
