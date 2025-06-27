import { useState } from 'react'
import { Button, Dialog, Typography } from '@superlogica/new-ds'

export default function DialogDemo() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Abrir Diálogo</Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title="Confirmação"
        actions={<Button onClick={() => setOpen(false)}>Fechar</Button>}
      >
        <Typography>Tem certeza que deseja continuar?</Typography>
      </Dialog>
    </>
  )
}
