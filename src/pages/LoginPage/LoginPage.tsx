import { type ReactElement } from 'react'
import type React from 'react'
import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './login.module.scss'
import { Alert, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import TextFieldPassword from '../../components/TextFieldPassword/TextFieldPassword'
import { LoadingButton } from '@mui/lab'
import ButtonWrapper from '../../components/ButtonWrapper'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../../components/Routing'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import {
  logIn,
  resetError,
  resetLoggedIn,
  selectError,
  selectIsLogged
} from '../../redux/features/authSlice'

const cx = classNames.bind(styles)

const INITIAL_VALUES = {
  login: '',
  password: ''
}

function LoginPage(): ReactElement<React.FC> {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const error = useAppSelector(selectError)
  const isLogged = useAppSelector(selectIsLogged)
  const userLogin = localStorage.getItem('user')

  const [showElement, setShowElement] = useState(true)

  useEffect(() => {
    setTimeout(function () {
      setShowElement(false)
      dispatch(resetLoggedIn())
      dispatch(resetError())
    }, 3000)
  }, [showElement])

  useEffect(() => {
    if (error != null) {
      setShowElement(true)
    }
  }, [error])

  useEffect(() => {
    if (isLogged || userLogin != null) {
      navigate('/users/some_mad', { replace: true })
    }
  }, [isLogged, userLogin])

  return (
    <div className={cx('login__container')}>
      <Typography
        sx={{
          marginBottom: '40px'
        }}
        variant="h2"
      >
        Авторизация
      </Typography>
      <Formik
        initialValues={INITIAL_VALUES}
        enableReinitialize
        onSubmit={(values) => {
          dispatch(logIn(values))
        }}
      >
        {({ submitForm }) => (
          <Form>
            <div className={cx('login__form')}>
              <Field
                name="login"
                as={TextField}
                fullWidth
                placeholder="Введите логин"
              />
              <Field
                name="password"
                as={TextFieldPassword}
                fullWidth
                placeholder="Введите пароль"
              />
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
                  void submitForm()
                }}
              >
                <Typography variant="body1">Войти</Typography>
              </LoadingButton>
              <Link to={routes.register} className={cx('login__link')}>
                <ButtonWrapper
                  color="secondary"
                  sizing="extended"
                  text="Регистрация"
                />
              </Link>
            </div>
          </Form>
        )}
      </Formik>
      <div className={cx('login__alert')}>
        {showElement && isLogged && (
          <Alert severity="success">Вход успешен</Alert>
        )}
        {showElement && error != null && (
          <Alert severity="error">{error}</Alert>
        )}
      </div>
    </div>
  )
}

export default LoginPage
