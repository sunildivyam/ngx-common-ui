import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { MenuItem } from '@annuadvent/ngx-common-ui/menu';

@Component({
  selector: 'anu-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.scss']
})
export class FooterNavComponent implements OnInit {
  @Input() copyrightText: string = '';
  @Input() items: Array<MenuItem> = [];
  @Output() selected = new EventEmitter<MenuItem>();

  constructor() { }

  ngOnInit(): void {
  }

  public itemCliked(item: MenuItem): void {
    this.selected.emit(item);
  }
}
