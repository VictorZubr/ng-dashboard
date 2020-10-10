import { Component, OnInit } from '@angular/core';
import { StatService } from '../../services/stat.service';
import { UserData } from '../../interfaces';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styles: []
})
export class DataTableComponent implements OnInit {
  public tableData: UserData[];
  public cols: string[];

  constructor(private stat: StatService) { }

  ngOnInit(): void {
    if (this.stat.isReady()) {
      this.tableData = this.stat.getTableData();
      this.cols = Object.keys(this.tableData[0]);
      return;
    }

    this.stat.getUsersData().subscribe(chartModel => {
      this.tableData = chartModel.getTableData();
      this.cols = Object.keys(this.tableData[0]);
    });
  }

  getRow(row: UserData): string[] {
    return Object.values(row);
  }

}
