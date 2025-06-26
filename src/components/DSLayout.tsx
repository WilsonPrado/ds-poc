import { Typography, Drawer } from '../../lib'
import { Link, useLocation } from 'react-router-dom'
import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const menuItems = [
  { label: 'Button', path: '/button' },
  { label: 'Input', path: '/input' },
  { label: 'Dialog', path: '/dialog' },
  { label: 'Drawer', path: '/drawer' },
  { label: 'Card', path: '/card' },
  { label: 'Select', path: '/select' },
  { label: 'Search', path: '/search' },
  { label: 'Fab', path: '/fab' },
  { label: 'IconButton', path: '/icon-button' },
  { label: 'Typography', path: '/typography' },
  { label: 'List', path: '/list' },
  { label: 'Tabs', path: '/tabs' },
  { label: 'DataGrid', path: '/datagrid' },
  { label: 'Table', path: '/table' }
]
const drawerWidth = 240

export const DSLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation()

  const theme = useTheme()

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Drawer variant="permanent" open PaperProps={{ sx: { width: drawerWidth } }}>
        <Box p={2}>
          <Typography variant="h6" gutterBottom>
            Componentes
          </Typography>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {menuItems.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                style={{
                  textDecoration: 'none',
                  color:
                    location.pathname === path
                      ? theme.palette.primary.main // ✅ cor de destaque
                      : theme.palette.text.primary, // ✅ cor adaptada ao tema
                  fontWeight: location.pathname === path ? 600 : 400
                }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </Box>
      </Drawer>

      <main style={{ flex: 1, padding: 32, marginLeft: drawerWidth }}>{children}</main>
    </div>
  )
}
