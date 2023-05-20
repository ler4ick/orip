import { useEffect, type ReactElement, useState } from 'react'
import type React from 'react'
import styles from './user.module.scss'
import classNames from 'classnames/bind'
import { Typography } from '@mui/material'
import { useAppSelector } from '../../redux/hooks'
import { selectTasks, selectCompanyUsers } from '../../redux/features/authSlice'
import { type ICompanyUser, type ITask } from '../../redux/appConfig'
import { Link, useParams } from 'react-router-dom'

const cx = classNames.bind(styles)
const imageUrl =
  'https://sun9-49.userapi.com/impg/8Sqr66V_U9U_WPyZ_gaJGfniAQs8FYKeQDUE3A/_1bNFaJGf_o.jpg?size=683x1024&quality=95&sign=7535fe3db26ceb504b904f610102336e&type=album'

interface UserPageProps {
  fullName?: string
  date?: string
}

function UserPage(props: UserPageProps): ReactElement<React.FC> {
  const { id } = useParams()
  console.log(id)

  const tasks = useAppSelector(selectTasks)
  const users = useAppSelector(selectCompanyUsers)
  console.log(tasks)

  const [userTasks, setUserTasks] = useState<ITask[]>([])
  const [user, setUser] = useState<ICompanyUser | null>(null)

  useEffect(() => {
    const userTasks = tasks.filter((task) =>
      location.pathname.includes('some_mad')
        ? task.userID === 1
        : task.userID === Number(id)
    )
    setUserTasks(userTasks)
    console.log(userTasks)
  }, [tasks])

  useEffect(() => {
    const userInfo = users.filter((user) =>
      location.pathname.includes('some_mad')
        ? user.id === 1
        : user.id === Number(id)
    )
    setUser(userInfo[0])
  }, [users])

  return (
    <div className={cx('user__container')}>
      <div className={cx('user__profile-photo')}>
        <div className={cx('user__profile-photo__image')}>
          <img alt="text" src={imageUrl}></img>
        </div>
        <div className={cx('user__profile-photo__data')}>
          <div className={cx('user__profile-photo__data__option')}>
            <Typography variant="body1" color="#000">
              {user?.fio}
            </Typography>
          </div>
          <div className={cx('user__profile-photo__data__option')}>
            <Typography variant="body1" color="#000">
              {user?.date}
            </Typography>
          </div>
        </div>
      </div>
      <div className={cx('user__profile-data')}>
        <div className={cx('user__profile-data__table')}>
          <Typography variant="h2">Задачи</Typography>
          {userTasks.map((task) => (
            <div key={task.id} className={cx('user__profile-data__task')}>
              <Link to={`${task.id}`}>
                <Typography variant="body1" color="blue">
                  {task.title}
                </Typography>
              </Link>
              <Typography variant="body1" color="#000">
                {task.time}
              </Typography>
              <Typography variant="body1" color="#000">
                {task.status}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserPage
