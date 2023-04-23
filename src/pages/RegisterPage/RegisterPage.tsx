import React, { useEffect, useState } from 'react'
import styles from './register.module.scss'
import classNames from 'classnames/bind'
import { TextField, Typography, Alert } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import TextFieldPassword from '../../components/TextFieldPassword/TextFieldPassword'
import { LoadingButton } from '@mui/lab'
import ButtonWrapper from '../../components/ButtonWrapper'
import { routes } from '../../components/Routing'
import { Link } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import Select from '../../components/Select'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import {
  IUser,
  registerUser,
  resetError,
  resetSuccess,
  selectError,
  selectIsSuccess,
  selectUsers
} from '../../redux/features/authSlice'
import * as yup from 'yup'

const cx = classNames.bind(styles)

const schema = yup.object().shape({
  fullName: yup
    .string()
    .matches(
      /^(?:[A-Za-zА-я]+ ){2}[A-Za-zА-я]+$/,
      'Три слова через один пробел'
    )
    .required('Обязательное поле'),
  login: yup
    .string()
    .min(8, 'Минимальная длина ввода - 8 символов')
    .required('Обязательное поле'),
  password: yup
    .string()
    .min(8, 'Минимальная длина ввода - 8 символов')
    .required('Обязательное поле'),
  role: yup.string().required('Обязательное поле'),
  company: yup
    .string()
    .min(5, 'Минимальная длина ввода - 5 символов')
    .required('Обязательное поле'),
  position: yup
    .string()
    .min(5, 'Минимальная длина ввода - 5 символов')
    .required('Обязательное поле')
})

const INITIAL_VALUES: IUser = {
  fullName: '',
  login: '',
  password: '',
  role: '',
  /* photo: null, */
  company: '',
  position: ''
}

const roles = [
  {
    label: 'Менеджер',
    value: 'manager'
  },
  {
    label: 'Администратор',
    value: 'admin'
  }
]

function RegisterPage() {
  const error = useAppSelector(selectError)
  const isSuccess = useAppSelector(selectIsSuccess)
  const dispatch = useAppDispatch()

  const [showElement, setShowElement] = useState(true)

  useEffect(() => {
    setTimeout(function () {
      setShowElement(false)
      dispatch(resetSuccess())
      dispatch(resetError())
    }, 3000)
  }, [showElement])

  useEffect(() => {
    if (isSuccess || error) {
      setShowElement(true)
    }
  }, [isSuccess, error])

  return (
    <div className={cx('register__container')}>
      <Typography
        sx={{
          marginBottom: '40px'
        }}
        variant="h2"
      >
        Регистрация
      </Typography>
      <Formik
        validationSchema={schema}
        validateOnBlur={false}
        validateOnChange={false}
        initialValues={INITIAL_VALUES}
        enableReinitialize
        onSubmit={(values: IUser) => {
          dispatch(registerUser(values))
        }}
      >
        {({ submitForm, resetForm, values, errors }) => (
          <Form>
            <div className={cx('register__form')}>
              <div className={cx('register__field')}>
                <Field
                  name="fullName"
                  as={TextField}
                  fullWidth
                  placeholder="Введите ФИО"
                />
                {errors && (
                  <Typography
                    className={cx('register__error')}
                    variant="caption"
                  >
                    {errors.fullName}
                  </Typography>
                )}
              </div>
              <div className={cx('register__field')}>
                <Field
                  name="login"
                  as={TextField}
                  fullWidth
                  placeholder="Введите логин"
                />
                {errors && (
                  <Typography
                    className={cx('register__error')}
                    variant="caption"
                  >
                    {errors.login}
                  </Typography>
                )}
              </div>
              <div className={cx('register__field')}>
                <Field
                  name="password"
                  as={TextFieldPassword}
                  fullWidth
                  placeholder="Введите пароль"
                />
                {errors && (
                  <Typography
                    className={cx('register__error')}
                    variant="caption"
                  >
                    {errors.password}
                  </Typography>
                )}
              </div>
              <div className={cx('register__field')}>
                <Field
                  name="role"
                  as={Select}
                  fullWidth
                  label="Выберите роль"
                  options={roles}
                />
                {errors && (
                  <Typography
                    className={cx('register__error')}
                    variant="caption"
                  >
                    {errors.role}
                  </Typography>
                )}
              </div>
              <div className={cx('register__field')}>
                <Field
                  name="company"
                  as={TextField}
                  fullWidth
                  placeholder="Укажите компанию"
                  disabled={values.role === 'Администратор'}
                />
                {errors && (
                  <Typography
                    className={cx('register__error')}
                    variant="caption"
                  >
                    {errors.company}
                  </Typography>
                )}
              </div>
              <div className={cx('register__field')}>
                <Field
                  name="position"
                  as={TextField}
                  fullWidth
                  placeholder="Укажите должность"
                  disabled={values.role === 'Администратор'}
                />
                {errors && (
                  <Typography
                    className={cx('register__error')}
                    variant="caption"
                  >
                    {errors.position}
                  </Typography>
                )}
              </div>
              <div className={cx('register__buttons')}>
                <LoadingButton
                  sx={{
                    width: '100%',
                    height: '44px',
                    backgroundColor: '#576CBC',
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: '#19376D'
                    }
                  }}
                  loading={false}
                  onClick={() => {
                    submitForm()
                  }}
                >
                  <Typography variant="body1">Зарегистрироваться</Typography>
                </LoadingButton>
                <ButtonWrapper
                  color="secondary"
                  sizing="extended"
                  text="Очистить форму"
                  onClick={() => {
                    resetForm()
                  }}
                />
              </div>
              <Link
                to={routes.login}
                className={cx('register__link')}
                replace={true}
              >
                <ButtonWrapper
                  color="info"
                  sizing="extended"
                  text="Вернуться на страницу авторизации"
                  variant="outlined"
                  startIcon={<KeyboardBackspaceIcon color="primary" />}
                />
              </Link>
            </div>
          </Form>
        )}
      </Formik>
      <div className={cx('register__alert')}>
        {showElement && isSuccess && (
          <Alert severity="success">Пользователь успешно создан</Alert>
        )}
        {showElement && error && <Alert severity="error">{error}</Alert>}
      </div>
    </div>
  )
}

export default RegisterPage
