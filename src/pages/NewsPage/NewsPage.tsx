import { useState, type ReactElement } from 'react'
import type React from 'react'
import { news } from '../../redux/appConfig'
import NewsItem, { type INewsItem } from '../../components/NewsItem/NewsItem'

import { TextField } from '@mui/material'

import styles from './NewsPage.module.scss'
import classNames from 'classnames/bind'
import NewsItemPage from '../NewsItemPage/NewsItemPage'

import SVG_ADD from '../../../public/images/add.svg'

const cx = classNames.bind(styles)

function NewsPage(): ReactElement<React.FC> {
  const [isModal, setIsModal] = useState(false)
  const [type, setType] = useState<'edit' | 'create'>('edit')
  const [currentItem, setCurrentItem] = useState<INewsItem>({})
  return (
    <>
      <div
        className={cx('add-button')}
        onClick={() => {
          setIsModal(true)
          setType('create')
        }}
      >
        <img src={SVG_ADD} width="100%" height="100%" />
      </div>
      <div className={cx('news-page')}>
        <TextField label="Введите текст для поиска" onChange={() => {}} />
        {news.map((item) => (
          <NewsItem
            id={item.id}
            key={item.id}
            date={item.date}
            description={item.description}
            title={item.title}
            onClick={() => {
              setIsModal(true)
              setCurrentItem(item)
              setType('edit')
            }}
          />
        ))}
      </div>

      {isModal && (
        <NewsItemPage
          type={type}
          item={currentItem}
          onClose={() => {
            setIsModal(false)
          }}
        />
      )}
    </>
  )
}

export default NewsPage
