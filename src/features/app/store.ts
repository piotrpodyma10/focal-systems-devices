import { configureStore } from '@reduxjs/toolkit'
import devicesSlice from '../devices/devicesSlice'
import themeSlice from '../theme/themeSlice'

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    devices: devicesSlice,
  },
})
