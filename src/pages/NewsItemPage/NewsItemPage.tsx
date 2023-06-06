/* eslint-disable @typescript-eslint/restrict-template-expressions */
import type React from 'react'

import styles from './NewsItemPage.module.scss'
import classNames from 'classnames/bind'
import { type INewsItem } from '../../components/NewsItem/NewsItem'

import PNG_DELETE from '../../../public/images/delete.png'
import SVG_CHECKMARK from '../../../public/images/checkmark.svg'

import { Field, Form, Formik } from 'formik'

import { TextField } from '@mui/material'
import { useAppDispatch } from '../../redux/hooks'
import { createNews, editNews } from '../../redux/features/authSlice'

const cx = classNames.bind(styles)

interface INewsItemPage {
  className?: string
  item: INewsItem
  onClose: () => void
  type: 'edit' | 'create'
}

const NewsItemPage: React.FC<INewsItemPage> = ({
  className = '',
  item,
  onClose,
  type
}) => {
  const initialValues =
    type === 'edit'
      ? { ...item }
      : {
          id: null,
          title: null,
          description: null,
          date: null
        }
  const dispatch = useAppDispatch()
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={(values) => {
        if (type === 'edit') {
          dispatch(
            editNews({
              ...values,
              id: item.id
            })
          )
        } else {
          dispatch(createNews(values))
        }
      }}
    >
      {({ handleSubmit }) => (
        <Form>
          <div className={cx('container')}>
            <div className={cx('news-item', className)}>
              <div className={cx('news-item__title')}>
                <Field as={TextField} name="title" label="Название" />
              </div>
              <div className={cx('news-item__text')}>
                <Field as={TextField} name="description" label="Описание" />
              </div>
              <div className={cx('news-item__date')}>
                <Field as={TextField} name="date" label="Дата публикации" />
              </div>
              <img
                className={cx('news-item__edit-button')}
                src={SVG_CHECKMARK}
                alt="photo"
                width="100%"
                height="100%"
                onClick={() => {
                  handleSubmit()
                }}
              />
              <div className={cx('news-item__delete-button')} onClick={onClose}>
                <img src={PNG_DELETE} alt="photo" width="100%" height="100%" />
              </div>
            </div>
          </div>
          <div className={cx('outer-container')}></div>
        </Form>
      )}
    </Formik>
  )
}

export default NewsItemPage
