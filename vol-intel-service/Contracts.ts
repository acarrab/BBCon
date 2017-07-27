interface EventId extends String { }
interface NonprofitId extends String { }
interface FormId extends String { }
interface VolunteerId extends String { }

export namespace Get {
    export interface Nonprofit {
        id: NonprofitId

        name: String
        events: Array<NPEvent>
    }

    export interface NPEvent {
        id: EventId

        name: String
        date_time: String 
        nonprofit_name: String
    }

    export interface Volunteer {
        id: VolunteerId

        email: String
        first_name: String
        last_name: String

        organization: String
        eventId: String

        hours: Number
        connections: Number
        avalanche_hours: Number
    }
}

export namespace Post {
    export interface Volunteer {
        email: String
        first_name: String
        last_name: String
    }

    export interface NPEvent {
        name: String
        nonprofitName: String
    }
}