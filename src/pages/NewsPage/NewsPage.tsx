import { type ReactElement } from 'react'
import type React from 'react'
import { news } from '../../redux/appConfig'
import NewsItem from '../../components/NewsItem/NewsItem'

import { TextField } from '@mui/material'

import styles from './NewsPage.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

function NewsPage(): ReactElement<React.FC> {
  return (
    <div className={cx('news-page')}>
      <TextField label="Введите текст для поиска" onChange={() => {}} />
      {news.map((item) => (
        <NewsItem
          id={item.id}
          key={item.id}
          date={item.date}
          description={item.description}
          title={item.title}
        />
      ))}
    </div>
  )
}

export default NewsPage
