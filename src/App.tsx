import { useState, useMemo, useEffect } from 'react'
import { ThemeProvider, CssBaseline, Box } from '@mui/material'
import { payboxDarkTheme, payboxLightTheme } from '@superlogica/new-ds'
import { ThemeToggle } from './components/ThemeToggle'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { routes } from './routes'
import { DSLayout } from './components/DSLayout'

// Rotas encapsuladas no layout
function AppRoutes() {
  const content = useRoutes(routes)
  return <DSLayout>{content}</DSLayout>
}

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('ds_theme') === 'dark'
  })

  useEffect(() => {
    localStorage.setItem('ds_theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const theme = useMemo(() => (isDark ? payboxDarkTheme : payboxLightTheme), [isDark])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box
          sx={{
            position: 'fixed',
            top: 16,
            right: 16,
            zIndex: (theme) => theme.zIndex.drawer + 1 // acima do Drawer
          }}
        >
          <ThemeToggle checked={isDark} onChange={setIsDark} />
        </Box>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
