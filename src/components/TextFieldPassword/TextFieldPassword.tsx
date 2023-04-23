import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import {
  IconButton,
  InputAdornment,
  TextField,
  Typography
} from '@mui/material'
import React, { useState } from 'react'
import styles from './TextFieldPassword.module.scss'
import classNames from 'classnames/bind'
import { useField, useFormikContext } from 'formik'

const cx = classNames.bind(styles)

const TextFieldPassword = ({ name, label, value, ...props }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [field] = useField(name)
  const { setFieldValue } = useFormikContext()

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleChange = (e) => {
    setFieldValue(name, e.taget.value)
  }

  const textFieldPasswordConfig = {
    ...field,
    name,
    value,
    onChange: handleChange
  }

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }
  return (
    <>
      <TextField
        fullWidth
        type={showPassword ? 'text' : 'password'}
        label={label}
        className={cx('textField')}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              className={cx('textField__hide-icon')}
            >
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }}
        {...textFieldPasswordConfig}
        {...props}
      />
    </>
  )
}

export default TextFieldPassword
