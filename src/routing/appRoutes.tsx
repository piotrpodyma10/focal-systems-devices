import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Sidebar from '../components/common/sidebar/Sidebar'
import General from '../components/views/general/General'
import Metrics from '../components/views/metrics/Metrics'

export const AppRoutes = () => (
  <BrowserRouter>
    <Sidebar>
      <Routes>
        <Route path='/' element={<General />} />
        <Route path='/metrics' element={<Metrics />} />
      </Routes>
    </Sidebar>
  </BrowserRouter>
)

export default AppRoutes
