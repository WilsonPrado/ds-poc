import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '../../lib'

// import InboxIcon from '@mui/icons-material/Inbox'

export default function ListDemo() {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton selected>
          <ListItemIcon>
            {/* <InboxIcon /> */}
            <ListItemText primary="Inbox" />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
      </ListItem>
    </List>
  )
}
