import csv

# Index of headers in volunteer tsv file
EMAIL = 0
EVENT_ID = 1
# EVENT_CONNECTS = 2
# CONNECTS = 3
FIRST_NAME = 4
LAST_NAME = 5
NP = 6
AVALANCHE_HOURS = 7
IND_HOURS = 8
TOTAL_CONNECTS = 9

# Index of headers in volunteer tsv file
EVENT_ID = 0
EVENT_NAME = 1
EVENT_DATE = 2

with open('volunteers.tsv', 'r') as volunteers_file, open('events.tsv', 'r') as events_file, open('volunteers.ts', 'w') as output_ts_file:
    output_ts_file.write('import { NonprofitEvent } from \'../contracts/NonprofitEvent.interface\';\n')
    output_ts_file.write('import { Volunteer } from \'../contracts/Volunteer.interface\';\n')
    output_ts_file.write('import { ConnectionNode } from \'../contracts/ConnectionNode.interface\';\n')
    output_ts_file.write('\n')

    # Volunteers By Non-Profit 
    output_ts_file.write('let volunteerByNonprofitMocks: Array<Volunteer> = [\n')
    volunteers_file = csv.reader(volunteers_file, delimiter='\t')

    next(volunteers_file)   # skip headers

    for row in volunteers_file:     # row is an array
        output_ts_file.write('  {' + '\n' + 
                             '    id: \'\',' + '\n' + 
                             '    email: \'' + row[EMAIL] + '\',' + '\n' + 
                             '    firstName: \'' + row[FIRST_NAME] + '\',' + '\n' + 
                             '    lastName: \'' + row[LAST_NAME] + '\',' + '\n' + 
                             '    nonprofitName: \'' + row[NP] + '\',' + '\n' + 
                             '    eventId: \'' + row[EVENT_ID] + '\',' + '\n' + 
                             '    hours: ' + row[IND_HOURS] + ',' + '\n' + 
                             '    connections: ' + row[TOTAL_CONNECTS] + ',' + '\n' + 
                             '    avalancheHours: ' + row[AVALANCHE_HOURS]  + '\n' + 
                             '  },\n')
        # print (row)
    
    output_ts_file.write('];\n')
    # Volunteers By Non-Profit 

    output_ts_file.write('\n')

    # Events
    output_ts_file.write('let nonprofitEventMocks: Array<NonprofitEvent> = [\n')
    events_file = csv.reader(events_file, delimiter='\t')

    next(events_file)       # skip headers

    for row in events_file:
        output_ts_file.write('  {' + '\n' + 
                             '    id: \'' + row[EVENT_ID] + '\',' + '\n' + 
                             '    name: \'' + row[EVENT_NAME] + '\',' + '\n' + 
                             '    dateTime: \'' + row[EVENT_DATE] + '\'' + '\n' + 
                             '  },\n')

    output_ts_file.write('];\n')
    # Events

    output_ts_file.write('\n')

    # Volunteers By Event
    output_ts_file.write('''let volunteerByEventMocks: Array<Volunteer> = [{ 
    id: '',

    email: '',
    firstName: '',
    lastName: '',

    nonprofitName: '',
    eventId: '',

    hours: 0,
    connections: 0,
    avalancheHours: 0
    }];''')
    # Volunteers By Event

    output_ts_file.write('\n')

    # Connection Tree Mock
    output_ts_file.write('''let connectionTreeMock: ConnectionNode = {
    id: '',
    children: new Array<ConnectionNode>()
    };''')
    # Connection Tree Mock

    output_ts_file.write('\n')

    # Export Calls
    output_ts_file.write('export let addEventResult: string = \'fakeEventId\;\n')
    output_ts_file.write('export let volunteerByNonprofitData = volunteerByNonprofitMocks;\n')
    output_ts_file.write('export let nonprofitEventData = nonprofitEventMocks;\n')
    output_ts_file.write('export let volunteerByEventData = volunteerByEventMocks;\n')
    output_ts_file.write('export let connectionTreeData = connectionTreeMock;\n')
    # Export Calls

    output_ts_file.write('\n')
