import moment from 'moment'
import { StatusUpdates } from '../models/components/common'
import { HealthUpdates } from '../models/store/store'

export const getStatusUpdates = (data: HealthUpdates, getLastUpdates = false): StatusUpdates[] => {
  const rows = []
  for (const [key, value] of Object.entries(data)) {
    let countDays = 1
    const updates = []
    let status = 'Not Enough Data'
    const dateFormat = 'YYYY-MM-DD HH:mm:ss'
    const lastUpdate = moment(value[value.length - 1].received_status_at).format(dateFormat)
    const lastBatteryLevel = value[value.length - 1].battery_level
    for (let i = value.length - 1; i > 0; i--) {
      const currentDate = moment(value[i].received_status_at).format(dateFormat)
      countDays = moment(lastUpdate).diff(currentDate, 'days') + 1
      if (countDays === 8) {
        status = lastBatteryLevel < 10 ? 'Low Battery' : 'Works'
        if (getLastUpdates) {
          break
        }
      }
      updates.push({
        batteryLevel: value[i].battery_level,
        receivedStatus: moment(value[i].received_status_at).format(dateFormat),
      })
    }

    rows.push({
      deviceId: key,
      lastUpdate: lastUpdate,
      status: status,
      lastBatteryLevel: lastBatteryLevel,
      updates: updates,
    })
  }
  return rows
}
