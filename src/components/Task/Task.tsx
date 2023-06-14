import type React from 'react'

import styles from './Task.module.scss'
import classNames from 'classnames/bind'
import { type ITask } from '../../redux/appConfig'
import { Card } from 'react-bootstrap'

const cx = classNames.bind(styles)

interface ITaskProps {
  className?: string
  item?: ITask
}

const Task: React.FC<ITaskProps> = ({ className = '', item }) => {
  return (
    <Card
      className={cx('news-page__cards__card')}
      key={item.id}
      style={{ width: '19rem', height: '11rem' }}
    >
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>Назначено: {item?.responsible}</Card.Text>
        <Card.Text>Статус: {item?.status}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Task

/* <div className={cx('task', className)}>
      <div className={cx('task__title')}>{item?.title}</div>
      <div className={cx('task__status')}>Статус: {item?.status}</div>
    </div> */
