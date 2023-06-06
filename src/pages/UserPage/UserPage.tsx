import type React from 'react'
import styles from './user.module.scss'
import classNames from 'classnames/bind'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { useEffect, useState } from 'react'
import { getUser, selectCompanyUser } from '../../redux/features/authSlice'
import { Field, Form, Formik } from 'formik'
import { TextField } from '@mui/material'
import Select from '../../components/Select'

import SVG_CHECKMARK from '../../../public/images/checkmark.svg'
import PNG_DELETE from '../../../public/images/delete.png'

const cx = classNames.bind(styles)

interface UserPageProps {
  className?: string
  type?: 'create' | 'edit'
}

export const UserPage: React.FC<UserPageProps> = ({
  className = '',
  type = 'edit'
}) => {
  const user = useAppSelector(selectCompanyUser)

  const [image, setImage] = useState(null)

  const dispatch = useAppDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getUser(id))
  }, [dispatch])

  const initialValues =
    type === 'create'
      ? {
          fio: '',
          birthdate: '',
          started: '',
          city: '',
          gender: '',
          date: '',
          phone: '',
          job: '',
          image: null
        }
      : {
          ...user
        }

  return (
    <div className={cx('user__container', className)}>
      <div className={cx('user__container__form-container')}>
        <div className={cx('user__container__form-container__image')}>
          {type !== 'create' && (
            <img
              src={user?.image}
              alt="user photo"
              width="100%"
              height="100%"
            />
          )}
          {type === 'create' && (
            <input
              type="file"
              onChange={(e) => {
                setImage(e.target.files[0])
              }}
            />
          )}
        </div>
        <div className={cx('user__container__form-container__form')}>
          <Formik
            onSubmit={(values) => {
              if (type === 'create') {
                values.image = URL.createObjectURL(image)
              }
            }}
            initialValues={initialValues}
            enableReinitialize
          >
            {({ values, handleSubmit }) => (
              <Form>
                <div
                  className={cx('user__container__form-container__form__field')}
                >
                  <h4>Фамилия имя отчество:</h4>
                  <Field as={TextField} name="fio" placeholder="ФИО" />
                </div>
                <div
                  className={cx('user__container__form-container__form__field')}
                >
                  <h4>Пол:</h4>
                  <Field
                    name="gender"
                    as={Select}
                    sx={{
                      width: 210
                    }}
                    label="Пол"
                    options={[
                      {
                        label: 'Мужской',
                        value: 'male'
                      },
                      {
                        label: 'Женский',
                        value: 'female'
                      }
                    ]}
                  />
                </div>
                <div
                  className={cx('user__container__form-container__form__field')}
                >
                  <h4>Дата рождения:</h4>
                  <Field
                    as={TextField}
                    name="birthdate"
                    placeholder="Дата рождения"
                  />
                </div>
                <div
                  className={cx('user__container__form-container__form__field')}
                >
                  <h4>Город:</h4>
                  <Field as={TextField} name="city" placeholder="Город" />
                </div>
                <div
                  className={cx('user__container__form-container__form__field')}
                >
                  <h4>Должность:</h4>
                  <Field as={TextField} name="job" placeholder="Должность" />
                </div>
                <div
                  className={cx('user__container__form-container__form__field')}
                >
                  <h4>Дата начала работы:</h4>
                  <Field
                    as={TextField}
                    name="started"
                    placeholder="Дата начала работы"
                  />
                </div>
                <div
                  className={cx('user__container__form-container__form__field')}
                >
                  <h4>Телефон:</h4>
                  <Field as={TextField} name="phone" placeholder="Телефон" />
                </div>
                <div
                  className={cx('user__submit')}
                  onClick={() => {
                    handleSubmit()
                  }}
                >
                  <img width="100%" height="100%" src={SVG_CHECKMARK} />
                </div>
                {type !== 'create' && (
                  <div className={cx('user__delete')} onClick={() => {}}>
                    <img width="100%" height="100%" src={PNG_DELETE} />
                  </div>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}
