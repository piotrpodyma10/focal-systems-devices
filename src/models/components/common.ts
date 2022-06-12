export type SidebarProps = {
  children: JSX.Element
  window?: any
}

export type CardProps = {
  children: JSX.Element
  className?: string
}

export type NavbarMenuProps = {
  handleDrawerToggle: (arg: any) => void
  drawerWidth: number
}

export type LineChartProps = {
  data: StatusUpdates[]
}

export type PaginationProps = {
  count: number
  page: number
  rowsPerPage: number
  onPageChange: (event: any, page: number) => void
}

export type RowProps = {
  row: StatusUpdates
}

export type DataTableProps = {
  data: {
    rows: StatusUpdates[]
    columns: {
      label: string
      id: string
    }[]
  }
}

export type StatusUpdates = {
  deviceId: string
  lastUpdate: string
  status: string
  lastBatteryLevel: number
  updates: {
    batteryLevel: number
    receivedStatus: string
  }[]
}

export type Update = {
  batteryLevel: number
  receivedStatus: string
}

export type TableData = {
  rows: StatusUpdates[]
  columns: {
    label: string
    id: string
  }[]
}
