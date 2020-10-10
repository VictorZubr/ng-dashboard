import { Component, Input } from '@angular/core';

import { MenuItem } from '../../interfaces';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent {
  @Input() menuItems: MenuItem[] = [];
  constructor(
    public auth: AuthenticationService,
  ) { }

}
