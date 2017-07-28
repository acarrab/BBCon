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

  constructor(element: ElementRef, d3Service: D3Service, intelService: VolIntelService) {
    this.d3 = d3Service.getD3(); // <-- obtain the d3 object from the D3 Service
    this.parentNativeElement = element.nativeElement;
    this.intelService = intelService;
    this.generateD3Data(this);
  }

  private generateD3Data (self: any) {
    // Get event data
    self.intelService.getAllEvents('')
      .then(function (eventData) {
        let promises = new Array<Promise<Array<Volunteer>>>();
        console.log(self);
        for (const event of eventData) {
          promises.push(self.intelService.getVolunteersByEvent(event.id));
        }
        return Promise.all(promises);
      })
      .then(self.formatEventAndVolunteerData);
  }

  private formatEventAndVolunteerData (rayray: Array<Array<Volunteer>>) {
    console.log(rayray);
  }

  // tslint:disable-next-line
  public ngOnInit() {
    const d3 = this.d3;
    let svg = d3.select('#graph1');
    let margins = {top: 50, right: 50, bottom: 50, left: 50};
    let width = +svg.attr('width') - margins.left - margins.right;
    let height = +svg.attr('height') - margins.top - margins.bottom;
    // tslint:disable-next-line:max-line-length
    /*
    let g = svg.append('g').attr('transform', 'translate(' + margins.left + ',' + margins.top + ')');

    let parseTime = d3.timeParse('%d/%b/%y');

    let x = d3.scaleTime()
        .rangeRound([0, width]);

    let y = d3.scaleLinear()
        .rangeRound([height, 0]);

    let line = d3.line()
        .x(function(d) { return x(d.date); })
        .y(function(d) { return y(d.close); });
    */
  }
}
