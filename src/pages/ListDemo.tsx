import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@superlogica/new-ds'

import InboxIcon from '@mui/icons-material/Inbox'

export default function ListDemo() {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton selected>
          <ListItemIcon>
            <InboxIcon />
            <ListItemText primary="Inbox" />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    </List>
  )
}
