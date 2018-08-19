import { Component, OnInit } from '@angular/core';

import { Breadcrumbs } from './core/breadcrumbs/config';
import { BreadcrumbsService } from "./core/breadcrumbs.service";

@Component({
  selector: 'sample-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: Breadcrumbs;

  constructor(
    private breadcrumbs: BreadcrumbsService
  ) { }

  ngOnInit(): void {
    this.items = this.breadcrumbs.items;
  }
}
