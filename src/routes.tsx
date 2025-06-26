import { RouteObject } from 'react-router-dom'

import ButtonDemo from './pages/ButtonDemo'
import InputDemo from './pages/InputDemo'
import DialogDemo from './pages/DialogDemo'
import DrawerDemo from './pages/DrawerDemo'
import CardDemo from './pages/CardDemo'
import SelectDemo from './pages/SelectDemo'
import FabDemo from './pages/FabDemo'
import IconButtonDemo from './pages/IconButtonDemo'
import TypographyDemo from './pages/TypographyDemo'
import ListDemo from './pages/ListDemo'
import TabsDemo from './pages/TabsDemo'
import TableDemo from './pages/TableDemo'
import SearchDemo from './pages/SearchDemo'

export const routes: RouteObject[] = [
  { path: '/', element: <div style={{ padding: 32 }}>Selecione um componente no menu</div> },
  { path: '/button', element: <ButtonDemo /> },
  { path: '/input', element: <InputDemo /> },
  { path: '/dialog', element: <DialogDemo /> },
  { path: '/drawer', element: <DrawerDemo /> },
  { path: '/card', element: <CardDemo /> },
  { path: '/select', element: <SelectDemo /> },
  { path: '/fab', element: <FabDemo /> },
  { path: '/icon-button', element: <IconButtonDemo /> },
  { path: '/typography', element: <TypographyDemo /> },
  { path: '/list', element: <ListDemo /> },
  { path: '/search', element: <SearchDemo /> },
  { path: '/tabs', element: <TabsDemo /> },
  { path: '/table', element: <TableDemo /> }
]
