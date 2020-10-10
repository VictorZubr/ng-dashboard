import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

import { ApiService } from './api.service';
import { ChartModel } from '../model/chart-model';
import { CATEGORIES, VALUES } from '../const';

@Injectable({
  providedIn: 'root'
})
export class StatService {
  public chartModel: ChartModel;

  constructor(private api: ApiService) { }

  getUsersData() {
    return this.api.getUsersData().pipe(
      tap(response => this.chartModel = new ChartModel(response, CATEGORIES, VALUES)),
      map(() => this.chartModel)
    );
  }

  getTableData() {
    return this.chartModel.getTableData();
  }

  isReady(): boolean {
    return !!this.chartModel;
  }
}
