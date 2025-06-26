import { Card, Button } from '../../lib'

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
