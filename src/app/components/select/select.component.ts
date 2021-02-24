import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styles: []
})
export class SelectComponent {
  @Input() label = '';
  @Input() options = [];
  @Input() selectedOption;
  @Output() selectCheck = new EventEmitter<number>();

  constructor() { }

  checkValue($event: number) {
    this.selectCheck.emit($event);
  }

}
