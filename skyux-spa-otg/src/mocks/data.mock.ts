import { NonprofitEvent } from '../contracts/NonprofitEvent.interface';
import { Volunteer } from '../contracts/Volunteer.interface';
import { ConnectionNode } from '../contracts/ConnectionNode.interface';

interface StringDict<T> {
    [key: string]: T;
}
let volunteerByNonprofitMocks: Array<Volunteer> = [{
    id: '',
    email: 'alexis.coulter@blackbaud.com',
    firstName: 'Alexis',
    lastName: 'Coulter',
    nonprofitName: 'Water Mission',
    eventId: '1234',
    hours: 2,
    connections: 10,
    avalancheHours: 41
  }, {
    id: '',
    email: 'janne.ave@blackbaud.com',
    firstName: 'Janne',
    lastName: 'Ave',
    nonprofitName: 'Water Mission',
    eventId: '1234',
    hours: 3,
    connections: 2,
    avalancheHours: 10
  }, {
    id: '',
    email: 'kayla.nussbaum@blackbaud.com',
    firstName: 'Kayla',
    lastName: 'Nussbaum',
    nonprofitName: 'Water Mission',
    eventId: '1234',
    hours: 2,
    connections: 4,
    avalancheHours: 11
  }, {
    id: '',
    email: 'veeha.khanna@blackbaud.com',
    firstName: 'Veeha',
    lastName: 'Khanna',
    nonprofitName: 'Water Mission',
    eventId: '1234',
    hours: 1,
    connections: 4,
    avalancheHours: 7
  }, {
    id: '',
    email: 'joshua.good@blackbaud.com',
    firstName: 'Joshua',
    lastName: 'Good',
    nonprofitName: 'Water Mission',
    eventId: '1234',
    hours: 4,
    connections: 6,
    avalancheHours: 7
  }, {
    id: '',
    email: 'angelo.carrabba@blackbaud.com',
    firstName: 'Angelo',
    lastName: 'Carrabba',
    nonprofitName: 'Water Mission',
    eventId: '1234',
    hours: 2,
    connections: 2,
    avalancheHours: 4
  }, {
    id: '',
    email: 'chase.lewis@blackbaud.com',
    firstName: 'Chase',
    lastName: 'Lewis',
    nonprofitName: 'Water Mission',
    eventId: '1234',
    hours: 4,
    connections: 2,
    avalancheHours: 7
  }, {
    id: '',
    email: 'joshua.wang@blackbaud.com',
    firstName: 'Joshua',
    lastName: 'Wang',
    nonprofitName: 'Water Mission',
    eventId: '1234',
    hours: 2,
    connections: 2,
    avalancheHours: 6
  }, {
    id: '',
    email: 'joe@example.com',
    firstName: 'Joe',
    lastName: 'Joe',
    nonprofitName: 'Water Mission ',
    eventId: '1234',
    hours: 3,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'bob@example.com',
    firstName: 'Bob',
    lastName: 'Bob ',
    nonprofitName: 'Water Mission ',
    eventId: '1234',
    hours: 3,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'tim@example.com',
    firstName: 'Tim',
    lastName: 'Tim',
    nonprofitName: 'Water Mission ',
    eventId: '1234',
    hours: 3,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'tom@example.com',
    firstName: 'Tom',
    lastName: 'Tom',
    nonprofitName: 'Water Mission ',
    eventId: '1234',
    hours: 1,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'jane@example.com',
    firstName: 'Jane',
    lastName: 'Jane',
    nonprofitName: 'Water Mission ',
    eventId: '1234',
    hours: 1,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'amanda@example.com',
    firstName: 'Amanda',
    lastName: 'Amanda',
    nonprofitName: 'Water Mission ',
    eventId: '1234',
    hours: 1,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'james@example.com',
    firstName: 'James',
    lastName: 'James',
    nonprofitName: 'Water Mission ',
    eventId: '1234',
    hours: 2,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'linda@example.com',
    firstName: 'Linda',
    lastName: 'Linda',
    nonprofitName: 'Water Mission ',
    eventId: '1234',
    hours: 3,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'stew@example.com',
    firstName: 'Stew',
    lastName: 'Stew',
    nonprofitName: 'Water Mission ',
    eventId: '1234',
    hours: 4,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'thomas@example.com',
    firstName: 'Thomas',
    lastName: 'Thomas',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 1,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'lorie@example.com',
    firstName: 'Lorie',
    lastName: 'Lorie',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 1,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'tony@example.com',
    firstName: 'Tony',
    lastName: 'Tony',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 1,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'brad@example.com',
    firstName: 'Brad',
    lastName: 'Brad',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 1,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'corey@example.com',
    firstName: 'Corey',
    lastName: 'Corey',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 2,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'samantha@example.com',
    firstName: 'Samantha',
    lastName: 'Samantha',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 2,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'zeus@example.com',
    firstName: 'Zeus',
    lastName: 'Zeus',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 2,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'boaz.priestly@example.com',
    firstName: 'Boaz',
    lastName: 'Priestly',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 3,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'eren.jaeger@example.com',
    firstName: 'Eren',
    lastName: 'Jeager',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 2,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'winston@example.com',
    firstName: 'Winston',
    lastName: 'Winston',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 2,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'tracer@example.com',
    firstName: 'Tracer',
    lastName: 'Tracer',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 2,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'mcree@example.com',
    firstName: 'Mcree',
    lastName: 'Mcree',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 3,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'zelda@example.com',
    firstName: 'Zelda',
    lastName: 'Zelda',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 5,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'link@example.com',
    firstName: 'Link',
    lastName: 'Link',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 4,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'zarya@example.com',
    firstName: 'Zarya',
    lastName: 'Zarya',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 3,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'tingle@example.com',
    firstName: 'Tingle',
    lastName: 'Tingle ',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 2,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'jack.sparrow@example.com',
    firstName: 'Jack',
    lastName: 'Sparrow',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 1,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'alexis.coulter@blackbaud.com',
    firstName: 'Alexis',
    lastName: 'Coulter',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 2,
    connections: 10,
    avalancheHours: 41
  }, {
    id: '',
    email: 'janne.ave@blackbaud.com',
    firstName: 'Janne',
    lastName: 'Ave',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 3,
    connections: 2,
    avalancheHours: 10
  }, {
    id: '',
    email: 'kayla.nussbaum@blackbaud.com',
    firstName: 'Kayla',
    lastName: 'Nussbaum',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 2,
    connections: 4,
    avalancheHours: 11
  }, {
    id: '',
    email: 'veeha.khanna@blackbaud.com',
    firstName: 'Veeha',
    lastName: 'Khanna',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 1,
    connections: 4,
    avalancheHours: 7
  }, {
    id: '',
    email: 'joshua.good@blackbaud.com',
    firstName: 'Joshua',
    lastName: 'Good',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 4,
    connections: 6,
    avalancheHours: 7
  }, {
    id: '',
    email: 'angelo.carrabba@blackbaud.com',
    firstName: 'Angelo',
    lastName: 'Carrabba',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 2,
    connections: 2,
    avalancheHours: 4
  }, {
    id: '',
    email: 'chase.lewis@blackbaud.com',
    firstName: 'Chase',
    lastName: 'Lewis',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 4,
    connections: 2,
    avalancheHours: 7
  }, {
    id: '',
    email: 'joshua.wang@blackbaud.com',
    firstName: 'Joshua',
    lastName: 'Wang',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 2,
    connections: 2,
    avalancheHours: 6
  }, {
    id: '',
    email: 'joe@example.com',
    firstName: 'Joe',
    lastName: 'Joe',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 3,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'bob@example.com',
    firstName: 'Bob',
    lastName: 'Bob ',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 3,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'tim@example.com',
    firstName: 'Tim',
    lastName: 'Tim',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 3,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'tom@example.com',
    firstName: 'Tom',
    lastName: 'Tom',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 1,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'jane@example.com',
    firstName: 'Jane',
    lastName: 'Jane',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 1,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'amanda@example.com',
    firstName: 'Amanda',
    lastName: 'Amanda',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 1,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'james@example.com',
    firstName: 'James',
    lastName: 'James',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 2,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'linda@example.com',
    firstName: 'Linda',
    lastName: 'Linda',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 3,
    connections: 0,
    avalancheHours: 0
  }, {
    id: '',
    email: 'stew@example.com',
    firstName: 'Stew',
    lastName: 'Stew',
    nonprofitName: 'Water Mission ',
    eventId: '2234',
    hours: 4,
    connections: 0,
    avalancheHours: 0
  }];

let nonprofitEventMocks: Array<NonprofitEvent> = [{
    id: '1234',
    name: 'Christmas Party',
    dateTime: '12/20/2017'
  }, {
    id: '2234',
    name: 'Warehouse Inventory',
    dateTime: '9/10/2017'
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

let volunteerByEventDictMocks: StringDict<Array<Volunteer>> = {
    '1234': [{
      id: '',
      email: 'alexis.coulter@blackbaud.com',
      firstName: 'Alexis',
      lastName: 'Coulter',
      nonprofitName: 'Water Mission',
      eventId: '1234',
      hours: 2,
      connections: 10,
      avalancheHours: 41
    }, {
      id: '',
      email: 'janne.ave@blackbaud.com',
      firstName: 'Janne',
      lastName: 'Ave',
      nonprofitName: 'Water Mission',
      eventId: '1234',
      hours: 3,
      connections: 2,
      avalancheHours: 10
    }, {
      id: '',
      email: 'kayla.nussbaum@blackbaud.com',
      firstName: 'Kayla',
      lastName: 'Nussbaum',
      nonprofitName: 'Water Mission',
      eventId: '1234',
      hours: 2,
      connections: 4,
      avalancheHours: 11
    }, {
      id: '',
      email: 'veeha.khanna@blackbaud.com',
      firstName: 'Veeha',
      lastName: 'Khanna',
      nonprofitName: 'Water Mission',
      eventId: '1234',
      hours: 1,
      connections: 4,
      avalancheHours: 7
    }, {
      id: '',
      email: 'joshua.good@blackbaud.com',
      firstName: 'Joshua',
      lastName: 'Good',
      nonprofitName: 'Water Mission',
      eventId: '1234',
      hours: 4,
      connections: 6,
      avalancheHours: 7
    }, {
      id: '',
      email: 'angelo.carrabba@blackbaud.com',
      firstName: 'Angelo',
      lastName: 'Carrabba',
      nonprofitName: 'Water Mission',
      eventId: '1234',
      hours: 2,
      connections: 2,
      avalancheHours: 4
    }, {
      id: '',
      email: 'chase.lewis@blackbaud.com',
      firstName: 'Chase',
      lastName: 'Lewis',
      nonprofitName: 'Water Mission',
      eventId: '1234',
      hours: 4,
      connections: 2,
      avalancheHours: 7
    }, {
      id: '',
      email: 'joshua.wang@blackbaud.com',
      firstName: 'Joshua',
      lastName: 'Wang',
      nonprofitName: 'Water Mission',
      eventId: '1234',
      hours: 2,
      connections: 2,
      avalancheHours: 6
    }, {
      id: '',
      email: 'joe@example.com',
      firstName: 'Joe',
      lastName: 'Joe',
      nonprofitName: 'Water Mission ',
      eventId: '1234',
      hours: 3,
      connections: 0,
      avalancheHours: 0
    }, {
      id: '',
      email: 'bob@example.com',
      firstName: 'Bob',
      lastName: 'Bob ',
      nonprofitName: 'Water Mission ',
      eventId: '1234',
      hours: 3,
      connections: 0,
      avalancheHours: 0
    }, {
      id: '',
      email: 'tim@example.com',
      firstName: 'Tim',
      lastName: 'Tim',
      nonprofitName: 'Water Mission ',
      eventId: '1234',
      hours: 3,
      connections: 0,
      avalancheHours: 0
    }, {
      id: '',
      email: 'tom@example.com',
      firstName: 'Tom',
      lastName: 'Tom',
      nonprofitName: 'Water Mission ',
      eventId: '1234',
      hours: 1,
      connections: 0,
      avalancheHours: 0
    }, {
      id: '',
      email: 'jane@example.com',
      firstName: 'Jane',
      lastName: 'Jane',
      nonprofitName: 'Water Mission ',
      eventId: '1234',
      hours: 1,
      connections: 0,
      avalancheHours: 0
    }, {
      id: '',
      email: 'amanda@example.com',
      firstName: 'Amanda',
      lastName: 'Amanda',
      nonprofitName: 'Water Mission ',
      eventId: '1234',
      hours: 1,
      connections: 0,
      avalancheHours: 0
    }, {
      id: '',
      email: 'james@example.com',
      firstName: 'James',
      lastName: 'James',
      nonprofitName: 'Water Mission ',
      eventId: '1234',
      hours: 2,
      connections: 0,
      avalancheHours: 0
    }, {
      id: '',
      email: 'linda@example.com',
      firstName: 'Linda',
      lastName: 'Linda',
      nonprofitName: 'Water Mission ',
      eventId: '1234',
      hours: 3,
      connections: 0,
      avalancheHours: 0
    }, {
      id: '',
      email: 'stew@example.com',
      firstName: 'Stew',
      lastName: 'Stew',
      nonprofitName: 'Water Mission ',
      eventId: '1234',
      hours: 4,
      connections: 0,
      avalancheHours: 0
    }], '2234': [{
      id: '',
      email: 'thomas@example.com',
      firstName: 'Thomas',
      lastName: 'Thomas',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 50,
      connections: 0,
      avalancheHours: 0
    }, {
      id: '',
      email: 'lorie@example.com',
      firstName: 'Lorie',
      lastName: 'Lorie',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 1,
      connections: 0,
      avalancheHours: 0
    }, {
      id: '',
      email: 'tony@example.com',
      firstName: 'Tony',
      lastName: 'Tony',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 1,
      connections: 0,
      avalancheHours: 0
    }, {
      id: '',
      email: 'brad@example.com',
      firstName: 'Brad',
      lastName: 'Brad',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 1,
      connections: 0,
      avalancheHours: 0
    }, {
      id: '',
      email: 'corey@example.com',
      firstName: 'Corey',
      lastName: 'Corey',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 2,
      connections: 0,
      avalancheHours: 0
    }, {
      id: '',
      email: 'samantha@example.com',
      firstName: 'Samantha',
      lastName: 'Samantha',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 2,
      connections: 0,
      avalancheHours: 0
    }, {
      id: '',
      email: 'zeus@example.com',
      firstName: 'Zeus',
      lastName: 'Zeus',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 2,
      connections: 0,
      avalancheHours: 0
    }, {
      id: '',
      email: 'boaz.priestly@example.com',
      firstName: 'Boaz',
      lastName: 'Priestly',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 3,
      connections: 0,
      avalancheHours: 0
    }, {
      id: '',
      email: 'eren.jaeger@example.com',
      firstName: 'Eren',
      lastName: 'Jeager',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 2,
      connections: 0,
      avalancheHours: 0
    }, {
      id: '',
      email: 'winston@example.com',
      firstName: 'Winston',
      lastName: 'Winston',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 2,
      connections: 0,
      avalancheHours: 0
    }, {
      id: '',
      email: 'tracer@example.com',
      firstName: 'Tracer',
      lastName: 'Tracer',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 2,
      connections: 0,
      avalancheHours: 0
    }, {
      id: '',
      email: 'mcree@example.com',
      firstName: 'Mcree',
      lastName: 'Mcree',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 3,
      connections: 0,
      avalancheHours: 0
    }, {
      id: '',
      email: 'zelda@example.com',
      firstName: 'Zelda',
      lastName: 'Zelda',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 5,
      connections: 0,
      avalancheHours: 0
    }, {
      id: '',
      email: 'link@example.com',
      firstName: 'Link',
      lastName: 'Link',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 4,
      connections: 0,
      avalancheHours: 0
    }, {
      id: '',
      email: 'zarya@example.com',
      firstName: 'Zarya',
      lastName: 'Zarya',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 3,
      connections: 0,
      avalancheHours: 0
    }, {
      id: '',
      email: 'tingle@example.com',
      firstName: 'Tingle',
      lastName: 'Tingle ',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 2,
      connections: 0,
      avalancheHours: 0
    }, {
      id: '',
      email: 'jack.sparrow@example.com',
      firstName: 'Jack',
      lastName: 'Sparrow',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 1,
      connections: 0,
      avalancheHours: 0
    }, {
      id: '',
      email: 'alexis.coulter@blackbaud.com',
      firstName: 'Alexis',
      lastName: 'Coulter',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 2,
      connections: 10,
      avalancheHours: 41
    }, {
      id: '',
      email: 'janne.ave@blackbaud.com',
      firstName: 'Janne',
      lastName: 'Ave',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 3,
      connections: 2,
      avalancheHours: 10
    }, {
      id: '',
      email: 'kayla.nussbaum@blackbaud.com',
      firstName: 'Kayla',
      lastName: 'Nussbaum',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 2,
      connections: 4,
      avalancheHours: 11
    }, {
      id: '',
      email: 'veeha.khanna@blackbaud.com',
      firstName: 'Veeha',
      lastName: 'Khanna',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 1,
      connections: 4,
      avalancheHours: 7
    }, {
      id: '',
      email: 'joshua.good@blackbaud.com',
      firstName: 'Joshua',
      lastName: 'Good',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 4,
      connections: 6,
      avalancheHours: 7
    }, {
      id: '',
      email: 'angelo.carrabba@blackbaud.com',
      firstName: 'Angelo',
      lastName: 'Carrabba',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 2,
      connections: 2,
      avalancheHours: 4
    }, {
      id: '',
      email: 'chase.lewis@blackbaud.com',
      firstName: 'Chase',
      lastName: 'Lewis',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 4,
      connections: 2,
      avalancheHours: 7
    }, {
      id: '',
      email: 'joshua.wang@blackbaud.com',
      firstName: 'Joshua',
      lastName: 'Wang',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 2,
      connections: 2,
      avalancheHours: 6
    }, {
      id: '',
      email: 'joe@example.com',
      firstName: 'Joe',
      lastName: 'Joe',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 3,
      connections: 0,
      avalancheHours: 0
    }, {
      id: '',
      email: 'bob@example.com',
      firstName: 'Bob',
      lastName: 'Bob ',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 3,
      connections: 0,
      avalancheHours: 0
    }, {
      id: '',
      email: 'tim@example.com',
      firstName: 'Tim',
      lastName: 'Tim',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 3,
      connections: 0,
      avalancheHours: 0
    }, {
      id: '',
      email: 'tom@example.com',
      firstName: 'Tom',
      lastName: 'Tom',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 1,
      connections: 0,
      avalancheHours: 0
    }, {
      id: '',
      email: 'jane@example.com',
      firstName: 'Jane',
      lastName: 'Jane',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 1,
      connections: 0,
      avalancheHours: 0
    }, {
      id: '',
      email: 'amanda@example.com',
      firstName: 'Amanda',
      lastName: 'Amanda',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 1,
      connections: 0,
      avalancheHours: 0
    }, {
      id: '',
      email: 'james@example.com',
      firstName: 'James',
      lastName: 'James',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 2,
      connections: 0,
      avalancheHours: 0
    }, {
      id: '',
      email: 'linda@example.com',
      firstName: 'Linda',
      lastName: 'Linda',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 3,
      connections: 0,
      avalancheHours: 0
    }, {
      id: '',
      email: 'stew@example.com',
      firstName: 'Stew',
      lastName: 'Stew',
      nonprofitName: 'Water Mission ',
      eventId: '2234',
      hours: 4,
      connections: 0,
      avalancheHours: 0
    }]};
let connectionTreeDictMock: StringDict<ConnectionNode> = {
  1234: {
    id: '1234',
    children: [{
      id: 'alexis.coulter@blackbaud.com',
      children: [{
        id: 'janne.ave@blackbaud.com',
        children: [{
          id: 'chase.lewis@blackbaud.com',
          children: [{
            id: 'linda@example.com',
            children: [{
              id: '',
              children: []
            }]
          }]
        }]
      }, {
        id: 'kayla.nussbaum@blackbaud.com',
        children: [{
          id: 'joshua.wang@blackbaud.com',
          children: [{
            id: 'stew@example.com',
            children: [{
              id: '',
              children: []
            }]
          }]
        }, {
          id: 'joe@example.com',
          children: [{
            id: '',
            children: []
          }]
        }]
      }, {
        id: 'veeha.khanna@blackbaud.com',
        children: [{
          id: 'bob@example.com',
          children: [{
            id: '',
            children: []
          }]
        }, {
          id: 'tim@example.com',
          children: [{
            id: '',
            children: []
          }]
        }]
      }, {
        id: 'joshua.good@blackbaud.com',
        children: [{
          id: 'tom@example.com',
          children: [{
            id: '',
            children: []
          }]
        }, {
          id: 'jane@example.com',
          children: [{
            id: '',
            children: []
          }]
        }, {
          id: 'amanda@example.com',
          children: [{
            id: '',
            children: []
          }]
        }]
      }, {
        id: 'angelo.carrabba@blackbaud.com',
        children: [{
          id: 'james@example.com',
          children: [{
            id: '',
            children: []
          }]
        }]
      }]
    }]
  },  2234: {
    id: '2234',
    children: [{
      id: 'winston@example.com',
      children: [{
        id: '',
        children: []
      }]
    }, {
      id: 'alexis.coulter@blackbaud.com',
      children: [{
        id: 'janne.ave@blackbaud.com',
        children: [{
          id: 'chase.lewis@blackbaud.com',
          children: [{
            id: 'linda@example.com',
            children: [{
              id: '',
              children: []
            }]
          }]
        }]
      }, {
        id: 'kayla.nussbaum@blackbaud.com',
        children: [{
          id: 'joshua.wang@blackbaud.com',
          children: [{
            id: 'stew@example.com',
            children: [{
              id: '',
              children: []
            }]
          }]
        }, {
          id: 'joe@example.com',
          children: [{
            id: '',
            children: []
          }]
        }]
      }, {
        id: 'veeha.khanna@blackbaud.com',
        children: [{
          id: 'bob@example.com',
          children: [{
            id: '',
            children: []
          }]
        }, {
          id: 'tim@example.com',
          children: [{
            id: '',
            children: []
          }]
        }]
      }, {
        id: 'joshua.good@blackbaud.com',
        children: [{
          id: 'tom@example.com',
          children: [{
            id: '',
            children: []
          }]
        }, {
          id: 'jane@example.com',
          children: [{
            id: '',
            children: []
          }]
        }, {
          id: 'amanda@example.com',
          children: [{
            id: '',
            children: []
          }]
        }]
      }, {
        id: 'angelo.carrabba@blackbaud.com',
        children: [{
          id: 'james@example.com',
          children: [{
            id: '',
            children: []
          }]
        }]
      }]
    }, {
      id: 'zeus@example.com',
      children: [{
        id: '',
        children: []
      }]
    }, {
      id: 'corey@example.com',
      children: [{
        id: '',
        children: []
      }]
    }, {
      id: 'eren.jaeger@example.com',
      children: [{
        id: '',
        children: []
      }]
    }, {
      id: 'link@example.com',
      children: [{
        id: '',
        children: []
      }]
    }, {
      id: 'brad@example.com',
      children: [{
        id: '',
        children: []
      }]
    }, {
      id: 'lorie@example.com',
      children: [{
        id: '',
        children: []
      }]
    }, {
      id: 'boaz.priestly@example.com',
      children: [{
        id: '',
        children: []
      }]
    }, {
      id: 'jack.sparrow@example.com',
      children: [{
        id: '',
        children: []
      }]
    }, {
      id: 'tony@example.com',
      children: [{
        id: '',
        children: []
      }]
    }, {
      id: 'zarya@example.com',
      children: [{
        id: '',
        children: []
      }]
    }, {
      id: 'tracer@example.com',
      children: [{
        id: '',
        children: []
      }]
    }, {
      id: 'zelda@example.com',
      children: [{
        id: '',
        children: []
      }]
    }, {
      id: 'mcree@example.com',
      children: [{
        id: '',
        children: []
      }]
    }, {
      id: 'tingle@example.com',
      children: [{
        id: '',
        children: []
      }]
    }, {
      id: 'thomas@example.com',
      children: [{
        id: '',
        children: []
      }]
    }, {
      id: 'samantha@example.com',
      children: [{
        id: '',
        children: []
      }]
    }]
  }};

let connectionTreeMock: ConnectionNode = {
    id: '',
    children: new Array<ConnectionNode>()
};
export let addEventResult: string = 'fakeEventId';
export let volunteerByNonprofitData = volunteerByNonprofitMocks;
export let nonprofitEventData = nonprofitEventMocks;
export let volunteerByEventData = volunteerByEventMocks;
export let volunteerByEventDictData = volunteerByEventDictMocks;
export let connectionTreeDictData = connectionTreeDictMock;
export let connectionTreeData = connectionTreeMock;
