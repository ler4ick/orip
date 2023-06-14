import { useState, type ReactElement, useEffect } from 'react'
import type React from 'react'
import NewsItem, { type INewsItem } from '../../components/NewsItem/NewsItem'

import { TextField } from '@mui/material'

import styles from './NewsPage.module.scss'
import classNames from 'classnames/bind'
import NewsItemPage from '../NewsItemPage/NewsItemPage'

import SVG_ADD from '../../../public/images/add.svg'
import { useAppSelector } from '../../redux/hooks'
import { selectNews } from '../../redux/features/authSlice'
import { Button, Card, Form, InputGroup } from 'react-bootstrap'

import SearchIcon from '@mui/icons-material/Search'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import Example from '../TaskPage/Modal'

const cx = classNames.bind(styles)

function NewsPage(): ReactElement<React.FC> {
  const news = useAppSelector(selectNews)
  const [isModal, setIsModal] = useState(false)
  const [type, setType] = useState<'edit' | 'create'>('edit')
  const [currentItem, setCurrentItem] = useState<INewsItem>({})
  const [filter, setFilter] = useState<INewsItem[] | null>(news)

  useEffect(() => {
    setFilter(news)
  }, [news])

  return (
    <>
      {/* <div
        className={cx('add-button')}
        onClick={() => {
          setIsModal(true)
          setType('create')
        }}
      >
        <img src={SVG_ADD} width="100%" height="100%" />
      </div> */}
      <div className={cx('news-page')}>
        {/* <TextField
          sx={{
            maxWidth: 420,
            minWidth: 300
          }}
          label="Введите текст для поиска"
          onChange={(e) => {
            if (e.target.value === '') {
              setFilter(news)
              return
            }
            setFilter(
              news.filter((item) => item.title.includes(e.target.value))
            )
          }}
        /> */}
        <InputGroup className={cx('news-page__input')}>
          <InputGroup.Text id="basic-addon1">
            <SearchIcon />
          </InputGroup.Text>
          <Form.Control
            placeholder="Вводите текст"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              if (e.target.value === '') {
                setFilter(news)
                return
              }
              setFilter(
                news.filter((item) => item.title.includes(e.target.value))
              )
            }}
          />
        </InputGroup>
        <Button
          variant="secondary"
          size="lg"
          className={cx('news-page__button')}
        >
          Создать
        </Button>
        <div className={cx('news-page__title')}>
          <h4>Сегодня в ленте новостей</h4> <NewspaperIcon />
        </div>
        <div className={cx('news-page__cards')}>
          {filter.map((item) => (
            <Card
              className={cx('news-page__cards__card')}
              key={item.id}
              style={{ width: '22rem', height: '15rem' }}
            >
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
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
      <Example show={true} />
    </>
  )
}

export default NewsPage

/* <NewsItem
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
          /> */
