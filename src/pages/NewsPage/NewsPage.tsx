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
import { Button, Card, Form, InputGroup, Modal } from 'react-bootstrap'

import SearchIcon from '@mui/icons-material/Search'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import Example from '../TaskPage/Modal'

import PNG_DOG from '/public/images/dog.png'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function NewsPage(): ReactElement<React.FC> {
  const news = useAppSelector(selectNews)
  const [isModal, setIsModal] = useState(false)
  const [type, setType] = useState<'edit' | 'create'>('edit')
  const [currentItem, setCurrentItem] = useState<INewsItem>({})
  const [filter, setFilter] = useState<INewsItem[] | null>(news)

  const [show, setShow] = useState(false)

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
          onClick={() => {
            setShow(true)
          }}
        >
          Создать
        </Button>
        <div className={cx('news-page__title')}>
          <h4>Сегодня в ленте новостей</h4> <NewspaperIcon />
        </div>
        <div className={cx('news-page__cards')}>
          {filter.map((item) => (
            <Card
              key={item.id}
              className={cx('news-page__cards__card')}
              style={{ width: '22rem', height: '25rem' }}
              onClick={() => {
                setShow(true)
              }}
            >
              <Card.Img variant="top" src={PNG_DOG} />
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
      {/* <Example /> */}
      <Modal
        show={show}
        onHide={() => {
          setShow(false)
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Создание новости</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Название</Form.Label>
              <Form.Control type="text" placeholder="Название" autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Описание</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Введите описание"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setShow(false)
            }}
          >
            Отмена
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setShow(false)
            }}
          >
            Сохранить
          </Button>
        </Modal.Footer>
      </Modal>
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
