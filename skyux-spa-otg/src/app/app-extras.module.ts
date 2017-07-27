import { NgModule } from '@angular/core';

import { D3Service } from 'd3-ng2-service';

import { Graph1Component } from './volunteering/graph-tiles/graph1/graph1.component';
import { Graph2Component } from './volunteering/graph-tiles/graph2/graph2.component';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  providers: [D3Service],
  entryComponents: [
    Graph1Component,
    Graph2Component
  ],
  declarations: [
  ]
})
export class AppExtrasModule { }
