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
    const d3 = this.d3;
    let svg = d3.select('#graph1')
        .attr('width', 300) // set its dimentions
        .attr('height', 150);

  }
}
