import { Component, OnInit } from '@angular/core';

import { BreadcrumbsService } from './core/breadcrumbs.service';

@Component({
  selector: 'sample-framework',
  template: `
    <p>
      framework works!
    </p>
  `,
  styles: []
})
export class FrameworkComponent implements OnInit {

  constructor(
    private breadcrumbs: BreadcrumbsService
  ) { }

  ngOnInit() {
    this.breadcrumbs.setItems([
      this.breadcrumbs.getFrameworksItem(),
      this.breadcrumbs.getFrameworkItem(
        '/frameworks/angular',
        'Angular',
        true
      )
    ]);
  }

}
