import { NonprofitEvent } from '../contracts/NonprofitEvent.interface';
import { Volunteer } from '../contracts/Volunteer.interface';
import { ConnectionNode } from '../contracts/ConnectionNode.interface';

let volunteerByNonprofitMocks: Array<Volunteer> = [
  {
    id: '',
    email: 'alexis.coulter@blackbaud.com',
    firstName: 'Alexis',
    lastName: 'Coulter',
    nonprofitName: 'Water Mission',
    eventId: 'alexis.coulter@blackbaud.com',
    hours: 2,
    connections: 10,
    avalancheHours: 41
  },
  {
    id: '',
    email: 'janne.ave@blackbaud.com',
    firstName: 'Janne',
    lastName: 'Ave',
    nonprofitName: 'Water Mission',
    eventId: 'janne.ave@blackbaud.com',
    hours: 3,
    connections: 2,
    avalancheHours: 10
  },
  {
    id: '',
    email: 'kayla.nussbaum@blackbaud.com',
    firstName: 'Kayla',
    lastName: 'Nussbaum',
    nonprofitName: 'Water Mission',
    eventId: 'kayla.nussbaum@blackbaud.com',
    hours: 2,
    connections: 4,
    avalancheHours: 11
  },
  {
    id: '',
    email: 'veeha.khanna@blackbaud.com',
    firstName: 'Veeha',
    lastName: 'Khanna',
    nonprofitName: 'Water Mission',
    eventId: 'veeha.khanna@blackbaud.com',
    hours: 1,
    connections: 4,
    avalancheHours: 7
  },
  {
    id: '',
    email: 'joshua.good@blackbaud.com',
    firstName: 'Joshua',
    lastName: 'Good',
    nonprofitName: 'Water Mission',
    eventId: 'joshua.good@blackbaud.com',
    hours: 4,
    connections: 6,
    avalancheHours: 7
  },
  {
    id: '',
    email: 'angelo.carrabba@blackbaud.com',
    firstName: 'Angelo',
    lastName: 'Carrabba',
    nonprofitName: 'Water Mission',
    eventId: 'angelo.carrabba@blackbaud.com',
    hours: 2,
    connections: 2,
    avalancheHours: 4
  },
  {
    id: '',
    email: 'chase.lewis@blackbaud.com',
    firstName: 'Chase',
    lastName: 'Lewis',
    nonprofitName: 'Water Mission',
    eventId: 'chase.lewis@blackbaud.com',
    hours: 4,
    connections: 2,
    avalancheHours: 7
  },
  {
    id: '',
    email: 'joshua.wang@blackbaud.com',
    firstName: 'Joshua',
    lastName: 'Wang',
    nonprofitName: 'Water Mission',
    eventId: 'joshua.wang@blackbaud.com',
    hours: 2,
    connections: 2,
    avalancheHours: 6
  },
  {
    id: '',
    email: 'joe@example.com',
    firstName: 'Joe',
    lastName: 'Joe',
    nonprofitName: 'Water Mission ',
    eventId: 'joe@example.com',
    hours: 3,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'bob@example.com',
    firstName: 'Bob',
    lastName: 'Bob ',
    nonprofitName: 'Water Mission ',
    eventId: 'bob@example.com',
    hours: 3,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'tim@example.com',
    firstName: 'Tim',
    lastName: 'Tim',
    nonprofitName: 'Water Mission ',
    eventId: 'tim@example.com',
    hours: 3,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'tom@example.com',
    firstName: 'Tom',
    lastName: 'Tom',
    nonprofitName: 'Water Mission ',
    eventId: 'tom@example.com',
    hours: 1,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'jane@example.com',
    firstName: 'Jane',
    lastName: 'Jane',
    nonprofitName: 'Water Mission ',
    eventId: 'jane@example.com',
    hours: 1,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'amanda@example.com',
    firstName: 'Amanda',
    lastName: 'Amanda',
    nonprofitName: 'Water Mission ',
    eventId: 'amanda@example.com',
    hours: 1,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'james@example.com',
    firstName: 'James',
    lastName: 'James',
    nonprofitName: 'Water Mission ',
    eventId: 'james@example.com',
    hours: 2,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'linda@example.com',
    firstName: 'Linda',
    lastName: 'Linda',
    nonprofitName: 'Water Mission ',
    eventId: 'linda@example.com',
    hours: 3,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'stew@example.com',
    firstName: 'Stew',
    lastName: 'Stew',
    nonprofitName: 'Water Mission ',
    eventId: 'stew@example.com',
    hours: 4,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'thomas@example.com',
    firstName: 'Thomas',
    lastName: 'Thomas',
    nonprofitName: 'Water Mission ',
    eventId: 'thomas@example.com',
    hours: 1,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'lorie@example.com',
    firstName: 'Lorie',
    lastName: 'Lorie',
    nonprofitName: 'Water Mission ',
    eventId: 'lorie@example.com',
    hours: 1,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'tony@example.com',
    firstName: 'Tony',
    lastName: 'Tony',
    nonprofitName: 'Water Mission ',
    eventId: 'tony@example.com',
    hours: 1,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'brad@example.com',
    firstName: 'Brad',
    lastName: 'Brad',
    nonprofitName: 'Water Mission ',
    eventId: 'brad@example.com',
    hours: 1,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'corey@example.com',
    firstName: 'Corey',
    lastName: 'Corey',
    nonprofitName: 'Water Mission ',
    eventId: 'corey@example.com',
    hours: 2,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'samantha@example.com',
    firstName: 'Samantha',
    lastName: 'Samantha',
    nonprofitName: 'Water Mission ',
    eventId: 'samantha@example.com',
    hours: 2,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'zeus@example.com',
    firstName: 'Zeus',
    lastName: 'Zeus',
    nonprofitName: 'Water Mission ',
    eventId: 'zeus@example.com',
    hours: 2,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'boaz.priestly@example.com',
    firstName: 'Boaz',
    lastName: 'Priestly',
    nonprofitName: 'Water Mission ',
    eventId: 'boaz.priestly@example.com',
    hours: 3,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'eren.jaeger@example.com',
    firstName: 'Eren',
    lastName: 'Jeager',
    nonprofitName: 'Water Mission ',
    eventId: 'eren.jaeger@example.com',
    hours: 2,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'winston@example.com',
    firstName: 'Winston',
    lastName: 'Winston',
    nonprofitName: 'Water Mission ',
    eventId: 'winston@example.com',
    hours: 2,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'tracer@example.com',
    firstName: 'Tracer',
    lastName: 'Tracer',
    nonprofitName: 'Water Mission ',
    eventId: 'tracer@example.com',
    hours: 2,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'mcree@example.com',
    firstName: 'Mcree',
    lastName: 'Mcree',
    nonprofitName: 'Water Mission ',
    eventId: 'mcree@example.com',
    hours: 3,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'zelda@example.com',
    firstName: 'Zelda',
    lastName: 'Zelda',
    nonprofitName: 'Water Mission ',
    eventId: 'zelda@example.com',
    hours: 5,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'link@example.com',
    firstName: 'Link',
    lastName: 'Link',
    nonprofitName: 'Water Mission ',
    eventId: 'link@example.com',
    hours: 4,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'zarya@example.com',
    firstName: 'Zarya',
    lastName: 'Zarya',
    nonprofitName: 'Water Mission ',
    eventId: 'zarya@example.com',
    hours: 3,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'tingle@example.com',
    firstName: 'Tingle',
    lastName: 'Tingle ',
    nonprofitName: 'Water Mission ',
    eventId: 'tingle@example.com',
    hours: 2,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'jack.sparrow@example.com',
    firstName: 'Jack',
    lastName: 'Sparrow',
    nonprofitName: 'Water Mission ',
    eventId: 'jack.sparrow@example.com',
    hours: 1,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'alexis.coulter@blackbaud.com',
    firstName: 'Alexis',
    lastName: 'Coulter',
    nonprofitName: 'Water Mission ',
    eventId: 'alexis.coulter@blackbaud.com',
    hours: 2,
    connections: 10,
    avalancheHours: 41
  },
  {
    id: '',
    email: 'janne.ave@blackbaud.com',
    firstName: 'Janne',
    lastName: 'Ave',
    nonprofitName: 'Water Mission ',
    eventId: 'janne.ave@blackbaud.com',
    hours: 3,
    connections: 2,
    avalancheHours: 10
  },
  {
    id: '',
    email: 'kayla.nussbaum@blackbaud.com',
    firstName: 'Kayla',
    lastName: 'Nussbaum',
    nonprofitName: 'Water Mission ',
    eventId: 'kayla.nussbaum@blackbaud.com',
    hours: 2,
    connections: 4,
    avalancheHours: 11
  },
  {
    id: '',
    email: 'veeha.khanna@blackbaud.com',
    firstName: 'Veeha',
    lastName: 'Khanna',
    nonprofitName: 'Water Mission ',
    eventId: 'veeha.khanna@blackbaud.com',
    hours: 1,
    connections: 4,
    avalancheHours: 7
  },
  {
    id: '',
    email: 'joshua.good@blackbaud.com',
    firstName: 'Joshua',
    lastName: 'Good',
    nonprofitName: 'Water Mission ',
    eventId: 'joshua.good@blackbaud.com',
    hours: 4,
    connections: 6,
    avalancheHours: 7
  },
  {
    id: '',
    email: 'angelo.carrabba@blackbaud.com',
    firstName: 'Angelo',
    lastName: 'Carrabba',
    nonprofitName: 'Water Mission ',
    eventId: 'angelo.carrabba@blackbaud.com',
    hours: 2,
    connections: 2,
    avalancheHours: 4
  },
  {
    id: '',
    email: 'chase.lewis@blackbaud.com',
    firstName: 'Chase',
    lastName: 'Lewis',
    nonprofitName: 'Water Mission ',
    eventId: 'chase.lewis@blackbaud.com',
    hours: 4,
    connections: 2,
    avalancheHours: 7
  },
  {
    id: '',
    email: 'joshua.wang@blackbaud.com',
    firstName: 'Joshua',
    lastName: 'Wang',
    nonprofitName: 'Water Mission ',
    eventId: 'joshua.wang@blackbaud.com',
    hours: 2,
    connections: 2,
    avalancheHours: 6
  },
  {
    id: '',
    email: 'joe@example.com',
    firstName: 'Joe',
    lastName: 'Joe',
    nonprofitName: 'Water Mission ',
    eventId: 'joe@example.com',
    hours: 3,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'bob@example.com',
    firstName: 'Bob',
    lastName: 'Bob ',
    nonprofitName: 'Water Mission ',
    eventId: 'bob@example.com',
    hours: 3,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'tim@example.com',
    firstName: 'Tim',
    lastName: 'Tim',
    nonprofitName: 'Water Mission ',
    eventId: 'tim@example.com',
    hours: 3,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'tom@example.com',
    firstName: 'Tom',
    lastName: 'Tom',
    nonprofitName: 'Water Mission ',
    eventId: 'tom@example.com',
    hours: 1,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'jane@example.com',
    firstName: 'Jane',
    lastName: 'Jane',
    nonprofitName: 'Water Mission ',
    eventId: 'jane@example.com',
    hours: 1,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'amanda@example.com',
    firstName: 'Amanda',
    lastName: 'Amanda',
    nonprofitName: 'Water Mission ',
    eventId: 'amanda@example.com',
    hours: 1,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'james@example.com',
    firstName: 'James',
    lastName: 'James',
    nonprofitName: 'Water Mission ',
    eventId: 'james@example.com',
    hours: 2,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'linda@example.com',
    firstName: 'Linda',
    lastName: 'Linda',
    nonprofitName: 'Water Mission ',
    eventId: 'linda@example.com',
    hours: 3,
    connections: 0,
    avalancheHours: 0
  },
  {
    id: '',
    email: 'stew@example.com',
    firstName: 'Stew',
    lastName: 'Stew',
    nonprofitName: 'Water Mission ',
    eventId: 'stew@example.com',
    hours: 4,
    connections: 0,
    avalancheHours: 0
  },
];

let nonprofitEventMocks: Array<NonprofitEvent> = [
  {
    id: '1234',
    name: 'Christmas Party',
    dateTime: '12/20/2017'
  },
  {
    id: '2234',
    name: 'Warehouse Inventory',
    dateTime: '9/10/2017'
  },
];

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
export let volunteerByNonprofitData = volunteerByNonprofitMocks;
export let nonprofitEventData = nonprofitEventMocks;
export let volunteerByEventData = volunteerByEventMocks;
export let connectionTreeData = connectionTreeMock;

