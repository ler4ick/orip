import type React from 'react'
import type { ReactElement } from 'react'
import Box from '@mui/material/Box'
import { DataGrid, type GridColDef } from '@mui/x-data-grid'
import { type ICompanyUser } from '../redux/appConfig'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const columns: GridColDef[] = [
  {
    field: 'id',
    flex: 0.1,
    headerAlign: 'center',
    align: 'center',
    renderHeader: () => (
      <Typography variant="body1" color="#000">
        ID
      </Typography>
    ),
    renderCell: ({ row }) => (
      <Typography variant="body1" color="#000">
        {row.id}
      </Typography>
    )
  },
  {
    field: 'fio',
    flex: 0.4,
    headerAlign: 'center',
    align: 'center',
    renderHeader: () => (
      <Typography variant="body1" color="#000">
        ФИО
      </Typography>
    ),
    renderCell: ({ row }) => (
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      <Link to={`/users/${row.id}`}>
        <Typography variant="body1" color="#000">
          {row.fio}
        </Typography>
      </Link>
    )
  },
  {
    field: 'date',
    headerAlign: 'center',
    align: 'center',
    renderHeader: () => (
      <Typography variant="body1" color="#000">
        Дата рождения{' '}
      </Typography>
    ),
    flex: 0.25,
    renderCell: ({ row }) => (
      <Typography variant="body1" color="#000">
        {row.date}
      </Typography>
    )
  },
  {
    field: 'tasks',
    renderHeader: () => (
      <Typography variant="body1" color="#000">
        Количество задач
      </Typography>
    ),
    type: 'number',
    headerAlign: 'center',
    align: 'center',
    flex: 0.25,
    renderCell: ({ row }) => (
      <Typography variant="body1" color="#000">
        {row.tasks.length}
      </Typography>
    )
  }
]

interface DataTableProps {
  columns?: any[]
  rows: ICompanyUser[] | null
}

export default function DataGridDemo(
  props: DataTableProps
): ReactElement<React.FC> {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        hideFooter
        rows={props.rows}
        columns={columns}
        disableRowSelectionOnClick
      />
    </Box>
  )
}
