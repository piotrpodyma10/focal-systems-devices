import { ReactComponent as GeneralIcon } from '../../../../assets/icons/general.svg'
import { ReactComponent as MetricsIcon } from '../../../../assets/icons/metrics.svg'

export const sidebarRoutes = [
  {
    title: 'General',
    link: '/',
    icon: <GeneralIcon className='route-icon' />,
  },
  {
    title: 'Metrics',
    link: '/metrics',
    icon: <MetricsIcon className='route-icon' />,
  },
]
