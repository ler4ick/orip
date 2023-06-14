import { type ReactElement } from 'react'
import type React from 'react'

import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import { Link, useLocation } from 'react-router-dom'
import { routes } from '../Routing'
import { Typography } from '@mui/material'
import { Container, Nav, Navbar } from 'react-bootstrap'

const cx = classNames.bind(styles)

function Header(): ReactElement<React.FC> {
  const location = useLocation()
  return (
    <Navbar bg="light" variant="light" className={cx('header')}>
      <Container>
        <Navbar.Brand> Valeria Corp.</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href={routes.news}>Новости</Nav.Link>
          <Nav.Link href={routes.tasks}>Задачи</Nav.Link>
          <Nav.Link href={routes.users}>Сотрудники</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header

/* <div className={cx('header__container')}>
      <div
        className={cx('header__link', {
          selected: location.pathname.includes(routes.news)
        })}
      >
        <Link to={routes.news}>
          <Typography variant="body1">НОВОСТИ</Typography>
        </Link>
      </div>
      <div
        className={cx('header__link', {
          selected: location.pathname.includes(routes.tasks)
        })}
      >
        <Link to={routes.tasks}>
          <Typography variant="body1">СПИСОК ЗАДАЧ</Typography>
        </Link>
      </div>
      <div
        className={cx('header__link', {
          selected: location.pathname.includes(routes.users)
        })}
      >
        <Link to={routes.users}>
          <Typography variant="body1">СПИСОК СОТРУДНИКОВ</Typography>
        </Link>
      </div>
    </div>
    */
