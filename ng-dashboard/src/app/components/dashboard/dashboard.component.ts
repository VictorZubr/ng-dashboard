import { Component, OnInit } from '@angular/core';

import { Label } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';

import { GroupingOption, MenuItem } from '../../interfaces';
import { StatService } from '../../services/stat.service';
import { ChartModel } from '../../model/chart-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  public menuItems: MenuItem[] = [{name: 'Выйти', route: '/login'}];
  public categories: GroupingOption[];
  public values: GroupingOption[];
  public barChartLabels: Label[] | null = null;
  public barChartData: ChartDataSets[] | null = null;
  public currentCategory;
  public currentValue;

  private chartModel: ChartModel;

  constructor(private stat: StatService) { }

  ngOnInit(): void {
    this.stat.getUsersData().subscribe(chartModel => {
      this.chartModel = chartModel;
      this.categories = chartModel.categories;
      this.values = chartModel.values;
      this.currentCategory = this.categories[0];
      this.currentValue = this.values[0];

      this.renderChart();
    });
  }

  onCategorySelect($event: any) {
    this.currentCategory = this.categories.find(option => option.id === $event);
    this.renderChart();
  }

  onValueSelect($event: any) {
    this.currentValue = this.values.find(option => option.id === $event);
    this.renderChart();
  }

  renderChart() {
    const { labels, barChartData } = this.chartModel.getChartData(this.currentCategory, this.currentValue);
    this.barChartLabels = labels;
    this.barChartData = barChartData;
  }
}
