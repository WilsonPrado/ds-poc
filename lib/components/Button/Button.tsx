import { Button as MuiButton, ButtonProps } from '@mui/material'

export const Button = (props: ButtonProps) => {
  return (
    <MuiButton
      sx={{
        textTransform: 'none',
        ...props.sx
      }}
      {...props}
    />
  )
}
