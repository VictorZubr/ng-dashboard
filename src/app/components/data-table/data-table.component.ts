import { Component, OnInit } from '@angular/core';

import { UserData } from '../../interfaces';
import { StatService } from '../../services/stat.service';

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
    if (this.stat.isReady) {
      return this.initComponent();
    }

    this.stat.getUsersData().subscribe(() => {
      this.initComponent();
    });
  }

  initComponent(): void {
    this.tableData = this.stat.getTableData();
    this.cols = Object.keys(this.tableData[0]);
  }

  getRow(row: UserData): string[] {
    return Object.values(row);
  }

}
