export type State = {
  devices: {
    healthUpdates: HealthUpdates
  }
  theme: {
    themeMode: string
  }
}

export type HealthUpdates = {
  [key: string]: [
    {
      status_id: number
      battery_level: number
      received_status_at: string
    }
  ]
}
