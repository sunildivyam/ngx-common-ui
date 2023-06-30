import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Filter } from '../../interfaces/filters.interface';

@Component({
  selector: 'anu-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Input() filters: Array<Filter> = [];
  @Output() changed: EventEmitter<Array<Filter>> = new EventEmitter<Array<Filter>>();

  public multiSelectChanged(filterId: string, selectedFeatures: Array<string>): void {
    const foundFilter = this.filters.find(filter => filter.id === filterId);
    if (foundFilter) foundFilter.filter.selectedValues = selectedFeatures;
    this.changed.emit(this.filters);
  }

  public filterEnabled(filterId: string, enabled: boolean): void {
    this.changed.emit(this.filters);
  }

  public singleSelectChanged(filterId: string, value: boolean): void {
    const filter = this.filters.find(f => f.id === filterId);
    if (filter) filter.filter.value = value;
    this.changed.emit(this.filters);
  }

  ngOnInit(): void {
    // TODO
  }
}
