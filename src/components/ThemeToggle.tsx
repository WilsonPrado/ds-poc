import { Switch, FormControlLabel } from '@mui/material'

type Props = {
  checked: boolean
  onChange: (checked: boolean) => void
}

export const ThemeToggle = ({ checked, onChange }: Props) => {
  return (
    <FormControlLabel
      control={<Switch checked={checked} onChange={(e) => onChange(e.target.checked)} />}
      label={checked ? 'Tema Escuro' : 'Tema Claro'}
    />
  )
}
