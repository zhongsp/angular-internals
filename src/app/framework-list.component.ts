import { Component, OnInit } from '@angular/core';

import { BreadcrumbsService } from './core/breadcrumbs.service';

@Component({
  selector: 'sample-framework-list',
  template: `
    <p>
      framework-list works!
    </p>
  `,
  styles: []
})
export class FrameworkListComponent implements OnInit {

  constructor(
    private breadcrumbs: BreadcrumbsService
  ) { }

  ngOnInit() {
    this.breadcrumbs.setItems([
      this.breadcrumbs.getFrameworksItem()
    ]);
  }

}
