import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { ApiService } from './api.service';
import { ChartModel } from '../model/chart-model';
import { CATEGORIES, VALUES } from '../const';

@Injectable({
  providedIn: 'root'
})
export class StatService {

  constructor(private api: ApiService) { }

  getUsersData() {
    return this.api.getUsersData().pipe(
      map(response => new ChartModel(response, CATEGORIES, VALUES))
    );
  }
}
