import { Component, OnInit } from '@angular/core';
import {MenuItem} from "../interfaces";

@Component({
  selector: 'dsb-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  public menuItems: MenuItem[] = [{name: 'Выйти', route: '/login'}];

  constructor() { }

  ngOnInit(): void {
  }

}
