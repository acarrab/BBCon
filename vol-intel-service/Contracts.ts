
export namespace Get {
    export interface NPEvent {
        id: String
        name: String
        date_time: String
        nonProfitName: String
    }
    export interface Volunteer {
        email: String
        first_name: String
        last_name: String

        organization: String
        eventId: String
        id: String

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