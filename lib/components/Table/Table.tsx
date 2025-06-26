import { DataGridPro, DataGridProProps, GridToolbar } from '@mui/x-data-grid-pro'
import { Box } from '@mui/material'
import * as React from 'react'

export type TableProProps = DataGridProProps

export const Table = (props: TableProProps) => {
  return (
    <Box sx={{ width: '100%', height: 500 }}>
      <DataGridPro
        disableRowSelectionOnClick
        autoHeight={false}
        slots={{
          toolbar: GridToolbar
        }}
        {...props}
      />
    </Box>
  )
}
