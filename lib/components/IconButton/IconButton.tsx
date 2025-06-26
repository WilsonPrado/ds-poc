import * as React from 'react'
import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps
} from '@mui/material'

export type IconButtonProps = MuiIconButtonProps

export const IconButton = (props: IconButtonProps) => {
  return <MuiIconButton {...props} />
}
