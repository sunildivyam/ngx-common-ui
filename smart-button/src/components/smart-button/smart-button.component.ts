import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'anu-smart-button',
  templateUrl: './smart-button.component.html',
  styleUrls: ['./smart-button.component.scss']
})
export class SmartButtonComponent {
  @Input() label: string = '';
  @Input() href: string = '';
  @Input() iconUrl: string = '';
  @Input() loading: boolean = false;
  @Input() disabled: boolean = false;

  @Output() click = new EventEmitter<any>();

  public onClick(event: any): void {
    if (
      !this.href ||
      (this.href && !this.href?.length) ||
      this.loading ||
      this.disabled
    ) {
      event.preventDefault();
    }

    !this.loading && !this.disabled && this.click.emit();
  }
}
