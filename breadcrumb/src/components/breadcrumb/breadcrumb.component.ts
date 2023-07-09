import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'anu-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, OnChanges {
  urlSegments: Array<string> = [];

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.initBreadcrumb();
      }
    })
  }

  private initBreadcrumb(): void {
    let url = this.router.url;
    url = url.substring(url.indexOf('?'));
    this.urlSegments = url.split('/');
  }

  ngOnInit(): void {
    this.initBreadcrumb();
  }

  ngOnChanges(): void {
    this.initBreadcrumb();
  }
}
