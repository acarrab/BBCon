interface EventId extends String {}
interface VolunteerId extends String {}
interface FormId extends String {}

interface NPEvent {
    id: String
    name: String
    date_time: String
    nonProfitName: String
}

interface Volunteer {
    id: String
    first_name: String
    last_name: String
    email: String
    hours: Number
    connections: Number
    avalanche_hours: Number
    organization: String
}


interface EventEndpoints {
    /*
    [HttpGet]: /events
    returns: A list of events
    */
    getEvents(): Array<NPEvent>

    /*
    [HttpGet]: /events/{eventId}
    returns: An event
    */
    getEvent(id:EventId): NPEvent

    /* 
    [HttpGet]: 
        /events/volunteers
        /events/{eventId}/volunteers
    returns: a list of volunteers for a particular event or for all
    */
    getVolunteers(eid?: EventId): Array<VolunteerId>

    /*
    []
    */
    getVolunteerInfo(vid: VolunteerId): Volunteer 


    // [HttpGet]: /events/{eventId}/
}   


class VolIntelService {
    
    
}