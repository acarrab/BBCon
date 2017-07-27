import { NonprofitEvent } from '../contracts/NonprofitEvent.interface';
import { Volunteer } from '../contracts/Volunteer.interface';
import { ConnectionNode } from '../contracts/ConnectionNode.interface';

let nonprofitEventMocks: Array<NonprofitEvent> = [{
  id: '',
  name: '',
  dateTime: ''
}];

let volunteerByNonprofitMocks: Array<Volunteer> = [{
  id: '',

  email: '',
  firstName: '',
  lastName: '',

  nonprofitName: '',
  eventId: '',

  hours: 0,
  connections: 0,
  avalancheHours: 0
}];

let volunteerByEventMocks: Array<Volunteer> = [{
  id: '',

  email: '',
  firstName: '',
  lastName: '',

  nonprofitName: '',
  eventId: '',

  hours: 0,
  connections: 0,
  avalancheHours: 0
}];

let connectionTreeMock: ConnectionNode = {
  id: '',
  children: new Array<ConnectionNode>()
};

export let nonprofitEventData = nonprofitEventMocks;
export let volunteerByNonprofitData = volunteerByNonprofitMocks;
export let volunteerByEventData = volunteerByEventMocks;
export let connectionTreeData = connectionTreeMock;
