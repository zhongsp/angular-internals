import { Injectable } from '@angular/core';

import { Breadcrumbs } from "./breadcrumbs/config";

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
  private breadcrumbs: Breadcrumbs;

  constructor() {
    this.breadcrumbs = [{
      path: '/frameworks',
      label: 'Frameworks'
    }, {
      path: '/frameworks/angular',
      label: 'Angular',
      labelOnly: true
    }];
  }

  public get items(): Breadcrumbs {
    return this.breadcrumbs;
  }
}
