import { useSelector } from 'react-redux'
import { healthUpdates } from '../../../../features/devices/devicesSlice'
import { TableData } from '../../../../models/components/common'
import { getStatusUpdates } from '../../../../utils/devicesUtils'
import DataTable from '../../../common/dataTable/DataTable'
import Card from '../../../common/card/Card'

function DevicesHealthTable() {
  const lastHealthUpdates = getStatusUpdates(useSelector(healthUpdates), true)

  const tableData: TableData = {
    rows: lastHealthUpdates,
    columns: [
      { label: 'Device Id', id: 'deviceId' },
      { label: 'Status', id: 'status' },
      { label: 'Last Update', id: 'lastUpdate' },
      { label: 'Last Bettery Level', id: 'lastBatteryLevel' },
    ],
  }

  return (
    <Card className='devices-health-table'>
      <DataTable data={tableData} />
    </Card>
  )
}

export default DevicesHealthTable
