import { TextField, TextFieldProps, InputAdornment } from '@mui/material'

export type InputProps = TextFieldProps & {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

export const Input = ({ startIcon, endIcon, InputProps, ...props }: InputProps) => {
  return (
    <TextField
      fullWidth
      InputProps={{
        startAdornment: startIcon ? (
          <InputAdornment position="start">{startIcon}</InputAdornment>
        ) : undefined,
        endAdornment: endIcon ? (
          <InputAdornment position="end">{endIcon}</InputAdornment>
        ) : undefined,
        ...InputProps
      }}
      {...props}
    />
  )
}
