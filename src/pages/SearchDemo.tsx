import { Box } from '@mui/material'
import { Typography, SearchAutocomplete } from '@superlogica/new-ds'
import { Search, TuneOutlined } from '@mui/icons-material'

const USERS = [
  { id: 1, name: 'João Silva' },
  { id: 2, name: 'Maria Oliveira' },
  { id: 3, name: 'Carlos Souza' },
  { id: 4, name: 'Ana Pereira' },
  { id: 5, name: 'Marcos Lima' }
]

export default function SearchAutocompleteDemo() {
  return (
    <Box maxWidth={500}>
      <Typography variant="h5" gutterBottom>
        Buscar usuários (Autocomplete)
      </Typography>

      <SearchAutocomplete
        label="Nome do usuário"
        options={USERS}
        variant="outlined"
        getOptionLabel={(option) => option.name}
        onChange={(_, selected) => {
          if (selected) {
            alert(`Selecionado: ${selected.name}`)
          }
        }}
        startIcon={<Search />}
        endIcon={
          <TuneOutlined
            onClick={() => {
              console.log('teste')
            }}
            cursor="pointer"
          />
        }
        isOptionEqualToValue={(option, value) => option.id === value.id}
      />
    </Box>
  )
}
