import { Injectable } from '@angular/core';
import { SkyAuthHttp } from '@blackbaud/skyux-builder/runtime';
// import { Response } from '@angular/http';
// import { NonprofitEvent } from '../contracts/NonprofitEvent.interface';

@Injectable()

export class VolIntelService {

  constructor(protected skyAuthHttp: SkyAuthHttp) {
  }
}
