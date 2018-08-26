import { Component, OnInit } from '@angular/core';

import { Breadcrumbs } from './core/breadcrumbs/breadcrumbs.config';
import { BreadcrumbsService } from "./core/breadcrumbs.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'sample-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items$: Observable<Breadcrumbs>;

  constructor(
    private breadcrumbs: BreadcrumbsService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.items$ = this.breadcrumbs.items
    }, 0);

    // this.breadcrumbs.items.subscribe(items => {
    //   setTimeout(() => {
    //     this.items = items;
    //   });
    // });
  }
}
