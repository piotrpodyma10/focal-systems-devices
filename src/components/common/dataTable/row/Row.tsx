import { useState, Fragment } from 'react'
import { RowProps } from '../../../../models/components/common'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import './Row.scss'

function Row({ row }: RowProps) {
  const [open, setOpen] = useState(false)

  const statusBanner = (status: string) => {
    let statusClass = 'works'
    if (status === 'Low Battery') statusClass = 'low-battery'
    if (status === 'Not Enough Data') statusClass = 'not-enough-data'
    return (
      <TableCell align='center'>
        <span className={`status ${statusClass}`}>{status}</span>
      </TableCell>
    )
  }

  return (
    <Fragment>
      <TableRow className='table-row' hover sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell className='table-cell' component='th' scope='row'>
          {row.deviceId}
        </TableCell>
        {statusBanner(row.status)}
        <TableCell className='table-cell' align='center'>
          {row.lastUpdate}
        </TableCell>
        <TableCell className='table-cell' align='center'>
          {row.lastBatteryLevel}%
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant='h6' gutterBottom component='div'>
                Updates
              </Typography>
              <Table size='small' sx={{ width: 450 }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Received Status</TableCell>
                    <TableCell align='center'>Battery</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.updates.map((update, index) => (
                    <TableRow hover key={index}>
                      <TableCell component='th' scope='row'>
                        {update.receivedStatus}
                      </TableCell>
                      <TableCell align='center'>{update.batteryLevel}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  )
}

export default Row
