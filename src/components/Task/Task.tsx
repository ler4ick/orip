import type React from 'react'

import styles from './Task.module.scss'
import classNames from 'classnames/bind'
import { type ITask } from '../../redux/appConfig'

const cx = classNames.bind(styles)

interface ITaskProps {
  className?: string
  item?: ITask
}

const Task: React.FC<ITaskProps> = ({ className = '', item }) => {
  return (
    <div className={cx('task', className)}>
      <div className={cx('task__title')}>{item?.title}</div>
      <div className={cx('task__status')}>Статус: {item?.status}</div>
    </div>
  )
}

export default Task
