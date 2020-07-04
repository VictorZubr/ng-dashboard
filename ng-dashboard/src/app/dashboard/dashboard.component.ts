import { Component, OnInit } from '@angular/core';
import {MenuItem} from "../interfaces";
import {ApiService} from "../services/api.service";

@Component({
  selector: 'dsb-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  public menuItems: MenuItem[] = [{name: 'Выйти', route: '/login'}];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getUsers();
  }

}
