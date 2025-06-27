import { useState } from 'react'
import { Select } from '@superlogica/new-ds'

export default function SelectDemo() {
  const [value, setValue] = useState('')

  return (
    <div style={{ width: 300 }}>
      <Select
        label="Status"
        value={value}
        onChange={(e) => setValue(e.target.value as string)}
        options={[
          { value: 'ativo', label: 'Ativo' },
          { value: 'inativo', label: 'Inativo' },
          { value: 'pendente', label: 'Pendente' }
        ]}
      />
    </div>
  )
}
