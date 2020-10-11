import { Component, OnInit } from '@angular/core';

import { Label } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';

import { GroupingOption } from '../../interfaces';
import { StatService } from '../../services/stat.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  public categories: GroupingOption[];
  public values: GroupingOption[];
  public barChartLabels: Label[] | null = null;
  public barChartData: ChartDataSets[] | null = null;
  public currentCategory;
  public currentValue;

  constructor(private stat: StatService) { }

  ngOnInit(): void {
    if (this.stat.isReady) {
      return this.initComponent();
    }

    this.stat.getUsersData().subscribe(() => {
      this.initComponent();
    });
  }

  private initComponent(): void {
    this.categories = this.stat.categories;
    this.values = this.stat.values;
    this.currentCategory = this.categories[0];
    this.currentValue = this.values[0];

    this.renderChart();
  }

  onCategorySelect($event: any): void {
    this.currentCategory = this.categories.find(option => option.id === $event);
    this.renderChart();
  }

  onValueSelect($event: any): void {
    this.currentValue = this.values.find(option => option.id === $event);
    this.renderChart();
  }

  renderChart(): void {
    const { labels, barChartData } = this.stat.getChartData(this.currentCategory, this.currentValue);
    this.barChartLabels = labels;
    this.barChartData = barChartData;
  }
}
