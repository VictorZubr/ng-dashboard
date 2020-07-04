import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "../interfaces";

@Component({
  selector: 'dsb-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  @Input() menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
