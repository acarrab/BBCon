import { Injectable } from '@angular/core';
import { NonprofitEvent } from '../contracts/NonprofitEvent.interface';
import { Volunteer } from '../contracts/Volunteer.interface';
import { ConnectionNode } from '../contracts/ConnectionNode.interface';
import {
  nonprofitEventData,
  volunteerByNonprofitData,
  volunteerByEventData,
  connectionTreeData
} from '../mocks/data.mock';

@Injectable()

export class VolIntelService {

  public getAllEvents(nonprofitName: string): Array<NonprofitEvent> {
    return nonprofitEventData;
  }

  public getVolunteersByNonprofit(nonprofitName: string): Array<Volunteer> {
    return volunteerByNonprofitData;
  }

  public getVolunteersByEvent(eventId: string): Array<Volunteer> {
    return volunteerByEventData;
  }

  public getConnectionTree(eventId: string): ConnectionNode {
    return connectionTreeData;
  }
}
