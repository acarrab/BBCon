import { Injectable } from '@angular/core';
import { SkyAuthHttp } from '@blackbaud/skyux-builder/runtime';
import { Response } from '@angular/http';
import { NonprofitEvent } from '../contracts/NonprofitEvent.interface';
import { Volunteer } from '../contracts/Volunteer.interface';
import { ConnectionNode } from '../contracts/ConnectionNode.interface';

@Injectable()

export class VolIntelService {

  private volIntelHost: string;

  constructor(protected skyAuthHttp: SkyAuthHttp) {
    this.volIntelHost = 'localhost';
  }

  public async getAllEvents(nonprofitName: string): Promise<Array<NonprofitEvent>> {
    let route = this.volIntelHost + '/nonprofits/' + nonprofitName + '/events';
    let events = new Array<NonprofitEvent>();
    await this.skyAuthHttp
      .get(route)
      .subscribe((response: Response) => {
        events = response.json().events;
      }, (error => {
        alert(error);
      }));
    return events;
  }

  public async getVolunteersByNonprofit(nonprofitName: string): Promise<Array<Volunteer>> {
    let route = this.volIntelHost + '/nonprofits/' + nonprofitName + '/volunteers';
    let volunteers = new Array<Volunteer>();
    await this.skyAuthHttp
      .get(route)
      .subscribe((response: Response) => {
        volunteers = response.json().volunteers;
      }, (error => {
        alert(error);
      }));
    return volunteers;
  }

  public async getVolunteersByEvent(eventId: string): Promise<Array<Volunteer>> {
    let route = this.volIntelHost + '/events/' + eventId + '/volunteers';
    let volunteers = new Array<Volunteer>();
    await this.skyAuthHttp
      .get(route)
      .subscribe((response: Response) => {
        volunteers = response.json().volunteers;
      }, (error => {
        alert(error);
      }));
    return volunteers;
  }

  public async getConnectionTree(eventId: string): Promise<ConnectionNode> {
    let route = this.volIntelHost + '/events/' + eventId + '/connectionTree';
    let connectionTree: ConnectionNode = {
      id: '',
      children: new Array<ConnectionNode>()
    };
    await this.skyAuthHttp
      .get(route)
      .subscribe((response: Response) => {
        connectionTree = response.json().connectionTree;
      }, (error => {
        alert(error);
      }));
    return connectionTree;
  }

  public async addEvent(nonprofitName: string, name: string, dateTime: string): Promise<string> {
    let route = this.volIntelHost + '/events/add';
    let eventId = '';
    await this.skyAuthHttp
      .post(route, {
        nonprofitName: nonprofitName,
        name: name,
        dateTime: dateTime
      })
      .subscribe((response: Response) => {
        eventId = response.json();
      }, (error => {
        alert(error);
      }));
    return eventId;
  }

}
