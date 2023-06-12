import type React from 'react'
import styles from './user.module.scss'
import classNames from 'classnames/bind'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { useEffect, useState } from 'react'
import {
  createUser,
  deleteUser,
  editUser,
  getUser,
  selectCompanyUser
} from '../../redux/features/authSlice'
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
  const { id } = useParams()
  const userId = parseInt(id)
  const user = useAppSelector(selectCompanyUser)
  const navigate = useNavigate()

  console.log(user, userId)

  const [image, setImage] = useState(null)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (type === 'edit') {
      dispatch(getUser(userId))
    }
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
                dispatch(createUser(values))
                navigate(-1)
              } else {
                dispatch(
                  editUser({
                    ...values,
                    id: userId
                  })
                )
                navigate(-1)
              }
            }}
            initialValues={initialValues}
            enableReinitialize
          >
            {({ handleSubmit }) => (
              <Form>
                <div
                  className={cx('user__container__form-container__form__field')}
                >
                  <h6>Фамилия имя отчество:</h6>
                  <Field as={TextField} name="fio" placeholder="ФИО" />
                </div>
                <div
                  className={cx('user__container__form-container__form__field')}
                >
                  <h6>Пол:</h6>
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
                  <h6>Дата рождения:</h6>
                  <Field
                    as={TextField}
                    name="birthdate"
                    placeholder="Дата рождения"
                  />
                </div>
                <div
                  className={cx('user__container__form-container__form__field')}
                >
                  <h6>Город:</h6>
                  <Field as={TextField} name="city" placeholder="Город" />
                </div>
                <div
                  className={cx('user__container__form-container__form__field')}
                >
                  <h6>Должность:</h6>
                  <Field as={TextField} name="job" placeholder="Должность" />
                </div>
                <div
                  className={cx('user__container__form-container__form__field')}
                >
                  <h6>Дата начала работы:</h6>
                  <Field
                    as={TextField}
                    name="started"
                    placeholder="Дата начала работы"
                  />
                </div>
                <div
                  className={cx('user__container__form-container__form__field')}
                >
                  <h6>Телефон:</h6>
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
                  <div
                    className={cx('user__delete')}
                    onClick={() => {
                      dispatch(deleteUser(user?.id))
                      navigate(-1)
                    }}
                  >
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
