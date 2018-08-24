import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent, NavigationEnd } from "@angular/router";
import { mergeScan } from "rxjs/operators";
import { map } from "rxjs/operators";
import { from, of as rxOf } from "rxjs";

import { Breadcrumbs } from "./breadcrumbs/breadcrumbs.config";

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
  private breadcrumbs: Breadcrumbs;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.breadcrumbs = [{
      path: '/frameworks',
      label: 'Frameworks'
    }, {
      path: '/frameworks/angular',
      label: 'Angular',
      labelOnly: true
    }];

    let active: ActivatedRoute = this.route.root;
    while(active.firstChild) {
      active = active.firstChild;
    }

    this.router.events.subscribe((s: RouterEvent) => {
      if (s instanceof NavigationEnd) {
        let active: ActivatedRoute = this.route.root;
        while(active.firstChild) {
          active = active.firstChild;
        }
        console.log('active===', active)
        from(active.pathFromRoot).pipe(
          map(r => r.snapshot.url.join('')),
          mergeScan((fullUrl, value) => {
            return rxOf(fullUrl + value);
          }, '')
        ).subscribe(url => {
          console.log('URL: ', url);
        });
      }
    });
  }

  public get items(): Breadcrumbs {
    return this.breadcrumbs;
  }
}
