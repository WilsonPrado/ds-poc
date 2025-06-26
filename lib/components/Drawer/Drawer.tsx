import { Drawer as MuiDrawer, DrawerProps as MuiDrawerProps } from '@mui/material'

export type DrawerProps = MuiDrawerProps

export const Drawer = (props: DrawerProps) => {
  return <MuiDrawer {...props} />
}
