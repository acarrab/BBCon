import { Component } from '@angular/core';
import { SkyTileDashboardConfig } from '@blackbaud/skyux/dist/core';
import { Graph1Component } from './graph-tiles/graph1/graph1.component';
import { Graph2Component } from './graph-tiles/graph2/graph2.component';
// import { SkyTilesDemoTile1Component } from './tiles-demo-tile1.component';
// import { SkyTilesDemoTile2Component } from './tiles-demo-tile2.component';

@Component({
  selector: 'analytics-dashboard',
  templateUrl: './analytics-dashboard.component.html',
  providers: [Graph1Component, Graph2Component]
})
export class AnalyticsdashboardComponent {
  public dashboardConfig: SkyTileDashboardConfig;

  constructor() {
    this.dashboardConfig = {
      tiles: [
        {
          id: 'graph1',
          componentType: Graph1Component
        },
        {
          id: 'graph2',
          componentType: Graph2Component
        }
      ],
      layout: {

        singleColumn: {
          tiles: [
            {
              id: 'graph1',
              isCollapsed: false
            },
            {
              id: 'graph2',
              isCollapsed: false
            }
          ]
        },

        multiColumn: [
          {
            tiles: [
              {
                id: 'graph1',
                isCollapsed: false
              },
              {
                id: 'graph2',
                isCollapsed: false
              }
            ]
          }
        ]

      }
    };
  }

}
