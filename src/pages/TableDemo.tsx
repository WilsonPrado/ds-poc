import { Table } from '../../lib'

import { Box, Typography } from '@mui/material'

const rows = [
  { id: 1, name: 'João', age: 30 },
  { id: 2, name: 'Maria', age: 25 }
]

const columns = [
  { field: 'id', headerName: 'ID', width: 90, editable: true },
  { field: 'name', headerName: 'Nome', flex: 1, editable: true },
  { field: 'age', headerName: 'Idade', type: 'number', flex: 1, editable: true }
]

export default function TableFullDemo() {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Tabela com Filtro, Ordenação e Paginação
      </Typography>

      <Table
        rows={rows}
        columns={columns}
        paginationModel={{ page: 0, pageSize: 5 }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
        disableColumnMenu={false}
        disableColumnFilter={false}
        disableColumnSelector={false}
      />
    </Box>
  )
}
