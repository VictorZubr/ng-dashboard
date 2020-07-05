import {Component, Input} from '@angular/core';
import {Label} from "ng2-charts";
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'dsb-bar-chart',
  templateUrl: './bar-chart.component.html',
  styles: []
})
export class BarChartComponent {
  @Input() barChartLabels: Label[] = [];
  @Input() barChartData: ChartDataSets[] = [];

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  constructor() { }

}
