import { Card, Button } from '@superlogica/new-ds'

export default function CardDemo() {
  return (
    <>
      <h2>Card</h2>
      <Card title="Teste" actions={<Button variant="contained">Salvar</Button>}>
        Conteúdo do card aqui.
      </Card>
    </>
  )
}
