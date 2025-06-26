import * as React from 'react'
import {
  Card as MuiCard,
  CardHeader,
  CardContent,
  CardActions,
  CardProps as MuiCardProps
} from '@mui/material'

export type CardProps = MuiCardProps & {
  title?: React.ReactNode
  actions?: React.ReactNode
  contentProps?: React.ComponentProps<typeof CardContent>
}

export const Card = ({ title, actions, children, contentProps, ...props }: CardProps) => {
  return (
    <MuiCard {...props}>
      {title && <CardHeader title={title} />}
      <CardContent {...contentProps}>{children}</CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </MuiCard>
  )
}
