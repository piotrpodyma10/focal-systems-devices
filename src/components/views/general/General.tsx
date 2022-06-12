import DevicesHealthTable from './devicesHealthTable/DevicesHealthTable'
import './General.scss'

function General() {
  return (
    <div className='general'>
      <div className='general-title'>Devices Health Statuses</div>
      <DevicesHealthTable />
    </div>
  )
}

export default General
