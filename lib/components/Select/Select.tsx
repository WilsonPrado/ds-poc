import * as React from 'react'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SelectProps as MuiSelectProps
} from '@mui/material'

export type SelectOption = {
  label: string
  value: string | number
}

export type SelectProps = MuiSelectProps & {
  label?: string
  options?: SelectOption[]
  id?: string
}

export const Select = ({
  label,
  options = [],
  id = 'ds-select',
  children,
  ...props
}: SelectProps) => {
  const labelId = `${id}-label`

  return (
    <FormControl fullWidth>
      {label && <InputLabel id={labelId}>{label}</InputLabel>}
      <MuiSelect labelId={labelId} id={id} label={label} {...props}>
        {options.length > 0
          ? options.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))
          : children}
      </MuiSelect>
    </FormControl>
  )
}
