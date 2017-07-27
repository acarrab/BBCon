import { NgModule } from '@angular/core';

import { Graph1Component } from './volunteering/graph-tiles/graph1/graph1.component';
import { Graph2Component } from './volunteering/graph-tiles/graph2/graph2.component';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  providers: [],
  entryComponents: [
    Graph1Component,
    Graph2Component
  ],
  declarations: [
  ]
})
export class AppExtrasModule { }
