import { Component, Input } from '@angular/core';

import { Breadcrumbs } from './config';

@Component({
  selector: 'sample-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  @Input()
  items: Breadcrumbs = [];
}
