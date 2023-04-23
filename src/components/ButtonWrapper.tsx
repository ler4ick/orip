import { Typography, Button, ButtonProps } from '@mui/material'
import React from 'react'

const sizesMap: object = {
  extended: {
    width: '100%',
    height: '44px'
  },
  long: {
    width: '305px',
    height: '50px'
  },
  l: {
    width: '239px',
    height: '44px'
  },
  xl: {
    width: '230px',
    height: '60px'
  },
  xm: {
    width: '212px',
    height: '40px'
  },
  m: {
    width: '200px',
    height: '50px'
  },
  xs: {
    width: '233px',
    height: '44px'
  },
  s: {
    width: '150px',
    height: '44px'
  }
}

interface ButtonModule extends ButtonProps {
  text?: string
  sizing: string
}

const ButtonWrapper = (props: ButtonModule) => {
  const sizing = sizesMap[props.sizing]
  const {
    startIcon = null,
    color = 'primary',
    text,
    onClick,
    disabled,
    variant
  } = props
  return (
    <Button
      sx={{
        width: sizing?.width,
        height: sizing?.height
      }}
      startIcon={startIcon}
      color={color}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
    >
      <Typography
        variant="body1"
        color={variant === 'outlined' ? '#576CBC' : '#fff'}
      >
        {text}
      </Typography>
    </Button>
  )
}

export default ButtonWrapper
