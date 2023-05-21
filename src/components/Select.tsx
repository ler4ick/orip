import type React from 'react'
import {
  TextField,
  MenuItem,
  Typography,
  type SelectProps
} from '@mui/material'

interface IOption {
  label: string
  value: string
}
interface ISelect extends SelectProps {
  options: IOption[]
  onChange: () => void
}

const Select: React.FC<ISelect> = ({
  name,
  options = [],
  label,
  onChange,
  value,
  ...props
}) => {
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
