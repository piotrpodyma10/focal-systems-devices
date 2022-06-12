import { useEffect, useState } from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js'
import { LineChartProps, StatusUpdates, Update } from '../../../models/components/common'
import { Line } from 'react-chartjs-2'
import { getStyle, hexToRGB } from '../../../utils/styleUtils'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import './LineChart.scss'

function LineChart({ data }: LineChartProps) {
  const devices: string[] = data.map((element) => element.deviceId)
  const [device, setDevice] = useState<string>(devices[0])
  const filterDevice = (): StatusUpdates => data.filter((element) => element.deviceId === device)[0]
  const [deviceData, setDeviceData] = useState<StatusUpdates>(filterDevice())
  const metricsColor = getStyle('--light-dark')
  const chartLineColor = getStyle('--sea-green')
  const labels = deviceData?.updates?.map((update: Update) => update.receivedStatus).reverse()
  const batteryLevels = deviceData?.updates?.map((update: Update) => update.batteryLevel).reverse()
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

  const handleChange = (event: any): void => {
    setDevice(event.target.value)
  }

  useEffect(() => {
    setDeviceData(filterDevice())
  }, [device])

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: metricsColor,
        },
      },
      y: {
        ticks: {
          color: metricsColor,
          callback: function (value: number) {
            return `${value}%`
          },
        },
      },
    },
    tension: 0.3,
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Battery Level',
        data: batteryLevels,
        borderColor: chartLineColor,
        backgroundColor: hexToRGB(chartLineColor, 0.2),
        fill: 'origin',
      },
    ],
  }

  return (
    <div className='line-chart'>
      <div className='line-chart-header'>
        <div className='left-column'>
          <div className='title'>Battery Levels Chart</div>
        </div>
        <div className='right-column'>
          <div className='filter'>
            <FormControl>
              <InputLabel>Device</InputLabel>
              <Select label='Device' value={device} onChange={handleChange} inputProps={{ MenuProps: { disableScrollLock: true } }}>
                {devices.map((device, index) => (
                  <MenuItem key={index} value={device}>
                    {device}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <div className='line-chart-container'>
        <Line options={options} data={chartData} />
      </div>
    </div>
  )
}

export default LineChart
