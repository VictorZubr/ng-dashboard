import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'dsb-select',
  templateUrl: './select.component.html',
  styles: []
})
export class SelectComponent {
  @Input() label = '';
  @Input() options = [];
  @Input() selectedOption;
  @Output() onSelect = new EventEmitter<number>();

  constructor() { }

  CheckValue($event: number) {
    this.onSelect.emit($event);
  }

}
