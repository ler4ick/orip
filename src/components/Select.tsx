import React, { useRef, useState } from 'react'
import { TextField, Select as MuiSelect } from '@mui/material'
import { MenuItem, Typography } from '@mui/material'

const Select = ({ name, options = [], label, onChange, value, ...props }) => {
  return (
    <TextField
      select
      name={name}
      fullWidth
      label={<Typography variant="subtitle1">{label}</Typography>}
      onChange={onChange}
      value={value}
      {...props}
    >
      {options.map((option) => {
        return (
          <MenuItem key={option.label} value={option.value}>
            <Typography variant="subtitle1">{option.label}</Typography>
          </MenuItem>
        )
      })}
    </TextField>
  )
}

export default Select
