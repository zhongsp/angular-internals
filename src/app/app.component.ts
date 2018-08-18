import { Component } from '@angular/core';

import { Breadcrumbs } from './core/breadcrumbs/config';

@Component({
  selector: 'sample-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: Breadcrumbs = [{
    path: '/frameworks',
    label: 'Frameworks'
  }, {
    path: '/frameworks/angular',
    label: 'Angular',
    disabled: true
  }];
}
