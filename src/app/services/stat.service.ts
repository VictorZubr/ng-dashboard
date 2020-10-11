import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ApiService } from './api.service';
import { ChartModel } from '../model/chart-model';
import { CATEGORIES, VALUES } from '../const';
import { GroupingOption, StatData, UserData } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class StatService {
  private chartModel: ChartModel;

  constructor(private api: ApiService) { }

  getUsersData(): Observable<object> {
    return this.api.getUsersData().pipe(
      tap(response => this.chartModel = new ChartModel(response, CATEGORIES, VALUES)),
    );
  }

  getTableData(): UserData[]  {
    return this.chartModel.getTableData();
  }

  getChartData(category: GroupingOption, value: GroupingOption): StatData {
    return this.chartModel.getChartData(category, value);
  }

  get isReady(): boolean {
    return !!this.chartModel;
  }

  get categories(): GroupingOption[] {
    return this.chartModel.categories;
  }

  get values(): GroupingOption[] {
    return this.chartModel.values;
  }
}
