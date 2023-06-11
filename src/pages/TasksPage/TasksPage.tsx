import type React from 'react'
import styles from './TasksPage.module.scss'
import classNames from 'classnames/bind'
import { type ChangeEventHandler, useState, useEffect } from 'react'
import { TextField } from '@mui/material'

import SVG_ADD from '../../../public/images/add.svg'
import Task from '../../components/Task/Task'
import { Link } from 'react-router-dom'
import TaskModal from '../TaskPage/TaskModal'
import { useAppSelector } from '../../redux/hooks'
import { selectTasks } from '../../redux/features/authSlice'

const cx = classNames.bind(styles)

interface ITasksPage {
  className?: string
}

export const TasksPage: React.FC<ITasksPage> = ({ className = '' }) => {
  const [isModal, setIsModal] = useState(false)

  const tasks = useAppSelector(selectTasks)
  console.log(tasks)

  const [filteredTasks, setFilteredTasks] = useState(tasks)

  const handleTasksFilter: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newTasks = tasks.filter((task) =>
      task.title.toLocaleLowerCase().includes(e.target.value.toLowerCase())
    )
    setFilteredTasks(newTasks)
  }

  useEffect(() => {
    setFilteredTasks(tasks)
  }, [tasks])

  return (
    <>
      <div
        className={cx('add-button', className)}
        onClick={() => {
          setIsModal(true)
        }}
      >
        <img src={SVG_ADD} width="100%" height="100%" />
      </div>
      <div className={cx('tasks')}>
        <TextField
          label="Введите текст для поиска"
          onChange={handleTasksFilter}
        />
        {filteredTasks.map((item) => (
          <Link key={item.id} to={`/tasks/${item.id}`}>
            <Task item={item} />
          </Link>
        ))}
      </div>

      {isModal && (
        <TaskModal
          type="create"
          onClose={() => {
            setIsModal(false)
          }}
        />
      )}
    </>
  )
}
