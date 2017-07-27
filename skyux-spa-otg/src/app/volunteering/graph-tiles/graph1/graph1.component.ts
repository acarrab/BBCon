import { Component, OnInit, ElementRef } from '@angular/core';
import { D3Service, D3, Selection } from 'd3-ng2-service';

@Component({
  // tslint:disable-next-line
  selector: 'div.graph1',
  templateUrl: './graph1.component.html',
  styleUrls: []
})
export class Graph1Component implements OnInit {
  private d3: D3; // <-- Define the private member which will hold the d3 reference
  private parentNativeElement: any;

  constructor(element: ElementRef, d3Service: D3Service) {
    this.d3 = d3Service.getD3(); // <-- obtain the d3 object from the D3 Service
    this.parentNativeElement = element.nativeElement;
  }

  // tslint:disable-next-line
  ngOnInit() {
      console.log('Hello');
    let d3 = this.d3;
    let svg = d3.select('#graph1')
        .attr('width', 300) // set its dimentions
        .attr('height', 150);

    let dataset = [];

    let fileReader = new FileReader();
    let text = '';
    let file: File = new File([''], 'data.csv', {type: 'text/plain'});

    fileReader.onload = function(e) {
        text = fileReader.result;
        console.log(text);
    };

    fileReader.readAsText(file);

    console.log(text);
/*
    let numbers = [ 5, 4, 10, 1 ];
    let data = [
      { date: '2014-01-01', amount: 10 },
      { date: '2014-02-01', amount: 20 },
      { date: '2014-03-01', amount: 40 },
      { date: '2014-04-01', amount: 80 }
    ];

    d3.min(numbers);

    let x = d3.scaleTime()
        .domain([
        new Date(Date.parse('2014-01-01')),
        new Date(Date.parse('2014-04-01'))
        ])
        .range([0, 300]);

    x(new Date(Date.parse('2014-02-01')));
    // 103.3811949976841

    // x is the d3.scaleTime()
    let xAxis = d3.axisBottom(x)
    .ticks(4); // specify the number of ticks

    svg.append('g')            // create a <g> element
    .attr('class', 'x axis') // specify classes
    .call(xAxis);            // let the axis do its thing
*/
  }
}
