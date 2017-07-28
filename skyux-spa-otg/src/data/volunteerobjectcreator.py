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
EEVENT_ID = 0
EEVENT_NAME = 1
EEVENT_DATE = 2

def writeVolunteerRow(writer, row, isFirstRow, offset=''):
    if not isFirstRow:
        writer.write(', ')
    
    writer.write(
        '{' + '\n' + 
        offset + '    id: \'\',' + '\n' + 
        offset + '    email: \'' + row[EMAIL] + '\',' + '\n' + 
        offset + '    firstName: \'' + row[FIRST_NAME] + '\',' + '\n' + 
        offset + '    lastName: \'' + row[LAST_NAME] + '\',' + '\n' + 
        offset + '    nonprofitName: \'' + row[NP] + '\',' + '\n' + 
        offset + '    eventId: \'' + row[EVENT_ID] + '\',' + '\n' + 
        offset + '    hours: ' + row[IND_HOURS] + ',' + '\n' + 
        offset + '    connections: ' + row[TOTAL_CONNECTS] + ',' + '\n' + 
        offset + '    avalancheHours: ' + row[AVALANCHE_HOURS]  + '\n' + 
        offset + '  }')

def writeVolunteerRows(writer, rows, offset=''):
    isFirstRow = True
    for row in rows:
        writeVolunteerRow(writer, row, isFirstRow, offset)

        if isFirstRow:
            isFirstRow = False

with open('volunteers.tsv', 'r') as volunteers_file, open('events.tsv', 'r') as events_file, open('volunteers.ts', 'w') as output_ts_file:
    output_ts_file.write('import { NonprofitEvent } from \'../contracts/NonprofitEvent.interface\';\n')
    output_ts_file.write('import { Volunteer } from \'../contracts/Volunteer.interface\';\n')
    output_ts_file.write('import { ConnectionNode } from \'../contracts/ConnectionNode.interface\';\n')
    output_ts_file.write('\n')

    output_ts_file.write('''interface StringDict<T> {
    [key: string]: T;
}\n''')

    # Volunteers By Non-Profit 
    volunteers_dict = dict()
    output_ts_file.write('let volunteerByNonprofitMocks: Array<Volunteer> = [')
    volunteers_file = csv.reader(volunteers_file, delimiter='\t')

    next(volunteers_file)   # skip headers

    isFirstRow = True
    for row in volunteers_file:     # row is an array
        if not row[EVENT_ID] in volunteers_dict:
            volunteers_dict[row[EVENT_ID]] = []
        volunteers_dict[row[EVENT_ID]].append(row)

        writeVolunteerRow(output_ts_file, row, isFirstRow)
        if isFirstRow:
            isFirstRow = False
        # print (row)

    output_ts_file.write('];\n')
    # Volunteers By Non-Profit 

    output_ts_file.write('\n')

    # Events
    output_ts_file.write('let nonprofitEventMocks: Array<NonprofitEvent> = [')
    events_file = csv.reader(events_file, delimiter='\t')

    next(events_file)       # skip headers

    isFirstRow = True
    for row in events_file:
        if isFirstRow:
            isFirstRow = False
        else:
            output_ts_file.write(', ')

        output_ts_file.write('{' + '\n' + 
                             '    id: \'' + row[EEVENT_ID] + '\',' + '\n' + 
                             '    name: \'' + row[EEVENT_NAME] + '\',' + '\n' + 
                             '    dateTime: \'' + row[EEVENT_DATE] + '\'' + '\n' + 
                             '  }')


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
}];\n\n''')

    isFirstEntry = True
    output_ts_file.write('let volunteerByEventDictMocks: StringDict<Array<Volunteer>> = {\n')
    for eventId in volunteers_dict.keys():
        if isFirstEntry:
            isFirstEntry = False
            output_ts_file.write('   ')
        else:
            output_ts_file.write(',')

        output_ts_file.write(' \'' + eventId + '\': [')
        writeVolunteerRows(output_ts_file, volunteers_dict[eventId], '  ')
        output_ts_file.write(']')
    output_ts_file.write('};')
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
    output_ts_file.write('export let addEventResult: string = \'fakeEventId\';\n')
    output_ts_file.write('export let volunteerByNonprofitData = volunteerByNonprofitMocks;\n')
    output_ts_file.write('export let nonprofitEventData = nonprofitEventMocks;\n')
    output_ts_file.write('export let volunteerByEventData = volunteerByEventMocks;\n')
    output_ts_file.write('export let volunteerByEventDictData = volunteerByEventDictMocks;\n')
    output_ts_file.write('export let connectionTreeData = connectionTreeMock;\n')
    # Export Calls
