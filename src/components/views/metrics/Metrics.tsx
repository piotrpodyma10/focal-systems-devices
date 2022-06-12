import { useSelector } from 'react-redux'
import { healthUpdates } from '../../../features/devices/devicesSlice'
import { getStatusUpdates } from '../../../utils/devicesUtils'
import LineChart from '../../common/lineChart/LineChart'
import Card from '../../common/card/Card'
import './Metrics.scss'

function Metrics() {
  const allHealthUpdates = getStatusUpdates(useSelector(healthUpdates))

  return (
    <div className='metrics'>
      <div className='metrics-title'>Devices Health Battery Levels</div>
      <Card>
        <LineChart data={allHealthUpdates} />
      </Card>
    </div>
  )
}

export default Metrics
