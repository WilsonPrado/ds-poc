import { useState } from 'react'
import { Drawer } from '../../lib'
import { Button } from '../../lib'
import { Typography } from '../../lib'
import { Box } from '@mui/material'

export default function DrawerDemo() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Abrir Drawer</Button>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box p={2} width={280}>
          <Typography variant="h6">Menu Lateral</Typography>
          <Typography variant="body2">Conteúdo dentro do Drawer.</Typography>
        </Box>
      </Drawer>
    </>
  )
}
