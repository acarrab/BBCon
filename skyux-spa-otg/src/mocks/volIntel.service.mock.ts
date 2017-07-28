import { Injectable } from '@angular/core';
import { NonprofitEvent } from '../contracts/NonprofitEvent.interface';
import { Volunteer } from '../contracts/Volunteer.interface';
import { ConnectionNode } from '../contracts/ConnectionNode.interface';
import {
  addEventResult,
  nonprofitEventData,
  volunteerByNonprofitData,
  volunteerByEventData,
  volunteerByEventDictData,
  connectionTreeData,
  connectionTreeDictData
} from '../mocks/data.mock';

@Injectable()

export class VolIntelService {

  public getAllEvents(nonprofitName: string): Promise<Array<NonprofitEvent>> {
    // tslint:disable-next-line:max-line-length
    return Promise.resolve(nonprofitEventData);
  }

  public getVolunteersByNonprofit(nonprofitName: string): Promise<Array<Volunteer>> {
    return Promise.resolve(volunteerByNonprofitData);
  }

  public getVolunteersByEvent(eventId: string): Promise<Array<Volunteer>> {
    if (eventId in volunteerByEventDictData) {
      return Promise.resolve(volunteerByEventDictData[eventId]);
    }
    return Promise.resolve(volunteerByEventData);
  }

  public getConnectionTree(eventId: string): Promise<ConnectionNode> {
    if (eventId in connectionTreeDictData) {
      return Promise.resolve(connectionTreeDictData[eventId]);
    }
    return Promise.resolve(connectionTreeData);
  }

  public addEvent(nonprofitName: string, name: string, dateTime: string): Promise<string> {
    return Promise.resolve(addEventResult);
  }

}
