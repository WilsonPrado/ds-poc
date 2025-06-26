import { ReactNode } from 'react'
import { ThemeProvider, CssBaseline, Theme } from '@mui/material'

type Props = {
  theme: Theme
  children: ReactNode
}

export const ThemeWrapper = ({ theme, children }: Props) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
)
