export interface Nonprofit {
  id: string

  name: string
  events: Array<NPEvent>
}

export interface NonprofitEvent {
  id: string

  name: string
  dateTime: string 
  nonprofitName: string
}

export interface Volunteer {
  id: string

  email: string
  firstName: string
  lastName: string

  organization: string
  eventId: string

  hours: number
  connections: number
  avalancheHours: number
}

export interface Volunteer {
  email: string
  firstName: string
  lastName: string
}