import { Typography } from '@superlogica/new-ds'

export default function TypographyDemo() {
  return (
    <>
      <h2>Typography</h2>
      <Typography color={'primary'} variant='h1'>Exemplo do componente Typography H1</Typography>
      <Typography color={'secondary'} variant='h2'>Exemplo do componente Typography H2</Typography>
      <Typography color={'error'} variant='h3'>Exemplo do componente Typography H3</Typography>
      <Typography color={'success'} variant='subtitle1'>Exemplo do componente Typography Subtitle1</Typography>
      <Typography color={'primary'} variant='subtitle2'>Exemplo do componente Typography Subtitle2</Typography>
      <Typography color={'error'} variant='body1'>Exemplo do componente Typography Body1</Typography>
      <Typography color={'secondary'} variant='body2'>Exemplo do componente Typography Body2</Typography>
    </>
  )
}
