import { createSlice } from '@reduxjs/toolkit'
import { State } from '../../models/store/store'
import healthUpdatesData from '../../server/data/sample-data.json'

export const devicesSlice = createSlice({
  name: 'devices',
  initialState: {
    healthUpdates: {},
  },
  reducers: {
    getHealthUpdates: (state) => {
      state.healthUpdates = healthUpdatesData
    },
  },
})

export const { getHealthUpdates } = devicesSlice.actions
export const healthUpdates = (state: State) => state.devices.healthUpdates

export default devicesSlice.reducer
