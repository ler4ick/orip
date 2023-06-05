import type React from 'react'

import PNG_EDIT from '../../../public/images/edit.png'
import PNG_DELETE from '../../../public/images/delete.png'

import styles from './TaskPage.module.scss'
import classNames from 'classnames/bind'
import { type ITask } from '../../redux/appConfig'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { getTask, selectTask } from '../../redux/features/authSlice'
import { useEffect, useState } from 'react'
import TaskModal from './TaskModal'

const cx = classNames.bind(styles)

interface ITaskPage {
  className?: string
  task?: ITask | null
}

export const TaskPage: React.FC<ITaskPage> = ({ className = '' }) => {
  const [isModal, setIsModal] = useState(false)

  const dispatch = useAppDispatch()
  const { id } = useParams()

  const task = useAppSelector(selectTask)
  useEffect(() => {
    dispatch(getTask(id))
  }, [dispatch])

  return (
    <>
      <div className={cx('task', className)}>
        <div className={cx('task__title')}>
          <h2>{task?.title}</h2> <h2>Статус: {task?.status}</h2>
        </div>
        <div className={cx('task__description')}>{task?.description}</div>
        <h2>Ответственные работники:</h2>
        <h3 onClick={() => {}}>Назначить</h3>
        {task?.responsible.map((person) => (
          <div key={person} className={cx('task__responsible')}>
            {person}
          </div>
        ))}

        <div className={cx('task__buttons')} onClick={() => {}}>
          <img src={PNG_DELETE} alt="delete" />
          <img
            src={PNG_EDIT}
            alt="edit"
            onClick={() => {
              setIsModal(true)
            }}
          />
        </div>
      </div>

      {isModal && (
        <TaskModal
          type="edit"
          item={task}
          onClose={() => {
            setIsModal(false)
          }}
        />
      )}
    </>
  )
}
