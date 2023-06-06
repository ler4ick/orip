import { type ReactElement } from 'react'
import type React from 'react'
import PNG_EDIT from '../../../public/images/edit.png'
import PNG_DELETE from '../../../public/images/delete.png'

import styles from './NewsItem.module.scss'
import classNames from 'classnames/bind'
import { deleteNews } from '../../redux/features/authSlice'
import { useAppDispatch } from '../../redux/hooks'

const cx = classNames.bind(styles)

export interface INewsItem {
  id?: number
  title?: string
  description?: string
  date?: string
  onClick?: () => void
}

function NewsItem({
  id,
  date,
  description,
  title,
  onClick
}: INewsItem): ReactElement<React.FC> | null {
  const dispatch = useAppDispatch()
  if (id == null) {
    return null
  }
  return (
    <div className={cx('news-item')}>
      <div className={cx('news-item__title')}>{title}</div>
      <div className={cx('news-item__text')}>{description}</div>
      <div className={cx('news-item__date')}>{date}</div>
      <img
        className={cx('news-item__edit-button')}
        src={PNG_EDIT}
        alt="photo"
        width="100%"
        height="100%"
        onClick={onClick}
      />
      <div
        className={cx('news-item__delete-button')}
        onClick={() => {
          dispatch(deleteNews(id))
        }}
      >
        <img src={PNG_DELETE} alt="photo" width="100%" height="100%" />
      </div>
    </div>
  )
}

export default NewsItem
