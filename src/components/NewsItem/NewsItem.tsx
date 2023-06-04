import { type ReactElement } from 'react'
import type React from 'react'
import PNG_EDIT from '../../../public/images/edit.png'
import PNG_DELETE from '../../../public/images/delete.png'

import styles from './NewsItem.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

interface INewsItem {
  id: number
  title: string
  description: string
  date: string
}

function NewsItem({
  id,
  date,
  description,
  title
}: INewsItem): ReactElement<React.FC> {
  return (
    <div className={cx('news-item')}>
      <div className={cx('news-item__title')}>
        <Link to={`/news/edit/${id}`}>{title}</Link>
      </div>
      <div className={cx('news-item__text')}>{description}</div>
      <div className={cx('news-item__date')}>{date}</div>
      <Link to={`${id}`} className={cx('news-item__edit-button')}>
        <img src={PNG_EDIT} alt="photo" width="100%" height="100%" />
      </Link>
      <div className={cx('news-item__delete-button')} onClick={() => {}}>
        <img src={PNG_DELETE} alt="photo" width="100%" height="100%" />
      </div>
    </div>
  )
}

export default NewsItem
