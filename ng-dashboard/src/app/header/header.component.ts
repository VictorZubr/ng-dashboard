import {Component, Input} from '@angular/core';
import {MenuItem} from "../interfaces";

@Component({
  selector: 'dsb-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent {
  @Input() menuItems: MenuItem[] = [];

  constructor() { }

}
