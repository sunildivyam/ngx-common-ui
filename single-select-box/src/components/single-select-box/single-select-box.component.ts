import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'anu-single-select-box',
  templateUrl: './single-select-box.component.html',
  styleUrls: ['./single-select-box.component.scss'],
})
export class SingleSelectBoxComponent implements OnInit {
  @Input() items: Array<any> = [];
  @Input() selectedItem: any;
  @Input() keyField: string = '';
  @Input() labelField: string = '';

  @Output() changed: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();

  constructor() {}

  ngOnInit(): void {}

  public onChanged(event: any, item: any): void {
    event.preventDefault();
    this.selectedItem = item;
    this.changed.emit(this.selectedItem);
  }
}
