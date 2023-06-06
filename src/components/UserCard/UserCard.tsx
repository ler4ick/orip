import type React from 'react'

import styles from './UserCard.module.scss'
import classNames from 'classnames/bind'
import { type ICompanyUser } from '../../redux/appConfig'

const cx = classNames.bind(styles)

interface IUserCardProps {
  className?: string
  item?: ICompanyUser
}

const UserCard: React.FC<IUserCardProps> = ({ className = '', item }) => {
  return (
    <div className={cx('card', className)}>
      <div className={cx('card__title')}>{item?.fio}</div>
      <div className={cx('card__status')}>{item?.job}</div>
    </div>
  )
}

export default UserCard
