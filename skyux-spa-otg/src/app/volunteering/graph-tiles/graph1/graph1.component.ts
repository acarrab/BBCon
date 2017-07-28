import { Component, OnInit, ElementRef } from '@angular/core';
import { D3Service, D3, Selection } from 'd3-ng2-service';
import { VolIntelService } from '../../../../mocks/volIntel.service.mock';
import { NonprofitEvent } from '../../../../contracts/NonprofitEvent.interface';
import { Volunteer } from '../../../../contracts/Volunteer.interface';

@Component({
  // tslint:disable-next-line
  selector: 'div.graph1',
  templateUrl: './graph1.component.html',
  styleUrls: [],
  providers: [ VolIntelService ]
})
export class Graph1Component implements OnInit {
  private d3: D3; // <-- Define the private member which will hold the d3 reference
  private parentNativeElement: any;
  private intelService: VolIntelService;
  private eventData: Array<NonprofitEvent>;
  private data = [];

  constructor(element: ElementRef, d3Service: D3Service, intelService: VolIntelService) {
    this.d3 = d3Service.getD3(); // <-- obtain the d3 object from the D3 Service
    this.parentNativeElement = element.nativeElement;
    this.intelService = intelService;
    this.generateD3Data(this);
    console.log(this.data);
  }

  private generateD3Data (self: any) {
    // Get event data
    self.intelService.getAllEvents('')
      .then(function (eventData) {
        self.eventData = eventData;
        let promises = new Array<Promise<Array<Volunteer>>>();
        for (const event of eventData) {
          promises.push(self.intelService.getVolunteersByEvent(event.id));
        }
        return Promise.all(promises);
      })
      .then(function (rayray) { self.formatEventAndVolunteerData(self, rayray); });
  }

  private formatEventAndVolunteerData (self: any, rayray: Array<Array<Volunteer>>) {
    // for (const event of self.eventData) {
      let totalVolunteerHours: number;
      let numOfVolunteers: number;
      let eventName: string;
      let dateTime: string;

      for (const eventVolunteerData of rayray) {
        numOfVolunteers = eventVolunteerData.length;
        totalVolunteerHours = 0;
        let eventId: string;
        for (const volunteer of eventVolunteerData) {
          totalVolunteerHours += volunteer.hours;
          eventId = volunteer.eventId;
        }

        // Find event data
        for (const event of self.eventData) {
          if (event.id === eventId) {
            eventName = event.name;
            dateTime = event.dateTime;
          }
        }

        self.data.push({
          eventName: eventName,
          date: dateTime,
          numOfVolunteers: numOfVolunteers,
          totalVolunteerHours: totalVolunteerHours
        });
      }

      // ADDING MY OWN DATA
      self.data.push({
        eventName: 'Family Volunteer Day',
        date: '8/15/2017',
        numOfVolunteers: 50,
        totalVolunteerHours: 150
      }, {
        eventName: 'Sam\'s 5k',
        date: '5/24/2017',
        numOfVolunteers: 10,
        totalVolunteerHours: 100
      },
      {
        eventName: 'Beach Clean Up',
        date: '3/1/2017',
        numOfVolunteers: 100,
        totalVolunteerHours: 200
      }, {
        eventName: 'Local Love',
        date: '2/14/2017',
        numOfVolunteers: 66,
        totalVolunteerHours: 90
      });
//    }
  }

  // tslint:disable-next-line
  public ngOnInit() {
    const d3 = this.d3;
    let svg = d3.select('#graph1');
    let margins = {top: 50, right: 50, bottom: 50, left: 50};
    let width =  1000 - margins.left - margins.right;
    let height = 300 - margins.top - margins.bottom;

    svg = svg.append('svg')
      .attr('width', width + margins.left + margins.right)
      .attr('height', height + margins.top + margins.bottom)
      .append('g')
      .attr('transform', 'translate(' + margins.left + ',' + margins.top + ')');

    // tslint:disable-next-line:max-line-length

    // Settings the scales
    let dateXScale = d3.scaleTime()
        .rangeRound([0, width])
        .domain(d3.extent(this.data, function (d) {
          const dateString = d.date;
          const dateParser = d3.timeParse('%m/%d/%Y');
          return dateParser(dateString);
        }));

    let volunteerYScale = d3.scaleLinear()
        .rangeRound([height, 0])
        .domain([
          0,
          d3.max(this.data, function (d) { return d.totalVolunteerHours; })
        ]);

    let hoursYScale = d3.scaleLinear()
        .rangeRound([height, 0])
        .domain([
          0,
         (d3.max(this.data, function (d) { return d.numOfVolunteers; }) + 200)
        ]);

    // Settings the line function
    let volunteerLine = d3.line()
                          .x(function (d: any) {
                              const dateString = d.date;
                              const dateParser = d3.timeParse('%m/%d/%Y');
                              return dateXScale(dateParser(dateString));
                          })
                          .y(function (d: any) {
                            return volunteerYScale(d.numOfVolunteers);
                          });

    let hoursLine = d3.line()
                          .x(function (d: any) {
                              const dateString = d.date;
                              const dateParser = d3.timeParse('%m/%d/%Y');
                              return dateXScale(dateParser(dateString));
                          })
                          .y(function (d: any) {
                            return hoursYScale(d.totalVolunteerHours);
                          });

    // Setting the axis
    let dateXAxis = d3.axisBottom(dateXScale).tickSize(5);

    let volunteerYAxis = d3.axisLeft(volunteerYScale).tickSize(5);

    let hoursYAxis = d3.axisRight(hoursYScale).tickSize(5);

    // Draw Axis Lines
    svg.append('g')
        .call(dateXAxis)
        .attr('transform', 'translate(0,' + height + ')');

    svg.append('g')
        .call(volunteerYAxis);

    svg.append('g')
        .call(hoursYAxis)
        .attr('transform', 'translate(' + width + ',0)');

    // Draw lines
    svg.append('path')
        .datum(this.data)
        .attr('class', 'line')
        .attr('d', volunteerLine)
        .style('fill', 'none')
        .style('stroke', 'steelblue')
        .style('stroke-width', '2px');

    svg.append('path')
        .datum(this.data)
        .attr('class', 'line')
        .attr('d', hoursLine)
        .style('fill', 'none')
        .style('stroke', 'red')
        .style('stroke-width', '2px');
  }
}
