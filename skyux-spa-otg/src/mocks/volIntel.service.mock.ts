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

  public async getAllEvents(nonprofitName: string): Promise<Array<NonprofitEvent>> {
    return nonprofitEventData;
  }

  public async getVolunteersByNonprofit(nonprofitName: string): Promise<Array<Volunteer>> {
    return volunteerByNonprofitData;
  }

  public async getVolunteersByEvent(eventId: string): Promise<Array<Volunteer>> {
    return volunteerByEventData;
  }

  public async getConnectionTree(eventId: string): Promise<ConnectionNode> {
    return connectionTreeData;
  }
}
