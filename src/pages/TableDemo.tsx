import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow
} from '@superlogica/new-ds'

import { Box, Typography, TableSortLabel, TextField } from '@mui/material'
import { useMemo, useState } from 'react'

// Mock
type User = {
  id: number
  name: string
  email: string
  role: string
}

const allRows: User[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Usuário ${i + 1}`,
  email: `usuario${i + 1}@exemplo.com`,
  role: i % 2 === 0 ? 'Admin' : 'Usuário'
}))

type Order = 'asc' | 'desc'

export default function TableFullDemo() {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const [orderBy, setOrderBy] = useState<keyof User>('name')
  const [order, setOrder] = useState<Order>('asc')

  const [filters, setFilters] = useState<{ [key in keyof User]?: string }>({})

  const handleChangePage = (_: unknown, newPage: number) => setPage(newPage)

  const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(e.target.value, 10))
    setPage(0)
  }

  const handleSort = (property: keyof User) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleFilterChange = (key: keyof User, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
    setPage(0)
  }

  const filtered = useMemo(() => {
    return allRows.filter((row) =>
      Object.entries(filters).every(([key, value]) => {
        if (!value) return true
        return row[key as keyof User].toString().toLowerCase().includes(value.toLowerCase())
      })
    )
  }, [filters])

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      const valA = a[orderBy]
      const valB = b[orderBy]
      if (valA < valB) return order === 'asc' ? -1 : 1
      if (valA > valB) return order === 'asc' ? 1 : -1
      return 0
    })
  }, [filtered, order, orderBy])

  const paginated = useMemo(() => {
    return sorted.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  }, [sorted, page, rowsPerPage])

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Tabela com Filtro, Ordenação e Paginação
      </Typography>

      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'id'}
                  direction={order}
                  onClick={() => handleSort('id')}
                >
                  ID
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'name'}
                  direction={order}
                  onClick={() => handleSort('name')}
                >
                  Nome
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'email'}
                  direction={order}
                  onClick={() => handleSort('email')}
                >
                  Email
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'role'}
                  direction={order}
                  onClick={() => handleSort('role')}
                >
                  Perfil
                </TableSortLabel>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <TextField
                  size="small"
                  placeholder="Filtrar"
                  value={filters.id ?? ''}
                  onChange={(e) => handleFilterChange('id', e.target.value)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  size="small"
                  placeholder="Filtrar"
                  value={filters.name ?? ''}
                  onChange={(e) => handleFilterChange('name', e.target.value)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  size="small"
                  placeholder="Filtrar"
                  value={filters.email ?? ''}
                  onChange={(e) => handleFilterChange('email', e.target.value)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  size="small"
                  placeholder="Filtrar"
                  value={filters.role ?? ''}
                  onChange={(e) => handleFilterChange('role', e.target.value)}
                />
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {paginated.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  Nenhum resultado encontrado.
                </TableCell>
              </TableRow>
            ) : (
              paginated.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.role}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TablePagination
                colSpan={4}
                count={filtered.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[5, 10, 20]}
                labelRowsPerPage="Linhas por página"
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  )
}
