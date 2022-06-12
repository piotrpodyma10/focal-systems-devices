import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHealthUpdates } from '../../features/devices/devicesSlice'
import { themeMode } from '../../features/theme/themeSlice'
import AppRoutes from '../../routing/appRoutes'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const theme = useSelector(themeMode)
  document.body.setAttribute('data-theme', theme)

  useEffect(() => {
    dispatch(getHealthUpdates())
  }, [dispatch])

  return <AppRoutes />
}

export default App
