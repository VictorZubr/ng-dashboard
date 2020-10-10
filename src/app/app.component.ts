import { Component } from '@angular/core';
import { MenuItem } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public menuItems: MenuItem[] = [
    { name: 'Таблица', route: '/table', authGuard: true },
    { name: 'Дашбоард', route: '/dashboard', authGuard: true },
    { name: 'Выйти', notLoggedName: 'Войти', route: '/login' }
  ];
}
