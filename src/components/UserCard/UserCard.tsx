import type React from 'react'

import styles from './UserCard.module.scss'
import classNames from 'classnames/bind'
import { type ICompanyUser } from '../../redux/appConfig'
import { Card } from 'react-bootstrap'

const cx = classNames.bind(styles)

interface IUserCardProps {
  className?: string
  item?: ICompanyUser
}

const UserCard: React.FC<IUserCardProps> = ({ className = '', item }) => {
  return (
    <Card
      className={cx('card')}
      key={item.id}
      style={{ width: '19rem', height: '22rem' }}
    >
      <Card.Body>
        <Card.Img variant="top" src={item?.image} width="80px" height="150px" />
        <Card.Title>{item?.fio}</Card.Title>
        <Card.Text>Должность: {item?.job}</Card.Text>
        <Card.Text>Рождён: {item?.birthdate}</Card.Text>
        <Card.Text>Номер: {item?.phone}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default UserCard

/*

<div className={cx('card', className)}>
      <div className={cx('card__title')}>{item?.fio}</div>
      <div className={cx('card__status')}>{item?.job}</div>
    </div>

    */
