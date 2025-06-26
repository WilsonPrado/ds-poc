import * as React from 'react'
import {
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material'

export type DialogProps = MuiDialogProps & {
  title?: React.ReactNode
  actions?: React.ReactNode
}

export const Dialog = ({ title, actions, children, ...props }: DialogProps) => {
  return (
    <MuiDialog {...props}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent dividers>{children}</DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
    </MuiDialog>
  )
}
