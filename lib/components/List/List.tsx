import * as React from 'react'
import {
  List as MuiList,
  ListItem as MuiListItem,
  ListItemButton as MuiListItemButton,
  ListItemIcon as MuiListItemIcon,
  ListItemText as MuiListItemText,
  ListProps as MuiListProps,
  ListItemProps as MuiListItemProps,
  ListItemButtonProps as MuiListItemButtonProps,
  ListItemIconProps as MuiListItemIconProps,
  ListItemTextProps as MuiListItemTextProps
} from '@mui/material'

export type ListProps = MuiListProps
export const List = (props: ListProps) => <MuiList {...props} />

export type ListItemProps = MuiListItemProps
export const ListItem = (props: ListItemProps) => <MuiListItem {...props} />

export type ListItemButtonProps = MuiListItemButtonProps
export const ListItemButton = (props: ListItemButtonProps) => <MuiListItemButton {...props} />

export type ListItemIconProps = MuiListItemIconProps
export const ListItemIcon = (props: ListItemIconProps) => <MuiListItemIcon {...props} />

export type ListItemTextProps = MuiListItemTextProps
export const ListItemText = (props: ListItemTextProps) => <MuiListItemText {...props} />
